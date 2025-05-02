import Watermark from "@/components/sub/Watermark";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// Sample agent data
const featuredAgents = [
  {
    id: "agent-1",
    title: "加密分析师 Pro",
    creator: "DeepCore 团队",
    rating: 4.9,
    reviews: 127,
    price: "免费",
    image: "https://ext.same-assets.com/3645949495/811279993.png",
    description: "高级加密货币分析，支持多链。提供详细的市场洞察、代币评估和热门社交信号。",
    tags: ["分析", "加密货币", "多链"],
  },
  {
    id: "agent-2",
    title: "交易机器人 Elite",
    creator: "DeFi 实验室",
    rating: 4.7,
    reviews: 89,
    price: "0.01 ETH",
    image: "https://ext.same-assets.com/3645949495/3339126828.png",
    description: "自动化交易代理，支持限价单、止损单，并跨 Solana、以太坊等多个 DEX。",
    tags: ["交易", "DeFi", "自动化"],
  },
  {
    id: "agent-3",
    title: "研究 GPT",
    creator: "Web3 研究 DAO",
    rating: 4.8,
    reviews: 215,
    price: "免费试用",
    image: "https://ext.same-assets.com/3645949495/1684438109.png",
    description: "强大的研究能力，扫描 Web3 媒体、项目和文档，提供全面的报告。",
    tags: ["研究", "报告", "Web3"],
  },
  {
    id: "agent-4",
    title: "NFT 导航员",
    creator: "MetaLabs",
    rating: 4.6,
    reviews: 76,
    price: "免费",
    image: "https://ext.same-assets.com/3645949495/3272116947.svg",
    description: "通过 AI 驱动的估值洞察，发现、分析和跟踪跨多个市场的 NFT 收藏品。",
    tags: ["NFT", "市场", "分析"],
  },
  {
    id: "agent-5",
    title: "治理助手",
    creator: "DAO 实验室",
    rating: 4.5,
    reviews: 52,
    price: "0.005 ETH",
    image: "https://ext.same-assets.com/3645949495/2153026770.svg",
    description: "跟踪和分析跨 Web3 协议的 DAO 提案、投票模式和治理活动。",
    tags: ["DAO", "治理", "投票"],
  },
  {
    id: "agent-6",
    title: "安全哨兵",
    creator: "BlockGuard",
    rating: 4.9,
    reviews: 143,
    price: "0.02 ETH",
    image: "https://ext.same-assets.com/3645949495/4061061103.svg",
    description: "监控智能合约、钱包和区块链交易中的可疑活动和潜在安全威胁。",
    tags: ["安全", "监控", "警报"],
  },
];

const categories = ["所有代理", "分析", "交易", "研究", "NFT", "治理", "安全", "社交", "新闻", "开发者", "游戏"];

export default function StorePage() {
  return (
    <div className="pt-24 pb-16 text-white">
      <Watermark text="程序员小白龙" />
      {/* Hero Section */}
      <section className="bg-background py-12 mb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI 代理{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">市场</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              发现、部署和定制由 DeepCore 社区创建的强大 AI 代理。从分析到交易，为您的 Web3.0 需求找到完美的 AI 助手。
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
                placeholder="搜索代理..."
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
          <h2 className="text-2xl font-bold">精选代理</h2>
          <Button
            variant="outline"
            className="border-[#2A0E61] text-gray-300 hover:border-[#4A1E9E] hover:text-white transition-all"
          >
            查看全部
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
                <CardDescription className="text-xs">作者：{agent.creator}</CardDescription>
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
                  安装代理
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Popular Categories */}
      <section className="container mx-auto px-4 mb-16">
        <h2 className="text-2xl font-bold mb-6">热门分类</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { title: "分析代理", count: 124, icon: "📊" },
            { title: "交易机器人", count: 97, icon: "📈" },
            { title: "研究工具", count: 86, icon: "🔍" },
            { title: "NFT 助手", count: 73, icon: "🖼️" },
            { title: "安全监控", count: 65, icon: "🔒" },
            { title: "开发助手", count: 58, icon: "💻" },
          ].map((category) => (
            <Card
              key={category.title}
              className="bg-[rgba(15,12,41,0.7)] shadow-lg border border-[#2A0E61] hover:border-[#4A1E9E] hover:shadow-[#2A0E61]/40 transition-all cursor-pointer"
            >
              <CardContent className="p-6 flex items-center">
                <div className="text-3xl mr-4">{category.icon}</div>
                <div>
                  <h3 className="font-medium">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">{category.count} 个代理</p>
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
                <h3 className="text-2xl font-bold mb-4">保持更新</h3>
                <p className="text-muted-foreground mb-6">订阅我们的通讯，获取有关新代理、功能和 AI 进展的更新。</p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="输入您的邮箱"
                    className="flex-grow px-4 py-2 bg-[rgba(10,8,28,0.8)] border border-[#2A0E61] rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#4A1E9E] focus:border-transparent text-white placeholder-gray-400"
                  />
                  <Button className="bg-gray-900 border border-blue-800 hover:bg-gray-800 hover:border-blue-600 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] text-white font-medium transition-all duration-300 rounded-l-none">
                    订阅
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
