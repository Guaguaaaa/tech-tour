'use client';

import TopTools from '../../components/home/TopTools'; // 引入组件
import DetailOverlay from '../../components/ui/DetailOverlay';
import { LayoutGroup } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';

export default function TopToolsPage() {
    const router = useRouter();

    return (
        <LayoutGroup>
            <main className="min-h-screen bg-black">
                {/* 复用 TopTools 组件 */}
                <div className="pt-10">
                    <TopTools />
                </div>

                {/* 底部导航按钮 */}
                <div className="flex justify-center pb-20">
                    <button
                        onClick={() => router.push('/optimise')}
                        className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full text-lg font-bold hover:shadow-[0_0_20px_rgba(8,145,178,0.5)] transition-all"
                    >
                        But we can do better...
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* 详情页交互组件 */}
                <DetailOverlay />
            </main>
        </LayoutGroup>
    );
}