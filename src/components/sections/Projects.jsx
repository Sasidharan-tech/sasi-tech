import React from 'react'
import { RevealOnScroll } from './RevealOnScroll'

export const Projects = () => {
  return (
    <section id="projects" className='min-h-screen flex  items-center justify-center py-20'> 
    <RevealOnScroll>
              <div className='max-w-5xl mx-auto px-4'>
                 <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text  text-transparent text-center'>
                {" "}
                Projects</h2> 
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  {/* project 1 */}
                    <div className='p-6 rounded-xl border border-white/10  hover:-translate-y-1 hover:border-blue-500/3 transition-all'>
                        <h3 className='text-xl font-bold mb-2'>BOOK HEAVEN</h3>
                        <p className='text-gray-400 mb-4'>A Book Heaven is a Flask app for reading, downloading, and uploading books.   A simple and user-friendly digital library.</p>
                        <div className='flex flex-wrap gap-2 mb-4 '>
                           {["HTML", "CSS", "JavaScript", "Flask","PostgreSQL"].map((tech, key) => (
                             <span key={key} className='bg-blue-500/10 rounded-full px-3 py-1 text-sm  text-blue-500 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all '>
                  {tech}
                </span>
                           ))}
                        </div>

                        <div className='flex items-center justify-between mt-4'>
                          <a href="https://github.com/Sasidharan-tech/Book-Heaven.git" className='text-blue-400 hover:text-blue-300 transition-colors my-4'>View Project ➜</a>
                        </div>
                    </div>
                {/* project 2 */}
                <div className='p-6 rounded-xl border border-white/10  hover:-translate-y-1 hover:border-blue-500/3 transition-all'>
                        <h3 className='text-xl font-bold mb-2'>Touchless PC Control</h3>
                        <p className='text-gray-400 mb-4'> A smart system that allows users to control their PC through voice commands and hand gestures, offering a seamless and touch-free user experience.</p>
                        <div className='flex flex-wrap gap-2 mb-4'>
                           {["Tkinter", "Python", "Gemini api", "PyAutoGUI"].map((tech, key) => (
                             <span key={key} className='bg-blue-500/10 rounded-full px-3 py-1 text-sm  text-blue-500 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all '>
                  {tech}
                </span>
                           ))}
                        </div>

                        <div className='flex items-center justify-between mt-4'>
                          <a href="https://github.com/Sasidharan-tech/control_pc.git" className='text-blue-400 hover:text-blue-300 transition-colors my-4'>View Project ➜</a>
                        </div>
                    </div>
                </div>
              </div>

</RevealOnScroll>
{/* project 2 */}
    </section>
  )
}
