// "use client";

// import { useEffect, useRef } from "react";

// export default function AnimatedMeshGradient() {
//   const gradientRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       if (!gradientRef.current) return;
//       const { innerWidth, innerHeight } = window;

//       // Calculate relative mouse position (0–100%)
//       const x = (e.clientX / innerWidth) * 100;
//       const y = (e.clientY / innerHeight) * 100;

//       // Apply as background position to create smooth parallax movement
//       gradientRef.current.style.backgroundPosition = `${x}% ${y}%`;
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return <div ref={gradientRef} className="animated-mesh-gradient" />;
// }


"use client";

import { useEffect, useRef } from "react";

export default function AnimatedMeshGradient() {
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!gradientRef.current) return;

      const { innerWidth, innerHeight } = window;
      // Get mouse position in range (-50 to +50)
      const x = ((e.clientX / innerWidth) - 0.5) * 100;
      const y = ((e.clientY / innerHeight) - 0.5) * 100;

      // Amplify slightly for visible movement
      const offsetX = 50 + x * 0.2;
      const offsetY = 50 + y * 0.2;

      gradientRef.current.style.backgroundPosition = `${offsetX}% ${offsetY}%`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <div ref={gradientRef} className="animated-mesh-gradient" />;
}
