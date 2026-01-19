'use client';

import Link from 'next/link';
import FadeIn from '@/components/animation/FadeIn';
import Scene from '@/components/canvas/Scene'; // 引入 Scene

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center h-screen w-full relative z-10 px-4 overflow-hidden">
            {/* 3D Background - 只在首页出现 */}
            <div className="fixed inset-0 z-0 opacity-40 pointer-events-none">
                <Scene />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center">
                <FadeIn>
                    <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-6 text-center">
                        Tech Reality
                    </h1>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <p className="text-sm md:text-xl text-gray-400 tracking-[0.2em] uppercase mb-12 text-center">
                        Problem Statement 3: The GenAI Divide
                    </p>
                </FadeIn>

                <FadeIn delay={0.4}>
                    <Link href="/reality/current">
                        <button className="px-10 py-4 bg-white text-black font-bold tracking-widest hover:bg-cyan-400 hover:text-black transition-all duration-300 rounded-sm">
                            START TOUR
                        </button>
                    </Link>
                </FadeIn>
            </div>
        </main>
    );
}