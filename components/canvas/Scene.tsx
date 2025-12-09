'use client';

import { Canvas } from '@react-three/fiber';
import { Environment, Stars, Sparkles } from '@react-three/drei';
import { Suspense } from 'react';
import TechRing from './TechRing';

export default function Scene() {
    return (
        <div className="w-full h-[600px] relative [mask-image:linear-gradient(to_top,transparent_0%,black_0%)]">

            <Canvas
                camera={{ position: [0, 4, 14], fov: 45 }}
                gl={{ antialias: true }}
                dpr={[1, 2]}
            >
                <Suspense fallback={null}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} />

                    <TechRing />

                    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                    <Sparkles count={100} scale={12} size={2} speed={0.4} opacity={0.5} color="#00FFFF" />

                    <Environment preset="city" />
                </Suspense>
            </Canvas>
        </div>
    );
}
