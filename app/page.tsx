import Scene from '../components/canvas/Scene';
import TopTools from '../components/home/TopTools'; // <--- 导入新组件

export default function Home() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-cyan-500/30">
            {/* 第一部分：Hero Section */}
            <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Scene />
                </div>
                <div className="relative z-10 text-center pointer-events-none mt-[-100px]">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40 mb-4">
                        Welcome to the Tour
                    </h1>
                    <p className="text-xl text-gray-400 tracking-wide uppercase">
                        Technology Landscape 2025
                    </p>
                </div>
                <div className="absolute bottom-10 animate-bounce pointer-events-none">
                    <p className="text-sm text-gray-500">Scroll to Explore</p>
                </div>
            </section>

            {/* 第二部分：Top Tools (已更新) */}
            <TopTools />

            {/* 第三部分：Efficiency Tools (预留) */}
            <section className="min-h-screen flex items-center justify-center border-t border-white/10">
                <h2 className="text-3xl font-bold text-gray-500">Next: Efficiency Tools</h2>
            </section>
        </main>
    );
}