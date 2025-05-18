import Watermark from "@/components/sub/Watermark";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
export default function WorkspacePage() {
  return (
    <div className="pt-24 pb-16 text-white">
      <Watermark text="程序员小白龙" />
      {/* Hero Section */}
      <section className="bg-background py-12 mb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Your AI Agent{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                Workspace
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Build, manage, and customize your AI agents in a powerful workspace. Get all the tools and resources to
              create intelligent agents for Web3.
            </p>
            <Button className="bg-gray-900 border border-blue-800 hover:bg-gray-800 hover:border-blue-600 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] text-white font-medium transition-all duration-300">
              Create New Agent
            </Button>
          </div>
        </div>
      </section>

      {/* Workspace Dashboard */}
      <section className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Analytics Card */}
          <Card className="bg-[rgba(15,12,41,0.7)] shadow-lg border border-[#2A0E61] hover:shadow-[#2A0E61]/40 transition-all">
            <CardHeader>
              <CardTitle className="text-xl">Data Analytics</CardTitle>
              <CardDescription>Agent Performance Metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Active Agents</p>
                  <p className="text-2xl font-bold">7</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Interactions</p>
                  <p className="text-2xl font-bold">12,587</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Success Rate</p>
                  <p className="text-2xl font-bold">94.3%</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity Card */}
          <Card className="bg-[rgba(15,12,41,0.7)] shadow-lg border border-[#2A0E61] hover:shadow-[#2A0E61]/40 transition-all">
            <CardHeader>
              <CardTitle className="text-xl">Recent Activity</CardTitle>
              <CardDescription>Latest Agent Interactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-b border-[#2A0E61]/50 pb-3">
                  <p className="text-sm text-primary">Crypto Analyst</p>
                  <p className="text-xs text-muted-foreground">Token analysis complete</p>
                  <p className="text-xs text-gray-500 mt-1">3 minutes ago</p>
                </div>
                <div className="border-b border-[#2A0E61]/50 pb-3">
                  <p className="text-sm text-primary">Trading Bot</p>
                  <p className="text-xs text-muted-foreground">Trade successfully executed</p>
                  <p className="text-xs text-gray-500 mt-1">37 minutes ago</p>
                </div>
                <div>
                  <p className="text-sm text-primary">Research Assistant</p>
                  <p className="text-xs text-muted-foreground">Research report generated</p>
                  <p className="text-xs text-gray-500 mt-1">1 hour ago</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Resources Card */}
          <Card className="bg-[rgba(15,12,41,0.7)] shadow-lg border border-[#2A0E61] hover:shadow-[#2A0E61]/40 transition-all">
            <CardHeader>
              <CardTitle className="text-xl">Resources</CardTitle>
              <CardDescription>Tools and Services</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-[rgba(15,12,41,0.9)] p-2 rounded-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm">Model Center</p>
                    <p className="text-xs text-muted-foreground">12 available models</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[rgba(15,12,41,0.9)] p-2 rounded-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2" />
                      <path d="M3 9h18" />
                      <path d="M3 15h18" />
                      <path d="M9 3v18" />
                      <path d="M15 3v18" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm">API Connections</p>
                    <p className="text-xs text-muted-foreground">8 active connections</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[rgba(15,12,41,0.9)] p-2 rounded-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm">Security</p>
                    <p className="text-xs text-muted-foreground">End-to-end encryption</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* My Agents Section */}
        <div className="mb-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">My Agents</h2>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              View All
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card
                key={i}
                className="bg-[rgba(15,12,41,0.7)] shadow-lg border border-[#2A0E61] hover:shadow-[#2A0E61]/40 transition-all cursor-pointer"
              >
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">Crypto Analyst {i}</CardTitle>
                    <div className="px-2 py-1 text-xs bg-green-900/30 text-green-400 rounded-full">Active</div>
                  </div>
                  <CardDescription className="text-xs">Created on May {i}, 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Specializes in analyzing cryptocurrency tokens across multiple blockchains, providing in-depth
                    market insights.
                  </p>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Interactions: {i * 1245}</span>
                    <span>Success Rate: {90 + i}%</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {["Create Agent", "Connect API", "Import Model", "View Documentation"].map((action, i) => (
              <Card
                key={i}
                className="bg-[rgba(15,12,41,0.7)] shadow-lg border border-[#2A0E61] hover:border-[#4A1E9E] hover:shadow-[#2A0E61]/40 transition-all cursor-pointer"
              >
                <CardContent className="p-6 flex items-center justify-center h-28">
                  <p className="text-center font-medium">{action}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
