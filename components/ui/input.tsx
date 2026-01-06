import React from 'react';
import { cn } from '@/lib/cn';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, label, error, type, ...props }, ref) => {
        const id = React.useId();
        return (
            <div className="flex flex-col gap-1.5 w-full">
                {label && (
                    <label
                        htmlFor={id}
                        className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1"
                    >
                        {label}
                    </label>
                )}
                <input
                    type={type}
                    id={id}
                    className={cn(
                        'flex h-11 w-full rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm transition-all duration-200 placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-100 dark:focus:border-indigo-400',
                        error && 'border-red-500 focus:border-red-500 focus:ring-red-500/10 dark:border-red-500',
                        className
                    )}
                    ref={ref}
                    {...props}
                />
                {error && <p className="text-xs font-medium text-red-500 ml-1">{error}</p>}
            </div>
        );
    }
);

Input.displayName = 'Input';
