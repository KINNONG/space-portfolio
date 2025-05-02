"use client";

import { motion } from "framer-motion";
// import Image from "next/image"; // 不再需要 Image
import {
  BarChart,
  Bitcoin,
  Code,
  Edit,
  FlaskConical,
  GraduationCap,
  Headphones,
  Landmark, // 引入 Lucide 图标
  LayoutGrid,
  Megaphone,
  Music,
  Network,
  Paintbrush,
  Twitter,
  Video,
} from "lucide-react";

// 定义类别数据，使用 Lucide 图标组件
const categories = [
  {
    id: 1,
    title: "所有代理",
    description: "浏览所有AI代理",
    icon: LayoutGrid, // 使用 Lucide 图标
  },
  {
    id: 2,
    title: "程序员",
    description: "专业编码人员和系统架构师",
    icon: Code,
  },
  {
    id: 3,
    title: "研究员",
    description: "AI和科学研究专家",
    icon: FlaskConical,
  },
  {
    id: 4,
    title: "分析师",
    description: "数据和市场分析专家",
    icon: BarChart,
  },
  {
    id: 5,
    title: "网络",
    description: "网络和基础设施专家",
    icon: Network,
  },
  {
    id: 6,
    title: "加密货币新闻",
    description: "新闻聚合，实时信息更新",
    icon: Bitcoin,
  },
  {
    id: 7,
    title: "Twitter",
    description: "社区管理，增强用户互动",
    icon: Twitter,
  },
  {
    id: 8,
    title: "图形设计",
    description: "图形生成，创建视觉内容",
    icon: Paintbrush,
  },
  {
    id: 9,
    title: "视频",
    description: "视频编辑，提升创作效率",
    icon: Video,
  },
  {
    id: 10,
    title: "市场营销",
    description: "推广和营销策略",
    icon: Megaphone,
  },
  {
    id: 11,
    title: "客户支持",
    description: "用户服务和问题解决",
    icon: Headphones,
  },
  {
    id: 12,
    title: "教育",
    description: "知识传授和在线学习",
    icon: GraduationCap,
  },
  {
    id: 13,
    title: "金融",
    description: "财务分析和投资咨询",
    icon: Landmark,
  },
  {
    id: 14,
    title: "写作",
    description: "内容创作和文案撰写",
    icon: Edit,
  },
  {
    id: 15,
    title: "音乐",
    description: "音乐创作和音频处理",
    icon: Music,
  },
];

// 卡片动画变体
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const LogosSection = () => {
  return (
    <section className="py-20 w-full overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">代理类别</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">探索我们多样化的专业AI代理集合，满足您的特定需求</p>
      </div>

      <div className="categories-section w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <ul className="flex items-stretch justify-center md:justify-start [&>li]:mx-4 animate-infinite-scroll">
          {categories.map((category) => (
            <li key={category.id} className="flex-shrink-0 w-72 py-4">
              <motion.div
                variants={cardVariants}
                initial="visible"
                whileHover={{
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
                className="group relative cursor-pointer h-full py-4"
                style={{
                  backgroundImage:
                    "linear-gradient(104.28deg, rgb(38, 34, 71) 1.24%, #805AD5 32.96%, rgb(38, 34, 71) 68.22%)",
                  borderRadius: "1.5rem",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 1,
                    backgroundColor: "#030014",
                    borderRadius: "inherit",
                    transition: "all 0.3s ease",
                  }}
                  className="group-hover:bg-[#0c0320]"
                ></div>
                <div className="relative group-hover:border-purple-400 transition-all duration-300 rounded-lg overflow-hidden h-full shadow-lg p-2 px-6 flex flex-col">
                  <div className="flex flex-col flex-grow">
                    <div className="mb-4">
                      <div className="w-10 h-5 rounded-full flex items-center justify-center px-2 transform transition-transform duration-300 group-hover:scale-110">
                        <category.icon className="w-6 h-6 text-white group-hover:text-purple-300 transition-colors duration-300" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-purple-300 transition-colors duration-300">
                        {category.title}
                      </h3>
                      <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
              </motion.div>
            </li>
          ))}
        </ul>
        <ul
          className="flex items-stretch justify-center md:justify-start [&>li]:mx-4 animate-infinite-scroll"
          aria-hidden="true"
        >
          {categories.map((category) => (
            <li key={`${category.id}-duplicate`} className="flex-shrink-0 w-72 py-4">
              <motion.div
                variants={cardVariants}
                initial="visible"
                whileHover={{
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
                className="group relative cursor-pointer h-full "
                style={{
                  backgroundImage:
                    "linear-gradient(104.28deg, rgb(38, 34, 71) 1.24%, #805AD5 32.96%, rgb(38, 34, 71) 68.22%)",
                  borderRadius: "1.5rem",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 1,
                    backgroundColor: "#030014",
                    borderRadius: "inherit",
                    transition: "all 0.3s ease",
                  }}
                  className="group-hover:bg-[#0c0320]"
                ></div>
                <div className="relative group-hover:border-purple-400 transition-all duration-300 rounded-lg overflow-hidden h-full shadow-lg p-2 px-6 flex flex-col">
                  <div className="flex flex-col flex-grow">
                    <div className="mb-4">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center p-2 transform transition-transform duration-300 group-hover:scale-110">
                        <category.icon className="w-6 h-6 text-white group-hover:text-purple-300 transition-colors duration-300" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-purple-300 transition-colors duration-300">
                        {category.title}
                      </h3>
                      <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default LogosSection;
