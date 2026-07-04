'use client';

import LineNumbers from '@/src/shared/LineNumbers';

const EXPERIENCES = [
  {
    company: 'CBTis N°145',
    role: 'Applied Technical Developer',
    period: '3 months',
    location: 'San Juan del Río, Querétaro, MX',
    color: '#4fc1ff',
    logo: '🏫',
    highlights: [
      'Applied Full-Stack career skills to develop an accounting education application',
      'Built the complete product: UI, business logic, database, and deployment',
      'Collaborated with teachers and staff to gather requirements and iterate on feedback',
      'Delivered a working product used by students in the programming curriculum',
    ],
    tags: ['JavaScript', 'Node.js', 'PostgreSQL', 'HTML/CSS', 'Full-Stack'],
  },
  {
    company: 'Firecrawl / Open Lovable',
    role: 'Open Source Contributor',
    period: '2026',
    location: 'Remote (PR Merged)',
    color: '#9c59d1',
    logo: '🔓',
    highlights: [
      'Implemented full dark mode support: ThemeToggle component + CSS theme variables',
      'Applied per-component dark styling: file explorer, style picker, loading spinner',
      'Fixed Next.js hydration mismatch with "mounted" state guard pattern',
      'Added the "icon" size variant to the shared UI Button component system',
      'PR #54 merged to main: github.com/firecrawl/open-lovable/pull/54',
    ],
    tags: ['React', 'Next.js', 'Tailwind CSS', 'CSS Variables', 'TypeScript'],
  },
  {
    company: 'Independent Projects',
    role: 'Full-Stack Developer (Self-Directed)',
    period: '2023 – Present',
    location: 'Remote',
    color: '#a6e22e',
    logo: '🚀',
    highlights: [
      'Shipped 15+ projects across game engines, e-commerce, streaming, and PWAs',
      'ZLostTK Game Hub: 4-renderer browser game engine with P2P multiplayer (10+ games)',
      'Anxershop: B2C streaming subscription platform with load times ≤ 6s',
      'AnxerStudios: Docker-based streaming PWA with 10+ platform integrations',
      'Kordia: Offline-first music PWA using yt-dlp and service workers',
      'Managed full dev cycle: design → code → database → deployment',
    ],
    tags: ['React', 'TypeScript', 'Node.js', 'Supabase', 'Docker', 'PWA', 'WebSockets'],
  },
];

export default function ExperienceFile() {
  return (
    <div className="flex h-full">
      <LineNumbers count={90} />

      <div className="flex-1 overflow-y-auto pt-6 pr-8 pb-8 pl-2">
        <p className="text-sm mono mb-2 token-comment">// experience.ts — where I've worked & built</p>
        <p className="text-xs mono mb-8">
          <span className="token-keyword">interface</span>{' '}
          <span className="token-type">WorkHistory</span>
          <span style={{ color: '#d4d4d4' }}>{' {'}</span>
          <span className="token-property ml-2">company</span>
          <span style={{ color: '#d4d4d4' }}>: </span>
          <span className="token-keyword">string</span>
          <span style={{ color: '#d4d4d4' }}>;</span>
          <span className="token-property ml-2">impact</span>
          <span style={{ color: '#d4d4d4' }}>: </span>
          <span className="token-keyword">string</span>
          <span style={{ color: '#d4d4d4' }}>[]</span>
          <span style={{ color: '#d4d4d4' }}>{' }'}</span>
        </p>

        <div className="relative" style={{ maxWidth: 720 }}>
          {/* Timeline line */}
          <div
            className="absolute top-4 bottom-4"
            style={{ left: 19, width: 1, background: '#252545' }}
          />

          <div className="space-y-8">
            {EXPERIENCES.map((exp, i) => (
              <div key={i} className="relative flex gap-6">
                {/* Dot */}
                <div className="flex-shrink-0 relative" style={{ zIndex: 1 }}>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
                    style={{ background: exp.color + '15', border: `2px solid ${exp.color}60` }}
                  >
                    {exp.logo}
                  </div>
                </div>

                {/* Card */}
                <div
                  className="flex-1 rounded-lg p-5"
                  style={{ background: '#1a1a2e', border: '1px solid #252545' }}
                >
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <div>
                      <h3 className="font-bold mono" style={{ color: exp.color, fontSize: 15 }}>{exp.company}</h3>
                      <div className="text-sm mono mt-0.5" style={{ color: '#d4d4d4' }}>{exp.role}</div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-xs mono" style={{ color: '#6c6c8a' }}>{exp.period}</div>
                      <div className="text-xs mono mt-0.5" style={{ color: '#6c6c8a' }}>{exp.location}</div>
                    </div>
                  </div>

                  <ul className="mt-3 space-y-2">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs mono leading-5" style={{ color: '#858585' }}>
                        <span className="flex-shrink-0 mt-1" style={{ color: exp.color }}>▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 rounded mono"
                        style={{ background: exp.color + '10', border: `1px solid ${exp.color}30`, color: exp.color + 'cc' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Availability note */}
        <div
          className="mt-8 rounded-lg p-4 mono text-xs flex items-center gap-3"
          style={{ background: '#1a1a2e', border: '1px solid #a6e22e44', maxWidth: 720 }}
        >
          <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#a6e22e' }} />
          <span style={{ color: '#a0a0c0' }}>
            <span className="token-comment">// </span>
            <span style={{ color: '#a6e22e' }}>Open to new freelance and full-time opportunities.</span>
            <span style={{ color: '#6c6c8a' }}> — anxerdev@gmail.com</span>
          </span>
        </div>
      </div>
    </div>
  );
}
