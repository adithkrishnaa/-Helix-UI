import React from 'react';
import { AlertCircle, CheckCircle2, X } from 'lucide-react';
import { cn } from '@/lib/cn';

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'success' | 'error' | 'info';
    onClose?: () => void;
}

export const Alert = ({
    children,
    className,
    variant = 'info',
    onClose,
    ...props
}: AlertProps) => {
    const variants = {
        success: 'bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-400 dark:border-emerald-800',
        error: 'bg-red-50 text-red-800 border-red-200 dark:bg-red-950/30 dark:text-red-400 dark:border-red-800',
        info: 'bg-indigo-50 text-indigo-800 border-indigo-200 dark:bg-indigo-950/30 dark:text-indigo-400 dark:border-indigo-800',
    };

    const icons = {
        success: <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-500" />,
        error: <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-500" />,
        info: <AlertCircle className="h-5 w-5 text-indigo-600 dark:text-indigo-500" />,
    };

    return (
        <div
            role="alert"
            className={cn(
                'relative flex w-full gap-3 rounded-2xl border p-4 shadow-sm transition-all duration-200',
                variants[variant],
                className
            )}
            {...props}
        >
            <div className="shrink-0">{icons[variant]}</div>
            <div className="flex-1 text-sm font-medium leading-relaxed">{children}</div>
            {onClose && (
                <button
                    onClick={onClose}
                    className="shrink-0 rounded-lg p-1 hover:bg-black/5 dark:hover:bg-white/5"
                >
                    <X className="h-4 w-4" />
                </button>
            )}
        </div>
    );
};
