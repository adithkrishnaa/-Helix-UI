'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Search as SearchIcon, X, Command } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/cn';

const components = [
    { title: 'Button', href: '/docs/button', keywords: 'cta, action, click' },
    { title: 'Card', href: '/docs/card', keywords: 'container, box, border' },
    { title: 'Input', href: '/docs/input', keywords: 'form, text, field' },
    { title: 'Alert', href: '/docs/alert', keywords: 'toast, notification, error, success' },
];

export const SearchBox = () => {
    const [query, setQuery] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const searchRef = useRef<HTMLDivElement>(null);

    const filtered = components.filter(c =>
        c.title.toLowerCase().includes(query.toLowerCase()) ||
        c.keywords.toLowerCase().includes(query.toLowerCase())
    );

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (href: string) => {
        router.push(href);
        setIsOpen(false);
        setQuery('');
    };

    return (
        <div className="relative w-full max-w-sm" ref={searchRef}>
            <div className="relative">
                <SearchIcon className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search components..."
                    className="h-10 w-full rounded-xl border border-gray-100 bg-gray-50/50 pl-10 pr-12 text-sm transition-all focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 dark:border-gray-800 dark:bg-gray-950/50"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                        setIsOpen(true);
                    }}
                    onFocus={() => setIsOpen(true)}
                />
                <div className="absolute right-3.5 top-1/2 flex -translate-y-1/2 items-center gap-1 text-gray-300">
                    <Command className="h-3 w-3" />
                    <span className="text-[10px] font-bold">K</span>
                </div>
            </div>

            {isOpen && query.length > 0 && (
                <div className="absolute top-full mt-2 w-full overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl dark:border-gray-800 dark:bg-gray-950 z-50">
                    {filtered.length > 0 ? (
                        <div className="p-2">
                            {filtered.map((item) => (
                                <button
                                    key={item.href}
                                    className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm transition-all hover:bg-gray-50 dark:hover:bg-gray-900"
                                    onClick={() => handleSelect(item.href)}
                                >
                                    <span className="font-semibold text-gray-900 dark:text-gray-100">{item.title}</span>
                                    <span className="text-xs text-gray-400">{item.keywords}</span>
                                </button>
                            ))}
                        </div>
                    ) : (
                        <div className="p-8 text-center text-sm text-gray-500 italic">
                            No components found for &quot;{query}&quot;
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
