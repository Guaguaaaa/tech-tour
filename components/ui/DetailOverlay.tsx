'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { useStore } from '../../hooks/useStore';
import { tools } from '../../data/tools';

export default function DetailOverlay() {
    const { activeToolId, setActiveToolId } = useStore();

    // 根据 ID 查找对应的工具数据
    const activeTool = tools.find((t) => t.id === activeToolId);

    // 当详情页打开时，禁止背景滚动；关闭时恢复
    useEffect(() => {
        if (activeToolId) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => { document.body.style.overflow = 'auto'; };
    }, [activeToolId]);

    // 获取图标组件
    // @ts-ignore
    const IconComponent = activeTool ? (LucideIcons[activeTool.iconName] || LucideIcons.HelpCircle) : null;

    return (
        <AnimatePresence>
            {activeToolId && activeTool && (
                <>
                    {/* 1. 背景遮罩 (Backdrop) */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setActiveToolId(null)}
                        className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm"
                    />

                    {/* 2. 详情卡片本体 */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 pointer-events-none">
                        <motion.div
                            layoutId={`card-${activeTool.id}`} // 与 ToolCard 的 layoutId 对应
                            className="w-full max-w-5xl bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl pointer-events-auto flex flex-col max-h-[90vh]"
                            // 【关键修复】明确指定动画曲线，消除生硬感
                            transition={{ type: "spring", stiffness: 200, damping: 25 }}
                        >
                            {/* 顶部区域 */}
                            <div className="relative p-8 md:p-12 border-b border-white/10">
                                <motion.div
                                    layoutId={`bg-${activeTool.id}`}
                                    className="absolute inset-0 opacity-20"
                                    style={{ background: `radial-gradient(circle at top right, ${activeTool.color}, transparent 60%)` }}
                                />

                                <button
                                    onClick={() => setActiveToolId(null)}
                                    className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20"
                                >
                                    <X size={24} />
                                </button>

                                <div className="relative z-10 flex items-start gap-6">
                                    <motion.div
                                        layoutId={`icon-box-${activeTool.id}`}
                                        className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20"
                                        style={{ color: activeTool.color }}
                                    >
                                        {IconComponent && <IconComponent size={48} />}
                                    </motion.div>

                                    <div>
                                        <motion.h2
                                            layoutId={`title-${activeTool.id}`}
                                            className="text-4xl md:text-5xl font-bold text-white mb-2"
                                        >
                                            {activeTool.name}
                                        </motion.h2>
                                        <motion.p
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 }}
                                            className="text-xl text-gray-400"
                                        >
                                            {/* 【关键修复】修正字段路径，解决 TS 报错 */}
                                            {activeTool.details.fullDesc}
                                        </motion.p>
                                    </div>
                                </div>
                            </div>

                            {/* 内容区域 */}
                            <div className="flex-1 overflow-y-auto p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12">

                                {/* 左侧：Improvement */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="space-y-4"
                                >
                                    <div className="flex items-center gap-2 text-red-400 mb-2">
                                        <LucideIcons.AlertCircle size={20} />
                                        <h3 className="text-lg font-bold uppercase tracking-wider">Pain Points</h3>
                                    </div>
                                    <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/20 text-gray-300 leading-relaxed">
                                        {activeTool.details.improvement}
                                    </div>
                                </motion.div>

                                {/* 右侧：Feedback */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="space-y-4"
                                >
                                    <div className="flex items-center gap-2 text-green-400 mb-2">
                                        <LucideIcons.ThumbsUp size={20} />
                                        <h3 className="text-lg font-bold uppercase tracking-wider">User Feedback</h3>
                                    </div>
                                    <div className="p-6 rounded-2xl bg-green-500/5 border border-green-500/20 text-gray-300 leading-relaxed">
                                        {activeTool.details.userFeedback}
                                    </div>
                                </motion.div>

                            </div>

                            <div className="p-6 border-t border-white/10 bg-black/20 text-center text-gray-500 text-sm">
                                Press ESC or click outside to close
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}