"use client";

import { motion } from "framer-motion";

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
    title: "All Agents",
    description: "Browse all AI agents",
    icon: LayoutGrid, // Use Lucide icon
  },
  {
    id: 2,
    title: "Programmers",
    description: "Professional coders and system architects",
    icon: Code,
  },
  {
    id: 3,
    title: "Researchers",
    description: "AI and scientific research experts",
    icon: FlaskConical,
  },
  {
    id: 4,
    title: "Analysts",
    description: "Data and market analysis experts",
    icon: BarChart,
  },
  {
    id: 5,
    title: "Networks",
    description: "Network and infrastructure experts",
    icon: Network,
  },
  {
    id: 6,
    title: "Crypto News",
    description: "News aggregation, real-time information updates",
    icon: Bitcoin,
  },
  {
    id: 7,
    title: "Twitter",
    description: "Community management, enhanced user interaction",
    icon: Twitter,
  },
  {
    id: 8,
    title: "Graphic Design",
    description: "Graphic generation, create visual content",
    icon: Paintbrush,
  },
  {
    id: 9,
    title: "Video",
    description: "Video editing, improve creation efficiency",
    icon: Video,
  },
  {
    id: 10,
    title: "Marketing",
    description: "Promotion and marketing strategies",
    icon: Megaphone,
  },
  {
    id: 11,
    title: "Customer Support",
    description: "User service and problem solving",
    icon: Headphones,
  },
  {
    id: 12,
    title: "Education",
    description: "Knowledge sharing and online learning",
    icon: GraduationCap,
  },
  {
    id: 13,
    title: "Finance",
    description: "Financial analysis and investment consultation",
    icon: Landmark,
  },
  {
    id: 14,
    title: "Writing",
    description: "Content creation and copywriting",
    icon: Edit,
  },
  {
    id: 15,
    title: "Music",
    description: "Music creation and audio processing",
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
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Agent Categories</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Explore our diverse collection of specialized AI agents to meet your specific needs
        </p>
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
