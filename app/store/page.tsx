import Watermark from "@/components/sub/Watermark";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// Sample agent data
const featuredAgents = [
  {
    id: "agent-1",
    title: "Crypto Analyst Pro",
    creator: "Athenix Team",
    rating: 4.9,
    reviews: 127,
    price: "Free",
    image:
      "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=shubham-dhage-R1Ku62Z7zqE-unsplash.jpg",
    description:
      "Advanced cryptocurrency analysis, supporting multiple chains. Provides detailed market insights, token evaluations, and trending social signals.",
    tags: ["Analysis", "Cryptocurrency", "Multi-chain"],
  },
  {
    id: "agent-2",
    title: "Trading Bot Elite",
    creator: "DeFi Lab",
    rating: 4.7,
    reviews: 89,
    price: "0.01 ETH",
    image: "https://DeepCore.top/logos/profiles/023.png",
    description:
      "Automated trading agent supporting limit orders, stop losses, and operating across multiple DEXs including Solana, Ethereum, and more.",
    tags: ["Trading", "DeFi", "Automation"],
  },
  {
    id: "agent-3",
    title: "Research GPT",
    creator: "Web3 Research DAO",
    rating: 4.8,
    reviews: 215,
    price: "Free Trial",
    image:
      "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=shubham-dhage-t0Bv0OBQuTg-unsplash.jpg",
    description:
      "Powerful research capabilities, scanning Web3 media, projects, and documentation to provide comprehensive reports.",
    tags: ["Research", "Reports", "Web3"],
  },
  {
    id: "agent-4",
    title: "NFT Navigator",
    creator: "MetaLabs",
    rating: 4.6,
    reviews: 76,
    price: "Free",
    image: "https://ext.same-assets.com/3645949495/3272116947.svg",
    description:
      "Discover, analyze, and track NFT collections across multiple marketplaces with AI-powered valuation insights.",
    tags: ["NFT", "Markets", "Analysis"],
  },
  {
    id: "agent-5",
    title: "Governance Assistant",
    creator: "DAO Labs",
    rating: 4.5,
    reviews: 52,
    price: "0.005 ETH",
    image: "https://ext.same-assets.com/3645949495/2153026770.svg",
    description: "Track and analyze DAO proposals, voting patterns, and governance activities across Web3 protocols.",
    tags: ["DAO", "Governance", "Voting"],
  },
  {
    id: "agent-6",
    title: "Security Sentinel",
    creator: "BlockGuard",
    rating: 4.9,
    reviews: 143,
    price: "0.02 ETH",
    image: "/home/astor.png",
    description:
      "Monitor suspicious activities and potential security threats in smart contracts, wallets, and blockchain transactions.",
    tags: ["Security", "Monitoring", "Alerts"],
  },
];

const categories = [
  "All Agents",
  "Analysis",
  "Trading",
  "Research",
  "NFT",
  "Governance",
  "Security",
  "Social",
  "News",
  "Developer",
  "Gaming",
];

