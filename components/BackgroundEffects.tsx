"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function BackgroundEffects() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: -9999, y: -9999 });

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Canvas particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    const handleResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const particleCount = Math.min(Math.floor((W * H) / 11000), 85);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      r: Math.random() * 1.8 + 0.8,
      hue: [185, 200, 260, 310][Math.floor(Math.random() * 4)],
    }));

    interface Star {
      x: number;
      y: number;
      vx: number;
      vy: number;
      len: number;
      life: number;
    }
    let stars: Star[] = [];
    let lastStar = 0;

    let mx = -9999;
    let my = -9999;
    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    const render = (time: number) => {
      ctx.clearRect(0, 0, W, H);

      // Shooting stars
      if (time - lastStar > 3800 + Math.random() * 3200) {
        lastStar = time;
        const angle = Math.PI / 4 + (Math.random() - 0.5) * 0.25;
        stars.push({
          x: Math.random() * W * 0.8,
          y: Math.random() * H * 0.4,
          vx: Math.cos(angle) * (4 + Math.random() * 3),
          vy: Math.sin(angle) * (3.5 + Math.random() * 2.5),
          len: 80 + Math.random() * 110,
          life: 1,
        });
      }

      stars = stars.filter((s) => s.life > 0);
      stars.forEach((s) => {
        const tailX = s.x - s.vx * (s.len / 6);
        const tailY = s.y - s.vy * (s.len / 6);
        const grad = ctx.createLinearGradient(tailX, tailY, s.x, s.y);
        grad.addColorStop(0, "transparent");
        grad.addColorStop(1, `rgba(0, 240, 255, ${s.life * 0.85})`);

        ctx.beginPath();
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.6;
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(s.x, s.y);
        ctx.stroke();

        s.x += s.vx;
        s.y += s.vy;
        s.life -= 0.014;
      });

      // Particles & connection web
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Soft gravitational pull to mouse
        const dx = mx - p.x;
        const dy = my - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150 && dist > 1) {
          p.x += (dx / dist) * 0.35;
          p.y += (dy / dist) * 0.35;
        }

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;

        // Connections
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const cdx = p.x - q.x;
          const cdy = p.y - q.y;
          const cdist = Math.sqrt(cdx * cdx + cdy * cdy);

          if (cdist < 120) {
            const alpha = (1 - cdist / 120) * 0.22;
            ctx.beginPath();
            ctx.strokeStyle = `hsla(${p.hue}, 90%, 65%, ${alpha})`;
            ctx.lineWidth = 0.65;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }

        // Particle Glow Dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 90%, 70%, 0.8)`;
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div aria-hidden="true" className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Top Radiant Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 origin-left z-[99990] shadow-[0_0_12px_rgba(0,240,255,0.7)]"
        style={{ scaleX }}
      />

      {/* Layer 1: Base Dark Aurora Ambient Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#070712] via-[#09090e] to-[#040810] opacity-90" />

      {/* Layer 2: Animated Floating Aurora Glow Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[650px] h-[550px] rounded-full bg-cyan-500/12 blur-[100px] animate-pulse transition-transform duration-1000" />
      <div className="absolute top-[35%] right-[-5%] w-[550px] h-[550px] rounded-full bg-blue-600/10 blur-[120px] transition-transform duration-1000" />
      <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[500px] rounded-full bg-purple-600/10 blur-[110px] transition-transform duration-1000" />
      <div className="absolute top-[60%] left-[-5%] w-[450px] h-[450px] rounded-full bg-emerald-500/8 blur-[100px] transition-transform duration-1000" />

      {/* Layer 3: Interactive Cyber Matrix Dot Grid */}
      <div
        className="absolute inset-0 opacity-[0.35] dark:opacity-[0.45]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0, 240, 255, 0.22) 1.2px, transparent 1.2px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Layer 4: Mouse Spotlight Glow on Dot Grid */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 240, 255, 0.08) 0%, transparent 80%)`,
        }}
      />

      {/* Layer 5: Full-Page Interactive Cosmic Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-65" />
    </div>
  );
}
