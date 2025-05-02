"use client";
import React from "react";

interface WatermarkProps {
  text: string;
  fontSize?: number;
  color?: string;
  opacity?: number;
  rotate?: number;
  gap?: number; // 水印之间的间距
}

const Watermark: React.FC<WatermarkProps> = ({
  text,
  fontSize = 16,
  color = "rgba(255, 255, 255, 0.2)",
  opacity = 0.5, // 整体透明度，避免使用 color 的 alpha，方便调整
  rotate = -20,
  gap = 100,
}) => {
  const watermarkStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    overflow: "hidden",
    zIndex: 9999,
    display: "flex",
    flexWrap: "wrap",
    opacity: opacity, // 应用整体透明度
  };

  const itemStyle: React.CSSProperties = {
    position: "relative",
    width: `${gap * 2}px`, // 估算每个水印块的宽度
    height: `${gap * 1.5}px`, // 估算每个水印块的高度
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const textStyle: React.CSSProperties = {
    fontSize: `${fontSize}px`,
    color: color,
    transform: `rotate(${rotate}deg)`,
    whiteSpace: "nowrap",
    userSelect: "none",
  };

  // 简单的覆盖，可能不够精确，但能满足大部分场景
  // 可以考虑使用 Canvas 或 SVG 实现更精确的平铺和旋转
  const renderWatermarks = () => {
    // 估算需要的行列数，给足余量
    const cols = Math.ceil(window.innerWidth / (gap * 1.5)) + 5; // 增加余量
    const rows = Math.ceil(window.innerHeight / gap) + 5; // 增加余量
    const totalItems = cols * rows;
    const items = [];

    for (let i = 0; i < totalItems; i++) {
      items.push(
        <div key={i} style={itemStyle}>
          <div style={textStyle}>{text}</div>
        </div>
      );
    }
    return items;
  };

  // 使用 useEffect 监听窗口大小变化重新计算可能更优，但会增加复杂度
  // 目前仅在首次渲染时计算

  return <div style={watermarkStyle}>{renderWatermarks()}</div>;
};

export default Watermark;
