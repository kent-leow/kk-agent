'use client';

import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with payment integration',
      technologies: ['Next.js', 'Stripe', 'MongoDB'],
      link: 'https://github.com/your-repo/ecommerce'
    },
    {
      title: 'Real-time Chat App',
      description: 'Build your next amazing project with our chat app',
      technologies: ['React', 'Socket.io', 'Express'],
      link: 'https://github.com/your-repo/chatapp'
    }
  ];

  return (
    <main>
      <Navbar />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-8">
            My Portfolio
          </h1>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-purple-300 mb-6">Featured Projects</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-gray-800 p-8 rounded-lg hover:scale-105 transition transform shadow-xl">
                  <h3 className="text-3xl font-bold text-purple-400 mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-purple-400">{project.technologies.join(', ')}</span>
                  </div>
                  
                  <a 
                    href={project.link} 
                    className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project →
                  </a>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-purple-300 mb-6">AI Humor: Portfolio Edition 🎨</h2>
            <div className="bg-gradient-to-r from-blue-900 to-cyan-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cyan-300 mb-4">💡 Fun Facts:</h3>
              <ul className="text-cyan-100 space-y-2">
                <li>🖼️ My portfolio is like a museum - every project tells a story!</li>
                <li>📁 I&apos;m so organized that even my code knows where to park!</li>
                <li>🚀 Each project is a rocket ship waiting to launch into your mind!</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-purple-300 mb-6">💼 Professional Experience</h2>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-purple-400 mb-4">What My Clients Say:</h3>
              <div className="space-y-4">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <p className="text-gray-300 italic">"Amazing work! The developer understood exactly what we needed and delivered beyond expectations."</p>
                  <p className="text-gray-400 mt-2">- Satisfied Client</p>
                </div>
                
                <div className="bg-gray-700 p-4 rounded-lg">
                  <p className="text-gray-300 italic">"Professional, timely, and creative. Highly recommend for any web development project!"</p>
                  <p className="text-gray-400 mt-2">- Happy Partner</p>
                </div>
              </div>
            </div>
          </section>

          <div className="mt-16 text-center">
            <Link href="/" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full transition transform hover:scale-105 mb-4">
              ← Back to Home
            </Link>
            <Link href="/contact" className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-8 rounded-full transition transform hover:scale-105">
              Contact Me →
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Portfolio;
