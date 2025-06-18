import React from 'react'
import { RevealOnScroll } from './RevealOnScroll'

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20 px-4 md:px-8">
      <RevealOnScroll>
        <div className="max-w-5xl w-full mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="p-6 rounded-xl border border-white/10 hover:border-blue-500/30 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-2 text-white">BOOK HEAVEN</h3>
              <p className="text-gray-400 text-justify mb-4">
                Book Heaven is a Flask-based digital library for reading, downloading, and uploading books. It's simple, efficient, and user-friendly.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "JavaScript", "Flask", "PostgreSQL"].map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-500/10 rounded-full px-3 py-1 text-sm text-blue-500 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-4">
                <a
                  href="https://github.com/Sasidharan-tech/Book-Heaven.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Project ➜
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="p-6 rounded-xl border border-white/10 hover:border-blue-500/30 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-2 text-white">Touchless PC Control</h3>
              <p className="text-gray-400 text-justify mb-4">
                A smart system that enables users to control their PC using voice commands and hand gestures, creating a seamless, touch-free interaction.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Tkinter", "Python", "Gemini API", "PyAutoGUI"].map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-500/10 rounded-full px-3 py-1 text-sm text-blue-500 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-4">
                <a
                  href="https://github.com/Sasidharan-tech/control_pc.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Project ➜
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}
