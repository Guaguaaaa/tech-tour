'use client';

import SlideControl from '@/components/ui/SlideControl';
import FadeIn from '@/components/animation/FadeIn';
import JCurveChart from '@/components/home/JCurveChart';

export default function TheoryPage() {
    return (
        <main className="min-h-screen pt-24 pb-20 px-6 md:px-12 relative z-10 flex flex-col items-center justify-center">

            {/* 头部标题区域 */}
            <div className="max-w-4xl mx-auto w-full text-center mb-12">
                <FadeIn>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        The Productivity J-Curve
                    </h2>
                </FadeIn>
                <FadeIn delay={0.2}>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                        Why are powerful tools underused? Because we are stuck in the <span className="text-red-500">Trust Gap</span>.
                    </p>
                </FadeIn>
            </div>

            {/* J-Curve 图表 */}
            <FadeIn delay={0.4} className="w-full">
                <JCurveChart />
            </FadeIn>

            {/* 新增板块: The Trust Gap */}
            <div className="max-w-3xl mx-auto w-full mt-16 mb-8">
                <FadeIn delay={0.6}>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
                        The Trust Gap
                    </h3>
                    <ul className="space-y-6 text-lg text-gray-400 list-disc list-inside md:px-8">
                        <li>
                            <span className="text-gray-200 font-medium">Accuracy is Everything:</span> In Assurance, there is no room for error. Accuracy is the highest priority.
                        </li>
                        <li>
                            <span className="text-gray-200 font-medium">Preference for Humans:</span> Research shows that for complex tasks, around 90% of users still prefer humans over AI because they fear hallucinations and errors.
                        </li>
                        <li>
                            <span className="text-gray-200 font-medium">The Efficiency Paradox:</span> We often spend so much time double-checking what the AI produces that we lose many of the efficiency gains it was supposed to deliver.
                        </li>
                    </ul>
                </FadeIn>
            </div>

            <SlideControl
                prev="/potential"
                next="/conclusion"
                pageName="The Economic Reality"
            />
        </main>
    );
}