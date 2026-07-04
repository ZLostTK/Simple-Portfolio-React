'use client';

import { ExternalLink, Github, Star, GitFork, GitPullRequest } from 'lucide-react';
import LineNumbers from '@/src/shared/LineNumbers';

const PROJECTS = [
  {
    name: 'ZLostTK Game Hub',
    tagline: 'Browser game engine with P2P multiplayer support',
    description: 'Designed a game engine supporting 4 renderers (Canvas 2D, DOM, PIXI.js, LittleJS) with an init/update/render lifecycle, used as the base for 10+ complete games. Implemented peer-to-peer multiplayer with PeerJS, enabling solo, local versus, and online modes without a central server.',
    tags: ['JavaScript', 'Canvas API', 'PIXI.js', 'PeerJS', 'LittleJS'],
    period: '2025 – Present',
    color: '#fd971f',
    image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
    repo: 'https://github.com/ZLostTK',
    featured: true,
    badge: '10+ GAMES',
  },
  {
    name: 'Anxershop',
    tagline: 'Streaming subscription e-commerce platform',
    description: 'Built a B2C platform that automates distribution and management of shared streaming accounts, streamlining the end-to-end purchase flow. Optimized application performance, achieving load times of 6 seconds or less.',
    tags: ['React', 'Node.js', 'Supabase', 'JWT', 'Express.js'],
    period: '6 months',
    color: '#4fc1ff',
    image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
    repo: 'https://github.com/ZLostTK',
    featured: true,
    badge: 'B2C PLATFORM',
  },
  {
    name: 'AnxerStudios',
    tagline: 'Movie & series streaming platform (PWA)',
    description: 'Built a PWA with automated scraping to index large media catalogs. Integrated 10+ platforms and 6 services into a dockerized architecture for consistent deployment.',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Docker'],
    period: '2025',
    color: '#a6e22e',
    image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
    repo: 'https://github.com/ZLostTK',
    featured: false,
    badge: 'PWA',
  },
  {
    name: 'Kordia',
    tagline: 'Offline music streaming PWA',
    description: 'Developed a client-server app that downloads and caches audio for offline listening via yt-dlp. Full offline-first architecture with service workers and local cache management.',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'yt-dlp'],
    period: '2025',
    color: '#f92aad',
    image: 'https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
    repo: 'https://github.com/ZLostTK',
    featured: false,
    badge: 'OFFLINE-FIRST',
  },
  {
    name: 'Open Lovable (Firecrawl)',
    tagline: 'Open-source dark mode contribution — PR merged',
    description: 'Implemented full dark mode support for the open-source project: ThemeToggle component, CSS theme variables, and per-component styling (file explorer, style picker, loading spinner). Fixed Next.js hydration issues with "mounted" state handling and added the "icon" size to the UI Button component system.',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'CSS Variables', 'Open Source'],
    period: '2026',
    color: '#9c59d1',
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
    repo: 'https://github.com/firecrawl/open-lovable/pull/54',
    featured: false,
    badge: 'MERGED',
    isOss: true,
  },
];

export default function ProjectsFile() {
  return (
    <div className="flex h-full">
      <LineNumbers count={90} />

      <div className="flex-1 overflow-y-auto pt-6 pr-8 pb-8 pl-2">
        <p className="text-sm mono mb-2 token-comment">// projects.js — things I've built</p>
        <p className="text-xs mono mb-8" style={{ color: '#6c6c8a' }}>
          <span className="token-keyword">const</span>{' '}
          <span className="token-function">projects</span>{' '}
          <span style={{ color: '#d4d4d4' }}>= [</span>
          <span className="token-comment ml-2">// 15+ shipped, highlights below</span>
        </p>

        <div className="space-y-6" style={{ maxWidth: 780 }}>
          {PROJECTS.map((proj, i) => (
            <div
              key={i}
              className="rounded-lg overflow-hidden transition-all hover:scale-[1.01] group"
              style={{
                background: '#1a1a2e',
                border: `1px solid #252545`,
                boxShadow: proj.featured ? `0 0 0 1px ${proj.color}22` : 'none',
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ height: 140 }}>
                <img
                  src={proj.image}
                  alt={proj.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ filter: 'brightness(0.55)' }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: `linear-gradient(to bottom, transparent 30%, #1a1a2e)` }}
                />
                {/* Badges */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  {proj.isOss && (
                    <div
                      className="flex items-center gap-1 text-[10px] px-2 py-1 rounded mono font-semibold"
                      style={{ background: proj.color + '25', border: `1px solid ${proj.color}60`, color: proj.color }}
                    >
                      <GitPullRequest size={10} />
                      PR MERGED
                    </div>
                  )}
                  {!proj.isOss && (
                    <div
                      className="text-[10px] px-2 py-1 rounded mono font-semibold"
                      style={{ background: proj.color + '20', border: `1px solid ${proj.color}60`, color: proj.color }}
                    >
                      {proj.badge}
                    </div>
                  )}
                  <div
                    className="text-[10px] px-2 py-1 rounded mono"
                    style={{ background: '#0f0f2388', border: '1px solid #252545', color: '#6c6c8a' }}
                  >
                    {proj.period}
                  </div>
                </div>
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="text-base font-black mono" style={{ color: '#ffffff' }}>{proj.name}</h3>
                  <p className="text-xs mono mt-0.5" style={{ color: '#a0a0c0' }}>{proj.tagline}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <p className="text-xs mono leading-6 mb-4" style={{ color: '#858585' }}>{proj.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-0.5 rounded mono"
                      style={{ background: '#0f0f23', border: '1px solid #353560', color: '#9c9cbf' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-end">
                  <a
                    href={proj.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded mono transition-colors"
                    style={{ background: proj.color + '15', border: `1px solid ${proj.color}40`, color: proj.color }}
                  >
                    {proj.isOss ? <GitPullRequest size={12} /> : <Github size={12} />}
                    {proj.isOss ? 'View PR' : 'View on GitHub'}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs mono mt-6" style={{ color: '#6c6c8a' }}>
          <span style={{ color: '#d4d4d4' }}>]</span>
          <span className="token-comment ml-2">// more on github.com/ZLostTK ↗</span>
        </p>
      </div>
    </div>
  );
}
