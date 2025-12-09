'use client';

import { tools } from '../../data/tools';
import ToolCard from '../ui/ToolCard';
import FadeIn from '../animation/FadeIn';

export default function TopTools() {
    // 筛选出 Top 3
    const topTools = tools.filter((t) => t.category === 'top');

    return (
        <section className="relative w-full py-32 px-6 md:px-12 bg-black z-10">
            {/* 1. 标题区 (保留 FadeIn，这里不影响) */}
            <div className="max-w-7xl mx-auto mb-16">
                <FadeIn>
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-600 mb-6">
                        Top Performers
                    </h2>
                </FadeIn>
                <FadeIn delay={0.2}>
                    <p className="text-xl text-gray-400 max-w-2xl">
                        The most utilized technologies driving our daily operations.
                        These tools have become the industry standard for efficiency.
                    </p>
                </FadeIn>
            </div>

            {/* 2. 卡片列表区 (修改重点：移除 FadeIn 包裹) */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {topTools.map((tool) => (
                    // 之前是 <FadeIn key={tool.id} ...>
                    // 现在直接渲染 ToolCard，确保 key 加在这里
                    <ToolCard key={tool.id} tool={tool} />
                ))}
            </div>
        </section>
    );
}