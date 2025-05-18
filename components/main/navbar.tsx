"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

import { useAlert } from "@/components/AlertProvider";
import { WalletConnectButton } from "@/components/WalletConnectButton";
import { useWallet } from "@solana/wallet-adapter-react";

// 定义受保护路由
const PROTECTED_ROUTES = ["/workspace", "/store", "/mcp-store", "/a2a", "/tools"];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { connected } = useWallet();
  const { showAlert } = useAlert();

  // 处理导航点击
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    // 如果是受保护路由且钱包未连接
    if (PROTECTED_ROUTES.includes(path) && !connected) {
      e.preventDefault(); // 阻止默认行为
      showAlert("Please connect your wallet first to access this page", "info", 3000);
    }
  };

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001427] backdrop-blur-md z-50 px-10">
      {/* Navbar Container */}
      <div className="w-full h-full flex items-center justify-between m-auto px-[10px]">
        {/* Logo + Name */}
        <div className="flex items-center">
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
            <span className="text-xl font-bold text-white">Athenix</span>
          </Link>
          {/* <div className="hidden md:flex md:selffont-bold ml-[10px] text-gray-300">Deep Core</div> */}
        </div>

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

        <nav className="hidden md:flex items-center space-x-14">
          <Link
            href="/workspace"
            className={`text-sm hover:text-white transition-colors relative ${
              pathname === "/workspace"
                ? "text-white font-medium after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[2px] after:bg-blue-500"
                : "text-gray-300"
            }`}
            onClick={(e) => handleNavClick(e, "/workspace")}
          >
            Workspace
          </Link>
          <Link
            href="/store"
            className={`text-sm hover:text-white transition-colors relative ${
              pathname === "/store"
                ? "text-white font-medium after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[2px] after:bg-blue-500"
                : "text-gray-300"
            }`}
            onClick={(e) => handleNavClick(e, "/store")}
          >
            Agent Store
          </Link>
          <Link
            href="/mcp-store"
            className={`text-sm hover:text-white transition-colors relative ${
              pathname === "/mcp-store"
                ? "text-white font-medium after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[2px] after:bg-blue-500"
                : "text-gray-300"
            }`}
            onClick={(e) => handleNavClick(e, "/mcp-store")}
          >
            MCP Store
            <span className="absolute -top-0 -right-10  text-xs font-semibold rounded-2xl px-1.5 py-0.5 text-blue-500 bg-[#030014]">
              new
            </span>
          </Link>
          <Link
            href="/a2a"
            className={`text-sm hover:text-white transition-colors relative ${
              pathname === "/a2a"
                ? "text-white font-medium after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[2px] after:bg-blue-500"
                : "text-gray-300"
            }`}
            onClick={(e) => handleNavClick(e, "/a2a")}
          >
            A2A
          </Link>
          <Link
            href="/tools"
            className={`text-sm hover:text-white transition-colors relative ${
              pathname === "/tools"
                ? "text-white font-medium after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[2px] after:bg-blue-500"
                : "text-gray-300"
            }`}
            onClick={(e) => handleNavClick(e, "/tools")}
          >
            Tools
          </Link>
          <Link
            href="https://github.com/0xdevpro/Athenix"
            target="_blank"
            className="text-sm text-gray-300 hover:text-white transition-colors"
          >
            GitHub
          </Link>
          <Link
            href="https://docs.Athenix.top/"
            target="_blank"
            className="text-sm text-gray-300 hover:text-white transition-colors"
          >
            Docs
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

        <div className="hidden md:flex">
          <WalletConnectButton />
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
            <Link
              href="/workspace"
              className={`cursor-pointer hover:text-[rgb(112,66,248)] transition text-center ${
                pathname === "/workspace" ? "text-white font-medium" : ""
              }`}
              onClick={(e) => {
                handleNavClick(e, "/workspace");
                setIsMobileMenuOpen(false);
              }}
            >
              Workspace
            </Link>
            <Link
              href="/store"
              className={`cursor-pointer hover:text-[rgb(112,66,248)] transition text-center ${
                pathname === "/store" ? "text-white font-medium" : ""
              }`}
              onClick={(e) => {
                handleNavClick(e, "/store");
                setIsMobileMenuOpen(false);
              }}
            >
              Agent Store
            </Link>
            <Link
              href="/mcp-store"
              className={`cursor-pointer hover:text-[rgb(112,66,248)] transition text-center ${
                pathname === "/mcp-store" ? "text-white font-medium" : ""
              }`}
              onClick={(e) => {
                handleNavClick(e, "/mcp-store");
                setIsMobileMenuOpen(false);
              }}
            >
              MCP Store
              <span className="ml-1 text-xs font-semibold rounded-2xl px-1.5 py-0.5 text-blue-500 bg-[#030014]">
                new
              </span>
            </Link>
            <Link
              href="/a2a"
              className={`cursor-pointer hover:text-[rgb(112,66,248)] transition text-center ${
                pathname === "/a2a" ? "text-white font-medium" : ""
              }`}
              onClick={(e) => {
                handleNavClick(e, "/a2a");
                setIsMobileMenuOpen(false);
              }}
            >
              A2A
            </Link>
            <Link
              href="/tools"
              className={`cursor-pointer hover:text-[rgb(112,66,248)] transition text-center ${
                pathname === "/tools" ? "text-white font-medium" : ""
              }`}
              onClick={(e) => {
                handleNavClick(e, "/tools");
                setIsMobileMenuOpen(false);
              }}
            >
              Tools
            </Link>
            <Link
              href="https://github.com/0xdevpro/Athenix"
              target="_blank"
              className="cursor-pointer hover:text-[rgb(112,66,248)] transition text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              GitHub
            </Link>
            <Link
              href="https://docs.Athenix.top/"
              target="_blank"
              className="cursor-pointer hover:text-[rgb(112,66,248)] transition text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Docs
            </Link>
          </div>

          {/* 移动端也添加钱包连接按钮 */}
          <div className="mt-6">
            <WalletConnectButton />
          </div>
        </div>
      )}
    </div>
  );
};
