"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

// Agent data interface (optional but good practice)
interface AgentData {
  id: number;
  title: string;
  date: string;
  image: string;
  description: string;
  twitterLink: string;
  telegramLink: string;
}

// Define agentsData with the interface
const agentsData: AgentData[] = [
  {
    id: 1,
    title: "Crypto Analyst",
    date: "2025-01-25",
    image:
      "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=shubham-dhage-R1Ku62Z7zqE-unsplash.jpg",
    description:
      "This agent focuses on in-depth analysis of cryptocurrency tokens in the Web3 space. By providing a token address or name, it can perform comprehensive data aggregation and analysis across multiple blockchains (including Solana, Ethereum, BNB, Base, TON, and SUI), generating valuable market insights. Additionally, the agent retrieves trending posts from the X platform, helping users understand market trends and investment opportunities.",
    twitterLink: "http://www.x.com/Athenix_io",
    telegramLink: "https://t.me/AthenixAI_io",
  },
  {
    id: 2,
    title: "Crypto Trader",
    date: "2025-01-24",
    image: "https://DeepCore.top/logos/profiles/023.png",
    description:
      "Crypto Trader simplifies Web3 token trading, offering services for token buying, selling, limit buy orders, limit sell orders, stop-limit orders, and limit order queries on the Solana blockchain.",
    twitterLink: "http://www.x.com/Athenix_io",
    telegramLink: "https://t.me/AthenixAI_io",
  },
  {
    id: 3,
    title: "Crypto Search",
    date: "2025-01-23",
    image:
      "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=shubham-dhage-t0Bv0OBQuTg-unsplash.jpg",
    description:
      "Crypto Search scans the latest data across the web—X, Google, YouTube, Web3 media, and communities—providing precise insights for Web3 professionals through AI analysis.",
    twitterLink: "http://www.x.com/Athenix_io",
    telegramLink: "https://t.me/CryptoSearchV1Bot",
  },
  {
    id: 4,
    title: "Community Manager",
    date: "2025-01-22",
    image: "/home/astor.png",
    description:
      "This agent assists in managing online communities, automatically responds to common questions, monitors discussions, and reports important activities to moderators, enhancing community engagement and management efficiency.",
    twitterLink: "http://www.x.com/Athenix_io",
    telegramLink: "https://t.me/AthenixAI_io",
  },
];

// Animation variants definition
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, x: 50, y: 50 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 12,
    },
  },
};

const titleVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// New component for individual showcase card with hover effect
const ShowcaseCard = ({ agent, variants }: { agent: AgentData; variants: Variants }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      variants={variants}
      whileHover={{
        scale: 1.03,
        y: -5,
        transition: { duration: 0.2 },
      }}
      className="h-full relative overflow-hidden rounded-xl"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ willChange: "transform" }}
    >
      {/* Hover effect layer */}
      <div
        className="pointer-events-none absolute inset-0 rounded-xl transition-opacity duration-300 z-0 text-white"
        style={{
          background: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(128, 90, 213, 0.55), transparent 80%)`,
          willChange: "background, opacity",
          opacity: isHovered ? 1 : 0,
        }}
      />

      <Card
        style={{ background: "transparent" }}
        className=" border-border/30 overflow-hidden flex flex-col h-full relative group cursor-pointer rounded-xl z-10"
      >
        <div className="relative h-52 overflow-hidden transition-all duration-300">
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="h-full"
          >
            <img
              src={agent.image}
              alt={agent.title}
              className="w-full h-full object-cover transition-all duration-700 group-hover:brightness-110"
            />
          </motion.div>

          <div className="absolute top-3 right-3backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white font-medium">
            {agent.date}
          </div>
        </div>

        <CardHeader className="transition-colors duration-300 group-hover:bg-secondary/80">
          <CardTitle className="text-xl text-white group-hover:text-white transition-colors duration-300">
            {agent.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="flex-grow transition-colors duration-300 group-hover:bg-secondary/80">
          <CardDescription className="text-gray-300 line-clamp-4 mb-4 group-hover:text-gray-200 transition-colors duration-300">
            {agent.description}
          </CardDescription>
        </CardContent>

        <CardFooter className="flex gap-4 pt-2 pb-4 transition-colors duration-300 group-hover:bg-secondary/80">
          <Link
            href={agent.twitterLink}
            target="_blank"
            className="flex items-center gap-2 hover:text-primary transition-transform duration-300 hover:scale-110"
          >
            <Image
              src="/home/twitter.svg"
              alt="X"
              width={18}
              height={18}
              className="opacity-80 hover:opacity-100 transition-opacity duration-200"
            />
          </Link>
          <Link
            href={agent.telegramLink}
            target="_blank"
            className="flex items-center gap-2 hover:text-primary transition-transform duration-300 hover:scale-110"
          >
            <Image
              src="/home/tg.svg"
              alt="Telegram"
              width={18}
              height={18}
              className="opacity-80 hover:opacity-100 transition-opacity duration-200"
            />
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

// Main Section Component
const ShowcaseSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={titleVariants}
        >
          <h2 className="text-3xl text-white md:text-4xl font-bold mb-6">Agent Examples</h2>
          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
            Experience the most valuable AI agents in Web3
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {agentsData.map((agent) => (
            <ShowcaseCard key={agent.id} agent={agent} variants={cardVariants} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
