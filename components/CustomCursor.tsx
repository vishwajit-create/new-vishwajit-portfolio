"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 350 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if device supports hover / is desktop
    if (window.matchMedia("(pointer: fine)").matches) {
      setMounted(true);
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Check if target is interactive
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest("a, button, input, textarea, [data-interactive='true'], .cursor-pointer")
        );
        setIsHovered(isInteractive);
      }
    };

    const handleMouseDown = () => setIsPointer(true);
    const handleMouseUp = () => setIsPointer(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <>
      {/* Outer follow circle */}
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 pointer-events-none z-[99999] rounded-full border border-[var(--accent)] mix-blend-difference"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? 48 : isPointer ? 22 : 32,
          height: isHovered ? 48 : isPointer ? 22 : 32,
          backgroundColor: isHovered ? "rgba(var(--accent-rgb), 0.15)" : "rgba(var(--accent-rgb), 0)",
          borderColor: isHovered ? "var(--accent)" : "rgba(255, 255, 255, 0.4)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
      />

      {/* Center dot */}
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 pointer-events-none z-[99999] rounded-full bg-[var(--accent)] mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? 6 : 4,
          height: isHovered ? 6 : 4,
          opacity: 1,
        }}
        transition={{ duration: 0.1 }}
      />
    </>
  );
}
