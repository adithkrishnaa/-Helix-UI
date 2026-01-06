import { Sidebar } from '@/components/docs/Sidebar';

export default function DocsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="mx-auto max-w-[1400px] px-6">
            <div className="flex flex-col lg:flex-row lg:gap-12">
                <div className="hidden lg:block lg:w-72 lg:shrink-0 py-10 border-r border-gray-100 dark:border-gray-900 mr-10">
                    <Sidebar />
                </div>
                <div className="flex-1 py-10 lg:pl-4">
                    <div className="mx-auto max-w-4xl">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
