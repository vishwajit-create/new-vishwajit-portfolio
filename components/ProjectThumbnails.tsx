"use client";

import React from "react";
import {
  Scissors,
  Activity,
  BookOpen,
  GraduationCap,
  Sparkles,
  Server,
  CheckCircle,
  Database,
  ArrowRight,
  ShieldCheck,
  Calendar,
  Clock,
} from "lucide-react";

export function HairSalonAppThumbnail() {
  return (
    <div className="w-full h-full bg-[#0d0f12] text-white p-4 sm:p-6 flex flex-col justify-between font-sans select-none overflow-hidden relative group/thumb">
      {/* Background glow */}
      <div className="absolute -top-10 -right-10 w-44 h-44 bg-cyan-500/15 blur-3xl pointer-events-none rounded-full" />
      
      {/* Top Bar Mockup */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
            <Scissors className="w-3.5 h-3.5" />
          </div>
          <span className="font-bold text-xs tracking-wider uppercase">Luxe Salon App</span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          Live Booking
        </span>
      </div>

      {/* Main Content Showcase */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 my-2 items-center">
        {/* Left card: Service selection */}
        <div className="sm:col-span-7 bg-white/[0.04] border border-white/10 rounded-xl p-3.5 space-y-2.5">
          <div className="flex justify-between items-center text-xs">
            <span className="font-semibold text-white/90">Signature Haircut &amp; Beard</span>
            <span className="text-cyan-400 font-mono font-bold">$45</span>
          </div>
          <div className="flex items-center gap-3 text-[11px] text-white/50">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-cyan-400" /> 45 Mins
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3 text-cyan-400" /> Today, 4:00 PM
            </span>
          </div>
          <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
            <div className="w-3/4 bg-cyan-400 h-full rounded-full" />
          </div>
        </div>

        {/* Right card: Stylist & Confirmed Slot */}
        <div className="sm:col-span-5 bg-gradient-to-br from-cyan-950/40 to-blue-950/20 border border-cyan-500/30 rounded-xl p-3.5 flex flex-col justify-between">
          <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">
            Selected Slot
          </span>
          <div className="my-1">
            <div className="text-lg font-black tracking-tight text-white font-mono">10:30 AM</div>
            <div className="text-[10px] text-white/60">Master Stylist Confirmed</div>
          </div>
          <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-mono">
            <CheckCircle className="w-3 h-3" /> Slot Reserved
          </div>
        </div>
      </div>

      {/* Bottom Action Footer */}
      <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[10px] font-mono text-white/40">
        <span>TypeScript · React · Vercel Deployment</span>
        <span className="text-cyan-400 flex items-center gap-1 group-hover/thumb:translate-x-1 transition-transform">
          Preview System <ArrowRight className="w-3 h-3" />
        </span>
      </div>
    </div>
  );
}

export function MonitorBotThumbnail() {
  return (
    <div className="w-full h-full bg-[#080c10] text-emerald-400 p-4 sm:p-6 flex flex-col justify-between font-mono select-none overflow-hidden relative group/thumb">
      {/* Background glow */}
      <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-emerald-500/15 blur-3xl pointer-events-none rounded-full" />

      {/* Terminal Header */}
      <div className="flex items-center justify-between border-b border-emerald-500/20 pb-2.5 text-xs">
        <div className="flex items-center gap-2 text-white">
          <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
          <span className="font-bold tracking-wider">PY_MONITOR_BOT_DAEMON</span>
        </div>
        <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[10px]">
          UPTIME 99.98%
        </span>
      </div>

      {/* Terminal Live Output Log */}
      <div className="my-2 space-y-1.5 text-[11px] leading-relaxed bg-black/50 p-3 rounded-lg border border-emerald-500/15">
        <div className="flex items-center justify-between text-white/50 text-[10px]">
          <span>TARGET_ENDPOINT</span>
          <span>LATENCY</span>
          <span>STATUS</span>
        </div>
        <div className="flex items-center justify-between text-white/80">
          <span className="text-cyan-400">api.railway.app/health</span>
          <span className="text-white/60">38ms</span>
          <span className="text-emerald-400 font-bold">200 OK</span>
        </div>
        <div className="flex items-center justify-between text-white/80">
          <span className="text-cyan-400">render.com/worker-node</span>
          <span className="text-white/60">52ms</span>
          <span className="text-emerald-400 font-bold">200 OK</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-emerald-300/80 pt-1 border-t border-emerald-500/10">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>[SYSTEM] Idle sleeping prevented · Ping cycle: 300s</span>
        </div>
      </div>

      {/* Telemetry wave bar */}
      <div className="flex items-center justify-between text-[10px] text-white/40 pt-2 border-t border-emerald-500/20">
        <span>ENGINE: Python 3.12 · AsyncIO · HTTPX</span>
        <span className="text-emerald-400">DAEMON ACTIVE</span>
      </div>
    </div>
  );
}

export function BlogspotThumbnail() {
  return (
    <div className="w-full h-full bg-[#120f18] text-white p-4 sm:p-6 flex flex-col justify-between font-sans select-none overflow-hidden relative group/thumb">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-44 h-44 bg-purple-500/15 blur-3xl pointer-events-none rounded-full" />

      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold">
            <BookOpen className="w-3.5 h-3.5" />
          </div>
          <span className="font-bold text-xs tracking-wider uppercase">Blogspot Journal</span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
          Published Articles
        </span>
      </div>

      {/* Featured Editorial Post */}
      <div className="bg-white/[0.04] border border-white/10 rounded-xl p-4 my-2 space-y-2">
        <span className="text-[10px] font-mono uppercase tracking-widest text-purple-400 font-bold">
          Featured Post · 4 Min Read
        </span>
        <h4 className="text-sm sm:text-base font-bold text-white leading-snug">
          Architecting High-Performance Responsive Web Experiences
        </h4>
        <p className="text-xs text-white/50 line-clamp-2">
          Deep-dive into dynamic rendering, client-side hydration optimizations, and clean UI engineering.
        </p>
        <div className="flex items-center gap-2 pt-1">
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-white/70">
            #JavaScript
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-white/70">
            #WebDev
          </span>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[10px] font-mono text-white/40">
        <span>Clean Semantic HTML/CSS · Vercel Edge</span>
        <span className="text-purple-400 flex items-center gap-1 group-hover/thumb:translate-x-1 transition-transform">
          Read Articles <ArrowRight className="w-3 h-3" />
        </span>
      </div>
    </div>
  );
}

export function KshitijSonalThumbnail() {
  return (
    <div className="w-full h-full bg-[#14100b] text-white p-4 sm:p-6 flex flex-col justify-between font-sans select-none overflow-hidden relative group/thumb">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-44 h-44 bg-amber-500/15 blur-3xl pointer-events-none rounded-full" />

      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
            <GraduationCap className="w-3.5 h-3.5" />
          </div>
          <span className="font-bold text-xs tracking-wider uppercase">Academic Portal</span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
          Kshitij Sonal
        </span>
      </div>

      {/* Research Paper Preview Card */}
      <div className="bg-white/[0.04] border border-white/10 rounded-xl p-4 my-2 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400">
            Research &amp; Economics
          </span>
          <span className="text-[10px] font-mono text-white/40">Node.js / Express</span>
        </div>
        <h4 className="text-sm sm:text-base font-bold text-white leading-snug">
          Empirical Research &amp; Policy Publications Repository
        </h4>
        <div className="flex items-center gap-3 text-xs text-white/60 font-mono">
          <span>● Peer-Reviewed</span>
          <span>● Data Visuals</span>
          <span>● PDF Archive</span>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[10px] font-mono text-white/40">
        <span>Node.js · Express · Academic Portfolio</span>
        <span className="text-amber-400 flex items-center gap-1 group-hover/thumb:translate-x-1 transition-transform">
          Explore Repository <ArrowRight className="w-3 h-3" />
        </span>
      </div>
    </div>
  );
}

export function UrbanHairPlazaThumbnail() {
  return (
    <div className="w-full h-full bg-[#0d1219] text-white p-4 sm:p-6 flex flex-col justify-between font-sans select-none overflow-hidden relative group/thumb">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-44 h-44 bg-blue-500/15 blur-3xl pointer-events-none rounded-full" />

      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <span className="font-bold text-xs tracking-wider uppercase">Urban Hair Plaza</span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
          Commercial Showcase
        </span>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-2 gap-2.5 my-2">
        <div className="p-3 rounded-lg bg-white/[0.04] border border-white/10">
          <span className="text-[10px] font-mono text-blue-400 block mb-1">PREMIUM</span>
          <div className="font-bold text-xs text-white">Classic Styling</div>
          <div className="text-[10px] text-white/50 mt-1">Modern Cuts &amp; Color</div>
        </div>
        <div className="p-3 rounded-lg bg-white/[0.04] border border-white/10">
          <span className="text-[10px] font-mono text-blue-400 block mb-1">GROOMING</span>
          <div className="font-bold text-xs text-white">Royal Treatment</div>
          <div className="text-[10px] text-white/50 mt-1">Complete Makeover</div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[10px] font-mono text-white/40">
        <span>Responsive HTML5 · Modern CSS3 Grid</span>
        <span className="text-blue-400 flex items-center gap-1 group-hover/thumb:translate-x-1 transition-transform">
          View Platform <ArrowRight className="w-3 h-3" />
        </span>
      </div>
    </div>
  );
}

export function UHPCoreThumbnail() {
  return (
    <div className="w-full h-full bg-[#140b10] text-white p-4 sm:p-6 flex flex-col justify-between font-mono select-none overflow-hidden relative group/thumb">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-44 h-44 bg-rose-500/15 blur-3xl pointer-events-none rounded-full" />

      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold">
            <Server className="w-3.5 h-3.5" />
          </div>
          <span className="font-bold text-xs tracking-wider uppercase">UHP Core Architecture</span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30">
          Backend Services
        </span>
      </div>

      {/* Flow Diagram Mockup */}
      <div className="bg-black/40 border border-rose-500/20 rounded-xl p-3.5 my-2 text-xs space-y-2">
        <div className="flex items-center justify-between text-white/70">
          <div className="flex items-center gap-1.5">
            <Database className="w-3.5 h-3.5 text-rose-400" />
            <span>State Store</span>
          </div>
          <span className="text-rose-400">→</span>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Auth Pipeline</span>
          </div>
          <span className="text-rose-400">→</span>
          <div className="flex items-center gap-1.5">
            <Server className="w-3.5 h-3.5 text-cyan-400" />
            <span>REST Node</span>
          </div>
        </div>
        <div className="text-[10px] text-white/40 pt-1 border-t border-white/10">
          Data schemas, payload validators, and route controllers.
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[10px] font-mono text-white/40">
        <span>Modular JavaScript · Business Logic</span>
        <span className="text-rose-400 flex items-center gap-1 group-hover/thumb:translate-x-1 transition-transform">
          Inspect Architecture <ArrowRight className="w-3 h-3" />
        </span>
      </div>
    </div>
  );
}
