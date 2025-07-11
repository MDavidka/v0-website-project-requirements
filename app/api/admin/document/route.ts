import { NextResponse } from "next/server"

// Check if MongoDB URI is available
const isMongoAvailable = !!process.env.MONGODB_URI

// Only import MongoDB client if URI is available
let clientPromise: Promise<any> | null = null
if (isMongoAvailable) {
  clientPromise = import("@/lib/mongodb").then((module) => module.default)
}

export async function GET() {
  if (!isMongoAvailable || !clientPromise) {
    return NextResponse.json({
      error: "Database not configured",
      document: {
        id: "main",
        content:
          "# Welcome to the Secret Admin Document\n\nDatabase is not configured. Please set MONGODB_URI environment variable.",
        lastUpdated: new Date().toISOString(),
        lastUpdatedBy: "System",
      },
      editors: [],
    })
  }

  try {
    const client = await clientPromise
    const db = client.db("dash-bot")
    const documents = db.collection("admin_documents")

    // Get the main document (or create if it doesn't exist)
    let document = await documents.findOne({ id: "main" })

    if (!document) {
      document = {
        id: "main",
        content:
          "# Welcome to the Secret Admin Document\n\nThis is a collaborative document that anyone can edit. Use it for team notes, documentation, or anything else you need to share.",
        lastUpdated: new Date().toISOString(),
        lastUpdatedBy: "System",
      }

      await documents.insertOne(document)
    }

    // Get recent editors
    const editorLogs = await db.collection("document_edits").find({}).sort({ timestamp: -1 }).limit(10).toArray()

    const editors = editorLogs.map((log) => log.username)

    return NextResponse.json({ document, editors })
  } catch (error) {
    console.error("Error fetching document:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  if (!isMongoAvailable || !clientPromise) {
    return NextResponse.json({ error: "Database not configured" }, { status: 503 })
  }

  try {
    const body = await request.json()
    const { content, username } = body

    if (!content) {
      return NextResponse.json({ error: "Content is required" }, { status: 400 })
    }

    const client = await clientPromise
    const db = client.db("dash-bot")
    const documents = db.collection("admin_documents")

    const now = new Date().toISOString()

    // Update the document
    await documents.updateOne(
      { id: "main" },
      {
        $set: {
          content,
          lastUpdated: now,
          lastUpdatedBy: username || "Anonymous",
        },
      },
      { upsert: true },
    )

    // Log the edit
    await db.collection("document_edits").insertOne({
      documentId: "main",
      username: username || "Anonymous",
      timestamp: now,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error updating document:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
