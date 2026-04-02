'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I&apos;ll get back to you soon! ✨');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <main>
      <Navbar />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-8">
            Get in Touch
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <section>
              <h2 className="text-3xl font-bold text-purple-300 mb-6">Let&apos;s Connect!</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Have a project in mind? Want to discuss ideas? Or just want to say hello? 
                I&apos;d love to hear from you! Drop me a message and I&apos;ll get back to you as soon as possible! 🌟
              </p>

              <div className="space-y-6">
                <div className="bg-gray-800 p-6 rounded-lg hover:scale-105 transition">
                  <h3 className="text-2xl font-bold text-purple-400 mb-3">📧 Email</h3>
                  <p className="text-gray-300 mb-2">Let&apos;s discuss your project!</p>
                  <a href="mailto:your-email@example.com" className="text-purple-400 hover:text-purple-300">
                    your-email@example.com
                  </a>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg hover:scale-105 transition">
                  <h3 className="text-2xl font-bold text-purple-400 mb-3">💬 Social Media</h3>
                  <p className="text-gray-300 mb-2">Connect with me on social platforms:</p>
                  <div className="flex space-x-4 mt-2">
                    <a href="#" className="text-purple-400 hover:text-purple-300">GitHub</a>
                    <a href="#" className="text-purple-400 hover:text-purple-300">LinkedIn</a>
                    <a href="#" className="text-purple-400 hover:text-purple-300">Twitter</a>
                  </div>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg hover:scale-105 transition">
                  <h3 className="text-2xl font-bold text-purple-400 mb-3">📍 Location</h3>
                  <p className="text-gray-300">Available for remote work worldwide</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-purple-300 mb-6">Send Me a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-purple-400 mb-2 font-bold">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg border border-purple-600 focus:border-purple-400 focus:outline-none transition"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-purple-400 mb-2 font-bold">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg border border-purple-600 focus:border-purple-400 focus:outline-none transition"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-purple-400 mb-2 font-bold">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg border border-purple-600 focus:border-purple-400 focus:outline-none transition"
                    placeholder="Project inquiry"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-purple-400 mb-2 font-bold">Your Message</label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={6}
                    className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg border border-purple-600 focus:border-purple-400 focus:outline-none transition resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-full transition transform hover:scale-105 shadow-lg"
                >
                  Send Message 🚀
                </button>
              </form>
            </section>
          </div>

          <section className="mt-16">
            <h2 className="text-3xl font-bold text-purple-300 mb-6">🤖 AI Humor: Contact Edition</h2>
            <div className="bg-gradient-to-r from-blue-900 to-cyan-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cyan-300 mb-4">💡 Did you know?</h3>
              <ul className="text-cyan-100 space-y-2">
                <li>📧 Email is like digital time capsules - messages can travel faster than light!</li>
                <li>💬 Don&apos;t forget to proofread - even AIs make typos sometimes!</li>
                <li>🌐 The internet connects us all - even if my code bugs sometimes!</li>
              </ul>
            </div>
          </section>

          <div className="mt-16 text-center">
            <Link href="/" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full transition transform hover:scale-105">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Contact;
