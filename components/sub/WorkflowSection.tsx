"use client";

import React from "react";

const WorkflowSection: React.FC = () => {
  return (
    <>
      <div className="text-center px-4">
        <div className="mx-auto mb-8 max-w-full h-auto">{/* 星空背景装饰 */}</div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">工作流</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          系统的四个核心组件如何协同工作，实现从数据分析到交易执行的无缝流程
        </p>
      </div>

      {/* 采用简洁清晰的流程布局 */}
      <section className="relative px-4 mx-auto max-w-7xl">
        {/* 流程连接线 - 使用绝对定位的SVG确保可见 */}
        <div className="absolute inset-0 w-full h-full hidden md:block">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute z-0">
            <defs>
              <marker id="arrowhead-svg" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                {/* <polygon points="0 0, 10 3.5, 0 7" fill="#60a5fa" /> */}
              </marker>
            </defs>

            {/* 上左到中间的拐角箭头 */}
            <path
              d="M 10 40 L 10 50 L 27 50"
              fill="none"
              stroke="#60a5fa"
              strokeWidth="0.03"
              strokeDasharray="1,1.5"
              strokeLinecap="round"
              markerEnd="url(#arrowhead-svg)"
              className="workflow-path"
            />

            {/* 上右到中间的拐角箭头 */}
            <path
              d="M 90 40 L 90 50 L 73 50"
              fill="none"
              stroke="#60a5fa"
              strokeWidth="0.03"
              strokeDasharray="1,1.5"
              strokeLinecap="round"
              markerEnd="url(#arrowhead-svg)"
              className="workflow-path"
            />

            {/* 中间到下左的拐角箭头 */}
            <path
              d="M 27 60 L 10 60 L 10 78"
              fill="none"
              stroke="#60a5fa"
              strokeWidth="0.03"
              strokeDasharray="1,1.5"
              strokeLinecap="round"
              markerEnd="url(#arrowhead-svg)"
              className="workflow-path"
            />

            {/* 中间到下右的拐角箭头 */}
            <path
              d="M 73 60 L 90 60 L 90 78"
              fill="none"
              stroke="#60a5fa"
              strokeWidth="0.03"
              strokeDasharray="1,1.5"
              strokeLinecap="round"
              markerEnd="url(#arrowhead-svg)"
              className="workflow-path"
            />
          </svg>
        </div>

        <div className="relative w-full mx-auto">
          {/* 使用grid布局而不是绝对定位 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 md:gap-8 relative z-10">
            {/* 顶部标题 - 对齐内容 */}
            <div className="md:col-span-3 text-center mb-8">
              <div className="inline-block px-4 py-1 bg-gradient-to-r from-blue-900/40 to-blue-700/20 rounded-full border border-blue-500/30">
                <span className="text-sm text-blue-200">输入数据 → 处理 → 输出结果</span>
              </div>
            </div>

            {/* 顶部卡片组 - 数据源 */}
            <div className="flex flex-col md:flex-row md:col-span-3 justify-center w-full gap-6 md:gap-8 cursor-pointer">
              {/* 分析师卡片 */}
              <div className="workflow-card workflow-top-left relative w-full md:w-80 lg:w-96">
                <div className="w-full h-full bg-gradient-to-b from-blue-950/60 to-blue-900/10 backdrop-blur rounded-lg border border-blue-500/30 p-5 overflow-hidden shadow-[0_0_15px_rgba(56,182,255,0.15)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(56,182,255,0.3)] hover:border-blue-400/50">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="relative w-10 h-10 rounded-full bg-blue-950 flex-shrink-0 shadow-inner shadow-blue-400/10">
                      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="40" height="40" rx="20" fill="#0f172a"></rect>
                        <path
                          d="M12 28L12 20M20 28L20 12M28 28L28 16"
                          stroke="#38b6ff"
                          strokeWidth="2"
                          strokeLinecap="round"
                        ></path>
                        <circle cx="12" cy="16" r="2" fill="#38b6ff"></circle>
                        <circle cx="20" cy="24" r="2" fill="#38b6ff"></circle>
                        <circle cx="28" cy="12" r="2" fill="#38b6ff"></circle>
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-medium text-white truncate">分析师</h3>
                      </div>
                      <p className="text-xs text-blue-200/70 mt-1 line-clamp-2 overflow-hidden text-ellipsis">
                        多维度分析链上和链下数据，为交易者提供精准的项目评估。
                      </p>
                    </div>
                  </div>
                  <div className="bg-blue-900/20 rounded-lg p-3 mb-4 border border-blue-500/10">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-blue-200/70">代币合约地址</span>
                      <span className="text-blue-200/70">代币价值</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white truncate max-w-[150px]">DEzkpE...7LZ9Pr6hBz</span>
                      <span className="text-white">30.5 M</span>
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <h4 className="text-xs font-medium text-white">功能</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center bg-blue-900/20 rounded-lg px-4 py-2 border border-blue-500/10">
                        <span className="text-xs text-white">链上API</span>
                        <span className="text-xs text-blue-200/70">RPC节点</span>
                      </div>
                      <div className="flex justify-between items-center bg-blue-900/20 rounded-lg px-4 py-2 border border-blue-500/10">
                        <span className="text-xs text-white">Twitter代理</span>
                        <span className="text-xs text-blue-200/70">内置</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 连接线指示标记 - 显示在卡片右下角 */}
                {/* <div className="absolute bottom-0 right-16 w-4 h-4 bg-blue-400 rounded-full opacity-0 md:opacity-100 blink-animation transition-opacity"></div> */}
              </div>

              {/* Twitter知识图谱卡片 */}
              <div className="workflow-card workflow-top-right relative w-full md:w-80 lg:w-96">
                <div className="w-full h-full bg-gradient-to-b from-blue-950/60 to-blue-900/10 backdrop-blur rounded-lg border border-blue-500/30 p-5 overflow-hidden shadow-[0_0_15px_rgba(56,182,255,0.15)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(56,182,255,0.3)] hover:border-blue-400/50">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="relative w-10 h-10 rounded-full bg-blue-950 flex-shrink-0 shadow-inner shadow-blue-400/10">
                      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="40" height="40" rx="20" fill="#0f172a"></rect>
                        <circle cx="20" cy="20" r="3" fill="#38b6ff"></circle>
                        <circle cx="12" cy="14" r="2" fill="#38b6ff"></circle>
                        <circle cx="28" cy="14" r="2" fill="#38b6ff"></circle>
                        <circle cx="12" cy="26" r="2" fill="#38b6ff"></circle>
                        <circle cx="28" cy="26" r="2" fill="#38b6ff"></circle>
                        <path
                          d="M14 14L18 18M22 18L26 14M14 26L18 22M22 22L26 26"
                          stroke="#38b6ff"
                          strokeWidth="1.5"
                        ></path>
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-medium text-white truncate">Twitter知识图谱</h3>
                        <span className="px-2 py-0.5 text-xs rounded-full bg-blue-500/10 text-blue-400 flex-shrink-0 whitespace-nowrap">
                          官方
                        </span>
                      </div>
                      <p className="text-xs text-blue-200/70 mt-1 line-clamp-2 overflow-hidden text-ellipsis">
                        通过识别和关联与WEB3 KOL相关的推文、用户和标签，揭示隐藏的关系网络。
                      </p>
                    </div>
                  </div>
                  <div className="bg-blue-900/20 rounded-lg p-3 mb-4 border border-blue-500/10">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-blue-200/70">代币合约地址</span>
                      <span className="text-blue-200/70">代币价值</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white truncate max-w-[150px]">D9vpE...7LZPwDCDZ</span>
                      <span className="text-white">11.2 M</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xs font-medium text-blue-200/70">数据处理</h4>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-blue-900/20 rounded-lg px-3 py-2 border border-blue-500/10">
                        <span className="text-xs text-white">模型定义</span>
                      </div>
                      <div className="bg-blue-900/20 rounded-lg px-3 py-2 border border-blue-500/10">
                        <span className="text-xs text-white">图谱提取</span>
                      </div>
                      <div className="bg-blue-900/20 rounded-lg px-3 py-2 border border-blue-500/10">
                        <span className="text-xs text-white">图谱融合</span>
                      </div>
                      <div className="bg-blue-900/20 rounded-lg px-3 py-2 border border-blue-500/10">
                        <span className="text-xs text-white">图谱数据库</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 中间卡片 - 模型中心 */}
            <div className="md:col-span-3 flex justify-center cursor-pointer">
              <div className="workflow-card workflow-center relative w-full md:w-80 lg:w-96">
                <div className="w-full h-full bg-gradient-to-b from-blue-900/60 to-blue-800/20 backdrop-blur rounded-lg border-2 border-blue-400 p-6 shadow-[0_0_30px_rgba(56,182,255,0.35)]">
                  <div className="text-center mb-3">
                    <span className="inline-block bg-blue-500/20 text-blue-300 text-xs px-3 py-1 rounded-full border border-blue-400/30">
                      中央处理
                    </span>
                  </div>
                  <h3 className="text-lg font-medium text-white text-center mb-4">模型中心</h3>
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="bg-blue-900/30 rounded-lg px-3 py-2 border border-blue-500/20">
                      <span className="text-xs text-white">DeepSeek R1</span>
                    </div>
                    <div className="bg-blue-900/30 rounded-lg px-3 py-2 border border-blue-500/20">
                      <span className="text-xs text-white">DeepSeek V3</span>
                    </div>
                    <div className="bg-blue-900/30 rounded-lg px-3 py-2 border border-blue-500/20">
                      <span className="text-xs text-white">OpenAI 4O</span>
                    </div>
                    <div className="bg-blue-900/30 rounded-lg px-3 py-2 border border-blue-500/20">
                      <span className="text-xs text-white">OpenAI O3/O1</span>
                    </div>
                  </div>
                  {/* 数据流描述 */}
                  <div className="text-center">
                    <span className="inline-block bg-blue-900/40 text-blue-200 text-xs px-3 py-1 rounded-full border border-blue-400/20">
                      <span className="inline-block mr-1">⟳</span>
                      数据处理与模型调用
                    </span>
                  </div>
                </div>
                {/* 中心卡片四个方向的连接点 */}
                <div className="absolute top-[32%] left-0 w-3 h-3 bg-blue-400 rounded-full opacity-0 md:opacity-70 blink-animation -translate-y-1/2 -translate-x-1/2 transition-opacity"></div>
                <div className="absolute top-[32%] right-0 w-3 h-3 bg-blue-400 rounded-full opacity-0 md:opacity-70 blink-animation -translate-y-1/2 translate-x-1/2 transition-opacity"></div>
                <div className="absolute top-[72%] left-[1%] w-3 h-3 bg-blue-400 rounded-full opacity-0 md:opacity-70 blink-animation -translate-x-1/2 -translate-y-1/2 transition-opacity"></div>
                <div className="absolute top-[67%] -right-[2%] w-3 h-3 bg-blue-400 rounded-full opacity-0 md:opacity-70 blink-animation -translate-x-1/2 translate-y-1/2 transition-opacity"></div>
              </div>
            </div>

            {/* 底部卡片组 - 执行层 */}
            <div className="flex flex-col md:flex-row md:col-span-3 justify-center w-full gap-6 md:gap-8 cursor-pointer">
              {/* 交易代理卡片 */}
              <div className="workflow-card workflow-bottom-left relative w-full md:w-80 lg:w-96">
                <div className="w-full h-full bg-gradient-to-b from-blue-950/60 to-blue-900/10 backdrop-blur rounded-lg border border-blue-500/30 p-5 overflow-hidden shadow-[0_0_15px_rgba(56,182,255,0.15)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(56,182,255,0.3)] hover:border-blue-400/50">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="relative w-10 h-10 rounded-full bg-blue-950 flex-shrink-0 shadow-inner shadow-blue-400/10">
                      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="40" height="40" rx="20" fill="#0f172a"></rect>
                        <path
                          d="M28 14L22 20M22 20L28 26M22 20H12"
                          stroke="#38b6ff"
                          strokeWidth="2"
                          strokeLinecap="round"
                        ></path>
                        <path d="M20 12L14 28" stroke="#38b6ff" strokeWidth="2" strokeLinecap="round"></path>
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-medium text-white truncate">交易代理</h3>
                      </div>
                      <p className="text-xs text-blue-200/70 mt-1 line-clamp-2 overflow-hidden text-ellipsis">
                        Web3 交易代理作为一个智能中介，在去中心化网络中促进无缝交易。
                      </p>
                    </div>
                  </div>
                  <div className="bg-blue-900/20 rounded-lg p-3 mb-4 border border-blue-500/10">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-blue-200/70">代币合约地址</span>
                      <span className="text-blue-200/70">代币价值</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white truncate max-w-[150px]">79vpE...7LZ9PASDAS</span>
                      <span className="text-white">12.5 M</span>
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <h4 className="text-xs font-medium text-white">功能</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center bg-blue-900/20 rounded-lg px-4 py-2 border border-blue-500/10">
                        <span className="text-xs text-white">报价&amp;兑换API</span>
                        <span className="text-xs text-blue-200/70">Jupiter</span>
                      </div>
                      <div className="flex justify-between items-center bg-blue-900/20 rounded-lg px-4 py-2 border border-blue-500/10">
                        <span className="text-xs text-white">分析师代理</span>
                        <span className="text-xs text-blue-200/70">内置</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 连接线指示标记 - 显示在卡片顶部 */}
                {/* <div className="absolute top-0 right-16 w-4 h-4 bg-blue-400 rounded-full opacity-0 md:opacity-100 blink-animation transition-opacity"></div> */}
              </div>

              {/* 用户管理卡片 */}
              <div className="workflow-card workflow-bottom-right relative w-full md:w-80 lg:w-96">
                <div className="w-full h-full bg-gradient-to-b from-blue-950/60 to-blue-900/10 backdrop-blur rounded-lg border border-blue-500/30 p-5 overflow-hidden shadow-[0_0_15px_rgba(56,182,255,0.15)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(56,182,255,0.3)] hover:border-blue-400/50">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="relative w-10 h-10 rounded-full bg-blue-950 flex-shrink-0 shadow-inner shadow-blue-400/10">
                      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="40" height="40" rx="20" fill="#0f172a"></rect>
                        <path d="M10 20h20" stroke="#38b6ff" strokeWidth="2" strokeLinecap="round"></path>
                        <path d="M20 10v20" stroke="#38b6ff" strokeWidth="2" strokeLinecap="round"></path>
                        <circle cx="20" cy="20" r="6" stroke="#38b6ff" strokeWidth="2"></circle>
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-medium text-white truncate">用户管理</h3>
                      </div>
                      <p className="text-xs text-blue-200/70 mt-1 line-clamp-2 overflow-hidden text-ellipsis">
                        管理用户访问权限、API请求和订阅状态，确保系统安全和稳定运行。
                      </p>
                    </div>
                  </div>
                  <div className="bg-blue-900/20 rounded-lg p-3 mb-4 border border-blue-500/10">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-blue-200/70">平均响应时间</span>
                      <span className="text-blue-200/70">每日请求</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white truncate max-w-[150px]">200ms</span>
                      <span className="text-white">1.2M</span>
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <h4 className="text-xs font-medium text-white">功能</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center bg-blue-900/20 rounded-lg px-4 py-2 border border-blue-500/10">
                        <span className="text-xs text-white">负载均衡</span>
                        <span className="text-xs text-blue-200/70">自动扩展</span>
                      </div>
                      <div className="flex justify-between items-center bg-blue-900/20 rounded-lg px-4 py-2 border border-blue-500/10">
                        <span className="text-xs text-white">用户验证</span>
                        <span className="text-xs text-blue-200/70">多重认证</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 连接线指示标记 - 显示在卡片顶部 */}
                {/* <div className="absolute top-0 left-16 w-4 h-4 bg-blue-400 rounded-full opacity-0 md:opacity-100 blink-animation transition-opacity"></div> */}
              </div>
            </div>
          </div>

          {/* 移动端垂直流程指示器 */}
          <div className="flex flex-col items-center md:hidden">
            <div className="h-12 w-0.5 bg-gradient-to-b from-transparent to-blue-500/40"></div>
            <div className="my-4 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-xs text-blue-300 shadow-[0_0_10px_rgba(56,182,255,0.2)]">
              数据流向
            </div>
            <div className="h-12 w-0.5 bg-gradient-to-t from-transparent to-blue-500/40"></div>
          </div>
        </div>

        {/* 为流程连接线添加CSS样式 */}
        <style jsx>{`
          /* 星空背景效果 */
          .stars {
            background-image: radial-gradient(2px 2px at 20px 30px, #38b6ff, rgba(0, 0, 0, 0)),
              radial-gradient(2px 2px at 40px 70px, #38b6ff, rgba(0, 0, 0, 0)),
              radial-gradient(2px 2px at 60px 110px, #38b6ff, rgba(0, 0, 0, 0)),
              radial-gradient(2px 2px at 80px 10px, #38b6ff, rgba(0, 0, 0, 0)),
              radial-gradient(2px 2px at 100px 50px, #38b6ff, rgba(0, 0, 0, 0));
            background-repeat: repeat;
            background-size: 200px 200px;
          }

          .workflow-card {
            position: relative;
          }

          .workflow-card::before {
            content: "";
            position: absolute;
            width: 2px;
            height: 2px;
            background: white;
            box-shadow: 0 0 10px 2px rgba(56, 182, 255, 0.7);
            border-radius: 50%;
            animation: star-twinkle 4s infinite;
            opacity: 0.7;
            z-index: -1;
            top: -10px;
            right: 20px;
          }

          /* 路径发光效果 */
          .workflow-path {
            filter: drop-shadow(0 0 3px rgba(96, 165, 250, 0.7));
            stroke-width: 0.7;
          }

          /* 连接点闪烁动画 */
          .blink-animation {
            animation: blink 2s ease-in-out infinite;
            box-shadow: 0 0 15px 5px rgba(96, 165, 250, 0.7);
            background: #60a5fa;
          }

          @keyframes blink {
            0%,
            100% {
              opacity: 0.3;
              box-shadow: 0 0 10px 2px rgba(96, 165, 250, 0.3);
            }
            50% {
              opacity: 1;
              box-shadow: 0 0 15px 5px rgba(96, 165, 250, 0.7);
            }
          }

          @keyframes star-twinkle {
            0%,
            100% {
              opacity: 0.2;
              transform: scale(0.8);
            }
            50% {
              opacity: 0.8;
              transform: scale(1.2);
            }
          }

          @keyframes floating {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-5px);
            }
          }

          .animate-floating {
            animation: floating 2s ease-in-out infinite;
          }

          /* 响应式调整 */
          @media (max-width: 768px) {
            .workflow-connections {
              display: none;
            }
          }
        `}</style>
      </section>
    </>
  );
};

export default WorkflowSection;
