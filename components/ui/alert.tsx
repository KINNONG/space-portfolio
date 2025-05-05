"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface AlertProps {
  message: string;
  type?: "success" | "error" | "warning" | "info";
  duration?: number;
  onClose?: () => void;
}

export function Alert({ message, type = "info", duration = 3000, onClose }: AlertProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onClose) onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  // 为不同类型的警告配置不同的样式
  const styles = {
    success: {
      border: "border-green-500",
      text: "text-green-400",
      shadow: "shadow-[0_0_15px_rgba(34,197,94,0.4)]",
    },
    error: {
      border: "border-red-500",
      text: "text-red-400",
      shadow: "shadow-[0_0_15px_rgba(239,68,68,0.4)]",
    },
    warning: {
      border: "border-purple-500",
      text: "text-purple-400",
      shadow: "shadow-[0_0_15px_rgba(168,85,247,0.4)]",
    },
    info: {
      border: "border-blue-500",
      text: "text-blue-400",
      shadow: "shadow-[0_0_15px_rgba(59,130,246,0.4)]",
    },
  }[type];

  if (!isVisible) return null;

  return createPortal(
    <div
      className={`fixed bottom-4 right-4 px-5 py-4 rounded-md ${styles.shadow} z-50 max-w-md
        bg-[#030014]/80 backdrop-blur-md border ${styles.border}
        animate-in fade-in slide-in-from-bottom-5 duration-300`}
    >
      <div className="flex items-center">
        <div className={`${styles.text} font-medium`}>{message}</div>
        {/* 添加小星星装饰效果 */}
        <div className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-white opacity-70 animate-pulse"></div>
        <div
          className="absolute -bottom-1 -left-1 h-1 w-1 rounded-full bg-white opacity-50 animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>
    </div>,
    document.body
  );
}
