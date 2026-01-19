'use client';

import SlideControl from '@/components/ui/SlideControl';
import FadeIn from '@/components/animation/FadeIn';

export default function GapPage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center relative z-10 px-6">

            {/* 核心冲突展示 */}
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">

                {/* 左侧：Shadow AI (现状) - 高亮强调 */}
                <div className="text-center md:text-right">
                    <FadeIn>
                        <h2 className="text-8xl md:text-9xl font-bold text-white tracking-tighter mb-2">
                            90%
                        </h2>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="text-xl md:text-2xl text-cyan-400 font-medium mb-4">
                            Shadow AI Usage
                        </p>
                        <p className="text-gray-400 text-sm md:text-base max-w-xs ml-auto leading-relaxed">
                            Employees quietly using personal AI tools to get ahead, outside the official ecosystem.
                        </p>
                    </FadeIn>
                </div>

                {/* 分割线 (移动端横向，桌面端纵向) */}
                <div className="hidden md:block w-px h-64 bg-gradient-to-b from-transparent via-gray-800 to-transparent mx-auto" />
                <div className="block md:hidden h-px w-64 bg-gradient-to-r from-transparent via-gray-800 to-transparent mx-auto my-8" />

                {/* 右侧：Official Adoption (问题) - 变暗处理 */}
                <div className="text-center md:text-left opacity-50">
                    <FadeIn delay={0.4}>
                        <h2 className="text-6xl md:text-7xl font-bold text-gray-600 tracking-tighter mb-2">
                            Low
                        </h2>
                    </FadeIn>
                    <FadeIn delay={0.6}>
                        <p className="text-xl md:text-2xl text-gray-500 font-medium mb-4">
                            Official Advanced Tooling
                        </p>
                        <p className="text-gray-600 text-sm md:text-base max-w-xs mr-auto leading-relaxed">
                            Powerful tools like Digital Lab & Excel AI are deployed but collecting dust.
                        </p>
                    </FadeIn>
                </div>
            </div>

            {/* 底部导航 */}
            <SlideControl
                prev="/reality/current"
                next="/potential"
                pageName="The Reality Gap"
            />
        </main>
    );
}