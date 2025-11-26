export function TechStackSection() {
  const stacks = [
    {
      title: "Frontend",
      items: ["Next.js", "React", "TailwindCSS"],
      gradient: "from-blue-500 via-cyan-500 to-cyan-600",
      icon: "💻"
    },
    {
      title: "Backend",
      items: ["Node.js", "PostgreSQL", "Supabase"],
      gradient: "from-purple-500 via-pink-500 to-pink-600",
      icon: "⚙️"
    },
    {
      title: "AI",
      items: ["OpenAI API", "Vision Models", "Pinecone / Qdrant"],
      gradient: "from-orange-500 via-red-500 to-red-600",
      icon: "🧠"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-[#F7F9FC] via-purple-50/20 to-white py-24 relative overflow-hidden">
      {/* Gradient background animations */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-gradient-to-br from-orange-400/20 to-red-500/20 rounded-full blur-3xl animate-pulse-slower"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-[#111827] mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text">Tech Stack</h2>
          <p className="text-[#374151] text-xl max-w-2xl mx-auto">
            Built with modern, scalable technologies
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 mx-auto rounded-full mt-6 shadow-lg"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {stacks.map((stack, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 space-y-6 shadow-xl hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-transparent hover:-translate-y-3 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stack.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Animated gradient border */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`absolute inset-[-2px] bg-gradient-to-br ${stack.gradient} rounded-3xl -z-10 animate-shimmer bg-[length:200%_100%]`}></div>
              </div>
              
              <div className="relative z-10">
                <div className="text-6xl mb-6 text-center transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">{stack.icon}</div>
                <h3 className={`text-center bg-gradient-to-r ${stack.gradient} bg-clip-text text-transparent group-hover:scale-110 transition-transform`}>{stack.title}</h3>
              </div>
              
              <ul className="space-y-3 relative z-10">
                {stack.items.map((item, idx) => (
                  <li
                    key={idx}
                    className={`text-[#374151] text-center py-3 px-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200 hover:border-transparent hover:shadow-lg hover:scale-105 transition-all group-hover:bg-gradient-to-r group-hover:${stack.gradient} group-hover:text-white`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}