"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function SampleCaseStudy() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/80 via-background/90 to-background backdrop-blur-md" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* 🧩 Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/images/petgrooming-mockup.png"
            alt="Pet Grooming SaaS"
            width={600}
            height={400}
            className="rounded-3xl shadow-xl border border-border"
          />
        </motion.div>

        {/* 💬 Right: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 text-transparent bg-clip-text">
            Pet Grooming SaaS Platform
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            A vertical SaaS built to help mobile pet groomers manage clients, routes, and compliance effortlessly. 
            This system was designed to unify scheduling, CRM, and payments into a single dashboard for small grooming businesses.
          </p>
          <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-1">
            <li>Modular architecture with Next.js + FastAPI</li>
            <li>Firebase integration for real-time updates</li>
            <li>Mobile-optimized for field access</li>
          </ul>
          <Link
            href="/case-studies/petgrooming-saas"
            className="inline-block mt-4 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 text-white font-medium shadow-md hover:shadow-xl transition-all duration-300"
          >
            Read Full Case Study →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
