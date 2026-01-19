'use client';

import Link from 'next/link';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface SlideControlProps {
    prev?: string;
    next?: string;
    pageName: string;
}

export default function SlideControl({ prev, next, pageName }: SlideControlProps) {
    return (
        <div className="fixed bottom-8 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 pointer-events-none select-none">
            {/* Previous Button */}
            <div className="pointer-events-auto">
                {prev ? (
                    <Link href={prev} className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors group">
                        <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span className="uppercase tracking-widest text-xs md:text-sm font-medium">Back</span>
                    </Link>
                ) : <div className="w-20" />}
            </div>

            {/* Page Indicator */}
            <div className="text-gray-600 text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold text-center">
                {pageName}
            </div>

            {/* Next Button */}
            <div className="pointer-events-auto">
                {next ? (
                    <Link href={next} className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors group">
                        <span className="uppercase tracking-widest text-xs md:text-sm font-bold">Next</span>
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                ) : <div className="w-20" />}
            </div>
        </div>
    );
}