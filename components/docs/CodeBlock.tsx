'use client';

import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { cn } from '@/lib/cn';

interface CodeBlockProps {
    code: string;
    language?: string;
    className?: string;
}

export const CodeBlock = ({ code, language = 'tsx', className }: CodeBlockProps) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    return (
        <div className={cn('group relative my-6 overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 dark:border-gray-800 dark:bg-gray-950', className)}>
            <div className="flex items-center justify-between border-b border-gray-100 bg-gray-50/50 px-4 py-2.5 dark:border-gray-800 dark:bg-gray-950/50">
                <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                        <div className="h-3 w-3 rounded-full bg-red-400/20 border border-red-400/30" />
                        <div className="h-3 w-3 rounded-full bg-amber-400/20 border border-amber-400/30" />
                        <div className="h-3 w-3 rounded-full bg-emerald-400/20 border border-emerald-400/30" />
                    </div>
                    <div className="ml-4 flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{language}</span>
                    </div>
                </div>
                <button
                    onClick={copyToClipboard}
                    className="flex items-center gap-1.5 rounded-lg bg-white px-2.5 py-1 text-gray-500 shadow-sm transition-all hover:bg-gray-50 hover:text-indigo-600 dark:bg-gray-900 dark:hover:bg-gray-800 dark:hover:text-indigo-400 border border-gray-100 dark:border-gray-800"
                    title="Copy code"
                >
                    {copied ? (
                        <>
                            <Check className="h-3.5 w-3.5 text-emerald-500" />
                            <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-tight">Copied</span>
                        </>
                    ) : (
                        <>
                            <Copy className="h-3.5 w-3.5" />
                            <span className="text-[10px] font-bold uppercase tracking-tight">Copy</span>
                        </>
                    )}
                </button>
            </div>

            <div className="overflow-x-auto p-4">
                <pre className="text-sm font-mono leading-relaxed text-gray-700 dark:text-gray-300">
                    <code>{code}</code>
                </pre>
            </div>
        </div>
    );
};
