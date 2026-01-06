import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import { Sidebar } from '@/components/docs/Sidebar';
import { SearchBox } from '@/components/docs/SearchBox';
import { MobileNav } from '@/components/docs/MobileNav';
import Link from 'next/link';

import { Github, Play } from 'lucide-react';
import { cn } from '@/lib/cn';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
  title: 'Helix UI | Modern Component Library',
  description: 'Production-ready React components for speed and beauty.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(
        inter.className,
        outfit.variable,
        'bg-white text-gray-900 antialiased dark:bg-gray-950 dark:text-gray-100'
      )}>
        <header className="sticky top-0 z-40 w-full border-b border-gray-100 bg-white/80 backdrop-blur-xl dark:border-gray-900 dark:bg-gray-950/80">
          <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6">
            <div className="flex items-center gap-4">
              <MobileNav />
              <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-tr from-indigo-600 to-violet-600 shadow-lg shadow-indigo-200/50 dark:shadow-none">
                  <span className="font-outfit text-xl font-black text-white">H</span>
                </div>
                <span className="hidden sm:block font-outfit text-xl font-bold tracking-tight">Helix UI</span>
              </Link>
            </div>


            <div className="flex flex-1 items-center justify-center px-8">
              <SearchBox />
            </div>

            <nav className="flex items-center gap-2">
              <Link
                href="/docs"
                className="rounded-xl px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-gray-100"
              >
                Docs
              </Link>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl p-2 text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-gray-100"
              >
                <Github className="h-5 w-5" />
              </a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
