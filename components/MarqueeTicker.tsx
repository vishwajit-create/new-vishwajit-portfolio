"use client";

import { motion } from "framer-motion";

const ROW_ONE = [
  "PYTHON DEVELOPER ✦",
  "BOT BUILDER ✦",
  "FULL STACK ENGINEER ✦",
  "SQL & DATABASES ✦",
  "OPEN SOURCE CREATOR ✦",
];

const ROW_TWO = [
  "PYTHON ///",
  "JAVASCRIPT ///",
  "TYPESCRIPT ///",
  "POSTGRESQL ///",
  "NODE.JS ///",
  "SQLITE ///",
  "NEXT.JS ///",
];

export default function MarqueeTicker() {
  return (
    <div className="relative w-full overflow-hidden py-20 my-10 perspective-1000">
      <section className="py-10 bg-[var(--background)]/80 backdrop-blur-xl border-y border-[var(--accent)]/20 relative z-10 w-[112%] -left-[6%] -rotate-2 hover:rotate-0 transition-transform duration-700 ease-[0.76,0,0.24,1] origin-center shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
        {/* Row 1 - Leftward scroll */}
        <div
          className="overflow-hidden whitespace-nowrap flex relative z-10"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          }}
        >
          <motion.div
            className="flex gap-8 whitespace-nowrap uppercase font-black text-[9vw] md:text-[5vw] leading-[0.9] tracking-tighter"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 24 }}
          >
            {[...ROW_ONE, ...ROW_ONE, ...ROW_ONE, ...ROW_ONE].map((text, i) => (
              <span
                key={i}
                className={`transition-all duration-300 cursor-default hover:scale-105 ${
                  i % 2 === 0
                    ? "text-stroke opacity-60 hover:opacity-100 hover:text-[var(--accent)] hover:text-stroke-0"
                    : "text-[var(--foreground)] hover:text-[var(--accent)]"
                }`}
              >
                {text}
              </span>
            ))}
          </motion.div>
        </div>

        <div className="h-4 md:h-6" />

        {/* Row 2 - Rightward scroll */}
        <div
          className="overflow-hidden whitespace-nowrap flex relative z-10"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          }}
        >
          <motion.div
            className="flex gap-8 whitespace-nowrap uppercase font-black text-[9vw] md:text-[5vw] leading-[0.9] tracking-tighter"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 28 }}
          >
            {[...ROW_TWO, ...ROW_TWO, ...ROW_TWO, ...ROW_TWO].map((text, i) => (
              <span
                key={i}
                className={`transition-all duration-300 cursor-default hover:scale-105 ${
                  i % 2 === 0
                    ? "text-[var(--foreground)] opacity-70 hover:opacity-100 hover:text-[var(--accent)]"
                    : "text-stroke opacity-50 hover:opacity-100 hover:text-[var(--accent)] hover:text-stroke-0"
                }`}
              >
                {text}
              </span>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
