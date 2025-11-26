export function WhyUsSection() {
  const reasons = [
    { icon: "⚡", text: "Fast Prototyping Team", color: "from-yellow-400 via-orange-400 to-orange-500" },
    { icon: "🤖", text: "Strong AI & Engineering Skills", color: "from-blue-400 via-indigo-400 to-indigo-500" },
    { icon: "🎨", text: "Modern UX & Product Thinking", color: "from-pink-400 via-purple-400 to-purple-500" },
    { icon: "🛍️", text: "Understanding Retail Pain Points", color: "from-green-400 via-teal-400 to-teal-500" }
  ];

  return (
    <section className="bg-gradient-to-b from-[#F7F9FC] via-blue-50/30 to-white py-24 relative overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-3xl animate-float-slower"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-[#111827] mb-4 bg-gradient-to-r from-[#111827] via-[#4A67FF] to-[#00D1B2] bg-clip-text">
            Why Our Team Can Solve This
          </h2>
          <p className="text-[#374151] text-xl max-w-2xl mx-auto">
            We combine technical expertise with real-world understanding
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#4A67FF] via-purple-500 to-[#00D1B2] mx-auto rounded-full mt-6 shadow-lg"></div>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 text-center space-y-5 hover:shadow-2xl transition-all border border-gray-100 hover:border-transparent hover:-translate-y-3 relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Animated border gradient on hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                <div className={`absolute inset-[-2px] bg-gradient-to-br ${reason.color} rounded-2xl -z-10`}></div>
              </div>
              
              <div className="text-6xl transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 relative z-10">
                {reason.icon}
              </div>
              <p className="text-[#374151] group-hover:text-[#111827] transition-colors relative z-10">
                {reason.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}