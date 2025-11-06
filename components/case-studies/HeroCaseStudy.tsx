"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface HeroProps {
  title: string;
  tagline: string;
  media?: string; // changed from image
  tags?: string[]; // make optional
}

export default function HeroCaseStudy({ title, tagline, media, tags = [] }: HeroProps) {
  return (
    <section className="relative py-28 px-6 md:px-16 lg:px-28 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
        >
          {title}
        </motion.h1>

        <p className="text-muted-foreground mb-6 text-lg">{tagline}</p>

        {tags.length > 0 && (
          <div className="flex justify-center gap-3 mb-12 flex-wrap">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="px-4 py-1 text-sm bg-primary/10 text-primary rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {media && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src={media}
              alt={title}
              width={900}
              height={500}
              className="rounded-2xl shadow-xl mx-auto"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
}
