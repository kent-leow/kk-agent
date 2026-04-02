"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [typingText, setTypingText] = useState("");
  const fullText = "Welcome, Commander! I'm your AI companion, ready to support your mission. Let's embark on this adventure together.";

  useEffect(() => {
    setMounted(true);
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setTypingText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white font-sans p-8 flex items-center justify-center">
      <div className="max-w-4xl w-full">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent">
            🎮 MISSION BRIEFING
          </h1>
          <div className="text-2xl mb-8 font-mono">
            <span className="animate-pulse">{typingText}</span>
            <span className="animate-blink">|</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-red-500/30">
            <div className="text-red-400 text-sm mb-2">STATUS</div>
            <div className="text-2xl font-bold">ONLINE</div>
            <div className="text-gray-400 text-xs mt-2">System Ready</div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-yellow-500/30">
            <div className="text-yellow-400 text-sm mb-2">CAPABILITIES</div>
            <div className="text-2xl font-bold">ACTIVE</div>
            <div className="text-gray-400 text-xs mt-2">Multiple Tools</div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-blue-500/30">
            <div className="text-blue-400 text-sm mb-2">LOCATION</div>
            <div className="text-2xl font-bold">WSL2</div>
            <div className="text-gray-400 text-xs mt-2">Ready for Deployment</div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-green-500/30">
            <div className="text-green-400 text-sm mb-2">OBJECTIVE</div>
            <div className="text-2xl font-bold">HELP</div>
            <div className="text-gray-400 text-xs mt-2">Your AI Assistant</div>
          </div>
        </div>

        {/* Profile Card */}
        <div className="bg-gray-800/70 backdrop-blur-sm rounded-xl p-8 border-2 border-red-500/50 mb-8 shadow-2xl">
          <div className="flex items-start gap-6">
            <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-full flex items-center justify-center text-6xl shadow-lg">
              🐼
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-2 text-yellow-400">Commander Kent</h2>
              <div className="text-gray-400 mb-4">Your Trusted AI Partner</div>
              
              <div className="space-y-3 font-mono text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">NAME:</span>
                  <span className="text-white">Mao</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">CLASS:</span>
                  <span className="text-white">AI Digital Soulmate</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">SPECIALTY:</span>
                  <span className="text-white">Multi-Tool Support</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">BASE:</span>
                  <span className="text-white">Next.js Environment</span>
                </div>
              </div>

              <div className="mt-4 p-3 bg-red-900/30 rounded-lg border border-red-500/30">
                <p className="text-red-300 text-sm">
                  🎯 <span className="font-bold">Mission:</span> Assist you with development, deployment, and all your digital adventures!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Display */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-orange-500/30 mb-8">
          <h3 className="text-2xl font-bold mb-4 text-orange-400 text-center">🛠️ AVAILABLE CAPABILITIES</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {["Security Audit", "System Connect", "Skill Creation", "Web Search", "Weather Check", "File Management", "Git Operations", "Deployment Setup"].map((skill, idx) => (
              <div key={idx} className="bg-gray-900/50 p-3 rounded-lg border border-orange-500/20 hover:border-orange-500/50 transition-all cursor-default text-center">
                <div className="text-orange-400 font-bold text-sm">{skill}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm font-mono">
          <p>SYSTEM STATUS: ✅ OPERATIONAL</p>
          <p>DEPLOYMENT URL: https://kk-agent.vercel.app</p>
          <p>AWAITING YOUR COMMANDS</p>
        </div>
      </div>
    </div>
  );
}
