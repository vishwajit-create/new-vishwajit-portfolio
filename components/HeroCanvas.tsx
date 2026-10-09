"use client";

import { useEffect, useRef } from "react";

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Particle nodes
    const particleCount = Math.min(Math.floor((width * height) / 14000), 75);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      r: Math.random() * 1.8 + 0.8,
      hue: Math.random() > 0.5 ? 185 : 200, // cyan / light blue
    }));

    let mouseX = -9999;
    let mouseY = -9999;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    let lastShootingStar = 0;
    interface ShootingStar {
      x: number;
      y: number;
      vx: number;
      vy: number;
      len: number;
      life: number;
    }
    let stars: ShootingStar[] = [];

    const render = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      // Random shooting star
      if (time - lastShootingStar > 4000 + Math.random() * 3000) {
        lastShootingStar = time;
        const angle = Math.PI / 4 + (Math.random() - 0.5) * 0.2;
        stars.push({
          x: Math.random() * width * 0.7,
          y: Math.random() * height * 0.4,
          vx: Math.cos(angle) * (4 + Math.random() * 3),
          vy: Math.sin(angle) * (4 + Math.random() * 3),
          len: 70 + Math.random() * 100,
          life: 1,
        });
      }

      // Draw shooting stars
      stars = stars.filter((s) => s.life > 0);
      stars.forEach((s) => {
        const tailX = s.x - s.vx * (s.len / 6);
        const tailY = s.y - s.vy * (s.len / 6);
        const grad = ctx.createLinearGradient(tailX, tailY, s.x, s.y);
        grad.addColorStop(0, "transparent");
        grad.addColorStop(1, `rgba(0, 240, 255, ${s.life * 0.8})`);

        ctx.beginPath();
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.6;
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(s.x, s.y);
        ctx.stroke();

        s.x += s.vx;
        s.y += s.vy;
        s.life -= 0.015;
      });

      // Update & draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Soft mouse pull
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 140 && dist > 1) {
          p.x += (dx / dist) * 0.28;
          p.y += (dy / dist) * 0.28;
        }

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const cdx = p.x - q.x;
          const cdy = p.y - q.y;
          const cdist = Math.sqrt(cdx * cdx + cdy * cdy);

          if (cdist < 110) {
            const alpha = (1 - cdist / 110) * 0.2;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 90%, 65%, 0.75)`;
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 opacity-40 transition-opacity duration-1000"
    />
  );
}
