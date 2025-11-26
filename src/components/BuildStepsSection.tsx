/** @format */

import { Code, Cpu, Wand2, Layout, CheckCircle2 } from "lucide-react";

export function BuildStepsSection() {
  const buildSteps = [
    { step: "1", text: "Collect product data", icon: Code },
    { step: "2", text: "Build measurement input", icon: Layout },
    { step: "3", text: "AI recommendation logic", icon: Cpu },
    { step: "4", text: "Outfit generation", icon: Wand2 },
    { step: "5", text: "Result screen UI", icon: CheckCircle2 },
  ];

  const tools = [
    { name: "NodeJs", gradient: "from-green-400 to-emerald-500" },
    { name: "ExpressJs", gradient: "from-blue-400 to-indigo-500" },
    { name: "Optimization", gradient: "from-purple-400 to-pink-500" },
    { name: "Next.js", gradient: "from-orange-400 to-red-500" },
  ];

  return (
    <section className='bg-white py-24 relative overflow-hidden'>
      <div className='absolute top-0 right-0 w-96 h-96 bg-[#00D1B2]/5 rounded-full blur-3xl'></div>
      <div className='absolute bottom-0 left-0 w-96 h-96 bg-[#4A67FF]/5 rounded-full blur-3xl'></div>

      <div className='max-w-7xl mx-auto px-6 relative'>
        <div className='text-center mb-16'>
          <h2 className='text-[#111827] mb-4'>Implementation Plan</h2>
          <p className='text-[#374151] text-xl max-w-2xl mx-auto'>
            Step-by-step approach to building the solution
          </p>
          <div className='w-24 h-1 bg-gradient-to-r from-[#4A67FF] to-[#00D1B2] mx-auto rounded-full mt-6'></div>
        </div>

        <div className='grid lg:grid-cols-2 gap-12'>
          {/* Left Column */}
          <div className='space-y-6'>
            <div className='bg-gradient-to-r from-[#4A67FF] to-[#00D1B2] rounded-2xl p-8 text-white shadow-xl'>
              <h3 className='text-white mb-6'>How We Will Build It</h3>
            </div>
            <ul className='space-y-4'>
              {buildSteps.map((item, index) => (
                <li
                  key={index}
                  className='group flex items-center gap-4 text-[#374151] py-4 px-6 bg-gradient-to-r from-white to-gray-50 rounded-xl border-2 border-gray-100 hover:border-[#4A67FF] hover:shadow-lg transition-all'>
                  <div className='bg-gradient-to-br from-[#4A67FF] to-[#00D1B2] rounded-xl p-3 group-hover:scale-110 transition-transform'>
                    <item.icon className='w-5 h-5 text-white' />
                  </div>
                  <span className='flex-1'>{item.text}</span>
                  <span className='text-[#4A67FF] text-xl'>{item.step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div className='space-y-6'>
            <div className='bg-gradient-to-r from-[#4A67FF] to-[#00D1B2] rounded-2xl p-8 text-white shadow-xl'>
              <h3 className='text-white mb-6'>Tools Used</h3>
            </div>
            <div className='grid grid-cols-2 gap-4'>
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className={`group relative text-center py-8 px-6 bg-gradient-to-br ${tool.gradient} text-white rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105 overflow-hidden`}>
                  <div className='absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity'></div>
                  <span className='relative z-10 drop-shadow-lg'>
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
