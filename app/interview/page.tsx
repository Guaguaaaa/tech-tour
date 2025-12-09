'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function InterviewPage() {
    const router = useRouter();

    return (
        <main className="min-h-screen bg-black flex flex-col items-center justify-center p-8">

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-full max-w-6xl flex flex-col items-center"
            >
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
                    The Voice of the Team
                </h1>

                {/* YouTube Embed 容器 */}
                <div className="w-full aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-white/10 mb-12 relative">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/n5Jk63JnLwI?autoplay=0&rel=0&modestbranding=1"
                        title="Interview Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0"
                    ></iframe>
                </div>

                {/* 下一步按钮 */}
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    onClick={() => router.push('/top-tools')}
                    className="group flex items-center gap-3 px-8 py-4 border border-white/30 text-white rounded-full text-lg font-bold hover:bg-white hover:text-black transition-all"
                >
                    Let's see the Market Standards
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.button>

            </motion.div>
        </main>
    );
}