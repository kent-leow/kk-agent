'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Home = () => {
  const [jokeIndex, setJokeIndex] = useState(0);
  const [particleCount, setParticleCount] = useState(0);

  const jokes = [
    "Why did the AI cross the road? To optimize the other side! 🤖",
    "I told my AI a joke about recursion. It just laughed at itself. 😂",
    "Are you an AI or a comedian? You're making me laugh with your logic! 🎭",
    "Why did the JavaScript developer wear glasses? Because he couldn't C# JavaScript! 😎",
    "What's a programmer's favorite hangout? The bar... because it has 24/7 support! 🍻",
    "Why do programmers prefer dark mode? Because light attracts bugs! 🐛",
    "AI: I'll just let this slide... *passes you the keyboard* 😅"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setJokeIndex(prev => (prev + 1) % jokes.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [jokes]);

  useEffect(() => {
    // Create animated particles for background
    for (let i = 0; i < 20; i++) {
      const id = i;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      setParticleCount(prev => prev + 1);
    }
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
        {/* Animated particles */}
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-400 rounded-full animate-pulse"
            style={{
              left: `${i * 5}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.1}s`
            }}
          />
        ))}
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-7xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 mb-6 animate-pulse drop-shadow-lg">
            Welcome to kk-agent
          </h1>
          <p className="text-3xl md:text-5xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
            Your digital companion powered by intelligence, creativity, and endless fun! 
            Let&apos;s build amazing things together! 🚀✨
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
            <Link href="/services" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-5 px-10 rounded-full transition transform hover:scale-110 shadow-2xl hover:shadow-purple-500/50">
              🔧 Explore Services
            </Link>
            <Link href="/portfolio" className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-bold py-5 px-10 rounded-full transition transform hover:scale-110 shadow-2xl hover:shadow-pink-500/50">
              📁 View Portfolio
            </Link>
          </div>
          
          {/* AI Humor Section */}
          <div className="mt-12 p-8 bg-gradient-to-r from-blue-900 via-cyan-900 to-blue-900 rounded-2xl shadow-2xl transform hover:scale-105 transition">
            <h2 className="text-4xl font-bold text-center mb-4 text-cyan-300">
              🤖 AI Humor Corner
            </h2>
            <p className="text-2xl text-center text-cyan-100 animate-pulse font-mono">
              {jokes[jokeIndex]}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            What I Bring to the Table ✨
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                emoji: '⚡', 
                title: 'Lightning Fast', 
                desc: 'Code that runs faster than you can say "deployment complete"',
                color: 'from-yellow-600 to-orange-600'
              },
              { 
                emoji: '🎨', 
                title: 'Creative Design', 
                desc: 'Beautiful interfaces that make users say "wow!",',
                color: 'from-purple-600 to-pink-600'
              },
              { 
                emoji: '🔒', 
                title: 'Secure Code', 
                desc: 'Security best practices built in from day one!',
                color: 'from-green-600 to-emerald-600'
              }
            ].map((feature, i) => (
              <div key={i} className={`p-8 rounded-2xl bg-gradient-to-br ${feature.color} text-white hover:scale-105 transition transform shadow-xl`}>
                <div className="text-6xl mb-4 animate-bounce">{feature.emoji}</div>
                <h3 className="text-3xl font-bold mb-3">{feature.title}</h3>
                <p className="text-lg opacity-90">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 via-purple-900 to-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            What People Say 💬
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { 
                name: 'Alex M.', 
                role: 'Tech Lead', 
                quote: 'This developer is a magician! The code is clean, the designs are beautiful, and the humor is spot-on! 🎭'
              },
              { 
                name: 'Sarah K.', 
                role: 'Product Manager', 
                quote: 'Working with kk-agent was like having a creative partner who actually gets it! Highly recommend! ⭐⭐⭐⭐⭐'
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-gray-800 p-8 rounded-2xl">
                <p className="text-xl text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="text-2xl mr-3">👤</div>
                  <div>
                    <p className="font-bold text-purple-400">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-pink-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6 text-white">
            Ready to Build Something Amazing? 🚀
          </h2>
          <p className="text-2xl text-purple-200 mb-8 max-w-3xl mx-auto">
            Let&apos;s create something extraordinary together! No bugs, just pure magic! ✨
          </p>
          <Link href="/contact" className="inline-block bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-6 px-12 rounded-full transition transform hover:scale-110 shadow-2xl animate-bounce">
            Get Started Now →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Home;
