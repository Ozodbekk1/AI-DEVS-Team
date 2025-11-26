/** @format */
import "./index.css";
import { useEffect, useState } from "react";
import { HeroSection } from "./components/HeroSection";
import { ProblemSolutionSection } from "./components/ProblemSolutionSection";
import { TeamSection } from "./components/TeamSection";
import { WhyUsSection } from "./components/WhyUsSection";
import { RoadmapSection } from "./components/RoadmapSection";
import { TechStackSection } from "./components/TechStackSection";
import { BuildStepsSection } from "./components/BuildStepsSection";
import { Footer } from "./components/Footer";
import { ScrollProgress } from "./components/ScrollProgress";
import { FloatingCTA } from "./components/FloatingCTA";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className='min-h-screen bg-[#F7F9FC] relative overflow-hidden'>
      {/* Animated gradient background orbs */}
      <div className='fixed inset-0 pointer-events-none overflow-hidden'>
        <div
          className='absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#4A67FF]/20 to-[#00D1B2]/20 rounded-full blur-3xl animate-float-slow'
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}></div>
        <div
          className='absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#00D1B2]/20 to-[#4A67FF]/20 rounded-full blur-3xl animate-float-slower'
          style={{ transform: `translateY(${-scrollY * 0.2}px)` }}></div>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse-slow'></div>
      </div>

      <ScrollProgress />
      <FloatingCTA onCtaClick={() => scrollToSection("team")} />

      <HeroSection
        onProblemClick={() => scrollToSection("problem-solution")}
        onTeamClick={() => scrollToSection("team")}
      />
      <ProblemSolutionSection />
      <TeamSection />
      <WhyUsSection />
      <RoadmapSection />
      <TechStackSection />
      <BuildStepsSection />
      <Footer />
      <Analytics />
    </div>
  );
}
