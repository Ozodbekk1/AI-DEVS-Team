import { useState, useEffect } from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';

interface FloatingCTAProps {
  onCtaClick: () => void;
}

export function FloatingCTA({ onCtaClick }: FloatingCTAProps) {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll to top button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 bg-gradient-to-br from-[#4A67FF] to-[#00D1B2] text-white p-4 rounded-full shadow-2xl hover:shadow-[#4A67FF]/50 hover:scale-110 transition-all duration-300 group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6 group-hover:translate-y-[-2px] transition-transform" />
        </button>
      )}

      {/* Floating CTA badge */}
      <div className="fixed bottom-8 left-8 z-40 hidden lg:block animate-bounce-slow">
        <button
          onClick={onCtaClick}
          className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white px-6 py-3 rounded-full shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 flex items-center gap-2 group"
        >
          <Sparkles className="w-5 h-5 animate-spin-slow" />
          <span>Join Our Team</span>
        </button>
      </div>
    </>
  );
}
