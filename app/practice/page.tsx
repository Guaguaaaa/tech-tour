'use client';

import SlideControl from '@/components/ui/SlideControl';
import FadeIn from '@/components/animation/FadeIn';

export default function PracticePage() {
    return (
        <main className="min-h-screen pt-24 pb-20 px-6 md:px-12 relative z-10 flex flex-col items-center justify-center">

            {/* 头部标题 */}
            <div className="max-w-4xl mx-auto w-full text-center mb-12">
                <FadeIn>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Accelerating the Climb
                    </h2>
                </FadeIn>
                <FadeIn delay={0.2}>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                        PwC recognises the challenge and is effectively investing in <span className="text-white font-medium">intangible capital</span>.
                    </p>
                </FadeIn>
            </div>

            {/* 左右对比布局 */}
            <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 items-center">

                {/* 左侧：Current State */}
                <FadeIn delay={0.4} className="h-full">
                    <div className="h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 relative overflow-hidden group hover:border-blue-500/30 transition-colors duration-500">
                        {/* 装饰性背景光 */}
                        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full group-hover:bg-blue-500/30 transition-all duration-500" />

                        <div className="relative z-10">
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Current Observations</h3>
                            <p className="text-blue-400 font-medium mb-6 uppercase tracking-wider text-sm">Awareness & Skills</p>

                            <ul className="space-y-4 text-gray-300">
                                <li className="flex items-start">
                                    <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                                    <span>
                                        Noticeable increase in AI tool <strong className="text-white">introduction sessions</strong> and internal briefings.
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                                    <span>
                                        Demonstrations of new capabilities to <strong className="text-white">raise awareness</strong>.
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                                    <span>
                                        Starting to <strong className="text-white">normalise</strong> AI as part of standard work.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </FadeIn>

                {/* 中间：箭头 (仅在桌面端显示横向，移动端显示纵向或隐藏) */}
                <FadeIn delay={0.6} className="flex justify-center py-4 md:py-0">
                    <div className="relative">
                        {/* 桌面端箭头 */}
                        <svg className="hidden md:block w-12 h-12 text-gray-500 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                        {/* 移动端箭头 (向下) */}
                        <svg className="block md:hidden w-8 h-8 text-gray-500 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </FadeIn>

                {/* 右侧：Future Goal */}
                <FadeIn delay={0.8} className="h-full">
                    <div className="h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 relative overflow-hidden group hover:border-amber-500/30 transition-colors duration-500">
                        {/* 装饰性背景光 */}
                        <div className="absolute top-0 left-0 -ml-16 -mt-16 w-32 h-32 bg-amber-500/20 blur-3xl rounded-full group-hover:bg-amber-500/30 transition-all duration-500" />

                        <div className="relative z-10">
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">The Challenge</h3>
                            <p className="text-amber-500 font-medium mb-6 uppercase tracking-wider text-sm">Embedded Default Options</p>

                            <ul className="space-y-4 text-gray-300">
                                <li className="flex items-start">
                                    <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0" />
                                    <span>
                                        Go beyond one-off intros: make tools <strong className="text-white">embedded defaults</strong> (like Aura/Connect).
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0" />
                                    <span>
                                        Provide targeted, <strong className="text-white">audit-specific examples</strong>.
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0" />
                                    <span>
                                        Build staff confidence that outputs are <strong className="text-white">reliable</strong>.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </FadeIn>

            </div>

            <SlideControl
                prev="/theory"
                next="/conclusion"
                pageName="Putting it into Practice"
            />
        </main>
    );
}