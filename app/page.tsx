import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Bot,
  Shield,
  MessageSquare,
  Clock,
  Users,
  Zap,
  ArrowRight,
  Github,
  Twitter,
  TrendingUp,
  Activity,
} from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-600 rounded-xl flex items-center justify-center">
              <Bot className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">Dash</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
                Login
              </Button>
            </Link>
            <Link href="/login">
              <Button className="bg-gray-900 text-white hover:bg-gray-800">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge variant="secondary" className="bg-gray-100 text-gray-700 border-gray-200">
                  Advanced Discord Bot
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Meet <span className="text-gray-900">Dash</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  The intelligent Discord bot that moderates your server, manages tickets, and keeps your community
                  engaged with smart automation.
                </p>
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">47K+</div>
                  <div className="text-sm text-gray-600">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">2.1M+</div>
                  <div className="text-sm text-gray-600">Raids Blocked</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">1.2K+</div>
                  <div className="text-sm text-gray-600">Servers</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/login">
                  <Button size="lg" className="bg-gray-900 text-white hover:bg-gray-800 text-lg px-8 py-3">
                    Add to Discord
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                >
                  View Demo
                </Button>
              </div>
            </div>

            {/* Hero Illustration */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>

                {/* Mock Dashboard */}
                <div className="space-y-4 mt-8">
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <Shield className="h-5 w-5 text-green-600" />
                        <span className="font-medium text-gray-900">Security Status</span>
                      </div>
                      <Badge className="bg-green-100 text-green-800">Active</Badge>
                    </div>
                    <div className="text-sm text-gray-600">All systems operational</div>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <Activity className="h-5 w-5 text-gray-600" />
                        <span className="font-medium text-gray-900">Recent Activity</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Blocked suspicious user</span>
                        <span className="text-gray-400">2m ago</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Welcome message sent</span>
                        <span className="text-gray-400">5m ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Powerful Features</h2>
            <p className="text-xl text-gray-600">Everything you need to manage and grow your Discord community</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-gray-700" />
                </div>
                <CardTitle className="text-gray-900">Smart Support System</CardTitle>
                <CardDescription className="text-gray-600">
                  Automated ticket system with intelligent responses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
                    Automated ticket management
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
                    Custom response system
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
                    User reporting features
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-gray-700" />
                </div>
                <CardTitle className="text-gray-900">Advanced Moderation</CardTitle>
                <CardDescription className="text-gray-600">
                  Comprehensive protection with fraud detection and raid protection
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
                    Suspicious account filtering
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
                    Advanced fraud protection
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
                    Raid protection
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-gray-700" />
                </div>
                <CardTitle className="text-gray-900">Welcome & Invite Tracking</CardTitle>
                <CardDescription className="text-gray-600">
                  Welcome new members and track who invited them
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
                    Custom welcome messages
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
                    Invite tracking system
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
                    Auto role assignment
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-gray-700" />
                </div>
                <CardTitle className="text-gray-900">Smart Announcements</CardTitle>
                <CardDescription className="text-gray-600">
                  Triggered announcements and web-based giveaways
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
                    Time-based triggers
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
                    Member count milestones
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
                    Web giveaway system
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-gray-700" />
                </div>
                <CardTitle className="text-gray-900">Real-time Dashboard</CardTitle>
                <CardDescription className="text-gray-600">
                  Monitor and configure your bot from anywhere
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
                    Live server statistics
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
                    Feature toggles
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
                    Configuration management
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-gray-700" />
                </div>
                <CardTitle className="text-gray-900">Easy Setup</CardTitle>
                <CardDescription className="text-gray-600">
                  Get started in minutes with our simple setup process
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
                    One-click Discord integration
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
                    Guided configuration
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
                    24/7 support
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Trusted by Communities Worldwide</h2>
            <p className="text-xl text-gray-600">Join thousands of Discord servers already protected by Dash</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">47,382</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">2,147,483</div>
              <div className="text-gray-600">Raids Blocked</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">1,247</div>
              <div className="text-gray-600">Discord Servers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4 text-white">Ready to Transform Your Discord Server?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of communities already using Dash to create better Discord experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/login">
                <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-3">
                  Get Started Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
              >
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-gray-800 to-gray-600 rounded-lg flex items-center justify-center">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">Dash</span>
              </div>
              <p className="text-gray-600">The intelligent Discord bot for modern communities.</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Discord Server
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Connect</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-gray-600">
                  <Github className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-gray-600">
                  <Twitter className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
            <span className="text-gray-600 text-sm">© 2024 Dash Bot. All rights reserved.</span>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
