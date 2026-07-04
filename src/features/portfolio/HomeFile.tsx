'use client';

import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Globe, ExternalLink } from 'lucide-react';
import LineNumbers from '@/src/shared/LineNumbers';

const TYPED_STRINGS = [
  'Always learning, always building.',
  'Full-Stack: frontend, backend, deploy.',
  'PWA & WebSocket enthusiast.',
  'Open source contributor in production.',
  'From México, building for the world.',
];

const ROLES = [
  { label: 'Full-Stack Developer', color: '#4fc1ff' },
  { label: 'PWA Builder',           color: '#f92aad' },
  { label: 'Open Source',           color: '#a6e22e' },
  { label: 'Game Engine Dev',       color: '#fd971f' },
];

const STATS = [
  { value: '15+', label: 'PROJECTS' },
  { value: '5+',  label: 'TECH STACKS' },
  { value: '1',   label: 'OSS PR IN PROD' },
  { value: '∞',   label: 'CURIOSITY' },
];

const SOCIALS = [
  { Icon: Github,   label: 'GitHub',    href: 'https://github.com/ZLostTK' },
  { Icon: Linkedin, label: 'LinkedIn',  href: 'https://linkedin.com/in/alexander-martínez-gonzález-01b13041b' },
  { Icon: Globe,    label: 'Portfolio', href: 'https://anxer.is-a.dev' },
  { Icon: Mail,     label: 'Email',     href: 'mailto:anxerdev@gmail.com' },
];

export default function HomeFile() {
  const [typed, setTyped] = useState('');
  const [strIdx, setStrIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = TYPED_STRINGS[strIdx];
    if (!deleting && charIdx < target.length) {
      const t = setTimeout(() => setCharIdx((i) => i + 1), 50 + Math.random() * 30);
      return () => clearTimeout(t);
    }
    if (!deleting && charIdx === target.length) {
      const t = setTimeout(() => setDeleting(true), 2200);
      return () => clearTimeout(t);
    }
    if (deleting && charIdx > 0) {
      const t = setTimeout(() => setCharIdx((i) => i - 1), 25);
      return () => clearTimeout(t);
    }
    if (deleting && charIdx === 0) {
      setDeleting(false);
      setStrIdx((i) => (i + 1) % TYPED_STRINGS.length);
    }
  }, [charIdx, deleting, strIdx]);

  useEffect(() => {
    setTyped(TYPED_STRINGS[strIdx].slice(0, charIdx));
  }, [charIdx, strIdx]);

  return (
    <div className="flex h-full">
      <LineNumbers count={60} activeLines={[1, 2, 5, 12, 20, 30, 40, 48, 55]} />

      <div className="flex-1 overflow-y-auto pt-6 pr-8 pb-8 pl-2">
        {/* Comment header */}
        <p className="text-sm mono mb-6 token-comment">// hello world !! Welcome to my portfolio</p>

        {/* Name */}
        <div className="mb-5">
          <h1 className="font-black leading-none" style={{ fontSize: 'clamp(38px, 5.5vw, 72px)', color: '#ffffff', letterSpacing: '-2px' }}>
            Alexander
          </h1>
          <h1
            className="font-black leading-none"
            style={{ fontSize: 'clamp(38px, 5.5vw, 72px)', letterSpacing: '-2px', color: '#f92aad' }}
          >
            Martínez
          </h1>
        </div>

        {/* Role badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {ROLES.map((r) => (
            <div
              key={r.label}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs mono"
              style={{ background: r.color + '15', border: `1px solid ${r.color}40`, color: r.color }}
            >
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: r.color }} />
              {r.label}
            </div>
          ))}
        </div>

        {/* Typewriter */}
        <div className="mb-6 h-6">
          <span className="mono text-sm" style={{ color: '#d4d4d4' }}>{typed}</span>
          <span className="mono text-sm cursor-blink" style={{ color: '#007acc' }}>|</span>
        </div>

        {/* Bio */}
        <div
          className="rounded-lg p-5 mb-6 mono text-sm leading-7"
          style={{ background: '#1a1a2e', border: '1px solid #252545', maxWidth: 680 }}
        >
          <p>
            <span style={{ color: '#d4d4d4' }}>Full-Stack developer building </span>
            <span className="token-keyword">web applications</span>
            <span style={{ color: '#d4d4d4' }}> and </span>
            <span className="token-type">PWAs</span>
            <span style={{ color: '#d4d4d4' }}>. Author of </span>
            <span className="token-number">15+</span>
            <span style={{ color: '#d4d4d4' }}> personal projects, including a </span>
            <span className="token-string">browser game engine</span>
            <span style={{ color: '#d4d4d4' }}> with P2P multiplayer, a </span>
            <span className="token-string">streaming e-commerce</span>
            <span style={{ color: '#d4d4d4' }}> platform, and an </span>
            <span className="token-pink">open-source contribution in production</span>
            <span style={{ color: '#d4d4d4' }}>. I manage the complete cycle: </span>
            <span className="token-function">frontend, backend, databases and deployment</span>
            <span style={{ color: '#d4d4d4' }}>.</span>
          </p>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-3 mb-8">
          <button
            className="flex items-center gap-2 px-5 py-2.5 rounded text-sm font-medium transition-all hover:scale-105"
            style={{ background: '#007acc', color: '#ffffff' }}
          >
            <ExternalLink size={14} />
            Projects
          </button>
          <button
            className="flex items-center gap-2 px-5 py-2.5 rounded text-sm font-medium transition-all hover:scale-105"
            style={{ background: '#1a1a2e', border: '1px solid #252545', color: '#d4d4d4' }}
          >
            <Globe size={14} />
            About Me
          </button>
          <button
            className="flex items-center gap-2 px-5 py-2.5 rounded text-sm font-medium transition-all hover:scale-105"
            style={{ background: '#1a1a2e', border: '1px solid #252545', color: '#d4d4d4' }}
          >
            <Mail size={14} />
            Contact
          </button>
        </div>

        {/* Stats */}
        <div
          className="rounded-lg p-5 mb-8 grid grid-cols-4 gap-4"
          style={{ background: '#1a1a2e', border: '1px solid #252545', maxWidth: 680 }}
        >
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-black mono" style={{ color: '#ffffff' }}>{s.value}</div>
              <div className="text-[9px] tracking-widest uppercase mono mt-1" style={{ color: '#6c6c8a' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Social links */}
        <div className="flex flex-wrap gap-3">
          {SOCIALS.map(({ Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded text-xs mono transition-colors hover:bg-white/5"
              style={{ border: '1px solid #252545', color: '#858585' }}
            >
              <Icon size={13} />
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
