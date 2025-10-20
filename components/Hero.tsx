"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowRight, GithubIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import AnimatedMeshGradient from "@/components/AnimatedMeshGradient";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.8, ease: "easeOut" },
  }),
};

export default function Hero() {
  // Mouse reactive background setup
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [8, -8]), {
    stiffness: 50,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-8, 8]), {
    stiffness: 50,
    damping: 20,
  });

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-24 text-center overflow-hidden">
      {/* Animated gradient background */}
      <AnimatedMeshGradient />
      
      <div className="relative z-10 max-w-3xl">
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-600/10 blur-3xl"
                animate={{
                backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                }}
                transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
                }}
            />

            {/* Animated mesh overlay */}
            <motion.div
                style={{
                rotateX,
                rotateY,
                }}
                className="absolute inset-0 opacity-[0.08] bg-[url('/mesh.svg')] bg-cover bg-center will-change-transform"
            />

            {/* Hero content */}
            <div className="relative z-10 max-w-3xl">
                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={0.1}
                    className="text-sm uppercase tracking-[0.2em] text-primary/80 mb-3"
                >
                Halo, I’m Michael
                </motion.p>

                <motion.h1
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={0.3}
                    className="text-4xl md:text-6xl font-bold leading-tight mb-5 tracking-tight"
                >
                I build{" "}
                <span className="relative text-primary">
                    scalable
                    <span className="absolute left-0 bottom-0 w-full h-[3px] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse" />
                </span>{" "}
                & user-focused digital products.
                </motion.h1>

                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={0.5}
                    className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-10"
                >
                Full-stack engineer & system architect crafting SaaS apps, developer
                tools, and intuitive experiences that scale beautifully.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={0.7}
                    className="flex flex-wrap justify-center gap-4 mb-18"
                >
                <Link href="/projects">
                    <Button
                    size="lg"
                    className="gap-2 bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 text-white hover:opacity-90 transition"
                    >
                    View Projects <ArrowRight className="w-4 h-4" />
                    </Button>
                </Link>

                <Link href="https://github.com/" target="_blank">
                    <Button
                        variant="outline"
                        size="lg"
                        className="gap-2 border-indigo-500 text-indigo-500 hover:bg-indigo-500/10 hover:shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                    >
                    <GithubIcon className="w-4 h-4" /> GitHub
                    </Button>
                </Link>

                <Link href="https://linkedin.com/" target="_blank">
                    <Button
                    variant="outline"
                    size="lg"
                    className="gap-2 border-[#0A66C2] text-[#0A66C2] hover:bg-[#0A66C2]/10"
                    >
                    <LinkedinIcon className="w-4 h-4 text-[#0A66C2]" /> LinkedIn
                    </Button>
                </Link>
                </motion.div>
            </div>

            {/* Floating hint */}
            <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.6 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-sm text-muted-foreground"
            >
                ↓ Scroll to explore
            </motion.div>
      </div>
      
    </section>
  );
}
