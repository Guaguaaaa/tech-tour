'use client';

import EfficiencyTools from '../../components/home/EfficiencyTools';
import DetailOverlay from '../../components/ui/DetailOverlay';
import { LayoutGroup } from 'framer-motion';

export default function OptimisePage() {
    return (
        <LayoutGroup>
            <main className="min-h-screen bg-black">
                {/* 复用 Efficiency 组件 */}
                <div className="pt-10">
                    <EfficiencyTools />
                </div>

                {/* 详情页交互组件 */}
                <DetailOverlay />
            </main>
        </LayoutGroup>
    );
}