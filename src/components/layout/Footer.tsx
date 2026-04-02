'use client';

import Link from 'next/link';

const Footer = () => {
  const footerMessages = [
    "Made with 💜 by kk-agent",
    "Code is poetry, I promise! 🎭",
    "Bug-free? Probably not, but awesome! 🚀",
    "Powered by coffee and creativity ☕✨",
    "AI dreams of electric sheep... and code! 🐑💻",
    "100% JavaScript, 0% bugs (probably) 😅"
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white py-8 mt-16">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6">
          <div className="flex justify-center space-x-4 mb-4">
            {['🌟', '⚡', '🎨', '🚀'].map((emoji, i) => (
              <span key={i} className="text-2xl animate-bounce" style={{ animationDelay: `${i * 0.2}s` }}>
                {emoji}
              </span>
            ))}
          </div>
          <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
            {footerMessages[Math.floor(Math.random() * footerMessages.length)]}
          </p>
          <p className="text-gray-400 text-sm">
            Created with ❤️ using Next.js, React, and a whole lot of fun!
          </p>
        </div>

        <div className="flex justify-center space-x-6 mb-4">
          <Link href="/" className="hover:text-purple-400 transition">
            🏠 Home
          </Link>
          <Link href="/about" className="hover:text-purple-400 transition">
            📖 About
          </Link>
          <Link href="/services" className="hover:text-purple-400 transition">
            🛠️ Services
          </Link>
          <Link href="/portfolio" className="hover:text-purple-400 transition">
            📁 Portfolio
          </Link>
          <Link href="/contact" className="hover:text-purple-400 transition">
            📧 Contact
          </Link>
        </div>

        <div className="text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} kk-agent. All rights reserved (and all good vibes! 🌈)</p>
          <p className="mt-1">
            Built with 🤖 AI assistance and ☕ endless cups of coffee
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
