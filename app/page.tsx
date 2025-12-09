import Scene from '../components/canvas/Scene';

export default function Home() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-cyan-500/30 overflow-hidden">
            <section className="relative w-full h-screen flex flex-col items-center justify-center">
                {/* 背景 3D 场景 */}
                <div className="absolute inset-0 z-0">
                    <Scene />
                </div>

                {/* 文字内容 */}
                <div className="relative z-10 text-center pointer-events-none mt-[-100px]">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40 mb-4">
                        Welcome to the Tour
                    </h1>
                    <p className="text-xl text-gray-400 tracking-wide uppercase">
                        Pick a tool to start your journey
                    </p>
                </div>
            </section>
        </main>
    );
}