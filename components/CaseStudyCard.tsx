"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface CaseStudyCardProps {
  title: string;
  summary: string;
  thumbnail: string;
  slug: string;
}

export default function CaseStudyCard({
  title,
  summary,
  thumbnail,
  slug,
}: CaseStudyCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-card border border-border/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      {/* Thumbnail */}
      <div className="relative h-52 md:h-64 overflow-hidden">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-3">
        <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-muted-foreground line-clamp-3">{summary}</p>

        <div className="mt-4">
          <Link
            href={`/case-studies/${slug}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            Read Case Study
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
