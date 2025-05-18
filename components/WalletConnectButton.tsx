"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useEffect, useState } from "react";

export function WalletConnectButton() {
  const { connected } = useWallet();
  const [mounted, setMounted] = useState(false);

  // 避免 SSR hydration 不匹配问题
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <style jsx global>{`
        .wallet-adapter-button {
          background-color: rgb(17, 24, 39) !important;
          border: 1px solid rgb(30, 64, 175) !important;
          color: white !important;
          font-family: inherit !important;
          font-weight: 500 !important;
          font-size: 14px !important;
          height: 38px !important;
          padding: 0px 16px !important;
          border-radius: 6px !important;
          transition-property: all !important;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
          transition-duration: 300ms !important;
        }

        .wallet-adapter-button:hover {
          background-color: rgb(31, 41, 55) !important;
          border-color: rgb(37, 99, 235) !important;
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.3) !important;
        }

        .wallet-adapter-button:not([disabled]):hover {
          background-color: rgb(31, 41, 55) !important;
        }

        .wallet-adapter-button-trigger {
          background-color: ${connected ? "rgb(67, 56, 202)" : "rgb(17, 24, 39)"} !important;
          border-color: ${connected ? "rgb(124, 58, 237)" : "rgb(30, 64, 175)"} !important;
          box-shadow: ${connected ? "0 0 15px rgba(124, 58, 237, 0.4)" : "none"} !important;
        }

        .wallet-adapter-dropdown-list {
          background-color: rgb(17, 24, 39) !important;
          border: 1px solid rgb(30, 64, 175) !important;
        }

        .wallet-adapter-dropdown-list-item {
          border-color: rgb(30, 64, 175) !important;
        }

        .wallet-adapter-dropdown-list-item:hover {
          background-color: rgb(31, 41, 55) !important;
        }

        /* 隐藏默认图标，显示自定义文本 */
        .wallet-adapter-button-start-icon {
          display: none !important;
        }
      `}</style>

      <WalletMultiButton>{mounted && (connected ? "Wallet Connected" : "Connect Wallet")}</WalletMultiButton>
    </>
  );
}
