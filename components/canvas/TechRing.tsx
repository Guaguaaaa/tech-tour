'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Html, Float } from '@react-three/drei';
import * as THREE from 'three';
import { tools } from '../../data/tools'; // 导入数据

export default function TechRing() {
    const groupRef = useRef<THREE.Group>(null);

    // 半径大小，决定圆环有多大
    const radius = 6;

    // 让圆环自动旋转
    useFrame((state, delta) => {
        if (groupRef.current) {
            // Y轴旋转：让圆环水平转动
            groupRef.current.rotation.y -= delta * 0.15;
            // 微微的 Z 轴摆动，增加一种“悬浮不稳定”的科技感
            groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
        }
    });

    // 计算每个工具在圆环上的位置
    const toolsWithPosition = useMemo(() => {
        return tools.map((tool, index) => {
            // 计算角度：将 2PI (360度) 平均分给每个工具
            const angle = (index / tools.length) * Math.PI * 2;
            // 极坐标转笛卡尔坐标 (x = r * cos, z = r * sin)
            const x = radius * Math.cos(angle);
            const z = radius * Math.sin(angle);
            return { ...tool, position: [x, 0, z] as [number, number, number] };
        });
    }, []);

    return (
        <group ref={groupRef}>
            {toolsWithPosition.map((tool, i) => (
                <Float
                    key={tool.id}
                    speed={2} // 浮动速度
                    rotationIntensity={0.5}
                    floatIntensity={1}
                >
                    <group position={tool.position}>
                        {/* 1. 代表工具的发光球体 */}
                        <mesh>
                            <sphereGeometry args={[0.2, 32, 32]} />
                            <meshStandardMaterial
                                color={tool.color}
                                emissive={tool.color} // 让球体自发光
                                emissiveIntensity={2}
                                toneMapped={false}
                            />
                        </mesh>

                        {/* 2. 也是装饰性的光晕环 */}
                        <mesh rotation={[Math.PI / 2, 0, 0]}>
                            <ringGeometry args={[0.3, 0.35, 32]} />
                            <meshBasicMaterial color={tool.color} opacity={0.5} transparent side={THREE.DoubleSide} />
                        </mesh>

                        {/* 3. HTML 标签：直接显示工具名字 */}
                        {/* Html 组件会自动面向摄像机，非常适合做标注 */}
                        <Html
                            position={[0, 0.5, 0]} // 稍微在球体上方一点
                            center
                            transform // 让文字跟随 3D 空间缩放
                            sprite // 像精灵图一样永远面向屏幕
                        >
                            <div className="flex flex-col items-center pointer-events-none select-none">
                <span
                    className="text-xs font-bold px-2 py-1 rounded bg-black/50 border border-white/20 backdrop-blur-md whitespace-nowrap"
                    style={{ color: tool.color, boxShadow: `0 0 10px ${tool.color}40` }}
                >
                  {tool.name}
                </span>
                                <span className="text-[10px] text-gray-400 mt-1 opacity-80">
                  {tool.stat}
                </span>
                            </div>
                        </Html>
                    </group>
                </Float>
            ))}
        </group>
    );
}