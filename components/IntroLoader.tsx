"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IntroLoader({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [statusText, setStatusText] = useState("INITIALIZING_CORE...");

  useEffect(() => {
    const statuses = [
      "INITIALIZING_CORE...",
      "LOADING_ASSETS...",
      "FETCHING_DEV_MATRIX...",
      "CALIBRATING_SENSORS...",
      "SYSTEM_READY",
    ];

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            onComplete?.();
          }, 350);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 8) + 3;
        const currentCap = Math.min(next, 100);
        const idx = Math.min(
          Math.floor((currentCap / 100) * statuses.length),
          statuses.length - 1
        );
        setStatusText(statuses[idx]);
        return currentCap;
      });
    }, 45);

    return () => clearInterval(timer);
  }, [onComplete]);

  const handleSkip = () => {
    setIsDone(true);
    onComplete?.();
    window.dispatchEvent(new CustomEvent("toggle-bgm"));
  };

  const circumference = 2 * Math.PI * 45; // r=45
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[9999] flex items-center justify-center p-8 bg-[var(--background)] overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Shutter columns */}
          <div className="absolute inset-0 flex pointer-events-none">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="h-full w-1/5 bg-[var(--background)] border-r border-white/5"
                initial={{ scaleY: 1 }}
                exit={{
                  scaleY: 0,
                  transition: {
                    duration: 0.8,
                    delay: i * 0.08,
                    ease: [0.76, 0, 0.24, 1],
                  },
                }}
                style={{ originY: i % 2 === 0 ? 0 : 1 }}
              />
            ))}
          </div>

          <div className="relative z-10 w-full max-w-5xl flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
            {/* Terminal logs */}
            <div className="flex flex-col gap-2 font-mono text-[11px] md:text-xs text-[var(--accent)] tracking-widest uppercase">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 0.8, y: 0 }}
                className="font-bold flex items-center gap-2"
              >
                <span className="inline-block w-2 h-2 rounded-full bg-[var(--accent)] animate-ping" />
                {statusText}
              </motion.div>
              <div className="text-[var(--foreground)] opacity-40 leading-relaxed font-mono">
                SYS_VER_3.4.1 // BY_VISHWAJIT
                <br />
                MEM_ALLOC_OK // BUFF_READY
                <br />
                STACK: PYTHON // TYPESCRIPT // SQL // NEXTJS
              </div>
            </div>

            {/* Circular counter */}
            <div className="flex flex-col items-start md:items-end gap-4">
              <div className="relative w-28 h-28 md:w-36 md:h-36">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="transparent"
                    className="text-[var(--foreground)] opacity-10"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="var(--accent)"
                    strokeWidth="2"
                    fill="transparent"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    style={{ transition: "stroke-dashoffset 0.1s linear" }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl md:text-5xl font-black tracking-tighter text-[var(--foreground)] font-mono">
                    {progress}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="font-mono text-[10px] md:text-xs tracking-[0.3em] text-[var(--foreground)] opacity-40 uppercase">
                  SYSTEM LOADING
                </span>
                <button
                  onClick={handleSkip}
                  className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent)] hover:bg-[var(--accent)] hover:text-black border border-[var(--accent)]/50 px-3 py-1 rounded cursor-pointer transition-all font-bold"
                >
                  ENTER SITE ⚡
                </button>
              </div>
            </div>
          </div>

          {/* Bottom indicator line */}
          <div
            className="absolute bottom-0 left-0 h-1 bg-[var(--accent)] transition-all duration-100 ease-out origin-left shadow-[0_0_10px_var(--accent)]"
            style={{ width: `${progress}%` }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
