'use client';

import SlideControl from '@/components/ui/SlideControl';
import FadeIn from '@/components/animation/FadeIn';
import JCurveChart from '@/components/home/JCurveChart';

export default function TheoryPage() {
    return (
        <main className="min-h-screen pt-24 pb-20 px-6 md:px-12 relative z-10 flex flex-col items-center justify-center">

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

            <FadeIn delay={0.4} className="w-full">
                <JCurveChart />
            </FadeIn>

            <SlideControl
                prev="/potential"
                next="/conclusion"
                pageName="The Economic Reality"
            />
        </main>
    );
}