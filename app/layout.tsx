import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
        {/* Page Content Layer */}
        <div className="relative z-10 min-h-screen">
            {children}
        </div>
        </body>
        </html>
    );
}