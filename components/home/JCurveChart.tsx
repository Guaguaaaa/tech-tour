'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

// 贝塞尔曲线计算辅助函数
// B(t) = (1-t)^3 * P0 + 3*(1-t)^2 * t * P1 + 3*(1-t) * t^2 * P2 + t^3 * P3
const getBezierCoord = (t: number, p0: number, p1: number, p2: number, p3: number) => {
    const oneMinusT = 1 - t;
    return Math.pow(oneMinusT, 3) * p0 +
        3 * Math.pow(oneMinusT, 2) * t * p1 +
        3 * oneMinusT * Math.pow(t, 2) * p2 +
        Math.pow(t, 3) * p3;
};

export default function JCurveChart() {
    const [sliderValue, setSliderValue] = useState(10); // 0 to 100

    // 路径定义：M0,50 C40,50 40,90 60,80 C80,70 90,40 100,10
    // 这条路径由两段贝塞尔曲线组成，分割点在 x=60

    // 计算当前小球的精确 (x, y) 坐标
    const getBallPosition = (val: number) => {
        // 第一段曲线：从 x=0 到 x=60
        // 控制点：P0(0,50), P1(40,50), P2(40,90), P3(60,80)
        if (val <= 60) {
            const t = val / 60; // 归一化 t (0 -> 1)
            return {
                cx: getBezierCoord(t, 0, 40, 40, 60),
                cy: getBezierCoord(t, 50, 50, 90, 80)
            };
        }
            // 第二段曲线：从 x=60 到 x=100
        // 控制点：P0(60,80), P1(80,70), P2(90,40), P3(100,10)
        else {
            const t = (val - 60) / 40; // 归一化 t (0 -> 1)
            return {
                cx: getBezierCoord(t, 60, 80, 90, 100),
                cy: getBezierCoord(t, 80, 70, 40, 10)
            };
        }
    };

    const pos = getBallPosition(sliderValue);

    // 获取阶段信息
    const getStageInfo = (p: number) => {
        if (p < 30) return { title: "Implementation", desc: "Deploying tools, initial excitement.", color: "text-gray-400" };
        if (p < 60) return { title: "The Dip (Investment Phase)", desc: "Productivity drops. Learning new skills. Trust gap.", color: "text-red-500" };
        return { title: "The Payoff", desc: "Intangible capital built. Productivity soars.", color: "text-green-400" };
    };

    const stage = getStageInfo(sliderValue);

    return (
        <div className="w-full max-w-4xl mx-auto bg-white/5 rounded-2xl p-8 md:p-12 backdrop-blur-sm border border-white/10">
            {/* 图表区域 */}
            <div className="relative h-64 w-full mb-8">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                    {/* 虚线基准线 */}
                    <line x1="0" y1="50" x2="100" y2="50" stroke="#333" strokeDasharray="2" strokeWidth="0.5" />

                    {/* 曲线主体 */}
                    <path
                        d="M0,50 C40,50 40,90 60,80 C80,70 90,40 100,10"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="3"
                        strokeLinecap="round"
                    />

                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#fff" stopOpacity="0.2" />
                            <stop offset="50%" stopColor="#ef4444" />
                            <stop offset="100%" stopColor="#22d3ee" />
                        </linearGradient>
                    </defs>

                    {/* 动态小球：现在使用精确计算的 cx, cy */}
                    <motion.circle
                        cx={pos.cx}
                        cy={pos.cy}
                        r="3"
                        className="fill-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                        // 添加一点弹簧动画，让移动更顺滑
                        animate={{ cx: pos.cx, cy: pos.cy }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                </svg>

                <div className="absolute top-0 left-0 text-xs text-gray-500">Productivity</div>
                <div className="absolute bottom-[-20px] right-0 text-xs text-gray-500">Time / Investment</div>
            </div>

            {/* 控制器 */}
            <div className="flex flex-col gap-6">
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderValue}
                    onChange={(e) => setSliderValue(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                />

                <div className="text-center h-24">
                    <h3 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${stage.color}`}>
                        {stage.title}
                    </h3>
                    <p className="text-gray-400 text-lg">
                        {stage.desc}
                    </p>
                </div>
            </div>
        </div>
    );
}