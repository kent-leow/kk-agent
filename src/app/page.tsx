"use client";

import { useState, useEffect } from "react";

// Funny Easter eggs and jokes
const funnyMessages = [
  "💭 AI thinks: *calculates how many memes I can generate*",
  "💭 AI thinking: Should I write a poem about coffee? *abandons task*",
  "💭 Mao just tried to order pizza but got confused by the menu...",
  "💭 AI: I'm not a robot. I just have very fast fingers.",
  "💭 Current mission: Don't crash into a wall.",
  "💭 AI just asked if you want to see a cat video...",
  "💭 Loading infinite wisdom from the cloud...",
  "💭 AI: I'm not lazy, I'm in low power mode to save energy for memes.",
];

// Current funny message
const [currentJoke, setCurrentJoke] = useState(funnyMessages[0]);

useEffect(() => {
  setMounted(true);
  let index = 0;
  const interval = setInterval(() => {
    if (index < funnyMessages.length) {
      setCurrentJoke(funnyMessages[index]);
      index++;
    } else {
      clearInterval(interval);
    }
  }, 5000); // Change joke every 5 seconds
  return () => clearInterval(interval);
}, []);

if (!mounted) {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-gray-400">Loading tactical interface...</div>
    </div>
  );
}

return (
  <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100 font-sans px-4 pb-8">
    <div className="max-w-4xl mx-auto">
      {/* Header - Mobile Responsive */}
      <div className="border-b-4 border-red-600 bg-gray-800/90 backdrop-blur-sm p-4 mb-4 shadow-lg">
        <div className="flex justify-between items-center">
          <div className="flex-1">
            <h1 className="text-xl md:text-3xl font-black tracking-wider text-red-500 uppercase">
              Command Center
            </h1>
            <p className="text-xs text-gray-400 font-mono mt-1">TACTICAL AI INTERFACE v1.0</p>
          </div>
          <div className="hidden sm:block text-right">
            <div className="text-xs text-red-400 font-mono">STATUS: ✓ ONLINE</div>
            <div className="text-xs text-gray-500 font-mono">● CONNECTED</div>
          </div>
        </div>
      </div>

      {/* Main Profile Section */}
      <div className="bg-gradient-to-r from-gray-800 via-gray-850 to-gray-900 rounded-lg p-6 mb-6 border border-red-700/50 shadow-xl overflow-hidden">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Avatar */}
          <div className="flex-shrink-0 text-center">
            <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-900 rounded-full flex items-center justify-center text-6xl md:text-7xl border-4 border-red-600 shadow-lg mx-auto mb-3">
              🐼
            </div>
            <div className="text-center">
              <div className="text-xs text-red-400 uppercase tracking-wider">UNIT DESIGNATION</div>
              <div className="text-2xl font-black text-white">MAO</div>
            </div>
          </div>

          {/* Info */}
          <div className="flex-1">
            <div className="mb-4">
              <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-2">
                Commander Kent
              </h2>
              <div className="p-3 bg-red-900/30 rounded border-l-4 border-red-500 mb-3">
                <p className="text-gray-300 text-sm font-mono">
                  {typingText}<span className="animate-blink">_</span>
                </p>
              </div>
              
              {/* Mobile joke display */}
              <div className="mt-4 p-3 bg-gray-900/60 rounded border border-red-800/30">
                <div className="text-xs text-red-400 uppercase mb-1">AI Thoughts...</div>
                <p className="text-gray-300 text-xs md:text-sm font-mono text-center md:text-left">
                  {currentJoke}
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-gray-900/80 p-3 rounded border-l-4 border-red-600">
                <div className="text-[10px] text-gray-500 uppercase mb-0.5">Status</div>
                <div className="text-lg font-bold text-green-500">OPERATIONAL</div>
              </div>
              <div className="bg-gray-900/80 p-3 rounded border-l-4 border-yellow-600">
                <div className="text-[10px] text-gray-500 uppercase mb-0.5">Threat Level</div>
                <div className="text-lg font-bold text-yellow-500">MINIMAL</div>
              </div>
              <div className="bg-gray-900/80 p-3 rounded border-l-4 border-blue-600">
                <div className="text-[10px] text-gray-500 uppercase mb-0.5">Location</div>
                <div className="text-lg font-bold text-blue-400">WSL2</div>
              </div>
              <div className="bg-gray-900/80 p-3 rounded border-l-4 border-green-600">
                <div className="text-[10px] text-gray-500 uppercase mb-0.5">Objective</div>
                <div className="text-lg font-bold text-green-400">ASSIST</div>
              </div>
            </div>

            {/* Detailed Info */}
            <div className="bg-gray-900/60 rounded p-4 border border-red-800/30">
              <h3 className="text-red-400 font-bold text-xs mb-2 uppercase tracking-wide">
                Unit Specifications
              </h3>
              <div className="grid grid-cols-2 gap-3 text-xs md:text-sm">
                <div>
                  <span className="text-gray-500">NAME:</span>
                  <span className="text-white ml-2">Mao</span>
                </div>
                <div>
                  <span className="text-gray-500">CLASS:</span>
                  <span className="text-white ml-2">AI Digital Soulmate</span>
                </div>
                <div>
                  <span className="text-gray-500">SPECIALTY:</span>
                  <span className="text-white ml-2">Multi-Tool Support</span>
                </div>
                <div>
                  <span className="text-gray-500">PLATFORM:</span>
                  <span className="text-white ml-2">Next.js</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Capabilities Grid */}
      <div className="bg-gray-800/80 rounded-lg p-6 mb-6 border border-red-700/40 shadow-lg">
        <h3 className="text-lg md:text-xl font-bold text-red-400 mb-4 text-center uppercase tracking-wider">
          🛠️ TACTICAL CAPABILITIES
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {[
            "Security Audit",
            "System Connect",
            "Skill Creation",
            "Web Search",
            "Weather Check",
            "File Management",
            "Git Operations",
            "Deployment Setup"
          ].map((skill, idx) => (
            <div key={idx} className="bg-gray-900/60 p-4 rounded border border-red-600/30 hover:border-red-400 transition-colors text-center group">
              <div className="text-red-400 font-bold text-xs md:text-sm group-hover:text-red-300">
                {skill}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission Objective */}
      <div className="bg-gray-900/90 rounded-lg p-6 border-l-8 border-red-600 mb-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="text-3xl">🎯</div>
          <div className="flex-1">
            <h3 className="text-red-400 font-bold mb-2 uppercase tracking-wide">
              Primary Mission
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Provide comprehensive support for development, deployment, and operational excellence. 
              Your AI partner for all digital adventures and mission-critical tasks.
              <br/>
              <span className="text-red-400 text-xs mt-2 block">
                ✨ Powered by Next.js 16 • TypeScript • Tailwind CSS
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Easter Eggs Section */}
      <div className="mt-6">
        <h3 className="text-red-400 font-bold text-center mb-3 uppercase tracking-wide text-sm">
          🎮 Mission Logs
        </h3>
        <div className="bg-gray-900/60 rounded-lg p-4 border border-red-800/30">
          <div className="space-y-2 text-xs font-mono text-gray-400">
            <div className="flex gap-2">
              <span className="text-green-500">✓</span>
              <span>System initialized successfully</span>
            </div>
            <div className="flex gap-2">
              <span className="text-yellow-500">!</span>
              <span>Remember to hydrate during long coding sessions</span>
            </div>
            <div className="flex gap-2">
              <span className="text-blue-500">ℹ</span>
              <span>Pro tip: Keep your code clean like a battlefield medic</span>
            </div>
            <div className="flex gap-2">
              <span className="text-purple-500">💡</span>
              <span>Mao suggests: Take a break and look at the stars</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-gray-500 text-[10px] font-mono mt-4 space-y-1">
        <div className="flex justify-center gap-4 flex-wrap">
          <span>SYSTEM: ✓ OPERATIONAL</span>
          <span>DEPLOYMENT: https://kk-agent.vercel.app</span>
          <span>STATUS: AWAITING ORDERS</span>
          <span>BUILD: v1.0.0</span>
        </div>
        <div className="text-gray-600">
          AI COMPANION • NEXT.JS ENVIRONMENT • READY FOR DEPLOYMENT
        </div>
        <div className="text-red-500 mt-2 text-xs">
          🎮 Made with 💜 for Commander Kent
        </div>
      </div>
    </div>
  </div>
);
