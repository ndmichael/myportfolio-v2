"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CaseApproach({
  approach,
  features,
  media,
  featureMedia,
}: {
  approach: string;
  features: string[];
  media: string;
  featureMedia: string[];
}) {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 md:px-12 lg:px-20 pt-12 space-y-16">

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-semibold text-center"
      >
        Approach
      </motion.h2>

      {/* Text + Image */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-base md:text-lg text-muted-foreground leading-relaxed whitespace-pre-line"
        >
          {approach}
        </motion.p>

        {media && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full h-[320px] md:h-[380px] lg:h-[420px] overflow-hidden rounded-xl border border-white/10 shadow-lg"
          >
            <Image src={media} alt="approach" fill className="object-contain" />
          </motion.div>
        )}
      </div>

      {/* Features */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-center">Key Features</h3>

        <ul className="space-y-3 mx-auto max-w-3xl text-muted-foreground text-[15px] md:text-base leading-relaxed">
          {features.map((item, i) => (
            <li key={i} className="flex gap-2 items-start">
              <span className="text-primary">•</span> {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Slider */}
      {featureMedia?.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex gap-6 overflow-x-auto no-scrollbar pb-2"
        >
          {featureMedia.map((src, i) => (
            <div
              key={i}
              className="snap-center min-w-[380px] md:min-w-[460px] lg:min-w-[540px] 
                         h-[260px] md:h-[320px] lg:h-[380px] 
                         relative overflow-hidden rounded-xl border border-white/10 shadow-lg"
            >
              <Image src={src} alt={`Feature ${i}`} fill className="object-cover object-top" />
            </div>
          ))}
        </motion.div>
      )}

    </section>
  );
}
