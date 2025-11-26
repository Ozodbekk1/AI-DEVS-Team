import { AlertCircle, CheckCircle } from 'lucide-react';

export function ProblemSolutionSection() {
  const problems = [
    "People struggle choosing outfits that match their body & style.",
    "Stores lose sales because of weak personalization.",
    "Hard to preview full outfits without trying."
  ];

  const solutions = [
    "AI generates full outfits using real store products.",
    "Personalized based on measurements and preferences.",
    "Smart styling chatbot helps users choose faster."
  ];

  return (
    <section id="problem-solution" className="bg-gradient-to-b from-[#F7F9FC] via-purple-50/30 to-white py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-gradient-to-br from-red-400/20 to-pink-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse-slower"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-[#111827] mb-4 bg-gradient-to-r from-[#111827] via-red-600 to-green-600 bg-clip-text">The Challenge We're Solving</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-red-500 via-pink-500 to-green-500 mx-auto rounded-full shadow-lg"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Problem Column */}
          <div className="bg-gradient-to-br from-white to-red-50/30 rounded-3xl p-8 shadow-xl border-2 border-red-100 hover:shadow-2xl hover:border-red-300 transition-all hover:-translate-y-2 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="bg-gradient-to-br from-red-500 to-pink-600 p-3 rounded-xl shadow-lg">
                <AlertCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-[#111827] bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text">The Problem</h3>
            </div>
            <ul className="space-y-5 relative z-10">
              {problems.map((problem, index) => (
                <li key={index} className="flex gap-4 items-start group/item">
                  <div className="bg-gradient-to-br from-red-100 to-pink-100 p-2 rounded-lg group-hover/item:scale-110 group-hover/item:shadow-md transition-all">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                  </div>
                  <span className="text-[#374151] leading-relaxed">{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution Column */}
          <div className="bg-gradient-to-br from-[#4A67FF] via-purple-500 to-[#00D1B2] rounded-3xl p-8 shadow-2xl hover:shadow-[#4A67FF]/50 transition-all hover:-translate-y-2 text-white relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            {/* Animated shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm shadow-lg">
                <CheckCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-white">Our Solution</h3>
            </div>
            <ul className="space-y-5 relative z-10">
              {solutions.map((solution, index) => (
                <li key={index} className="flex gap-4 items-start group/item">
                  <div className="bg-white/20 p-2 rounded-lg group-hover/item:bg-white/30 group-hover/item:scale-110 transition-all backdrop-blur-sm shadow-lg">
                    <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                  </div>
                  <span className="text-white leading-relaxed">{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}