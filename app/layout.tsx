import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Scene from "@/components/canvas/Scene"; // 确保引入 Scene 组件

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Tech Reality Tour",
    description: "Internal presentation on Technology adoption.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${inter.className} bg-black text-white selection:bg-cyan-500/30 overflow-x-hidden`}>
        {/* 1. Persistent 3D Background Layer */}
        <div className="fixed inset-0 z-0 opacity-40 pointer-events-none">
            <Scene />
        </div>

        {/* 2. Page Content Layer */}
        <div className="relative z-10 min-h-screen">
            {children}
        </div>
        </body>
        </html>
    );
}