'use client';

import { tools } from '../../data/tools';
import ToolCard from '../ui/ToolCard';
import { motion } from 'framer-motion'; // <--- 导入 motion

export default function EfficiencyTools() {
    const efficiencyTools = tools.filter((t) => t.category === 'efficiency');

    return (
        <section className="relative w-full py-32 px-6 md:px-12 bg-gradient-to-b from-black to-slate-900 z-10 border-t border-white/5">

            {/* 1. 标题区 */}
            <div className="max-w-7xl mx-auto mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-px w-12 bg-cyan-500 shadow-[0_0_10px_#06b6d4]" />
                        <span className="text-cyan-500 font-mono tracking-widest uppercase text-sm">
                            Optimisation Required
            </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Unlock Hidden Potential
                    </h2>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl text-gray-400 max-w-2xl"
                >
                    These tools are powerful but currently underutilised.
                    With better training and integration, they could significantly streamline our workflows.
                </motion.p>
            </div>

            {/* 2. 卡片列表区 */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {efficiencyTools.map((tool) => (
                    <ToolCard key={tool.id} tool={tool} />
                ))}
            </div>

        </section>
    );
}