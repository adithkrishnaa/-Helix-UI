'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/cn';
import {
    MousePointer2,
    CreditCard,
    Type,
    AlertTriangle,
    BookOpen,
    Layers,
} from 'lucide-react';


const navigation = [
    { name: 'Introduction', href: '/docs', icon: BookOpen },
    { name: 'Overview', href: '/docs/components', icon: Layers },
    { name: 'Button', href: '/docs/button', icon: MousePointer2 },
    { name: 'Card', href: '/docs/card', icon: CreditCard },
    { name: 'Input', href: '/docs/input', icon: Type },
    { name: 'Alert', href: '/docs/alert', icon: AlertTriangle },
];


export const Sidebar = () => {
    const pathname = usePathname();

    return (
        <aside className="sticky top-20 h-[calc(100vh-5rem)] w-full overflow-y-auto pr-6 pb-10 custom-scrollbar">
            <div className="flex flex-col gap-10">
                <section>
                    <h4 className="mb-4 px-4 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">
                        Getting Started
                    </h4>
                    <nav className="flex flex-col gap-1">
                        {navigation.slice(0, 1).map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        'group flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200',
                                        isActive
                                            ? 'bg-indigo-50/50 text-indigo-700 shadow-[inset_0_0_0_1px_rgba(79,70,229,0.1)] dark:bg-indigo-500/10 dark:text-indigo-400 dark:shadow-[inset_0_0_0_1px_rgba(129,140,248,0.2)]'
                                            : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-900/50 dark:hover:text-gray-100'
                                    )}
                                >
                                    <div className={cn(
                                        'flex h-8 w-8 items-center justify-center rounded-lg border transition-all duration-200',
                                        isActive
                                            ? 'border-indigo-200 bg-white text-indigo-600 shadow-sm dark:border-indigo-500/30 dark:bg-gray-950 dark:text-indigo-400'
                                            : 'border-transparent text-gray-400 group-hover:border-gray-200 group-hover:bg-white group-hover:text-gray-600 dark:group-hover:border-gray-800 dark:group-hover:bg-gray-900'
                                    )}>
                                        <item.icon className="h-4 w-4" />
                                    </div>
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>
                </section>

                <section>
                    <h4 className="mb-4 px-4 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">
                        Components
                    </h4>
                    <nav className="flex flex-col gap-1">
                        {navigation.slice(1).map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        'group flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200',
                                        isActive
                                            ? 'bg-indigo-50/50 text-indigo-700 shadow-[inset_0_0_0_1px_rgba(79,70,229,0.1)] dark:bg-indigo-500/10 dark:text-indigo-400 dark:shadow-[inset_0_0_0_1px_rgba(129,140,248,0.2)]'
                                            : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-900/50 dark:hover:text-gray-100'
                                    )}
                                >
                                    <div className={cn(
                                        'flex h-8 w-8 items-center justify-center rounded-lg border transition-all duration-200',
                                        isActive
                                            ? 'border-indigo-200 bg-white text-indigo-600 shadow-sm dark:border-indigo-500/30 dark:bg-gray-950 dark:text-indigo-400'
                                            : 'border-transparent text-gray-400 group-hover:border-gray-200 group-hover:bg-white group-hover:text-gray-600 dark:group-hover:border-gray-800 dark:group-hover:bg-gray-900'
                                    )}>
                                        <item.icon className="h-4 w-4" />
                                    </div>
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>
                </section>
            </div>
        </aside>
    );
};

