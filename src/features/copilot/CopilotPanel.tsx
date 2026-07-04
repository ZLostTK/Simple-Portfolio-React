'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, X, Pencil } from 'lucide-react';
import type { CopilotMessage } from '@/src/shared/types';

interface CopilotPanelProps {
  onClose: () => void;
}

const QUICK_PROMPTS = [
  "Tell me about Alexander",
  "What projects has he built?",
  "What's his experience?",
  "What's his tech stack?",
  "How can I contact him?",
  "Any open source work?",
];

const KNOWLEDGE: Record<string, string> = {
  about: `Alexander Martínez González is a Full-Stack developer from San Juan del Río, Querétaro, México. He builds web applications and PWAs, managing the full cycle: frontend, backend, databases, and deployment.

He's the author of 15+ personal projects including a browser game engine with P2P multiplayer, a streaming e-commerce platform, and an offline music PWA. In 2026 he made an open-source contribution that was merged to production at Firecrawl / Open Lovable.

📍 San Juan del Río, Querétaro, MX
📧 anxerdev@gmail.com
📱 +52 427 126 6833
🌐 anxer.is-a.dev`,

  projects: `Alexander's notable projects:

**ZLostTK Game Hub** (2025–Present)
Browser game engine supporting 4 renderers (Canvas 2D, DOM, PIXI.js, LittleJS) with init/update/render lifecycle. Used as base for 10+ complete games. P2P multiplayer via PeerJS — no central server needed.

**Anxershop** (6 months)
B2C streaming subscription e-commerce. Automates distribution and management of shared streaming accounts. Load times ≤ 6 seconds. Built with React, Node.js, Supabase, JWT.

**AnxerStudios** (2025)
Movie & series streaming PWA. Automated scraping to index large media catalogs. 10+ platform integrations, 6 services, dockerized architecture. React, TypeScript, Vite, Docker.

**Kordia** (2025)
Offline music streaming PWA. Downloads and caches audio for offline listening via yt-dlp. Client-server architecture with service workers.

**Open Lovable / Firecrawl** (2026)
Open-source contribution merged to production. Full dark mode: ThemeToggle, CSS variables, per-component styling, hydration fix, Button "icon" size variant. PR #54.`,

  experience: `Experience:

**CBTis N°145** — Applied Technical Developer (3 months)
Applied Full-Stack skills to build an accounting education application. Handled the complete product: UI, backend, database, and deployment. Worked directly with teachers and students.

**Firecrawl / Open Lovable** — Open Source Contributor (2026)
Implemented dark mode support for the open-source project. PR #54 merged to main.
github.com/firecrawl/open-lovable/pull/54

**Independent Projects** (2023–Present)
15+ shipped projects across game engines, e-commerce, streaming, and PWA domains. Full development cycle ownership on every project.

Currently studying at CBTis N°145 (Technician Degree in Programming, in progress).
Open to freelance and full-time opportunities.`,

  skills: `Alexander's tech stack:

Languages: JavaScript, TypeScript, Python, PHP, HTML/CSS, SQL, Bash, PowerShell, JSON
Frontend: React, Next.js, Tailwind CSS, Bootstrap, Vite, PWA, Canvas API, PIXI.js
Backend: Node.js, Express.js, Flask, .NET, WebSockets, JWT, Stripe API
Databases: PostgreSQL, Supabase, MongoDB, MySQL, Firebase
DevOps: Docker, Git/GitHub, Vercel, Netlify, Cloudflare, GitHub Pages, AWS, Apache
OS: Debian, Arch Linux, Ubuntu
Other: PeerJS, yt-dlp, PlaceholderAPI, Skript`,

  contact: `You can reach Alexander at:

📧 Email: anxerdev@gmail.com
📱 Phone: +52 427 126 6833
🐙 GitHub: github.com/ZLostTK
💼 LinkedIn: linkedin.com/in/alexander-martínez-gonzález-01b13041b
🌐 Portfolio: anxer.is-a.dev
📍 Location: San Juan del Río, Querétaro, México

He's open to freelance and full-time opportunities!`,

  opensource: `Alexander's open-source contribution:

**Open Lovable (Firecrawl)** — PR #54 merged (2026)
- Implemented full dark mode support for the open-source project
- Built the ThemeToggle component from scratch
- Added CSS theme variables for consistent theming
- Applied per-component dark styling (file explorer, style picker, loading spinner)
- Fixed Next.js hydration mismatch with "mounted" state guard
- Added the "icon" size variant to the shared Button component system

🔗 github.com/firecrawl/open-lovable/pull/54

More experimental projects on github.com/ZLostTK`,
};

function getResponse(query: string): string {
  const q = query.toLowerCase();
  if (q.includes('project') || q.includes('built') || q.includes('made') || q.includes('game') || q.includes('shop') || q.includes('studio') || q.includes('kordia')) return KNOWLEDGE.projects;
  if (q.includes('experience') || q.includes('work') || q.includes('job') || q.includes('career') || q.includes('cbtis')) return KNOWLEDGE.experience;
  if (q.includes('skill') || q.includes('tech') || q.includes('stack') || q.includes('language') || q.includes('react') || q.includes('node')) return KNOWLEDGE.skills;
  if (q.includes('contact') || q.includes('email') || q.includes('reach') || q.includes('hire') || q.includes('phone')) return KNOWLEDGE.contact;
  if (q.includes('open source') || q.includes('oss') || q.includes('firecrawl') || q.includes('pr') || q.includes('pull request') || q.includes('contribution')) return KNOWLEDGE.opensource;
  if (q.includes('support') || q.includes('sponsor')) return `You can support Alexander's work by:\n• Starring his GitHub repos: github.com/ZLostTK\n• Sharing his projects\n• Hiring him for your next project!\n\nContact: anxerdev@gmail.com`;
  return KNOWLEDGE.about;
}

