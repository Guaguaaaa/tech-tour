'use client';

import { useRef, useMemo, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Html, Float } from '@react-three/drei';
import * as THREE from 'three';
import { useRouter } from 'next/navigation'; // <--- 1. 导入路由
import { tools } from '../../data/tools';

export default function TechRing() {
    const groupRef = useRef<THREE.Group>(null);
    const router = useRouter(); // <--- 2. 初始化路由
    const [hovered, setHovered] = useState<string | null>(null); // 用于鼠标悬停变色

    const radius = 8;

    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y -= delta * 0.10; // 稍微调慢一点转速方便点击
            groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
        }
    });

    const toolsWithPosition = useMemo(() => {
        return tools.map((tool, index) => {
            const angle = (index / tools.length) * Math.PI * 2;
            const x = radius * Math.cos(angle);
            const z = radius * Math.sin(angle);
            return { ...tool, position: [x, 0, z] as [number, number, number] };
        });
    }, []);

    return (
        <group ref={groupRef}>
            {toolsWithPosition.map((tool) => {
                const isHovered = hovered === tool.id;

                return (
                    <Float
                        key={tool.id}
                        speed={2}
                        rotationIntensity={0.5}
                        floatIntensity={1}
                    >
                        <group
                            position={tool.position}
                            // 3. 添加交互事件
                            onClick={(e) => {
                                e.stopPropagation(); // 防止穿透
                                router.push(`/choice/${tool.id}`); // 跳转到 choice 页面
                            }}
                            onPointerOver={() => { document.body.style.cursor = 'pointer'; setHovered(tool.id); }}
                            onPointerOut={() => { document.body.style.cursor = 'auto'; setHovered(null); }}
                        >
                            {/* 球体 */}
                            <mesh>
                                <sphereGeometry args={[isHovered ? 0.3 : 0.2, 32, 32]} /> {/* 悬停变大 */}
                                <meshStandardMaterial
                                    color={isHovered ? '#ffffff' : tool.color}
                                    emissive={tool.color}
                                    emissiveIntensity={isHovered ? 4 : 2}
                                    toneMapped={false}
                                />
                            </mesh>

                            {/* 光环 */}
                            <mesh rotation={[Math.PI / 2, 0, 0]}>
                                <ringGeometry args={[0.3, 0.35, 32]} />
                                <meshBasicMaterial color={tool.color} opacity={0.5} transparent side={THREE.DoubleSide} />
                            </mesh>

                            {/* 文字标签 */}
                            <Html
                                position={[0, 0.6, 0]}
                                center
                                transform
                                sprite
                                style={{ pointerEvents: 'none' }} // 关键：让文字不阻挡点击
                            >
                                <div className={`transition-all duration-300 ${isHovered ? 'scale-125' : 'scale-100'}`}>
                  <span
                      className="text-xs font-bold px-2 py-1 rounded bg-black/50 border border-white/20 backdrop-blur-md whitespace-nowrap"
                      style={{ color: tool.color, boxShadow: `0 0 15px ${tool.color}40` }}
                  >
                    {tool.name}
                  </span>
                                </div>
                            </Html>
                        </group>
                    </Float>
                );
            })}
        </group>
    );
}