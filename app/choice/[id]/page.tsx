'use client';

import { useParams, useRouter } from 'next/navigation'; // 使用 next/navigation
import { motion } from 'framer-motion';
import { tools } from '../../../data/tools';
import { ArrowRight } from 'lucide-react';

export default function ChoicePage() {
    const params = useParams();
    const router = useRouter();

    // 查找对应的工具（如果找不到，默认取第一个防止报错）
    const tool = tools.find((t) => t.id === params.id) || tools[0];

    return (
        <main className="min-h-screen bg-black flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
            {/* 背景氛围灯 */}
            <div
                className="absolute inset-0 opacity-20 blur-[100px] pointer-events-none"
                style={{ background: `radial-gradient(circle at center, ${tool.color}, transparent 70%)` }}
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-4xl"
            >
                <h2 className="text-2xl text-gray-400 mb-2 uppercase tracking-widest">You selected</h2>
                <h1 className="text-6xl md:text-8xl font-bold text-white mb-12" style={{ color: tool.color }}>
                    {tool.name}
                </h1>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="mb-12"
                >
          <span className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">
            87%
          </span>
                    <p className="text-2xl text-white mt-4 font-light">
                        of your colleagues made the same choice.
                    </p>
                    <p className="text-xl text-gray-400 mt-2 italic">
                        "You are not alone."
                    </p>
                </motion.div>

                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    onClick={() => router.push('/interview')}
                    className="group flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full text-lg font-bold hover:bg-gray-200 transition-all mx-auto"
                >
                    See what others thought
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
            </motion.div>
        </main>
    );
}