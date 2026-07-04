'use client';

import LineNumbers from '@/src/shared/LineNumbers';

const FOCUS_ITEMS = [
  { icon: '🎮', text: 'Building ZLostTK Game Hub — browser game engine with P2P multiplayer' },
  { icon: '🌐', text: 'Streaming platforms: AnxerStudios, Anxershop, Kordia' },
  { icon: '🔓', text: 'Open source: dark mode contribution merged to Firecrawl / Open Lovable' },
  { icon: '💬', text: 'Talk to me about React, Node.js, WebSockets, PWA, Docker' },
  { icon: '🚀', text: 'Managing the full cycle: frontend → backend → database → deploy' },
  { icon: '✨', text: 'Always learning — currently diving deeper into TypeScript & distributed systems' },
];

const EDUCATION = [
  {
    school: 'CBTis N°145',
    degree: 'Technician Degree in Programming (in progress)',
    years: 'Current',
    details: [
      'Applied technical career to accounting education app development (3 months)',
      'Full-stack web development curriculum',
      'San Juan del Río, Querétaro, México',
    ],
  },
  {
    school: 'Self-Taught / Online',
    degree: 'Continuous Learning',
    years: '2023 – Present',
    details: [
      '15+ personal projects shipped to production',
      'Open-source contribution: PR merged at github.com/firecrawl/open-lovable',
      'Docker, Supabase, Stripe API, WebSockets, PWA architecture',
    ],
  },
];

const VALUES = [
  { title: 'Ship It',       desc: 'Projects are meant to be deployed, not sit on localhost' },
  { title: 'Full Cycle',    desc: 'Own the feature end-to-end: design, code, deploy, maintain' },
  { title: 'Open Source',   desc: 'Give back — already contributed a PR to production' },
  { title: 'Curiosity',     desc: 'If it\'s interesting, I\'ll build it and figure it out along the way' },
];

export default function AboutFile() {
  return (
    <div className="flex h-full">
      <LineNumbers count={80} />

      <div className="flex-1 overflow-y-auto pt-6 pr-8 pb-8 pl-2">
        {/* Header comment */}
        <p className="text-sm mono mb-2 token-comment">// about.html — who is Alexander Martínez?</p>
        <div
          className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded mono text-xs"
          style={{ background: '#1a1a2e', border: '1px solid #252545', color: '#858585' }}
        >
          <span style={{ color: '#66d9e8' }}>{'{'}</span>
          <span className="token-string">"status"</span>
          <span style={{ color: '#d4d4d4' }}>: </span>
          <span className="token-string">"open_to_opportunities"</span>
          <span style={{ color: '#d4d4d4' }}>,</span>
          <span className="token-string">"location"</span>
          <span style={{ color: '#d4d4d4' }}>: </span>
          <span className="token-string">"México 🇲🇽"</span>
          <span style={{ color: '#66d9e8' }}>{'}'}</span>
        </div>

        {/* Bio section */}
        <section className="mb-8" style={{ maxWidth: 720 }}>
          <h2 className="mono text-2xl font-black mb-4" style={{ color: '#d4d4d4', letterSpacing: '-0.5px' }}>
            About Me
          </h2>
          <div className="space-y-3 mono text-sm leading-7" style={{ color: '#a0a0c0' }}>
            <p>
              Hey! I'm <span className="token-pink font-semibold">Alexander Martínez González</span> — a Full-Stack developer from <span className="token-type">San Juan del Río, Querétaro, México</span>. I build web applications and PWAs and I'm passionate about owning the full product lifecycle.
            </p>
            <p>
              I've shipped <span className="token-number">15+</span> personal projects ranging from a <span className="token-keyword">browser game engine</span> with P2P multiplayer (supporting 4 renderers) to a <span className="token-string">streaming e-commerce platform</span> and an <span className="token-function">offline music PWA</span>. Each one taught me something new.
            </p>
            <p>
              In <span className="token-number">2026</span> I made my first <span className="token-pink">open-source contribution in production</span>: I implemented full dark mode support for the Firecrawl / Open Lovable project — ThemeToggle component, CSS theme variables, per-component styling, and fixed Next.js hydration issues. PR merged.
            </p>
            <p>
              I'm currently studying at <span className="token-type">CBTis N°145</span> and open to freelance or full-time opportunities. I work remotely and collaborate asynchronously just fine.
            </p>
          </div>
        </section>

        {/* Current Focus */}
        <section className="mb-8" style={{ maxWidth: 720 }}>
          <h2 className="mono text-xs font-bold tracking-widest uppercase mb-4" style={{ color: '#007acc', letterSpacing: '3px' }}>
            Current Focus
          </h2>
          <div
            className="rounded-lg p-5"
            style={{ background: '#1a1a2e', border: '1px solid #252545' }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {FOCUS_ITEMS.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-lg flex-shrink-0 mt-0.5">{item.icon}</span>
                  <span className="text-sm mono leading-6" style={{ color: '#a0a0c0' }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-8" style={{ maxWidth: 720 }}>
          <h2 className="mono text-xs font-bold tracking-widest uppercase mb-4" style={{ color: '#007acc', letterSpacing: '3px' }}>
            Education
          </h2>
          <div className="space-y-4">
            {EDUCATION.map((edu, i) => (
              <div
                key={i}
                className="rounded-lg p-5"
                style={{ background: '#1a1a2e', border: '1px solid #252545' }}
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <div className="text-sm font-semibold mono" style={{ color: '#d4d4d4' }}>
                      <span className="text-base mr-2">🎓</span>{edu.school}
                    </div>
                    <div className="text-xs mt-1 mono" style={{ color: '#4ec9b0' }}>{edu.degree}</div>
                  </div>
                  <div className="text-xs mono flex-shrink-0" style={{ color: '#6c6c8a' }}>{edu.years}</div>
                </div>
                <ul className="mt-3 space-y-1">
                  {edu.details.map((d, j) => (
                    <li key={j} className="text-xs mono flex items-center gap-2" style={{ color: '#858585' }}>
                      <span style={{ color: '#252545' }}>▪</span> {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section style={{ maxWidth: 720 }}>
          <h2 className="mono text-xs font-bold tracking-widest uppercase mb-4" style={{ color: '#007acc', letterSpacing: '3px' }}>
            Values
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {VALUES.map((v, i) => (
              <div
                key={i}
                className="rounded-lg p-4"
                style={{ background: '#1a1a2e', border: '1px solid #252545' }}
              >
                <div className="text-sm font-semibold mono mb-1" style={{ color: '#4ec9b0' }}>{v.title}</div>
                <div className="text-xs mono leading-5" style={{ color: '#858585' }}>{v.desc}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
