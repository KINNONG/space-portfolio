"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

import CodeBlock from "./CodeBlock";
export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-20 w-[1526px] z-[20] mx-auto"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            {/* Fullstack Developer Portfolio */}
            一起感受 AI Agents 的魔力
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[650px] w-auto h-auto"
        >
          <div>
            <h1 className="text-transparent text-5xl font-bold  md:text-6xl lg:text-7xl bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              最佳
            </h1>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Web3 AI 代理平台
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                MCP-驱动
              </span>
            </h1>
          </div>
        </motion.div>

        <motion.p variants={slideInFromLeft(0.8)} className="text-lg text-gray-400 my-5 max-w-[600px]">
          {/* I&apos;m a Full Stack Software Engineer with experience in Website, Mobile, and Software development. Check
          out my projects and skills. */}
          重塑 Web3 AI 代理基础设施，构建可组合的 AI 代理新时代。
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          {/* Learn more */}
          开始使用
        </motion.a>
      </div>

      <motion.div variants={slideInFromRight(0.8)} className="w-full h-full flex justify-center items-center">
        {/* <Image src="/hero-bg.svg" alt="work icons" height={650} width={650} draggable={false} className="select-none" /> */}
        <CodeBlock />
      </motion.div>
    </motion.div>
  );
};
