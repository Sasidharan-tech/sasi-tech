import React from 'react'
import { RevealOnScroll } from './RevealOnScroll'

export const Home = () => {
  return (
    <section
      id='home'
      className='min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 text-center relative'
    >
      <RevealOnScroll>
        <div className='z-10 w-full max-w-3xl'>
          <h1 className='text-3xl sm:text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'>
            Hi, I'm Sasi Tech
          </h1>
          <p className='text-gray-400 text-base sm:text-lg mb-8 max-w-xl mx-auto'>
            I'm a passionate MSc Computer Science student who loves solving real-world problems through code.
            I enjoy working on AI, mobile apps, and web development, with a strong foundation in Python, C++, and modern tools.
            Always eager to learn and take on new challenges!
          </p>
          <div className='flex flex-col sm:flex-row justify-center items-center gap-4'>
            <a
              href="#projects"
              className='bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]'
            >
              View Projects
            </a>
            <a
              href="#contact"
              className='border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10'
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}
