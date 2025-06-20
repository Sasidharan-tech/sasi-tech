import { useState } from 'react';
import { RevealOnScroll } from './RevealOnScroll';
import emailjs from 'emailjs-com';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        alert('Failed to send message. Please try again later.');
      });
  };

  return (
    <section
      id='contact'
      className='min-h-screen flex items-center justify-center py-20 px-4 md:px-8 lg:px-16'
    >
      <RevealOnScroll>
        <div className='w-full max-w-xl mx-auto'>
          <h2 className='text-3xl md:text-4xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-center'>
            Get in Touch
          </h2>

          <form className='space-y-6' onSubmit={handleSubmit}>
            {/* Name */}
            <div>
              <input
                type='text'
                id='name'
                name='name'
                required
                value={formData.name}
                className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder:text-gray-400 transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/10'
                placeholder='Your Name'
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            {/* Email */}
            <div>
              <input
                type='email'
                id='email'
                name='email'
                required
                value={formData.email}
                className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder:text-gray-400 transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/10'
                placeholder='example@gmail.com'
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            {/* Message */}
            <div>
              <textarea
                id='message'
                name='message'
                required
                value={formData.message}
                rows={5}
                className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder:text-gray-400 transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/10'
                placeholder='Your message...'
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            {/* Submit Button */}
            <button
              type='submit'
              className='w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]'
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
