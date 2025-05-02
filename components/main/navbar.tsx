"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

import { LINKS, NAV_LINKS } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001427] backdrop-blur-md z-50 px-10">
      {/* Navbar Container */}
      <div className="w-full h-full flex items-center justify-between m-auto px-[10px]">
        {/* Logo + Name */}
        <Link href="#about-me" className="flex items-center">
          {/* <Image src="/logo.png" alt="Logo" width={70} height={70} draggable={false} className="cursor-pointer" /> */}
          <Link href="/" className="flex items-center">
            <div className="w-8 h-8 mr-2">
              <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15.7891 7.94824L7.94824 15.7891L7.94824 32.211L15.7891 40.0518L32.211 40.0518L40.0518 32.211L40.0518 15.7891L32.211 7.94824L15.7891 7.94824Z"
                  stroke="#D9DCBA"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.3789 15.3789H32.6212V32.6212H15.3789V15.3789Z"
                  stroke="#D9DCBA"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-xl font-bold text-white">DeepCore</span>
          </Link>
          {/* <div className="hidden md:flex md:selffont-bold ml-[10px] text-gray-300">Deep Core</div> */}
        </Link>

        {/* Web Navbar */}
        {/* <div className="hidden md:flex w-[500px] h-full flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-[rgb(112,66,248)] transition"
              >
                {link.title}
              </Link>
            ))}

      
            <Link
              href={LINKS.sourceCode}
              target="_blank"
              rel="noreferrer noopener"
              className="cursor-pointer hover:text-[rgb(112,66,248)] transition"
            >
              Source Code
            </Link>
          </div>
        </div> */}

        <nav className="hidden md:flex items-center space-x-10">
          <Link href="/workspace" className="text-sm text-gray-300 hover:text-white transition-colors">
            工作台
          </Link>
          <Link href="/store" className="text-sm text-gray-300 hover:text-white transition-colors">
            代理商店
          </Link>
          <Link href="/mcp-store" className="relative text-sm text-gray-300 hover:text-white transition-colors">
            MCP 商店
            <span className="absolute -top-1 -right-8 bg-primary text-xs rounded px-1 text-primary-foreground">
              new
            </span>
          </Link>
          <Link href="/a2a" className="text-sm text-gray-300 hover:text-white transition-colors">
            A2A
          </Link>
          <Link href="/tools" className="text-sm text-gray-300 hover:text-white transition-colors">
            工具
          </Link>
          <Link
            href="https://github.com/0xdevpro/deepcore"
            target="_blank"
            className="text-sm text-gray-300 hover:text-white transition-colors"
          >
            GitHub
          </Link>
          <Link
            href="https://docs.deepcore.top/"
            target="_blank"
            className="text-sm text-gray-300 hover:text-white transition-colors"
          >
            文档
          </Link>
        </nav>

        {/* Social Icons (Web) */}
        {/* <div className="hidden md:flex flex-row gap-5">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link href={link} target="_blank" rel="noreferrer noopener" key={name}>
              <Icon className="h-6 w-6 text-white" />
            </Link>
          ))}
        </div> */}

        <div>
          <Button className="button-primary text-white font-medium">登录</Button>
        </div>

        {/* Hamburger Menu */}
        <button
          className="md:hidden text-white focus:outline-none text-4xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[65px] left-0 w-full bg-[#030014] p-5 flex flex-col items-center text-gray-300 md:hidden">
          {/* Links */}
          <div className="flex flex-col items-center gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-[rgb(112,66,248)] transition text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            <Link
              href={LINKS.sourceCode}
              target="_blank"
              rel="noreferrer noopener"
              className="cursor-pointer hover:text-[rgb(112,66,248)] transition text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Source Code
            </Link>
          </div>

          {/* Social Icons */}
          {/* <div className="flex justify-center gap-6 mt-6">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link href={link} target="_blank" rel="noreferrer noopener" key={name}>
                <Icon className="h-8 w-8 text-white" />
              </Link>
            ))}
          </div> */}
        </div>
      )}
    </div>
  );
};
