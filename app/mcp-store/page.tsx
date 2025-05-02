import { InfoCard } from "@/components/cards/InfoCard";
import Watermark from "@/components/sub/Watermark";
import {
  BarChartIcon,
  CombineIcon,
  DatabaseZapIcon,
  NetworkIcon,
  ScaleIcon,
  SearchIcon,
  ServerCogIcon,
  ShieldCheckIcon,
  WalletCardsIcon,
} from "lucide-react";

// Sample MCP data
const mcpData = [
  {
    id: "mcp-1",
    name: "DeFi 聚合器 MCP",
    author: "ChainLink Labs",
    logo: DatabaseZapIcon,
    description: "聚合来自多个去中心化交易所的流动性，提供最佳交易价格和路径。",
  },
  {
    id: "mcp-2",
    name: "跨链桥接 MCP",
    author: "LayerZero 团队",
    logo: NetworkIcon,
    description: "实现不同区块链网络之间的资产和数据安全、高效地转移。",
  },
  {
    id: "mcp-3",
    name: "预言机数据 MCP",
    author: "Pyth Network",
    logo: ServerCogIcon,
    description: "提供可靠的链下数据源，为智能合约提供准确的实时市场价格信息。",
  },
  {
    id: "mcp-4",
    name: "身份验证 MCP",
    author: "Worldcoin",
    logo: CombineIcon,
    description: "提供去中心化的身份验证解决方案，保护用户隐私并防止欺诈。",
  },
  {
    id: "mcp-5",
    name: "去中心化存储 MCP",
    author: "Filecoin Foundation",
    logo: ScaleIcon,
    description: "提供安全、抗审查的分布式文件存储解决方案，确保数据持久性。",
  },
  {
    id: "mcp-6",
    name: "智能合约审计 MCP",
    author: "OpenZeppelin",
    logo: ShieldCheckIcon,
    description: "自动扫描和审计智能合约代码，识别潜在的安全漏洞和风险。",
  },
  {
    id: "mcp-7",
    name: "钱包管理 MCP",
    author: "MetaMask",
    logo: WalletCardsIcon,
    description: "安全管理用户的加密资产私钥，提供便捷的钱包交互界面。",
  },
  {
    id: "mcp-8",
    name: "链上数据分析 MCP",
    author: "Dune Analytics",
    logo: BarChartIcon,
    description: "提供强大的链上数据查询和可视化工具，洞察区块链活动趋势。",
  },
];

export default function McpStorePage() {
  return (
    <div className="pt-24 pb-16 text-white">
      <Watermark text="程序员小白龙" />
      {/* Hero Section */}
      <section className="bg-background py-12 mb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              查找加密{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                MCP 服务器和客户端
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">最大的 MCP 服务器集合。</p>
            <div className="relative max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <SearchIcon className="h-5 w-5 text-gray-400" />
              </div>
              {/* Reuse Input style from store page */}
              <input
                type="text"
                className="bg-[rgba(15,12,41,0.7)] block w-full pl-12 pr-3 py-4 rounded-full border border-[#2A0E61] focus:outline-none focus:ring-2 focus:ring-[#4A1E9E] focus:border-transparent text-white placeholder-gray-400"
                placeholder="搜索 MCP..."
              />
            </div>
          </div>
        </div>
      </section>

      {/* MCP List Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {mcpData.map((mcp) => (
            <InfoCard
              key={mcp.id}
              title={mcp.name}
              description={mcp.description}
              icon={mcp.logo}
              author={mcp.author}
              link={`/mcp-store/${mcp.id}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
