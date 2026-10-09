"use client";

import { useState } from "react";
import IntroLoader from "@/components/IntroLoader";
import BackgroundEffects from "@/components/BackgroundEffects";
import NoiseOverlay from "@/components/NoiseOverlay";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeTicker from "@/components/MarqueeTicker";
import ServicesSection from "@/components/ServicesSection";
import HorizontalWorks from "@/components/HorizontalWorks";
import SkillsSection from "@/components/SkillsSection";
import GitHubStats from "@/components/GitHubStats";
import AboutSection from "@/components/AboutSection";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  const [loaderComplete, setLoaderComplete] = useState(false);

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--accent)] selection:text-black">
        {/* Cyber Intro Loader */}
        <IntroLoader onComplete={() => setLoaderComplete(true)} />

        {/* Background Aurora, Dot Grid Matrix & Cosmic Particle Canvas */}
        <BackgroundEffects />

        {/* Noise overlay texture */}
        <NoiseOverlay />

        {/* Magnetic Custom Cursor */}
        <CustomCursor />

        {/* Floating Brutalist Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="relative z-10 flex flex-col">
          <HeroSection />
          <MarqueeTicker />
          <ServicesSection />
          <HorizontalWorks />
          <SkillsSection />
          <GitHubStats />
          <AboutSection />
          <ContactFooter />
        </main>
      </div>
    </SmoothScroll>
  );
}
