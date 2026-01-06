'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Shield, Layout, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LandingPage() {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-gray-950">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-linear-to-b from-indigo-50/50 to-transparent dark:from-indigo-900/10 pointer-events-none" />

      <div className="relative mx-auto max-w-[1400px] px-6 py-24 sm:py-32 lg:py-40">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400">
              v1.0.0 is now available
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8 font-outfit text-5xl font-black tracking-tight text-gray-900 sm:text-7xl dark:text-gray-100"
          >
            Build stunning UIs with{' '}
            <span className="block bg-linear-to-r from-indigo-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Helix UI
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 mx-auto max-w-2xl text-xl leading-relaxed text-gray-500 dark:text-gray-400"
          >
            A modern, accessible component library built with React and Tailwind CSS.
            Ship beautiful interfaces faster with our carefully crafted components.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 flex items-center justify-center gap-6"
          >
            <Link href="/docs">
              <Button size="lg" className="rounded-2xl px-8 py-4 text-base bg-indigo-600 hover:bg-indigo-700 shadow-xl shadow-indigo-200 dark:shadow-none">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/docs/components">
              <Button variant="secondary" size="lg" className="rounded-2xl px-8 py-4 text-base border-gray-200">
                Browse Components
              </Button>
            </Link>

          </motion.div>
        </div>

        <div className="mt-32 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Zap, title: 'Extreme Speed', desc: 'Zero runtime overhead and optimized for Next.js.' },
            { icon: Shield, title: 'Secure', desc: 'Built-in security guards for production safety.' },
            { icon: Layout, title: 'Responsive', desc: 'Fully responsive designs that look great on any device.' },
            { icon: Sparkles, title: 'Premium', desc: 'Modern aesthetics with glassmorphism and animations.' },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1 dark:border-gray-800 dark:bg-gray-950/50"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white dark:bg-indigo-950/40 dark:text-indigo-400">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-40 rounded-[3rem] bg-linear-to-br from-indigo-600 to-violet-700 px-6 py-24 text-center shadow-2xl shadow-indigo-200 dark:shadow-none">
          <h2 className="font-outfit text-4xl font-black tracking-tight text-white sm:text-5xl">
            Ready to build something amazing?
          </h2>
          <p className="mt-6 text-xl text-indigo-100">
            Get started with Helix UI today and experience the joy of building beautiful interfaces.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Link href="/docs">
              <Button size="lg" className="rounded-2xl bg-white px-8 text-indigo-600 hover:bg-indigo-50">
                Read the Docs
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


