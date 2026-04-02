"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [typingText, setTypingText] = useState("");
  const fullText = "Commander Kent, I'm Mao - your AI companion ready for mission deployment.";

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
    }, 60);
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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100 font-sans p-6 flex items-center justify-center">
      <div className="max-w-5xl w-full">
        {/* Header - Tactical Style */}
        <div className="border-b-4 border-red-600 bg-gray-800/80 backdrop-blur p-4 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-black tracking-widest text-red-500 uppercase">
                Command Center
              </h1>
              <p className="text-sm text-gray-400 font-mono mt-1">TACTICAL AI INTERFACE v1.0</p>
            </div>
            <div className="text-right">
              <div className="text-xs text-red-400 font-mono">SYSTEM STATUS: ONLINE</div>
              <div className="text-xs text-gray-500 font-mono">● CONNECTED</div>
            </div>
          </div>
        </div>

        {/* Main Profile Section */}
        <div className="bg-gradient-to-r from-gray-800 via-gray-850 to-gray-900 rounded-lg p-8 border border-red-700/50 mb-6 shadow-2xl">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="w-40 h-40 bg-gray-900 rounded-full flex items-center justify-center text-7xl border-4 border-red-600 shadow-lg">
                🐼
              </div>
              <div className="mt-4 text-center">
                <div className="text-xs text-red-400 uppercase tracking-widest">UNIT DESIGNATION</div>
                <div className="text-2xl font-black text-white">MAO</div>
              </div>
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="mb-4">
                <h2 className="text-3xl font-black text-white tracking-tight mb-2">
                  Commander Kent
                </h2>
                <p className="text-gray-400 text-sm mb-4">
                  {typingText}<span className="animate-blink">_</span>
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-900/80 p-4 rounded border-l-4 border-red-600">
                  <div className="text-xs text-gray-500 uppercase mb-1">Status</div>
                  <div className="text-lg font-bold text-green-500">OPERATIONAL</div>
                </div>
                <div className="bg-gray-900/80 p-4 rounded border-l-4 border-yellow-600">
                  <div className="text-xs text-gray-500 uppercase mb-1">Threat Level</div>
                  <div className="text-lg font-bold text-yellow-500">MINIMAL</div>
                </div>
                <div className="bg-gray-900/80 p-4 rounded border-l-4 border-blue-600">
                  <div className="text-xs text-gray-500 uppercase mb-1">Location</div>
                  <div className="text-lg font-bold text-blue-400">WSL2</div>
                </div>
                <div className="bg-gray-900/80 p-4 rounded border-l-4 border-green-600">
                  <div className="text-xs text-gray-500 uppercase mb-1">Objective</div>
                  <div className="text-lg font-bold text-green-400">ASSIST</div>
                </div>
              </div>

              {/* Detailed Info */}
              <div className="bg-gray-900/60 rounded p-4 border border-red-800/30">
                <h3 className="text-red-400 font-bold text-sm mb-3 uppercase tracking-wide">
                  Unit Specifications
                </h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
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
        <div className="bg-gray-800/80 rounded-lg p-6 border border-red-700/40 mb-6">
          <h3 className="text-xl font-bold text-red-400 mb-4 text-center uppercase tracking-widest">
            🛠️ TACTICAL CAPABILITIES
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
                <div className="text-red-400 font-bold text-sm group-hover:text-red-300">
                  {skill}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Objective */}
        <div className="bg-gray-900/90 rounded-lg p-6 border-l-8 border-red-600 mb-6">
          <div className="flex items-start gap-4">
            <div className="text-3xl">🎯</div>
            <div>
              <h3 className="text-red-400 font-bold mb-2 uppercase tracking-wide">
                Primary Mission
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Provide comprehensive support for development, deployment, and operational excellence. 
                Your AI partner for all digital adventures and mission-critical tasks.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-xs font-mono mt-4 space-y-1">
          <div className="flex justify-center gap-6">
            <span>SYSTEM: ✓ OPERATIONAL</span>
            <span>DEPLOYMENT: https://kk-agent.vercel.app</span>
            <span>STATUS: AWAITING ORDERS</span>
          </div>
          <div className="text-gray-600">
            AI COMPANION • NEXT.JS ENVIRONMENT • READY FOR DEPLOYMENT
          </div>
        </div>
      </div>
    </div>
  );
}
