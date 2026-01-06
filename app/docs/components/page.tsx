'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
    MousePointer2,
    CreditCard,
    Type,
    AlertTriangle,
    Search,
    ArrowRight
} from 'lucide-react';
import { cn } from '@/lib/cn';

const components = [
    {
        title: 'Button',
        description: 'Interactive buttons with multiple variants and sizes.',
        href: '/docs/button',
        icon: MousePointer2,
        color: 'indigo'
    },
    {
        title: 'Card',
        description: 'Flexible containers for grouping related content.',
        href: '/docs/card',
        icon: CreditCard,
        color: 'blue'
    },
    {
        title: 'Input',
        description: 'Text fields for user data entry with validation states.',
        href: '/docs/input',
        icon: Type,
        color: 'violet'
    },
    {
        title: 'Alert',
        description: 'Contextual feedback messages for user actions.',
        href: '/docs/alert',
        icon: AlertTriangle,
        color: 'emerald'
    }
];

export default function ComponentsPage() {
    const [query, setQuery] = useState('');

    const filtered = components.filter(c =>
        c.title.toLowerCase().includes(query.toLowerCase()) ||
        c.description.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="space-y-10">
            <div className="space-y-4">
                <h1 className="font-outfit text-4xl font-extrabold tracking-tight md:text-5xl text-gray-900 dark:text-gray-100">
                    Components
                </h1>
                <p className="text-xl text-gray-500 max-w-2xl dark:text-gray-400 leading-relaxed">
                    Explore our collection of meticulously crafted, accessible, and high-performance components.
                </p>
            </div>

            <div className="relative max-w-md">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search components..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="h-12 w-full rounded-2xl border border-gray-100 bg-white pl-12 pr-4 text-sm shadow-sm transition-all focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-100"
                />
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
                {filtered.map((component) => (
                    <Link
                        key={component.href}
                        href={component.href}
                        className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 transition-all hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-500/5 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-indigo-500/30"
                    >
                        <div className={cn(
                            "mb-6 flex h-14 w-14 items-center justify-center rounded-2xl transition-colors",
                            component.color === 'indigo' && "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white dark:bg-indigo-950/40 dark:text-indigo-400",
                            component.color === 'blue' && "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-950/40 dark:text-blue-400",
                            component.color === 'violet' && "bg-violet-50 text-violet-600 group-hover:bg-violet-600 group-hover:text-white dark:bg-violet-950/40 dark:text-violet-400",
                            component.color === 'emerald' && "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white dark:bg-emerald-950/40 dark:text-emerald-400",
                        )}>
                            <component.icon className="h-7 w-7" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-indigo-600 dark:text-gray-100 dark:group-hover:text-indigo-400 transition-colors">
                            {component.title}
                        </h3>
                        <p className="mb-6 text-gray-500 dark:text-gray-400 leading-relaxed">
                            {component.description}
                        </p>
                        <div className="flex items-center gap-2 text-sm font-bold text-indigo-600 dark:text-indigo-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                            View Docs <ArrowRight className="h-4 w-4" />
                        </div>
                    </Link>
                ))}

                {filtered.length === 0 && (
                    <div className="col-span-full rounded-3xl border border-dashed border-gray-200 p-12 text-center dark:border-gray-800">
                        <p className="text-gray-500 italic">No components found matching "{query}"</p>
                    </div>
                )}
            </div>
        </div>
    );
}
