"use client";

import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import React, { useMemo } from "react";

// 导入默认样式
require("@solana/wallet-adapter-react-ui/styles.css");

export function SolanaWalletProvider({ children }: { children: React.ReactNode }) {
  // 可以根据需要选择网络：'mainnet-beta'、'testnet'、'devnet'
  const network = WalletAdapterNetwork.Mainnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  // 配置要支持的钱包
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      // 可以添加其他类型的钱包...
    ],
    [network]
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
