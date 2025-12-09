'use client';

import { ToolData } from '../../data/tools';
import * as LucideIcons from 'lucide-react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';
import { useStore } from '../../hooks/useStore'; // <--- 导入 store

interface ToolCardProps {
    tool: ToolData;
}

export default function ToolCard({ tool }: ToolCardProps) {
    const setActiveToolId = useStore((state) => state.setActiveToolId);
    // @ts-ignore
    const IconComponent = LucideIcons[tool.iconName] || LucideIcons.HelpCircle;

    return (
        <motion.div
            layoutId={`card-${tool.id}`} // <--- 魔法核心：给这个卡片唯一的动画 ID
            className={cn(
                "group relative p-6 h-[320px] w-full cursor-pointer overflow-hidden rounded-2xl",
                "bg-white/5 border border-white/10 hover:border-white/20",
                "transition-colors duration-300"
            )}
            onClick={() => setActiveToolId(tool.id)} // <--- 点击时设置 ID
            whileHover={{ y: -5 }}
        >
            {/* 这里的 layoutId 保证背景光效也能平滑过渡到详情页 */}
            <motion.div
                layoutId={`bg-${tool.id}`}
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at center, ${tool.color}, transparent 70%)` }}
            />

            <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                    <motion.div
                        layoutId={`icon-box-${tool.id}`} // <--- 图标盒子也能飞过去
                        className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10"
                        style={{ color: tool.color }}
                    >
                        <IconComponent size={28} />
                    </motion.div>
                    <span className="text-xs font-mono text-gray-400 border border-white/10 px-2 py-1 rounded-full">
            {tool.stat}
          </span>
                </div>

                <motion.h3
                    layoutId={`title-${tool.id}`} // <--- 标题飞过去
                    className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-100 transition-colors"
                >
                    {tool.name}
                </motion.h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-auto">
                    {tool.shortDesc}
                </p>

                <div className="mt-6 flex items-center text-sm font-medium opacity-50 group-hover:opacity-100 transition-opacity" style={{ color: tool.color }}>
                    <span>Explore Details</span>
                    <LucideIcons.ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
        </motion.div>
    );
}