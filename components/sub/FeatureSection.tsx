"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FeatureSection = () => {
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true, amount: 0.2 });

  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: true, amount: 0.2 });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 bg-background overflow-hidden text-white">
      <div className="container mx-auto px-4">
        {/* 深度研究特性 - 文本左，图片右 */}
        <motion.div
          ref={ref1}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32"
          initial="hidden"
          animate={isInView1 ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* 文本内容 */}
          <div className="md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">深度研究代理，专业可靠</h2>
            <p className="text-gray-300 text-lg mb-6">
              深度研究是一款专为加密领域设计的项目研究助手，遵循类似于 OpenAI 和 Gemini
              深度研究的工作流程，可针对任何主题生成全面的报告。它允许您自定义模型、提示、报告结构、搜索 API
              和研究深度。
            </p>
          </div>
          {/* 图片 */}
          <div className="flex justify-center md:order-2">
            <img
              src="https://ext.same-assets.com/3645949495/2153026770.svg"
              alt="深度研究"
              className="max-w-full h-auto rounded-lg shadow-xl"
              style={{ transform: "scale(1.1)" }}
            />
          </div>
        </motion.div>

        {/* MCP 特性 - 图片左，文本右 */}
        <motion.div
          ref={ref2}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start "
          initial="hidden"
          animate={isInView2 ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* 图片 */}
          <div className="flex justify-center md:order-1">
            <img
              src="https://ext.same-assets.com/3645949495/2467302636.svg"
              alt="模型上下文协议"
              className="max-w-full h-auto rounded-lg shadow-xl"
            />
          </div>
          {/* 文本内容 */}
          <div className="md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">模型上下文协议</h2>
            <p className="text-gray-300 text-lg mb-6">
              Athenix 完全集成了 MCP 协议。任何标准的 MCP 服务器在集成后都可以转换为供代理调用的工具。代理也可以发布为
              MCP 服务器，允许像 Cursor 和 Claude 这样的外部客户端调用它们。此外，Athenix 构建了自己的 MCP
              Store，以实现在加密领域内所有 MCP 服务器的注册、发现和调用。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSection;
