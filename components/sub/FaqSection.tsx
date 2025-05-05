"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    id: "item-1",
    question: "Athenix 的宏伟愿景及其实现方式是什么？",
    answer:
      "为了构建 Web3 AI 代理的未来，Athenix 正在从“AI + 链”进化到“AI-as-Chain”，基于 MCP 协议建立首个下一代 Web3 AI 代理的全栈生态系统。我们致力于重新定义 Web3 AI 代理的基础范式，并开发下一代技术，以支持可组合智能代理在创作、分发和利用方面的创新。这一愿景通过坚实的专业技术基础得以实现——完全整合 MCP 协议，确保 AI 代理的互操作性——以及一个强大的生态系统策略，培养去中心化、开源社区，以推动创新和采用。",
  },
  {
    id: "item-2",
    question: "为什么 Athenix 是下一代 Web3 AI 代理架构的领导者？",
    answer:
      "Athenix 因其创新性的 MCP 协议集成而领先，使 AI 代理能够实现无缝互操作性和可组合性。我们的全栈生态系统提供全面的工具，用于开发、部署和管理，培养一个协作的开源社区。",
  },
  {
    id: "item-3",
    question: "目标受众：如何加速生态系统采用？",
    answer:
      "我们针对开发 AI 代理的开发者、整合 AI 解决方案的企业和寻求强大 Web3 工具的终端用户。加速策略包括开发者资助、战略合作伙伴关系、社区建设以及展示 Athenix 价值的资源。",
  },
  {
    id: "item-4",
    question: "为什么选择 MCP 作为 Athenix 的核心开发框架？",
    answer:
      "MCP (Model Context Protocol) 因其标准化能力而受到选择，允许多样化的 AI 模型和代理有效沟通和协作。它简化了集成，增强了可扩展性，并确保在快速发展的 AI 领域中保持未来性。",
  },
  {
    id: "item-5",
    question: "用例：开发者和用户如何受益？",
    answer:
      "开发人员可以在 Athenix 市场上创建和货币化复杂的 AI 代理。用户受益于对一系列专门用于 DeFi 分析、NFT 交易、去中心化治理参与和个性化 Web3 体验的 AI 工具的访问，从而提高效率和决策能力。",
  },
];

const titleVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const accordionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 },
  },
};

const FaqSection = () => {
  return (
    <section className="py-20 bg-background text-white ">
      <div className="container mx-auto px-4 max-w-4xl">
        {" "}
        {/* Limit width for better readability */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={titleVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold">常见问题</h2>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={accordionVariants}
        >
          <Accordion type="single" collapsible className="w-full space-y-4 rounded-lg">
            {faqData.map((item) => (
              <motion.div key={item.id} variants={accordionVariants}>
                <AccordionItem
                  value={item.id}
                  className="bg-secondary/20  overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]"
                >
                  <AccordionTrigger className="text-left px-6 py-4 hover:bg-secondary/40 transition-colors text-lg font-medium">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2 text-gray-300">{item.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
