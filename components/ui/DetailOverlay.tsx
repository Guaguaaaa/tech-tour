'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { ToolData } from '../../data/tools';

interface DetailOverlayProps {
    tool: ToolData | null;
    onClose: () => void;
}

export default function DetailOverlay({ tool, onClose }: DetailOverlayProps) {

    // 锁定背景滚动
    useEffect(() => {
        if (tool) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => { document.body.style.overflow = 'auto'; };
    }, [tool]);

    // 获取图标
    // @ts-ignore
    const IconComponent = tool ? (LucideIcons[tool.iconName] || LucideIcons.HelpCircle) : null;

    return (
        <AnimatePresence>
            {tool && (
                <>
                    {/* 背景遮罩 */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm"
                    />

                    {/* 卡片容器 */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 pointer-events-none">
                        <motion.div
                            layoutId={`card-${tool.id}`}
                            className="w-full max-w-4xl bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl pointer-events-auto flex flex-col max-h-[85vh]"
                            transition={{ type: "spring", stiffness: 200, damping: 25 }}
                        >
                            {/* 顶部 Header */}
                            <div className="relative p-8 md:p-10 border-b border-white/10 shrink-0">
                                <motion.div
                                    layoutId={`bg-${tool.id}`}
                                    className="absolute inset-0 opacity-20"
                                    style={{ background: `radial-gradient(circle at top right, ${tool.color}, transparent 60%)` }}
                                />

                                <button
                                    onClick={onClose}
                                    className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20 cursor-pointer"
                                >
                                    <X size={24} />
                                </button>

                                <div className="relative z-10 flex items-center gap-6">
                                    <motion.div
                                        layoutId={`icon-box-${tool.id}`}
                                        className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20"
                                        style={{ color: tool.color }}
                                    >
                                        {IconComponent && <IconComponent size={40} />}
                                    </motion.div>

                                    <div>
                                        <motion.h2
                                            layoutId={`title-${tool.id}`}
                                            className="text-3xl md:text-5xl font-bold text-white mb-1"
                                        >
                                            {tool.name}
                                        </motion.h2>
                                        <motion.p
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="text-lg text-gray-400 font-medium tracking-wide"
                                        >
                                            {tool.shortDesc}
                                        </motion.p>
                                    </div>
                                </div>
                            </div>

                            {/* 内容区域 - 滚动区 */}
                            <div className="flex-1 overflow-y-auto p-8 md:p-10 space-y-8">

                                {/* Intro 段落 */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    <p className="text-xl md:text-2xl text-white leading-relaxed font-light">
                                        {tool.details.intro}
                                    </p>
                                </motion.div>

                                {/* 详情 Sections */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 pb-4">
                                    {tool.details.sections.map((section, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 + (idx * 0.1) }}
                                            className="space-y-3"
                                        >
                                            <h3
                                                className="text-sm font-bold uppercase tracking-widest border-l-2 pl-3"
                                                style={{ borderColor: tool.color, color: tool.color }}
                                            >
                                                {section.title}
                                            </h3>
                                            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                                                {section.content}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}