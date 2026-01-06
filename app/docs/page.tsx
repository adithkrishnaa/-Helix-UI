import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, Layers, ShieldCheck } from 'lucide-react';

export default function DocsPage() {
    return (
        <div className="space-y-12">
            <div className="space-y-4">
                <h1 className="font-outfit text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl text-gray-900 dark:text-gray-100">
                    Introduction
                </h1>
                <p className="text-xl text-gray-500 max-w-2xl dark:text-gray-400 leading-relaxed">
                    Welcome to the Helix UI documentation. Helix UI is a modern, production-ready component library built with React, Next.js, and Tailwind CSS.
                </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-gray-100 p-8 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950/50">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400">
                        <Layers className="h-7 w-7" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold">Modular Design</h3>
                    <p className="mb-6 text-gray-500 dark:text-gray-400 line-clamp-2">
                        Every component is carefully crafted to be modular, accessible, and easy to customize using Tailwind CSS utility classes.
                    </p>
                    <Link href="/docs/button" className="inline-flex items-center gap-2 font-bold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors">
                        Browse Components <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>

                <div className="rounded-2xl border border-gray-100 p-8 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950/50">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400">
                        <ShieldCheck className="h-7 w-7" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold">Secure by Default</h3>
                    <p className="mb-6 text-gray-500 dark:text-gray-400 line-clamp-2">
                        Built-in deployment guards and domain allowlisting ensure your documentation platform remains secure in production.
                    </p>
                    <Link href="/" className="inline-flex items-center gap-2 font-bold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors">
                        Learn More <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
