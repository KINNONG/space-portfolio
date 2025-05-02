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
              您的 AI 智能{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">工作台</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              在一个强大的工作台中构建、管理和定制您的AI智能体。获取所有工具和资源，为Web3创建智能代理。
            </p>
            <Button className="bg-gray-900 border border-blue-800 hover:bg-gray-800 hover:border-blue-600 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] text-white font-medium transition-all duration-300">
              创建新代理
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
              <CardTitle className="text-xl">数据分析</CardTitle>
              <CardDescription>代理性能指标</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">活跃代理</p>
                  <p className="text-2xl font-bold">7</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">总交互次数</p>
                  <p className="text-2xl font-bold">12,587</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">成功率</p>
                  <p className="text-2xl font-bold">94.3%</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity Card */}
          <Card className="bg-[rgba(15,12,41,0.7)] shadow-lg border border-[#2A0E61] hover:shadow-[#2A0E61]/40 transition-all">
            <CardHeader>
              <CardTitle className="text-xl">最近活动</CardTitle>
              <CardDescription>最新代理交互</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-b border-[#2A0E61]/50 pb-3">
                  <p className="text-sm text-primary">加密分析师</p>
                  <p className="text-xs text-muted-foreground">代币分析完成</p>
                  <p className="text-xs text-gray-500 mt-1">3分钟前</p>
                </div>
                <div className="border-b border-[#2A0E61]/50 pb-3">
                  <p className="text-sm text-primary">交易机器人</p>
                  <p className="text-xs text-muted-foreground">交易成功执行</p>
                  <p className="text-xs text-gray-500 mt-1">37分钟前</p>
                </div>
                <div>
                  <p className="text-sm text-primary">研究助手</p>
                  <p className="text-xs text-muted-foreground">研究报告已生成</p>
                  <p className="text-xs text-gray-500 mt-1">1小时前</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Resources Card */}
          <Card className="bg-[rgba(15,12,41,0.7)] shadow-lg border border-[#2A0E61] hover:shadow-[#2A0E61]/40 transition-all">
            <CardHeader>
              <CardTitle className="text-xl">资源</CardTitle>
              <CardDescription>工具与服务</CardDescription>
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
                    <p className="text-sm">模型中心</p>
                    <p className="text-xs text-muted-foreground">12个可用模型</p>
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
                    <p className="text-sm">API 连接</p>
                    <p className="text-xs text-muted-foreground">8个活跃连接</p>
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
                    <p className="text-sm">安全</p>
                    <p className="text-xs text-muted-foreground">端到端加密</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* My Agents Section */}
        <div className="mb-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">我的代理</h2>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              查看全部
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
                    <CardTitle className="text-lg">加密分析师 {i}</CardTitle>
                    <div className="px-2 py-1 text-xs bg-green-900/30 text-green-400 rounded-full">活跃</div>
                  </div>
                  <CardDescription className="text-xs">创建于 2025年5月{i}日</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    专门分析多个区块链上的加密货币代币，提供深度市场洞察。
                  </p>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>交互次数: {i * 1245}</span>
                    <span>成功率: {90 + i}%</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <h2 className="text-2xl font-bold mb-6">快捷操作</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {["创建代理", "连接API", "导入模型", "查看文档"].map((action, i) => (
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
