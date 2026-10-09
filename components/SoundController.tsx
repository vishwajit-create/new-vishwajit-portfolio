"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function SoundController() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio("/bgm.mp3");
    audio.loop = true;
    audio.volume = 0.45;
    audioRef.current = audio;

    const handleGlobalToggle = () => {
      if (audio.paused) {
        audio.play().then(() => setIsPlaying(true)).catch(() => {});
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    };

    window.addEventListener("toggle-bgm", handleGlobalToggle);

    return () => {
      window.removeEventListener("toggle-bgm", handleGlobalToggle);
      audio.pause();
    };
  }, []);

  const toggleSound = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch((e) => {
        console.warn("Audio play blocked by browser:", e);
      });
    }
  }, [isPlaying]);

  return (
    <div className="flex items-center gap-3">
      {/* Animated Equalizer Visualizer */}
      <div className="flex items-end gap-1 h-3.5">
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className={`w-0.5 rounded-full transition-all duration-300 ${
              isPlaying
                ? "bg-[var(--accent)] animate-pulse"
                : "bg-[var(--foreground)] opacity-25"
            }`}
            style={{
              height: isPlaying ? `${[65, 100, 45, 85][i]}%` : "25%",
              animationDelay: `${i * 140}ms`,
              animationDuration: isPlaying ? "750ms" : "0ms",
            }}
          />
        ))}
      </div>

      <button
        onClick={toggleSound}
        className="flex items-center gap-1.5 text-xs font-mono tracking-widest uppercase text-[var(--foreground)] opacity-70 hover:opacity-100 hover:text-[var(--accent)] transition-colors cursor-pointer select-none"
        aria-label="Toggle background music"
      >
        {isPlaying ? (
          <>
            <Volume2 className="w-3.5 h-3.5 text-[var(--accent)] animate-bounce" />
            <span className="text-[var(--accent)] font-bold">MUTE BGM</span>
          </>
        ) : (
          <>
            <VolumeX className="w-3.5 h-3.5" />
            <span>PLAY BGM</span>
          </>
        )}
      </button>
    </div>
  );
}
