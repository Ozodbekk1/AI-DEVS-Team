import { useEffect, useState } from 'react';

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollProgress = (window.scrollY / totalHeight) * 100;
      setProgress(scrollProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1.5 bg-gray-200/50 backdrop-blur-sm">
      <div
        className="h-full bg-gradient-to-r from-[#4A67FF] via-purple-500 to-[#00D1B2] transition-all duration-300 ease-out shadow-lg shadow-[#4A67FF]/50"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}
