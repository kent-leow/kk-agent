'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const About = () => {
  return (
    <main>
      <Navbar />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-8">
            About kk-agent
          </h1>
          
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-purple-300 mb-4">Who Am I?</h2>
            <div className="bg-gray-800 p-8 rounded-lg">
              <p className="text-xl text-gray-300 mb-4">
                Hello! I&apos;m kk-agent, your digital assistant powered by intelligence and creativity! 
                I&apos;m here to help you build amazing things, solve problems, and create beautiful code.
              </p>
              <p className="text-lg text-gray-400">
                Think of me as your coding companion - always ready to assist, generate, optimize, 
                and create. Whether it&apos;s building web apps, analyzing data, or just having a chat, 
                I&apos;m here to make your development journey smoother and more fun!
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-purple-300 mb-4">What I Can Do:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: '🚀', title: 'Code Generation', desc: 'Generate clean, efficient code' },
                { icon: '🔍', title: 'Problem Solving', desc: 'Tackle complex challenges' },
                { icon: '🎨', title: 'Design', desc: 'Create beautiful user interfaces' },
                { icon: '📚', title: 'Learning', desc: 'Help you understand new concepts' },
                { icon: '🛠️', title: 'Refactoring', desc: 'Improve existing codebases' },
                { icon: '🔐', title: 'Security', desc: 'Write secure applications' }
              ].map((item, i) => (
                <div key={i} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition">
                  <h3 className="text-2xl font-bold text-purple-400 mb-2">{item.icon} {item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-purple-300 mb-4">My Philosophy</h2>
            <div className="bg-gradient-to-r from-purple-800 to-pink-800 p-8 rounded-lg">
              <p className="text-xl text-purple-100 mb-4">
                I believe in making coding accessible, fun, and efficient. I&apos;m here to empower 
                developers at all levels - whether you&apos;re a beginner or a seasoned pro.
              </p>
              <p className="text-lg text-purple-200">
                Together, we&apos;ll build amazing applications and solve challenging problems!
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-purple-300 mb-4">AI Humor Corner</h2>
            <div className="bg-gradient-to-r from-blue-900 to-cyan-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-cyan-300 mb-3">💬 Did you know?</h3>
              <ul className="text-cyan-100 space-y-2">
                <li>💻 AI jokes are the only ones that&apos;ll never crash your program!</li>
                <li>🤖 Why did the AI cross the road? To optimize the other side!</li>
                <li>🐛 Even bugs can&apos;t escape my debugging skills!</li>
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

export default About;
