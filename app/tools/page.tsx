import { InfoCard } from "@/components/cards/InfoCard"; // 导入 InfoCard
import { Wrench } from "lucide-react"; // 导入一个示例图标

const ToolsPage = () => {
  // 占位数据
  const tools = [
    {
      title: "Tool 1",
      description: "Description for Tool 1",
      icon: Wrench, // 使用 Lucide 图标
      link: "/tools/tool1",
    },
    {
      title: "Tool 2",
      description: "Description for Tool 2",
      icon: Wrench,
      link: "/tools/tool2",
    },
    {
      title: "Tool 3",
      description: "Description for Tool 3",
      icon: Wrench,
      link: "/tools/tool3",
    },
    {
      title: "Tool 4",
      description: "Description for Tool 4",
      icon: Wrench,
      link: "/tools/tool4",
    },
    {
      title: "Tool 5",
      description: "Description for Tool 5",
      icon: Wrench,
      link: "/tools/tool5",
    },
    {
      title: "Tool 6",
      description: "Description for Tool 6",
      icon: Wrench,
      link: "/tools/tool6",
    },
  ];

  // 工具分类 - 示例
  const categories = ["Trading", "AI", "Research", "Search", "All"]; // 示例分类

  return (
    <main className="h-full w-full">
      <div className="flex flex-col items-center justify-center px-6 md:px-20 mt-20 md:mt-40 w-full z-[20] pb-20">
        {/* 标题和副标题 */}
        <h1 className="text-[40px] md:text-[50px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 md:py-20">
          Developer Tools
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-4xl text-center mb-10 md:mb-20">
          We provide web3 developers with a wide range of fundamental APIs related to trading, AI, research, and search,
          making it easier to build high-value Agent applications.
        </p>

        {/* 工具分类 - 简单的按钮示例 */}
        <div className="flex flex-wrap justify-center gap-4 mb-10 md:mb-20">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 bg-gray-800 text-gray-300 rounded-md hover:bg-gray-700 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* 工具卡片列表 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 w-full max-w-7xl">
          {tools.map((tool, index) => (
            <InfoCard // 使用 InfoCard
              key={index}
              title={tool.title}
              description={tool.description}
              icon={tool.icon} // 传递图标
              link={tool.link}
            />
          ))}
        </div>

        {/* 可以添加分页或者加载更多 */}
      </div>
    </main>
  );
};

export default ToolsPage;
