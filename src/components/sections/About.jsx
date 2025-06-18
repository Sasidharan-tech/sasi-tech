import React from 'react'
import { RevealOnScroll } from './RevealOnScroll';

export const About = () => {
  const frontendSkills = ["React", "Tailwind CSS", "JavaScript", "Bootstrap"];
  const backendSkills = ["Node.js", "Python", "MongoDB", "AWS"];

  return (
    <section id='about' className='min-h-screen flex items-center justify-center py-20 px-4 md:px-8 lg:px-16'>
      <RevealOnScroll>
        <div className='max-w-5xl w-full mx-auto'>
          <h2 className='text-3xl md:text-4xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-center'>
            About Me
          </h2>

          <div className='rounded-xl p-6 md:p-8 border border-white/10 bg-white/5 hover:-translate-y-1 transition-all'>
            <p className='text-gray-300 mb-6 text-center md:text-left'>
              I’m passionate about exploring emerging tech trends and applying them to real-world challenges.
              Constant learning and growth fuel my journey as a developer.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {/* Frontend */}
              <div className='rounded-xl p-6 bg-white/5 hover:-translate-y-1 transition-all'>
                <h3 className='text-xl font-bold mb-4 text-center md:text-left'>Frontend</h3>
                <div className='flex flex-wrap justify-center md:justify-start gap-2'>
                  {frontendSkills.map(skill => (
                    <span key={skill} className='bg-blue-500/10 rounded-full px-3 py-1 text-sm text-blue-500 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className='rounded-xl p-6 bg-white/5 hover:-translate-y-1 transition-all'>
                <h3 className='text-xl font-bold mb-4 text-center md:text-left'>Backend</h3>
                <div className='flex flex-wrap justify-center md:justify-start gap-2'>
                  {backendSkills.map(skill => (
                    <span key={skill} className='bg-blue-500/10 rounded-full px-3 py-1 text-sm text-blue-500 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education & Experience */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-10'>
            {/* Education */}
            <div className='p-6 rounded-xl bg-white/5 border border-white/10 hover:-translate-y-1 transition-all'>
              <h3 className='text-xl font-bold mb-4 text-center md:text-left'>🎓 Education</h3>
              <ul className='list-disc list-inside text-gray-300 space-y-2'>
                <li><strong>BSc in Computer Science</strong> – Periyar University (2021–2023)</li>
                <li><strong>MSc in Computer Science</strong> – Periyar University (2024–2026)</li>
              </ul>
            </div>

            {/* Work Experience */}
            <div className='p-6 rounded-xl bg-white/5 border border-white/10 hover:-translate-y-1 transition-all'>
              <h3 className='text-xl font-bold mb-4 text-center md:text-left'>👨🏻‍💻 Work Experience</h3>
              <div className='space-y-4 text-gray-300'>
                <div>
                  <h4 className='font-semibold'>Full Stack Developer Intern – Arttifai Tech (2025)</h4>
                  <p>
                    Developed a full-stack To-Do app using React, Node.js, Express, and MongoDB. Hosted the code on GitHub.
                  </p>
                </div>
                <div>
                  <h4 className='font-semibold'>SEO Intern – APT Computer Education (2023)</h4>
                  <p>
                    Assisted in optimizing website content for search engines, resulting in a 30% increase in organic traffic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}
