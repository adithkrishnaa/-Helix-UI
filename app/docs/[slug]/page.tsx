import React from 'react';
import { notFound } from 'next/navigation';
import { getDocData, getAllDocSlugs } from '@/lib/docs';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { DemoBlock } from '@/components/docs/DemoBlock';
import { CodeBlock } from '@/components/docs/CodeBlock';
import { PropsTable } from '@/components/docs/PropsTable';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Alert } from '@/components/ui/alert';

// Components available in MDX
const components = {
    DemoBlock,
    CodeBlock,
    PropsTable,
    Button,
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
    Input,
    Alert,
    // Standard markdown elements styling
    h1: (props: any) => <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 mb-6 font-outfit" {...props} />,
    h2: (props: any) => <h2 className="mt-12 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 border-b border-gray-100 dark:border-gray-800 pb-2 mb-6" {...props} />,
    h3: (props: any) => <h3 className="mt-8 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-4" {...props} />,
    p: (props: any) => <p className="leading-7 text-gray-600 dark:text-gray-400 mb-6" {...props} />,
    ul: (props: any) => <ul className="my-6 ml-6 list-disc [&>li]:mt-2 text-gray-600 dark:text-gray-400" {...props} />,
    code: (props: any) => <code className="relative rounded bg-gray-100 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-indigo-700 dark:bg-gray-800 dark:text-indigo-400" {...props} />,
};

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const slugs = getAllDocSlugs();
    return slugs.map((slug) => ({
        slug,
    }));
}

export default async function DocPage({ params }: PageProps) {
    const { slug } = await params;

    try {
        const docData = await getDocData(slug);

        return (
            <article className="prose prose-indigo max-w-none dark:prose-invert">
                <MDXRemote source={docData.content} components={components} />
            </article>
        );
    } catch (error) {
        notFound();
    }
}
