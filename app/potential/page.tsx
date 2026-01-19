'use client';

import { useState } from 'react';
import { tools, ToolData } from '@/data/tools';
import ToolCard from '@/components/ui/ToolCard';
import SlideControl from '@/components/ui/SlideControl';
import FadeIn from '@/components/animation/FadeIn';
import DetailOverlay from '@/components/ui/DetailOverlay'; // 1. 引入浮层组件

export default function PotentialPage() {
    // 2. 添加状态来控制选中的工具
    const [selectedTool, setSelectedTool] = useState<ToolData | null>(null);

    // 获取 "Potential" 类别的工具
    const potentialTools = tools.filter(t => t.category === 'potential');

    return (
        <main className="min-h-screen pt-24 pb-20 px-6 md:px-12 relative z-10 flex flex-col items-center justify-center">

            {/* 标题区域 */}
            <div className="max-w-4xl mx-auto mb-16 text-center">
                <FadeIn>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Unlocking Potential
                    </h2>
                </FadeIn>
                <FadeIn delay={0.2}>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        These tools exist, but they are currently stuck in the <br/>
                        <span className="text-cyan-400 font-medium">Investment Phase</span> of the curve.
                    </p>
                </FadeIn>
            </div>

            {/* 工具展示区 */}
            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {potentialTools.map((tool, index) => (
                    <FadeIn key={tool.id} delay={index * 0.1}>
                        {/* 3. 添加 onClick 事件
                            保留了 grayscale (蒙尘) 效果，但现在点击会触发详情
                        */}
                        <div
                            onClick={() => setSelectedTool(tool)}
                            className="transform transition-all duration-500 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 hover:scale-[1.02] cursor-pointer"
                        >
                            <ToolCard tool={tool} />
                            {/* 添加一个隐约的点击提示 */}
                            <p className="text-center mt-4 text-xs text-cyan-400/0 group-hover:text-cyan-400/100 transition-colors uppercase tracking-widest opacity-0 hover:opacity-100">
                                Click to Inspect
                            </p>
                        </div>
                    </FadeIn>
                ))}
            </div>

            {/* 底部导航 */}
            <SlideControl
                prev="/reality/gap"
                next="/theory"
                pageName="The Sleeping Giants"
            />

            {/* 4. 渲染详情浮层 */}
            <DetailOverlay
                tool={selectedTool}
                onClose={() => setSelectedTool(null)}
            />
        </main>
    );
}