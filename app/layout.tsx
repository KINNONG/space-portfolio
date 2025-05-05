import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";

import { AlertProvider } from "@/components/AlertProvider";
import { Navbar } from "@/components/main/navbar";
import { StarsCanvas } from "@/components/main/star-background";
import { SolanaWalletProvider } from "@/components/WalletProvider";
import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";

import GlobalFooter from "@/components/main/GlobalFooter";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#030014",
};

export const metadata: Metadata = siteConfig;

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={cn("bg-[#030014] overflow-y-scroll overflow-x-hidden", inter.className)}>
        <SolanaWalletProvider>
          <AlertProvider>
            <StarsCanvas />
            <Navbar />
            {children}
            <GlobalFooter />
          </AlertProvider>
        </SolanaWalletProvider>
      </body>
    </html>
  );
}
