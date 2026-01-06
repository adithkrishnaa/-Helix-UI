'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Sidebar } from './Sidebar';
import { cn } from '@/lib/cn';
import { usePathname } from 'next/navigation';

export const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    return (
        <div className="lg:hidden">
            <button
                onClick={() => setIsOpen(true)}
                className="flex items-center justify-center rounded-xl border border-gray-100 bg-white p-2.5 text-gray-600 shadow-sm transition-all hover:bg-gray-50 active:scale-95 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-400 dark:hover:bg-gray-900"
            >
                <Menu className="h-5 w-5" />
            </button>

            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 z-50 bg-gray-950/20 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
                        onClick={() => setIsOpen(false)}
                    />
                    <div className="fixed inset-y-0 left-0 z-50 w-[280px] bg-white p-6 shadow-2xl animate-in slide-in-from-left duration-300 dark:bg-gray-950">
                        <div className="mb-8 flex items-center justify-between">
                            <span className="font-outfit text-xl font-bold tracking-tight">Navigation</span>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-900 dark:hover:text-gray-200"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>
                        <Sidebar />
                    </div>
                </>
            )}
        </div>
    );
};
