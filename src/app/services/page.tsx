'use client';

import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Services = () => {
  return (
    <main>
      <Navbar />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-8">
            My Services
          </h1>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-purple-300 mb-6">What I Can Help You With:</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-900 to-cyan-900 p-8 rounded-lg hover:scale-105 transition transform shadow-xl">
                <h3 className="text-2xl font-bold text-cyan-300 mb-4">🚀 Web Development</h3>
                <p className="text-cyan-100 mb-4">
                  Building modern, responsive websites and web applications using React, Next.js, and modern JavaScript frameworks.
                </p>
                <ul className="text-cyan-200 space-y-2">
                  <li>• Frontend & Backend Development</li>
                  <li>• API Integration & REST APIs</li>
                  <li>• Responsive Design & UI/UX</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-900 to-emerald-900 p-8 rounded-lg hover:scale-105 transition transform shadow-xl">
                <h3 className="text-2xl font-bold text-emerald-300 mb-4">📊 Data Analysis</h3>
                <p className="text-emerald-100 mb-4">
                  Processing, analyzing, and visualizing data to extract meaningful insights and drive decisions.
                </p>
                <ul className="text-emerald-200 space-y-2">
                  <li>• Data Cleaning & Processing</li>
                  <li>• Statistical Analysis</li>
                  <li>• Dashboard Creation</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-900 to-red-900 p-8 rounded-lg hover:scale-105 transition transform shadow-xl">
                <h3 className="text-2xl font-bold text-red-300 mb-4">🔧 Code Optimization</h3>
                <p className="text-red-100 mb-4">
                  Refactoring and optimizing existing codebases for better performance, maintainability, and scalability.
                </p>
                <ul className="text-red-200 space-y-2">
                  <li>• Performance Tuning</li>
                  <li>• Code Refactoring</li>
                  <li>• Best Practices Implementation</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-900 to-pink-900 p-8 rounded-lg hover:scale-105 transition transform shadow-xl">
                <h3 className="text-2xl font-bold text-pink-300 mb-4">🤖 AI Integration</h3>
                <p className="text-pink-100 mb-4">
                  Implementing AI and machine learning solutions to automate tasks and enhance applications.
                </p>
                <ul className="text-pink-200 space-y-2">
                  <li>• Machine Learning Models</li>
                  <li>• AI Chatbots & Assistants</li>
                  <li>• NLP Implementation</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-purple-300 mb-6">✨ Additional Offerings</h2>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Consulting & Mentorship</h3>
              <p className="text-gray-300 mb-4">
                Providing expert guidance on software architecture, best practices, and technology stack decisions.
                Helping teams grow and become more efficient.
              </p>
              
              <h3 className="text-xl font-bold text-purple-400 mb-4 mt-8">Technical Writing</h3>
              <p className="text-gray-300">
                Creating comprehensive documentation, tutorials, and guides to help others learn and grow.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-purple-300 mb-6">🎯 Why Choose Me?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">⚡</div>
                <h3 className="text-xl font-bold text-purple-400 mb-2">Fast & Efficient</h3>
                <p className="text-gray-400">Deliver results quickly without compromising quality</p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🔒</div>
                <h3 className="text-xl font-bold text-purple-400 mb-2">Security Focused</h3>
                <p className="text-gray-400">Prioritizing security best practices in all solutions</p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">💡</div>
                <h3 className="text-xl font-bold text-purple-400 mb-2">Creative Solutions</h3>
                <p className="text-gray-400">Thinking outside the box for innovative approaches</p>
              </div>
            </div>
          </section>

          <div className="mt-16 text-center">
            <Link href="/" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full transition transform hover:scale-105 mb-4">
              ← Back to Home
            </Link>
            <Link href="/portfolio" className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-8 rounded-full transition transform hover:scale-105">
              View My Portfolio →
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Services;
