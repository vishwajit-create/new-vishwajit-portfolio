"use client";

import React from "react";
import {
  Code2,
  Terminal,
  Database,
  Cpu,
  Layers,
  ArrowRight,
  CheckCircle,
  FileCode,
  Globe,
} from "lucide-react";

export function FullStackServiceThumbnail() {
  return (
    <div className="w-full bg-[#0a0d14] rounded-xl border border-cyan-500/20 p-4 font-mono text-xs select-none shadow-2xl relative overflow-hidden">
      <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
          <span className="text-[11px] text-white/50 ml-2">App.tsx — Next.js 16</span>
        </div>
        <span className="text-[10px] text-cyan-400">TypeScript · SSR</span>
      </div>

      <div className="space-y-1 text-white/80 text-[11px] leading-relaxed">
        <p><span className="text-purple-400">export default function</span> <span className="text-cyan-400">Portfolio</span>() &#123;</p>
        <p className="pl-4"><span className="text-purple-400">const</span> [state, setState] = <span className="text-blue-400">useSignal</span>(&#123; active: <span className="text-emerald-400">true</span> &#125;);</p>
        <p className="pl-4"><span className="text-purple-400">return</span> (</p>
        <p className="pl-8 text-cyan-300">&lt;<span className="text-red-400">ResponsiveMatrix</span> theme=<span className="text-emerald-300">&quot;brutalist&quot;</span> speed=&#123;<span className="text-amber-400">1.2</span>&#125; /&gt;</p>
        <p className="pl-4">);</p>
        <p>&#125;</p>
      </div>

      <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-white/40">
        <span className="flex items-center gap-1.5 text-cyan-400">
          <Globe className="w-3 h-3" /> Fully Responsive &amp; Accessible
        </span>
        <span className="text-emerald-400">Build: 0 errors</span>
      </div>
    </div>
  );
}

export function PythonBotsServiceThumbnail() {
  return (
    <div className="w-full bg-[#070b0e] rounded-xl border border-emerald-500/20 p-4 font-mono text-xs select-none shadow-2xl relative overflow-hidden">
      <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
        <div className="flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-[11px] text-white/70">bot_daemon.py</span>
        </div>
        <span className="text-[10px] text-emerald-400 font-bold">LOOP ACTIVE</span>
      </div>

      <div className="space-y-1.5 text-[11px] text-white/70">
        <div className="flex items-center justify-between">
          <span className="text-white/40">[03:15:02]</span>
          <span className="text-cyan-400">POST /webhook/dispatch</span>
          <span className="text-emerald-400 font-bold">200 OK</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-white/40">[03:20:02]</span>
          <span className="text-cyan-400">GET /health/keep-alive</span>
          <span className="text-emerald-400 font-bold">200 OK (22ms)</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-white/40">[03:25:02]</span>
          <span className="text-cyan-400">PING /railway/service</span>
          <span className="text-emerald-400 font-bold">ACTIVE (18ms)</span>
        </div>
      </div>

      <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-emerald-400/80">
        <span>AsyncIO Engine · Background Worker</span>
        <span>Uptime: 99.9%</span>
      </div>
    </div>
  );
}

export function DatabaseServiceThumbnail() {
  return (
    <div className="w-full bg-[#0a0f0d] rounded-xl border border-teal-500/20 p-4 font-mono text-xs select-none shadow-2xl relative overflow-hidden">
      <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
        <div className="flex items-center gap-2">
          <Database className="w-3.5 h-3.5 text-teal-400" />
          <span className="text-[11px] text-white/70">schema.sql (PostgreSQL)</span>
        </div>
        <span className="text-[10px] text-teal-400">Relational Design</span>
      </div>

      <div className="grid grid-cols-2 gap-2 text-[11px]">
        <div className="bg-white/[0.04] p-2 rounded border border-white/10">
          <div className="text-teal-400 font-bold text-[10px] uppercase mb-1">TABLE: users</div>
          <div className="text-white/60 text-[10px]">● id: UUID [PK]</div>
          <div className="text-white/60 text-[10px]">● email: VARCHAR [UQ]</div>
          <div className="text-white/60 text-[10px]">● created_at: TIMESTAMPTZ</div>
        </div>

        <div className="bg-white/[0.04] p-2 rounded border border-white/10">
          <div className="text-cyan-400 font-bold text-[10px] uppercase mb-1">TABLE: orders</div>
          <div className="text-white/60 text-[10px]">● id: UUID [PK]</div>
          <div className="text-white/60 text-[10px]">● user_id: UUID [FK]</div>
          <div className="text-white/60 text-[10px]">● status: ENUM</div>
        </div>
      </div>

      <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-white/40">
        <span>Optimized Indexes · Foreign Keys · Clean Joins</span>
        <span className="text-teal-400">PostgreSQL / SQLite</span>
      </div>
    </div>
  );
}

export function APIServiceThumbnail() {
  return (
    <div className="w-full bg-[#0e0a12] rounded-xl border border-purple-500/20 p-4 font-mono text-xs select-none shadow-2xl relative overflow-hidden">
      <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
        <div className="flex items-center gap-2">
          <Cpu className="w-3.5 h-3.5 text-purple-400" />
          <span className="text-[11px] text-white/70">REST API Gateway (Node.js)</span>
        </div>
        <span className="text-[10px] text-purple-400">Express / JSON</span>
      </div>

      <div className="bg-black/50 p-2.5 rounded border border-white/10 space-y-1 text-[11px]">
        <div className="flex items-center justify-between">
          <span className="text-emerald-400 font-bold">POST</span>
          <span className="text-white/80">/api/v1/appointments</span>
          <span className="text-purple-400">201 Created</span>
        </div>
        <div className="text-[10px] text-white/50 pl-2 border-l border-purple-500/30 my-1">
          &#123; &quot;status&quot;: &quot;confirmed&quot;, &quot;slot&quot;: &quot;10:30 AM&quot;, &quot;sync&quot;: true &#125;
        </div>
      </div>

      <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-white/40">
        <span>JWT Authentication · Rate Limiting · Webhooks</span>
        <span className="text-purple-400">Ready for Production</span>
      </div>
    </div>
  );
}
