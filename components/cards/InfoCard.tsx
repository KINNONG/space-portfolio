import { Card, CardContent } from "@/components/ui/card";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface InfoCardProps {
  title: string;
  description: string;
  icon?: React.ElementType; // 接受 Lucide 图标或其他组件类型
  iconBgColor?: string;
  link?: string;
  author?: string; // 可选的作者信息
}

export const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  icon: IconComponent,
  iconBgColor = "bg-[rgba(42,14,97,0.5)]", // 默认图标背景色
  link,
  author,
}) => {
  const cardContent = (
    <Card className="bg-[rgba(15,12,41,0.7)] shadow-lg border border-[#2A0E61] hover:border-[#4A1E9E] hover:shadow-[#2A0E61]/40 transition-all h-full flex flex-col group">
      <CardContent className="p-6 flex items-center justify-between flex-grow">
        <div className="flex items-start space-x-4">
          {IconComponent && (
            <div className={`p-3 ${iconBgColor} rounded-lg border border-[#2A0E61]/50 flex-shrink-0`}>
              <IconComponent className="h-8 w-8 text-cyan-400" />
            </div>
          )}
          <div className="flex-grow">
            <h3 className="text-lg font-semibold mb-1 text-white">{title}</h3>
            {author && <p className="text-sm text-muted-foreground mb-2">由 {author} 提供</p>}
            <p className="text-sm text-gray-300">{description}</p>
          </div>
        </div>
        {link && (
          <ChevronRightIcon className="h-6 w-6 text-gray-400 group-hover:text-white transition-colors flex-shrink-0 ml-2" />
        )}
      </CardContent>
    </Card>
  );

  if (link) {
    return (
      <Link href={link} className="block h-full no-underline">
        {cardContent}
      </Link>
    );
  }

  return cardContent; // 如果没有链接，直接返回卡片内容
};