export default function CopilotPanel({ onClose }: CopilotPanelProps) {
  const [messages, setMessages] = useState<CopilotMessage[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [msgsLeft, setMsgsLeft] = useState(10);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  function sendMessage(text: string) {
    if (!text.trim() || msgsLeft <= 0) return;
    setMessages((m) => [...m, { role: 'user', text }]);
    setInput('');
    setIsTyping(true);
    setMsgsLeft((n) => n - 1);

    setTimeout(() => {
      const response = getResponse(text);
      setMessages((m) => [...m, { role: 'assistant', text: response }]);
      setIsTyping(false);
    }, 800 + Math.random() * 600);
  }

  const showWelcome = messages.length === 0;

  return (
    <div
      className="flex flex-col flex-shrink-0 slide-in-right"
      style={{ width: 300, background: '#16213e', borderLeft: '1px solid #252545' }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-4 py-3 flex-shrink-0"
        style={{ borderBottom: '1px solid #252545', background: '#0f0f23' }}
      >
        <div>
          <div className="text-xs font-semibold" style={{ color: '#d4d4d4' }}>WORKSPACE</div>
          <div className="text-[10px] mt-0.5" style={{ color: '#007acc' }}>
            portfolio · alexander-martinez
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-1 rounded hover:bg-white/10 transition-colors" style={{ color: '#6c6c8a' }}>
            <Pencil size={13} />
          </button>
          <button onClick={onClose} className="p-1 rounded hover:bg-white/10 transition-colors" style={{ color: '#6c6c8a' }}>
            <X size={13} />
          </button>
        </div>
      </div>

      {/* Chat area */}
      <div className="flex-1 overflow-y-auto p-4">
        {showWelcome && (
          <div className="flex flex-col items-center text-center mb-4">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center mb-3"
              style={{ background: 'linear-gradient(135deg, #007acc, #0050aa)' }}
            >
              <span className="text-2xl">🤖</span>
            </div>
            <h3 className="text-sm font-semibold mb-1" style={{ color: '#d4d4d4' }}>
              Hi! I'm Alexander's Copilot
            </h3>
            <p className="text-xs leading-relaxed" style={{ color: '#858585' }}>
              Ask me anything about his projects, skills, experience, or achievements.
            </p>

            <div className="grid grid-cols-2 gap-2 mt-4 w-full">
              {QUICK_PROMPTS.map((p) => (
                <button
                  key={p}
                  onClick={() => sendMessage(p)}
                  className="text-left text-[10px] px-2 py-2 rounded transition-colors leading-tight hover:bg-white/5"
                  style={{ background: '#1a1a2e', border: '1px solid #252545', color: '#858585' }}
                >
                  <span style={{ color: '#007acc' }}>·</span> {p}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Messages */}
        {messages.map((msg, i) => (
          <div key={i} className={`mb-3 ${msg.role === 'user' ? 'flex justify-end' : ''}`}>
            {msg.role === 'assistant' && (
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center mb-1"
                style={{ background: 'linear-gradient(135deg, #007acc, #0050aa)' }}
              >
                <span className="text-xs">🤖</span>
              </div>
            )}
            <div
              className="text-xs leading-relaxed rounded-lg px-3 py-2 max-w-full whitespace-pre-wrap"
              style={{
                background: msg.role === 'user' ? '#007acc' : '#1a1a2e',
                color: msg.role === 'user' ? '#ffffff' : '#c0c0d0',
                border: msg.role === 'user' ? 'none' : '1px solid #252545',
              }}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="mb-3">
            <div
              className="inline-flex items-center gap-1 px-3 py-2 rounded-lg text-xs"
              style={{ background: '#1a1a2e', border: '1px solid #252545', color: '#858585' }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ background: '#007acc', animationDelay: '0ms' }} />
              <span className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ background: '#007acc', animationDelay: '150ms' }} />
              <span className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ background: '#007acc', animationDelay: '300ms' }} />
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div style={{ borderTop: '1px solid #252545' }}>
        <div className="flex items-center gap-2 px-3 py-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage(input)}
            placeholder="Ask about Alexander's projects..."
            className="flex-1 bg-transparent outline-none text-xs"
            style={{ color: '#d4d4d4' }}
            disabled={msgsLeft <= 0}
          />
          <button
            onClick={() => sendMessage(input)}
            disabled={!input.trim() || msgsLeft <= 0}
            className="p-1.5 rounded transition-colors disabled:opacity-40"
            style={{ background: '#007acc', color: '#fff' }}
          >
            <Send size={12} />
          </button>
        </div>
        <div className="flex items-center justify-between px-3 pb-2">
          <span className="text-[10px]" style={{ color: '#6c6c8a' }}>
            {msgsLeft} msgs left
          </span>
          <span className="text-[10px]" style={{ color: '#6c6c8a' }}>
            AI can make mistakes
          </span>
        </div>
      </div>
    </div>
  );
}
