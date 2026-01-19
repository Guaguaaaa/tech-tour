'use client';

import Link from 'next/link';
import SlideControl from '@/components/ui/SlideControl';
import FadeIn from '@/components/animation/FadeIn';

export default function ConclusionPage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center relative z-10 px-6 text-center">

            <FadeIn>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                    The Solution?
                </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
                <div className="text-xl md:text-3xl text-gray-300 max-w-3xl leading-relaxed mb-12">
                    We don't need <span className="text-gray-600 line-through decoration-red-500">more software</span>. <br/>
                    We need to invest in <span className="text-cyan-400 font-bold">Trust & Habits</span>.
                </div>
            </FadeIn>

            <FadeIn delay={0.4}>
                <Link href="/">
                    <button className="px-12 py-5 bg-white text-black text-lg font-bold tracking-widest hover:bg-cyan-400 hover:scale-105 transition-all duration-300 rounded-sm">
                        RESTART TOUR
                    </button>
                </Link>
            </FadeIn>

            <SlideControl
                prev="/theory"
                pageName="The Way Forward"
            />
        </main>
    );
}