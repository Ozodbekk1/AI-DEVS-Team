/** @format */
import { Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import type { Variants, Easing } from "framer-motion";

import { ImageWithFallback } from "./figma/ImageWithFallback";

const MotionDiv = motion.div;
const MotionH2 = motion.h2;
const MotionP = motion.p;

// Container animation
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.15 },
  },
};

// Item animation with proper easing type
const easeOutCubic: Easing = [0.17, 0.55, 0.55, 1];

const itemVariants: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "tween", duration: 0.8, ease: easeOutCubic },
  },
};

export function TeamSection() {
  const team = [
    {
      name: "Ozodbek",
      role: "Full Stack Developer & Team Lead",
      skills: "React • Next.js • Node.js • TypeScript",
      image: "/ozodbek.jpg",
      socials: [
        { icon: Github, href: "https://github.com/ozodbekk1" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/ozodbekw" },
      ],
    },
    {
      name: "Islombek",
      role: "AI Engineer",
      skills: "Python • Machine Learning • LLMs • Prompt Engineering",
      image: "/islombek.jpg",
      socials: [
        { icon: Github, href: "https://github.com/mamajonov023" },
        {
          icon: Linkedin,
          href: "https://www.linkedin.com/in/islombek-mamajonov-a1271a344",
        },
      ],
    },
    {
      name: "Hojiakbar",
      role: "UI/UX Designer",
      skills: "Figma • Framer • User Research • Design Systems",
      image: "/hojiakbar.jpg",
      socials: [
        { icon: Github, href: "https://github.com/byteMino" },
        {
          icon: Linkedin,
          href: "https://www.linkedin.com/in/minojidinov-h-934a4139a",
        },
      ],
    },
  ];

  return (
    <section id='team' className='relative py-24 lg:py-32 overflow-hidden'>
      {/* Background gradients */}
      <div className='absolute inset-0 bg-gradient-to-br from-white via-purple-50/40 to-blue-50/30' />
      <div className='absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-white/40' />

      {/* Animated blobs */}
      <div className='absolute top-0 -left-40 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-blue-400/10 rounded-full blur-3xl animate-pulse-slow' />
      <div className='absolute bottom-0 -right-40 w-96 h-96 bg-gradient-to-tl from-teal-400/20 via-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse-slower' />
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#4A67FF]/5 via-purple-500/5 to-[#00D1B2]/5 rounded-full blur-3xl animate-gradient-shift opacity-60' />

      <div className='relative max-w-7xl mx-auto px-6'>
        {/* Heading */}
        <div className='text-center mb-20'>
          <MotionH2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6'>
            Meet Our Team
          </MotionH2>
          <MotionP
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
            Three minds, one vision — building the future of AI-powered personal
            styling.
          </MotionP>
        </div>

        {/* Team Cards */}
        <MotionDiv
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-100px" }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12'>
          {team.map((member, index) => (
            <MotionDiv
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -12,
                transition: { duration: 0.4, type: "tween" },
              }}
              className='group relative'>
              <div className='relative bg-white/70 backdrop-blur-2xl rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/60'>
                {/* Hover glow overlay */}
                <div className='absolute inset-0 bg-gradient-to-br from-purple-400/10 via-blue-400/5 to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700' />

                {/* Member Image */}
                <div className='relative overflow-hidden'>
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    width={500}
                    height={500}
                    className='w-full h-96 object-cover transition-transform duration-800 group-hover:scale-110'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent' />
                </div>

                {/* Card Content */}
                <div className='relative p-8 -mt-20'>
                  <div className='bg-white/90 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/80'>
                    <h3 className='text-2xl lg:text-3xl font-bold text-gray-900'>
                      {member.name}
                    </h3>
                    <p className='text-transparent bg-gradient-to-r from-[#4A67FF] via-purple-600 to-[#00D1B2] bg-clip-text font-bold text-lg mt-1'>
                      {member.role}
                    </p>
                    <p className='text-gray-600 mt-4 text-sm lg:text-base leading-relaxed'>
                      {member.skills}
                    </p>

                    {/* Social Links */}
                    <div className='flex gap-4 mt-7'>
                      {member.socials.map((social, idx) => {
                        const Icon = social.icon;
                        return (
                          <a
                            key={idx}
                            href={social.href}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='p-3.5 bg-white/80 backdrop-blur rounded-full border border-gray-200/80 hover:border-purple-400 hover:bg-gradient-to-br hover:from-purple-50 hover:to-blue-50 transition-all duration-300 transform hover:scale-110 hover:shadow-lg'>
                            <Icon size={22} className='text-gray-700' />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </MotionDiv>
          ))}
        </MotionDiv>
      </div>
    </section>
  );
}
