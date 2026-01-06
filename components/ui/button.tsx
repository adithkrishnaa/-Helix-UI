import React from 'react';
import { cn } from '@/lib/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
        const variants = {
            primary: 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500 shadow-sm transition-all duration-200 active:scale-95',
            secondary: 'bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 focus:ring-indigo-500 shadow-sm transition-all duration-200 active:scale-95',
            ghost: 'bg-transparent text-gray-600 hover:bg-gray-100 focus:ring-gray-300 transition-all duration-200 active:scale-95',
        };

        const sizes = {
            sm: 'px-3 py-1.5 text-xs rounded-lg',
            md: 'px-5 py-2.5 text-sm font-medium rounded-xl',
            lg: 'px-8 py-3.5 text-base font-semibold rounded-2xl',
        };

        return (
            <button
                ref={ref}
                className={cn(
                    'inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            />
        );
    }
);

Button.displayName = 'Button';
