"use client";

import { useMotionValue, useSpring, useTransform } from "framer-motion";
import { useCallback } from "react";

export function useTiltEffect() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // spring physics for smoothness
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), {
    stiffness: 150,
    damping: 25,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), {
    stiffness: 150,
    damping: 25,
  });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const rect = (e.target as HTMLElement).getBoundingClientRect();
      const offsetX = (e.clientX - rect.left) / rect.width - 0.5;
      const offsetY = (e.clientY - rect.top) / rect.height - 0.5;
      x.set(offsetX);
      y.set(offsetY);
    },
    [x, y]
  );

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return {
    rotateX,
    rotateY,
    handleMouseMove,
    handleMouseLeave,
  };
}
