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
    name: "DeFi Aggregator MCP",
    author: "ChainLink Labs",
    logo: DatabaseZapIcon,
    description:
      "Aggregate liquidity from multiple decentralized exchanges, providing the best trading prices and paths.",
  },
  {
    id: "mcp-2",
    name: "Cross-chain Bridge MCP",
    author: "LayerZero Team",
    logo: NetworkIcon,
    description: "Enable secure and efficient transfer of assets and data between different blockchain networks.",
  },
  {
    id: "mcp-3",
    name: "Oracle Data MCP",
    author: "Pyth Network",
    logo: ServerCogIcon,
    description:
      "Provide reliable off-chain data sources, enabling accurate real-time market price information for smart contracts.",
  },
  {
    id: "mcp-4",
    name: "Authentication MCP",
    author: "Worldcoin",
    logo: CombineIcon,
    description: "Provide decentralized authentication solutions, protecting user privacy and preventing fraud.",
  },
  {
    id: "mcp-5",
    name: "Decentralized Storage MCP",
    author: "Filecoin Foundation",
    logo: ScaleIcon,
    description: "Provide secure, censorship-resistant distributed file storage solutions, ensuring data persistence.",
  },
  {
    id: "mcp-6",
    name: "Smart Contract Audit MCP",
    author: "OpenZeppelin",
    logo: ShieldCheckIcon,
    description:
      "Automatically scan and audit smart contract code, identifying potential security vulnerabilities and risks.",
  },
  {
    id: "mcp-7",
    name: "Wallet Management MCP",
    author: "MetaMask",
    logo: WalletCardsIcon,
    description:
      "Securely manage user's encrypted asset private keys, providing a convenient wallet interaction interface.",
  },
  {
    id: "mcp-8",
    name: "On-chain Data Analysis MCP",
    author: "Dune Analytics",
    logo: BarChartIcon,
    description:
      "Provides powerful on-chain data query and visualization tools, offering insights into blockchain activity trends.",
  },
];

export default function McpStorePage() {
  return (
    <div className="pt-24 pb-16 text-white">
      <Watermark text="Programmer Little White Dragon" />
      {/* Hero Section */}
      <section className="bg-background py-12 mb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Find Crypto{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                MCP Servers and Clients
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">The largest collection of MCP servers.</p>
            <div className="relative max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <SearchIcon className="h-5 w-5 text-gray-400" />
              </div>
              {/* Reuse Input style from store page */}
              <input
                type="text"
                className="bg-[rgba(15,12,41,0.7)] block w-full pl-12 pr-3 py-4 rounded-full border border-[#2A0E61] focus:outline-none focus:ring-2 focus:ring-[#4A1E9E] focus:border-transparent text-white placeholder-gray-400"
                placeholder="Search MCP..."
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
