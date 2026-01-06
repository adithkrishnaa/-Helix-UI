'use client';

import React from 'react';
import { cn } from '@/lib/cn';

interface DemoBlockProps {
    children: React.ReactNode;
    className?: string;
}

export const DemoBlock = ({ children, className }: DemoBlockProps) => {
    return (
        <div className={cn('group relative my-8 overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950', className)}>
            <div className="flex items-center gap-2 border-b border-gray-50 bg-gray-50/30 px-6 py-3 dark:border-gray-900 dark:bg-gray-950/30">
                <div className="flex gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-gray-200 dark:bg-gray-800" />
                    <div className="h-2.5 w-2.5 rounded-full bg-gray-200 dark:bg-gray-800" />
                    <div className="h-2.5 w-2.5 rounded-full bg-gray-200 dark:bg-gray-800" />
                </div>
                <span className="ml-4 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Preview</span>
            </div>
            <div className={cn(
                'flex min-h-[300px] w-full items-center justify-center p-12 lg:p-20',
                'bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[24px_24px] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)]'
            )}>



                <div className="flex flex-wrap items-center justify-center gap-4">
                    {children}
                </div>
            </div>
        </div>
    );
};

