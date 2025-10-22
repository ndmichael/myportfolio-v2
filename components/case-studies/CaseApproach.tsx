"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ApproachProps {
  approach: string;
  image?: string;
}

export default function CaseApproach({ approach, image }: ApproachProps) {
  return (
    <section className="py-20 px-6 md:px-16 lg:px-28">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-primary">Approach</h2>
          <p className="text-muted-foreground leading-relaxed">{approach}</p>
        </motion.div>

        {image && (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={image}
              alt="Architecture or UI preview"
              width={500}
              height={350}
              className="rounded-2xl shadow-lg"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
}