export default function StorePage() {
  return (
    <div className="pt-24 pb-16 text-white">
      <Watermark text="程序员小白龙" />
      {/* Hero Section */}
      <section className="bg-background py-12 mb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI Agent{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                Marketplace
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Discover, deploy, and customize powerful AI agents created by the Athenix community. From analysis to
              trading, find the perfect AI assistant for your Web3 needs.
            </p>
            <div className="relative max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="text"
                className="bg-[rgba(15,12,41,0.7)] block w-full pl-10 pr-3 py-4 rounded-full border border-[#2A0E61] focus:outline-none focus:ring-2 focus:ring-[#4A1E9E] focus:border-transparent text-white placeholder-gray-400"
                placeholder="Search agents..."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 mb-16">
        <div className="flex overflow-x-auto pb-4 space-x-2 no-scrollbar">
          {categories.map((category, index) => (
            <Button
              key={category}
              variant={index === 0 ? "default" : "outline"}
              className={
                index === 0
                  ? "bg-gray-900 border border-blue-800 hover:bg-gray-800 hover:border-blue-600 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] text-white font-medium transition-all duration-300"
                  : "border-[#2A0E61] text-gray-300 hover:border-[#4A1E9E] hover:text-white transition-all"
              }
            >
              {category}
            </Button>
          ))}
        </div>
      </section>

      {/* Featured Agents */}
      <section className="container mx-auto px-4 mb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Featured Agents</h2>
          <Button
            variant="outline"
            className="border-[#2A0E61] text-gray-300 hover:border-[#4A1E9E] hover:text-white transition-all"
          >
            View All
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredAgents.map((agent) => (
            <Card
              key={agent.id}
              className="bg-[rgba(15,12,41,0.7)] shadow-lg border border-[#2A0E61] hover:shadow-[#2A0E61]/40 transition-all cursor-pointer flex flex-col"
            >
              <div className="relative h-48 overflow-hidden bg-[rgba(10,8,28,0.8)]">
                <img
                  src={agent.image}
                  alt={agent.title}
                  className="w-full h-full object-contain p-4 mix-blend-lighten"
                />
                <div className="absolute top-3 right-3 px-2 py-1 bg-black/60 text-white text-xs rounded-full">
                  {agent.price}
                </div>
              </div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{agent.title}</CardTitle>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-yellow-400 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-medium">{agent.rating}</span>
                    <span className="text-xs text-muted-foreground ml-1">({agent.reviews})</span>
                  </div>
                </div>
                <CardDescription className="text-xs">Creator: {agent.creator}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2 h-10">{agent.description}</p>
                <div className="flex flex-wrap gap-2">
                  {agent.tags.map((tag) => (
                    <span
                      key={`${agent.id}-${tag}`}
                      className="inline-block px-2 py-1 bg-[rgba(42,14,97,0.5)] text-xs rounded-full border border-[#2A0E61]/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="pt-4">
                <Button className="w-full bg-gray-900 border border-blue-800 hover:bg-gray-800 hover:border-blue-600 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] text-white font-medium transition-all duration-300">
                  Install Agent
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Popular Categories */}
      <section className="container mx-auto px-4 mb-16">
        <h2 className="text-2xl font-bold mb-6">Popular Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { title: "Analysis Agents", count: 124, icon: "📊" },
            { title: "Trading Bots", count: 97, icon: "📈" },
            { title: "Research Tools", count: 86, icon: "🔍" },
            { title: "NFT Assistants", count: 73, icon: "🖼️" },
            { title: "Security Monitoring", count: 65, icon: "🔒" },
            { title: "Development Helpers", count: 58, icon: "💻" },
          ].map((category) => (
            <Card
              key={category.title}
              className="bg-[rgba(15,12,41,0.7)] shadow-lg border border-[#2A0E61] hover:border-[#4A1E9E] hover:shadow-[#2A0E61]/40 transition-all cursor-pointer"
            >
              <CardContent className="p-6 flex items-center">
                <div className="text-3xl mr-4">{category.icon}</div>
                <div>
                  <h3 className="font-medium">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">{category.count} agents</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="container mx-auto px-4 mb-16">
        <Card className="bg-[rgba(15,12,41,0.7)] shadow-lg border border-[#2A0E61] overflow-hidden">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
                <p className="text-muted-foreground mb-6">
                  Subscribe to our newsletter for updates on new agents, features, and AI advancements.
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-grow px-4 py-2 bg-[rgba(10,8,28,0.8)] border border-[#2A0E61] rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#4A1E9E] focus:border-transparent text-white placeholder-gray-400"
                  />
                  <Button className="bg-gray-900 border border-blue-800 hover:bg-gray-800 hover:border-blue-600 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] text-white font-medium transition-all duration-300 rounded-l-none">
                    Subscribe
                  </Button>
                </div>
              </div>
              <div className="hidden md:block">
                <img
                  src="https://ext.same-assets.com/3645949495/2467302636.svg"
                  alt="Newsletter"
                  className="max-w-full h-auto mix-blend-lighten"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
