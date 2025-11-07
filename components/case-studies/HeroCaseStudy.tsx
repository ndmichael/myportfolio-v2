"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface HeroProps {
  title: string;
  tagline: string;
  media?: string;
}

const titleVariant = {
  hidden: { opacity: 0, y: 18, scale: 0.995 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const subtitleVariant = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.08 } },
};

const mediaVariant = {
  hidden: { opacity: 0, scale: 0.995, rotate: -0.8 },
  show: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] } },
  hover: { scale: 1.02, rotate: 0.3 },
};

export default function HeroCaseStudy({ title, tagline, media }: HeroProps) {
  return (
    <section className="pt-20 px-6 md:px-16 lg:px-32 max-w-6xl mx-auto text-center">
      <motion.h1
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        variants={titleVariant}
        className="mx-auto max-w-4xl text-4xl md:text-6xl leading-tight font-extrabold tracking-tight"
        style={{ WebkitFontSmoothing: "antialiased" }}
      >
        {/* gradient text using your exact gradient */}
        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
          {title}
        </span>
      </motion.h1>

      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={subtitleVariant}
        className="mt-4 text-lg md:text-xl text-muted-foreground mx-auto max-w-2xl"
      >
        {tagline}
      </motion.p>

      {media && (
        <motion.div
          initial="hidden"
          whileInView="show"
          whileHover="hover"
          viewport={{ once: true }}
          variants={mediaVariant}
          className="mt-14 relative mx-auto w-full rounded-3xl overflow-hidden shadow-2xl border border-white/6"
          style={{ willChange: "transform, opacity" }}
        >
          {/* next/image for optimized delivery; sizes/prioritize for hero */}
          <Image
            src={media}
            alt={`${title} — hero media`}
            width={1600}
            height={800}
            priority
            sizes="(max-width: 768px) 90vw, 1200px"
            className="w-full h-auto object-cover rounded-3xl"
          />

          {/* subtle glass overlay for premium feel */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/6 to-transparent mix-blend-overlay"
          />
        </motion.div>
      )}
    </section>
  );
}
