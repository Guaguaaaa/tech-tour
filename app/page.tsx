import Scene from '../components/canvas/Scene';
import TopTools from '../components/home/TopTools';
import EfficiencyTools from '../components/home/EfficiencyTools'; // <--- 1. 导入
import DetailOverlay from '../components/ui/DetailOverlay';
import { LayoutGroup } from 'framer-motion';

export default function Home() {
    return (
        <LayoutGroup>
            <main className="min-h-screen bg-black text-white selection:bg-cyan-500/30">

                {/* Hero Section */}
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

                {/* Top Tools List */}
                <TopTools />

                {/* Efficiency Tools List */}
                <EfficiencyTools />

                {/* Detail Overlay (放在最后) */}
                <DetailOverlay />
            </main>
        </LayoutGroup>
    );
}