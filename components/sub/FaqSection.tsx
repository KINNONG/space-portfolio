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
    question: "What is Athenix's grand vision and how is it being implemented?",
    answer:
      "To build the future of Web3 AI agents, Athenix is evolving from 'AI + Chain' to 'AI-as-Chain', establishing the first full-stack ecosystem for next-gen Web3 AI agents based on the MCP protocol. We are committed to redefining the foundational paradigm of Web3 AI agents and developing next-generation technologies to support innovation in the creation, distribution, and utilization of composable intelligent agents. This vision is realized through a solid technical foundation—fully integrating the MCP protocol to ensure AI agent interoperability—and a robust ecosystem strategy that nurtures a decentralized, open-source community to drive innovation and adoption.",
  },
  {
    id: "item-2",
    question: "Why is Athenix the leader in next-generation Web3 AI agent architecture?",
    answer:
      "Athenix leads through its innovative MCP protocol integration, enabling AI agents to achieve seamless interoperability and composability. Our full-stack ecosystem provides comprehensive tools for development, deployment, and management, fostering a collaborative open-source community.",
  },
  {
    id: "item-3",
    question: "Target Audience: How to accelerate ecosystem adoption?",
    answer:
      "We target developers creating AI agents, businesses integrating AI solutions, and end-users seeking powerful Web3 tools. Acceleration strategies include developer grants, strategic partnerships, community building, and resources showcasing Athenix's value.",
  },
  {
    id: "item-4",
    question: "Why was MCP chosen as the core development framework for Athenix?",
    answer:
      "MCP (Model Context Protocol) was chosen for its standardization capabilities, allowing diverse AI models and agents to communicate and collaborate effectively. It simplifies integration, enhances scalability, and ensures future-proofing in the rapidly evolving AI landscape.",
  },
  {
    id: "item-5",
    question: "Use Cases: How do developers and users benefit?",
    answer:
      "Developers can create and monetize sophisticated AI agents on the Athenix marketplace. Users benefit from access to a range of AI tools specialized for DeFi analysis, NFT trading, decentralized governance participation, and personalized Web3 experiences, improving efficiency and decision-making capabilities.",
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
          <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
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
