'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { tools } from '@/data/tools';
import ToolCard from '@/components/ui/ToolCard';
import SlideControl from '@/components/ui/SlideControl';
import FadeIn from '@/components/animation/FadeIn';

export default function CurrentRealityPage() {
    // 状态：控制是否揭晓答案
    const [isRevealed, setIsRevealed] = useState(false);

    // 获取 "Top" 类别的工具 (Aura, Connect, ChatPwC)
    const topTools = tools.filter(t => t.category === 'top');

    return (
        <main className="min-h-screen pt-24 pb-20 px-6 md:px-12 relative z-10 flex flex-col items-center">

            {/* Header Text */}
            <div className="max-w-4xl mx-auto mb-16 text-center">
                <FadeIn>
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-6">
                        The "Big Three"
                    </h2>
                </FadeIn>
                <FadeIn delay={0.2}>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Before we look at the data, ask yourself: <br/>
                        <span className="text-white font-medium">Which 3 tools does everyone actually rely on?</span>
                    </p>
                </FadeIn>
            </div>

            {/* Interaction Area */}
            <div className="w-full max-w-7xl mx-auto">
                {/* @ts-expect-error: Known issue with React 18 types and Framer Motion AnimatePresence children */}
                <AnimatePresence mode='wait'>
                    {!isRevealed ? (
                        // State A: Guessing Phase (Three Question Marks)
                        <motion.div
                            key="guess"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="flex flex-col items-center gap-12"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="h-64 border-2 border-dashed border-gray-800 rounded-xl flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors group cursor-default">
                                        <span className="text-6xl text-gray-700 font-bold group-hover:text-gray-600 transition-colors">?</span>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={() => setIsRevealed(true)}
                                className="mt-8 px-8 py-3 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all uppercase tracking-widest text-sm font-bold"
                            >
                                Reveal The Reality
                            </button>
                        </motion.div>
                    ) : (
                        // State B: Revealed Phase (Tool Cards)
                        <motion.div
                            key="reveal"
                            className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
                        >
                            {topTools.map((tool, index) => (
                                <motion.div
                                    key={tool.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.15, duration: 0.5 }}
                                >
                                    <ToolCard tool={tool} />
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Navigation Bar */}
            <SlideControl
                prev="/"
                next="/reality/gap"
                pageName="The Status Quo"
            />
        </main>
    );
}