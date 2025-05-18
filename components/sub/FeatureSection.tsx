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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Deep Research Agents, Professional & Reliable</h2>
            <p className="text-gray-300 text-lg mb-6">
              Deep Research is a project research assistant designed specifically for the crypto space, following a
              workflow similar to OpenAI and Gemini deep research to generate comprehensive reports on any topic. It
              allows you to customize models, prompts, report structure, search APIs, and research depth.
            </p>
          </div>
          {/* 图片 */}
          <div className="flex justify-center md:order-2">
            <img
              src="https://ext.same-assets.com/3645949495/2153026770.svg"
              alt="Deep Research"
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
              alt="Model Context Protocol"
              className="max-w-full h-auto rounded-lg shadow-xl"
            />
          </div>
          {/* 文本内容 */}
          <div className="md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Model Context Protocol</h2>
            <p className="text-gray-300 text-lg mb-6">
              Athenix fully integrates the MCP protocol. Any standard MCP server can be converted into a tool for agents
              to call after integration. Agents can also be published as MCP servers, allowing external clients like
              Cursor and Claude to call them. Additionally, Athenix has built its own MCP Store to enable registration,
              discovery, and invocation of all MCP servers within the crypto space.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSection;
