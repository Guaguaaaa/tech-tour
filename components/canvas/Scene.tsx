'use client';

import { Canvas } from '@react-three/fiber';
import { Environment, Stars, Sparkles } from '@react-three/drei';
import { Suspense } from 'react';
import TechRing from './TechRing';

export default function Scene() {
    return (
        <div className="w-full h-[600px] relative">
            {/* h-[600px] 是这一块的高度，稍后我们会改成全屏 */}
            <Canvas
                camera={{ position: [0, 4, 14], fov: 45 }} // 摄像机位置：稍微抬高(Y=4)，向后拉(Z=14)
                gl={{ antialias: true }}
                dpr={[1, 2]} // 适配视网膜屏幕
            >
                <Suspense fallback={null}>
                    {/* 1. 环境光与氛围 */}
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} />

                    {/* 2. 我们的核心圆环 */}
                    <TechRing />

                    {/* 3. 背景装饰：星星和漂浮粒子 */}
                    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                    <Sparkles count={100} scale={12} size={2} speed={0.4} opacity={0.5} color="#00FFFF" />

                    {/* 4. 给环境一点反射贴图，让金属材质好看 */}
                    <Environment preset="city" />
                </Suspense>
            </Canvas>

            {/* 遮罩层：让 3D 场景底部渐变消失，无缝衔接页面 */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        </div>
    );
}