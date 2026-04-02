'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const funMessages = [
    "🚀 Ready to build amazing things!",
    "🤖 Your AI companion is online!",
    "✨ Code, coffee, and creativity!",
    "💡 Innovation awaits!",
    "🌟 Let's create magic!",
    "⚡ Lightning-fast development!",
    "🎨 Design & Code perfection!",
    "🔥 Building dreams one line at a time!"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % funMessages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [funMessages]);

  function getIcon(path: string) {
    const icons: Record<string, () => React.JSX.Element> = {
      '/': () => <span className="text-xl">🏠</span>,
      '/about': () => <span className="text-xl">📖</span>,
      '/services': () => <span className="text-xl">🛠️</span>,
      '/portfolio': () => <span className="text-xl">📁</span>,
      '/contact': () => <span className="text-xl">📧</span>,
    };
    return icons[path]();
  }

  return (
    <nav className="bg-gradient-to-r from-purple-900 via-pink-900 to-purple-900 text-white p-4 fixed w-full top-0 z-50 shadow-2xl">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-110 transition transform">
          kk-agent
        </Link>
        
        <div className="flex space-x-4">
          {['/', '/about', '/services', '/portfolio', '/contact'].map((path, i) => {
            const iconElement = getIcon(path);
            return (
              <Link 
                key={i} 
                href={path} 
                className="flex items-center space-x-2 hover:text-purple-300 transition px-4 py-2 rounded-full hover:bg-white/10 transform hover:scale-110"
              >
                {iconElement}
                <span className="hidden md:inline font-bold">
                  {path === '/' && '🏠 Home'}
                  {path === '/about' && '📖 About'}
                  {path === '/services' && '🛠️ Services'}
                  {path === '/portfolio' && '📁 Portfolio'}
                  {path === '/contact' && '📧 Contact'}
                </span>
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:block animate-pulse">
          <p className="text-sm text-purple-300">{funMessages[currentIndex]}</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
