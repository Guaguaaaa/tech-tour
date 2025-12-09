'use client';

import { ToolData } from '../../data/tools';
import * as LucideIcons from 'lucide-react'; // 导入所有图标
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

interface ToolCardProps {
    tool: ToolData;
    onClick?: () => void;
}

export default function ToolCard({ tool, onClick }: ToolCardProps) {
    // 动态获取图标组件
    // @ts-ignore - 我们确信 iconName 是存在的
    const IconComponent = LucideIcons[tool.iconName] || LucideIcons.HelpCircle;

    return (
        <motion.div
            className={cn(
                "group relative p-6 h-[320px] w-full cursor-pointer overflow-hidden rounded-2xl",
                "bg-white/5 border border-white/10 hover:border-white/20",
                "transition-colors duration-300"
            )}
            onClick={onClick}
            whileHover={{ y: -5 }} // 鼠标悬停时轻微上浮
        >
            {/* 1. 背景光效：根据 tool.color 动态生成渐变背景 */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at center, ${tool.color}, transparent 70%)` }}
            />

            {/* 2. 内容布局 */}
            <div className="relative z-10 flex flex-col h-full">
                {/* 顶部：图标与名称 */}
                <div className="flex items-center justify-between mb-4">
                    <div
                        className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10"
                        style={{ color: tool.color }}
                    >
                        <IconComponent size={28} />
                    </div>
                    <span className="text-xs font-mono text-gray-400 border border-white/10 px-2 py-1 rounded-full">
            {tool.stat}
          </span>
                </div>

                {/* 中间：标题 */}
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-100 transition-colors">
                    {tool.name}
                </h3>

                {/* 描述 */}
                <p className="text-gray-400 text-sm leading-relaxed mb-auto">
                    {tool.shortDesc}
                </p>

                {/* 底部：装饰性箭头 */}
                <div className="mt-6 flex items-center text-sm font-medium opacity-50 group-hover:opacity-100 transition-opacity" style={{ color: tool.color }}>
                    <span>Explore Details</span>
                    <LucideIcons.ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
        </motion.div>
    );
}