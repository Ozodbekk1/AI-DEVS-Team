import { Lightbulb, Wrench, Rocket, Sparkles } from 'lucide-react';

export function RoadmapSection() {
  const stages = [
    {
      title: "Idea",
      icon: Lightbulb,
      items: ["Research", "Define Problems", "AI Concept"],
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Prototype",
      icon: Wrench,
      items: ["User Input Form", "AI Output Text", "Mock Catalog"],
      color: "from-blue-400 to-indigo-500"
    },
    {
      title: "MVP",
      icon: Rocket,
      items: ["Real Catalog", "AI Outfit Builder", "Admin Panel"],
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "Launch",
      icon: Sparkles,
      items: ["Store Integration", "A/B Testing", "Final UI"],
      color: "from-green-400 to-teal-500"
    }
  ];

  return (
    <section className="bg-white py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-96 bg-gradient-to-r from-[#4A67FF]/5 via-[#00D1B2]/5 to-[#4A67FF]/5 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-[#111827] mb-4">Product Roadmap</h2>
          <p className="text-[#374151] text-xl max-w-2xl mx-auto">
            Our journey from concept to launch
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#4A67FF] to-[#00D1B2] mx-auto rounded-full mt-6"></div>
        </div>
        
        <div className="relative">
          {/* Timeline line - gradient */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-2 bg-gradient-to-r from-[#4A67FF] via-[#6B7FFF] to-[#00D1B2] rounded-full shadow-lg"></div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {stages.map((stage, index) => (
              <div key={index} className="relative group">
                {/* Icon with glow */}
                <div className="flex justify-center mb-8">
                  <div className={`relative bg-gradient-to-br ${stage.color} rounded-2xl p-5 shadow-xl hover:shadow-2xl transition-all hover:scale-110`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${stage.color} rounded-2xl blur-xl opacity-50`}></div>
                    <stage.icon className="w-10 h-10 text-white relative z-10" strokeWidth={2} />
                  </div>
                </div>
                
                {/* Content Card */}
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 space-y-4 shadow-lg hover:shadow-xl transition-all border border-gray-100 group-hover:border-transparent group-hover:-translate-y-2">
                  <h3 className="text-center text-[#111827]">{stage.title}</h3>
                  <ul className="space-y-3">
                    {stage.items.map((item, idx) => (
                      <li key={idx} className="text-[#374151] text-center py-2 px-3 bg-white rounded-lg border border-gray-100">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}