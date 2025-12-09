'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInProps {
    children: ReactNode;
    delay?: number; // 可选：延迟多久显示
    className?: string;
}

export default function FadeIn({ children, delay = 0, className = '' }: FadeInProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }} // 初始状态：透明且向下偏移
            whileInView={{ opacity: 1, y: 0 }} // 可见状态：完全不透明且归位
            viewport={{ once: true, margin: "-100px" }} // margin: 视口缩进，防止只有边缘碰到就触发
            transition={{ duration: 0.8, delay, type: "spring", bounce: 0.2 }} // 丝滑的弹簧动画
            className={className}
        >
            {children}
        </motion.div>
    );
}