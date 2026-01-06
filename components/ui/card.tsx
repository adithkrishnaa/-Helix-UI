import React from 'react';
import { cn } from '@/lib/cn';

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export const Card = ({ className, ...props }: CardProps) => (
    <div
        className={cn(
            'rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-950',
            className
        )}
        {...props}
    />
);

export const CardHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />
);

export const CardTitle = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className={cn('text-xl font-semibold leading-none tracking-tight text-gray-900 dark:text-gray-100', className)} {...props} />
);

export const CardDescription = ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className={cn('text-sm text-gray-500 dark:text-gray-400', className)} {...props} />
);

export const CardContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn('p-6 pt-0', className)} {...props} />
);

export const CardFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn('flex items-center p-6 pt-0', className)} {...props} />
);
