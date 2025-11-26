/** @format */

import { Github, Linkedin, Figma } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function TeamSection() {
  const team = [
    {
      name: "Full Stack Developer & Team Lead",
      role: "Full Stack Developer & Team Lead",
      skills: "React • Next.js • Node.js",
      image: "/ozodbek.jpg",
      socials: [
        { icon: Github, href: "#" },
        { icon: Linkedin, href: "#" },
      ],
    },
    {
      name: "AI Engineer",
      role: "AI Engineer",
      skills: "Python • ML • Prompt Engineering",
      image:
        "https://images.unsplash.com/photo-1615348294633-38751a1fdf8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHRlY2glMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY0MTQ1MzE3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      socials: [
        { icon: Github, href: "#" },
        { icon: Linkedin, href: "#" },
      ],
    },
    {
      name: "UI/UX Designer",
      role: "UI/UX Designer",
      skills: "Figma • UX • Product Flow",
      image:
        "https://images.unsplash.com/photo-1673101609020-4b5e203885bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHdvcmtzcGFjZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDA3NTczMnww&ixlib=rb-4.1.0&q=80&w=1080",
      socials: [
        { icon: Figma, href: "#" },
        { icon: Linkedin, href: "#" },
      ],
    },
  ];

  return (
    <section id='team' className='bg-white py-24 relative overflow-hidden'>
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#4A67FF]/5 rounded-full blur-3xl'></div>

      <div className='max-w-7xl mx-auto px-6 relative'>
        <div className='text-center mb-16'>
          <h2 className='text-[#111827] mb-4'>Meet Our Team</h2>
          <p className='text-[#374151] text-xl max-w-2xl mx-auto'>
            A diverse team with expertise in AI, engineering, and design
          </p>
          <div className='w-24 h-1 bg-gradient-to-r from-[#4A67FF] to-[#00D1B2] mx-auto rounded-full mt-6'></div>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {team.map((member, index) => (
            <div
              key={index}
              className='group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-[#4A67FF]/30 hover:-translate-y-2'>
              <div className='flex flex-col items-center text-center space-y-5'>
                <div className='relative'>
                  <div className='absolute inset-0 bg-gradient-to-br from-[#4A67FF] to-[#00D1B2] rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity'></div>
                  <ImageWithFallback
                    src={member.image}
                    alt={member.role}
                    className='w-28 h-28 rounded-full object-cover border-4 border-white shadow-xl relative z-10 ring-4 ring-gray-100 group-hover:ring-[#4A67FF]/30 transition-all'
                  />
                </div>
                <div>
                  <p className='text-[#111827] mb-2'>{member.role}</p>
                </div>
                <div className='inline-block bg-gradient-to-r from-[#4A67FF] to-[#00D1B2] text-white px-5 py-2.5 rounded-lg shadow-md'>
                  {member.skills}
                </div>
                <div className='flex gap-4 pt-3'>
                  {member.socials.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      className='p-3 rounded-xl bg-gray-50 text-[#374151] hover:bg-[#4A67FF] hover:text-white transition-all hover:scale-110 hover:shadow-lg'
                      aria-label='Social link'>
                      <social.icon className='w-5 h-5' />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
