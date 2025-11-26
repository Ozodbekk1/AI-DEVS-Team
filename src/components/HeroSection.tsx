import { Shirt, Sparkles, Zap, TrendingUp } from 'lucide-react';

interface HeroSectionProps {
  onProblemClick: () => void;
  onTeamClick: () => void;
}

export function HeroSection({ onProblemClick, onTeamClick }: HeroSectionProps) {
  return (
    <section className="bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30 relative overflow-hidden min-h-screen flex items-center">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4A67FF]/10 via-purple-500/10 to-[#00D1B2]/10 animate-gradient-shift"></div>
      
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#4A67FF]/20 to-purple-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#00D1B2]/20 to-blue-500/20 rounded-full blur-3xl animate-pulse-slower"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#4A67FF] rounded-full animate-float-particle"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-[#00D1B2] rounded-full animate-float-particle-delay-1"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-purple-500 rounded-full animate-float-particle-delay-2"></div>
        <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-pink-500 rounded-full animate-float-particle-delay-3"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-block">
              <span className="bg-gradient-to-r from-[#4A67FF] via-purple-500 to-[#00D1B2] text-white px-5 py-2.5 rounded-full shadow-lg animate-shimmer bg-[length:200%_100%]">
                🏆 AI500 Hackathon 2024
              </span>
            </div>
            
            <h1 className="text-[#111827] leading-tight bg-gradient-to-r from-[#111827] via-[#4A67FF] to-[#111827] bg-clip-text animate-gradient-text bg-[length:200%_100%]">
              Smart AI Outfit Generator
            </h1>
            
            <p className="text-[#374151] text-xl max-w-xl leading-relaxed">
              Your personal AI stylist that creates <span className="text-transparent bg-gradient-to-r from-[#4A67FF] to-[#00D1B2] bg-clip-text font-semibold">perfect outfits</span> from real store products.
            </p>
            
            {/* Feature highlights */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-[#4A67FF]/20 shadow-sm hover:shadow-md transition-shadow">
                <Zap className="w-4 h-4 text-yellow-500" />
                <span className="text-sm text-[#374151]">AI-Powered</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-[#00D1B2]/20 shadow-sm hover:shadow-md transition-shadow">
                <Sparkles className="w-4 h-4 text-purple-500" />
                <span className="text-sm text-[#374151]">Personalized</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-pink-500/20 shadow-sm hover:shadow-md transition-shadow">
                <TrendingUp className="w-4 h-4 text-pink-500" />
                <span className="text-sm text-[#374151]">Real Products</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={onProblemClick}
                className="relative bg-gradient-to-r from-[#4A67FF] via-purple-500 to-[#00D1B2] text-white px-8 py-4 rounded-xl hover:shadow-2xl hover:shadow-[#4A67FF]/50 transition-all hover:scale-105 hover:-translate-y-1 group overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Problem → Solution
                  <Sparkles className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00D1B2] via-purple-500 to-[#4A67FF] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              <button
                onClick={onTeamClick}
                className="bg-white text-[#111827] border-2 border-[#111827] px-8 py-4 rounded-xl hover:bg-gradient-to-r hover:from-[#111827] hover:to-gray-800 hover:text-white transition-all hover:shadow-xl hover:border-transparent"
              >
                Meet the Team
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative flex items-center justify-center lg:justify-end animate-fade-in-up animation-delay-200">
            <div className="relative w-full aspect-square max-w-lg">
              {/* Animated gradient blobs */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#4A67FF] to-[#00D1B2] rounded-full opacity-20 blur-3xl animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#4A67FF] via-purple-500 via-pink-500 to-[#00D1B2] rounded-[40%_60%_70%_30%/60%_30%_70%_40%] animate-blob shadow-2xl"></div>
              
              {/* Rotating ring */}
              <div className="absolute inset-8 border-4 border-dashed border-white/30 rounded-full animate-spin-very-slow"></div>
              
              {/* Icon with glow effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative animate-float">
                  <div className="absolute inset-0 bg-white/40 rounded-full blur-2xl animate-pulse"></div>
                  <Shirt className="w-52 h-52 text-white drop-shadow-2xl relative z-10 animate-gentle-bounce" strokeWidth={1.5} />
                </div>
              </div>
              
              {/* Orbiting dots */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg"></div>
              </div>
              <div className="absolute inset-0 animate-spin-reverse">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}