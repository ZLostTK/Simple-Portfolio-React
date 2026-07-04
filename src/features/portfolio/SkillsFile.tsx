'use client';

import { useEffect, useRef, useState } from 'react';
import LineNumbers from '@/src/shared/LineNumbers';

interface Skill { name: string; level: number; color: string; }
interface SkillGroup { title: string; skills: Skill[]; }

const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'LANGUAGES',
    skills: [
      { name: 'JavaScript',  level: 92, color: '#F7DF1E' },
      { name: 'TypeScript',  level: 80, color: '#3178C6' },
      { name: 'HTML / CSS',  level: 90, color: '#E34F26' },
      { name: 'Python',      level: 72, color: '#3776AB' },
      { name: 'PHP',         level: 65, color: '#777BB4' },
      { name: 'SQL',         level: 75, color: '#f97316' },
      { name: 'Bash / PowerShell', level: 60, color: '#89e051' },
    ],
  },
  {
    title: 'FRAMEWORKS & LIBRARIES',
    skills: [
      { name: 'React',        level: 88, color: '#61DAFB' },
      { name: 'Next.js',      level: 78, color: '#d4d4d4' },
      { name: 'Node.js',      level: 85, color: '#5FA04E' },
      { name: 'Express.js',   level: 83, color: '#a0a0a0' },
      { name: 'Tailwind CSS', level: 90, color: '#38bdf8' },
      { name: 'Flask',        level: 65, color: '#4ec9b0' },
      { name: 'Bootstrap',    level: 80, color: '#7952b3' },
    ],
  },
  {
    title: 'DATABASES & CLOUD',
    skills: [
      { name: 'PostgreSQL',  level: 78, color: '#336791' },
      { name: 'Supabase',    level: 82, color: '#3ECF8E' },
      { name: 'MongoDB',     level: 70, color: '#47A248' },
      { name: 'MySQL',       level: 72, color: '#4479A1' },
      { name: 'Firebase',    level: 65, color: '#FFCA28' },
      { name: 'Vercel / Netlify', level: 85, color: '#fd971f' },
    ],
  },
  {
    title: 'TOOLS & OTHER',
    skills: [
      { name: 'Docker',        level: 74, color: '#2496ED' },
      { name: 'Git / GitHub',  level: 88, color: '#f05032' },
      { name: 'PWA',           level: 82, color: '#5a0fc8' },
      { name: 'WebSockets',    level: 75, color: '#f92aad' },
      { name: 'JWT / Auth',    level: 78, color: '#d4d4d4' },
      { name: 'Stripe API',    level: 68, color: '#635bff' },
    ],
  },
];

const TOOLS = [
  'VS Code', 'Figma', 'Postman', 'Docker', 'Git', 'GitHub Actions',
  'Vercel', 'Netlify', 'Cloudflare', 'AWS', 'Apache',
  'Debian', 'Arch Linux', 'Ubuntu', 'Vite', 'PIXI.js', 'PeerJS',
];

function SkillBar({ skill, delay }: { skill: Skill; delay: number }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTimeout(() => setWidth(skill.level), delay); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [skill.level, delay]);

  return (
    <div ref={ref} className="flex items-center gap-3">
      <div className="w-36 text-xs mono flex-shrink-0" style={{ color: '#a0a0c0' }}>{skill.name}</div>
      <div className="flex-1 rounded-full overflow-hidden" style={{ height: 3, background: '#252545' }}>
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%`, background: skill.color }}
        />
      </div>
      <div className="w-8 text-xs mono text-right flex-shrink-0" style={{ color: skill.color }}>{skill.level}%</div>
    </div>
  );
}

export default function SkillsFile() {
  return (
    <div className="flex h-full">
      <LineNumbers count={100} />

      <div className="flex-1 overflow-y-auto pt-6 pr-8 pb-8 pl-2">
        <p className="text-sm mono mb-2 token-comment">// skills.json — tech stack & tools I actually use</p>

        <div className="mb-2">
          <h1 className="text-5xl font-black mono" style={{ color: '#d4d4d4', letterSpacing: '-1px' }}>Skills</h1>
        </div>
        <div className="mb-8 mono text-xs" style={{ color: '#858585' }}>
          <span style={{ color: '#66d9e8' }}>{'{'} </span>
          <span className="token-string">"status"</span>
          <span style={{ color: '#d4d4d4' }}>: </span>
          <span className="token-string">"always_learning"</span>
          <span style={{ color: '#d4d4d4' }}>, </span>
          <span className="token-string">"passion"</span>
          <span style={{ color: '#d4d4d4' }}>: </span>
          <span className="token-string">"immeasurable"</span>
          <span style={{ color: '#66d9e8' }}> {'}'}</span>
        </div>

        {/* Skill groups grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8" style={{ maxWidth: 860 }}>
          {SKILL_GROUPS.map((group, gi) => (
            <div key={gi}>
              <h2
                className="mono text-[10px] font-bold tracking-widest uppercase mb-4"
                style={{ color: '#6c6c8a', borderBottom: '1px solid #252545', paddingBottom: 8 }}
              >
                {group.title}
              </h2>
              <div className="space-y-3.5">
                {group.skills.map((skill, si) => (
                  <SkillBar key={skill.name} skill={skill} delay={gi * 100 + si * 80} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools */}
        <div style={{ maxWidth: 860 }}>
          <h2
            className="mono text-[10px] font-bold tracking-widest uppercase mb-4"
            style={{ color: '#6c6c8a', borderBottom: '1px solid #252545', paddingBottom: 8 }}
          >
            Tools & Ecosystem
          </h2>
          <div className="flex flex-wrap gap-2">
            {TOOLS.map((tool) => (
              <span
                key={tool}
                className="text-xs px-3 py-1.5 rounded mono transition-all hover:scale-105 cursor-default"
                style={{ background: '#1a1a2e', border: '1px solid #252545', color: '#9c9cbf' }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
