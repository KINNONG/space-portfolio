import Watermark from "@/components/sub/Watermark";
import { ConstructionIcon } from "lucide-react";

export default function A2APage() {
  return (
    <div className="pt-24 pb-16 text-white flex items-center justify-center min-h-screen">
      <Watermark text="程序员小白龙" />
      <div className="text-center max-w-2xl mx-auto px-4">
        <ConstructionIcon className="h-24 w-24 text-yellow-400 mx-auto mb-8 animate-bounce" />
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          嘘... A2A 功能正在{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">秘密研发中</span>
          ！
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          我们的工程师正在夜以继日地搬砖...
          哦不，是编写代码！这个酷炫的功能就像搭乘星际飞船，需要一点时间才能抵达您的屏幕。
        </p>
        <p className="text-md text-gray-400">耐心等待，惊喜即将到来！🚀✨</p>
      </div>
    </div>
  );
}
