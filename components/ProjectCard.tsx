"use client";

import { motion, useSpring } from "framer-motion";
import { useTiltEffect } from "@/hooks/useTiltEffect";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  tagline?: string;
  desc: string;
  stack: string[];
  color: string;
  caseStudy: string;
  link: string;
  media?: string;
  mediaType?: "video" | "image";
  index: number;
}

export default function ProjectCard({
  title,
  tagline,
  desc,
  stack,
  color,
  caseStudy,
  link,
  media,
  mediaType,
  index,
}: ProjectCardProps) {
  const { rotateX, rotateY, handleMouseMove, handleMouseLeave } = useTiltEffect();
  const scale = useSpring(1, { stiffness: 300, damping: 20 });
  const isTouch = typeof window !== "undefined" && "ontouchstart" in window;

  return (
    <motion.div
      style={{ rotateX, rotateY, scale }}
      onMouseMove={isTouch ? undefined : handleMouseMove}
      onMouseLeave={() => {
        if (!isTouch) {
          handleMouseLeave();
          scale.set(1);
        }
      }}
      whileHover={!isTouch ? { scale: 1.03, boxShadow: "0px 20px 40px rgba(0,0,0,0.25)" } : {}}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 25,
        delay: index * 0.15,
        duration: 0.7,
      }}
      className="group relative bg-card/40 border border-border rounded-2xl overflow-hidden shadow-lg backdrop-blur-xl transition-transform"
    >
      {/* Glowing aura */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-25 blur-3xl transition duration-700"
        style={{ background: `radial-gradient(circle at center, ${color}, transparent 70%)` }}
      />

      {/* Project Media */}
      {media && (
        <div className="relative w-full h-56 overflow-hidden rounded-t-2xl">
          <motion.div
            initial={{ scale: 1, opacity: 1 }}
            whileHover={!isTouch ? { scale: 1.05, opacity: 1.1 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full h-full"
          >
            {mediaType === "video" ? (
              <video
                src={media}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <Image
                src={media}
                alt={title}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index < 2}
              />
            )}
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 p-8">
        <h3 className="text-2xl font-bold mb-2">
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            {title}
          </span>
        </h3>
        {tagline && <p className="text-sm text-primary/70 font-medium mb-3">{tagline}</p>}
        <p className="text-muted-foreground text-sm mb-6">{desc}</p>

        <div className="flex flex-wrap gap-2 mb-8">
          {stack.map((tech, i) => (
            <span
              key={i}
              className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <Link href={caseStudy}>
            <Button
              size="sm"
              className="gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:opacity-90"
            >
              Case Study <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>

          <Link href={link} target="_blank">
            <Button
              size="sm"
              variant="outline"
              className="gap-2 border-primary/50 text-primary hover:bg-primary/10"
            >
              View Live <ExternalLink className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
