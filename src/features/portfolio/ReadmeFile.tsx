'use client';

import LineNumbers from '@/src/shared/LineNumbers';

const README = `# Alexander Martínez González — Portfolio

> A VS Code-style portfolio built with Next.js, TypeScript, and Tailwind CSS.
> San Juan del Río, Querétaro, México 🇲🇽

## About Me

Full-Stack developer building web applications and PWAs with 15+ personal
projects shipped, an open-source contribution merged to production, and 3 months
of real-world experience applying my skills at CBTis N°145.

I manage the complete cycle: frontend, backend, databases, and deployment.

## Tech Stack

\`\`\`json
{
  "languages":   ["JavaScript", "TypeScript", "Python", "PHP", "SQL"],
  "frontend":    ["React", "Next.js", "Tailwind CSS", "Vite", "PWA"],
  "backend":     ["Node.js", "Express.js", "Flask", "WebSockets", "JWT"],
  "databases":   ["PostgreSQL", "Supabase", "MongoDB", "MySQL", "Firebase"],
  "devops":      ["Docker", "Vercel", "Netlify", "Cloudflare", "GitHub Actions"],
  "other":       ["Stripe API", "PeerJS", "PIXI.js", "Canvas API", "yt-dlp"]
}
\`\`\`

## Highlighted Projects

- **ZLostTK Game Hub** — Browser game engine: 4 renderers + P2P multiplayer (10+ games)
- **Anxershop** — Streaming subscription e-commerce platform (B2C, Node.js + Supabase)
- **AnxerStudios** — Movie/series streaming PWA with Docker-based architecture
- **Kordia** — Offline music streaming PWA using yt-dlp + service workers
- **Open Lovable** — Dark mode PR merged to Firecrawl open-source project (2026)

## Open Source

- PR #54 merged: github.com/firecrawl/open-lovable/pull/54
- More projects: github.com/ZLostTK

## Portfolio Commands (try in the terminal!)

\`\`\`bash
whoami              # Learn about Alexander
ls                  # List all portfolio files
cat home.tsx        # Open home in editor
open projects.js    # Open projects
git log             # See recent "commits"
echo hello world    # Print text
date                # Current date & time
\`\`\`

## Contact

- Email: anxerdev@gmail.com
- Phone: +52 427 126 6833
- GitHub: github.com/ZLostTK
- LinkedIn: /in/alexander-martínez-gonzález-01b13041b
- Portfolio: anxer.is-a.dev

---

*Built with Next.js · Tailwind CSS · TypeScript · Too much coffee*
`;

function renderMarkdown(text: string) {
  const lines = text.split('\n');
  return lines.map((line, i) => {
    if (line.startsWith('# ')) return (
      <div key={i} className="text-2xl font-black mono mb-2" style={{ color: '#d4d4d4' }}>
        {line.slice(2)}
      </div>
    );
    if (line.startsWith('## ')) return (
      <div key={i} className="text-base font-bold mono mt-5 mb-2" style={{ color: '#4fc1ff' }}>
        {line.slice(3)}
      </div>
    );
    if (line.startsWith('> ')) return (
      <div key={i} className="mono text-sm italic mb-1 pl-3" style={{ color: '#a0a0c0', borderLeft: '3px solid #252545' }}>
        {line.slice(2)}
      </div>
    );
    if (line.startsWith('- ')) {
      const content = line.slice(2).replace(/\*\*(.*?)\*\*/g, '<strong style="color:#d4d4d4">$1</strong>');
      return (
        <div key={i} className="mono text-xs leading-6 flex gap-2" style={{ color: '#858585' }}>
          <span style={{ color: '#007acc' }}>▸</span>
          <span dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      );
    }
    if (line.startsWith('```')) return (
      <div key={i} className="font-mono text-[10px] mt-1 mb-1" style={{ color: '#454560' }}>{line}</div>
    );
    if (line === '---') return <hr key={i} style={{ borderColor: '#252545', margin: '12px 0' }} />;
    if (line === '') return <div key={i} className="h-2" />;
    if (line.startsWith('*')) return (
      <div key={i} className="mono text-xs italic mt-2" style={{ color: '#6c6c8a' }}>{line}</div>
    );

    const parts = line.split(/(`[^`]+`)/g);
    return (
      <div key={i} className="mono text-xs leading-6" style={{ color: '#a0a0c0' }}>
        {parts.map((part, j) =>
          part.startsWith('`') && part.endsWith('`') ? (
            <code
              key={j}
              className="px-1.5 py-0.5 rounded text-[11px]"
              style={{ background: '#252545', color: '#d4d4d4', fontFamily: 'JetBrains Mono, monospace' }}
            >
              {part.slice(1, -1)}
            </code>
          ) : (
            <span key={j}>{part}</span>
          )
        )}
      </div>
    );
  });
}

export default function ReadmeFile() {
  return (
    <div className="flex h-full">
      <LineNumbers count={70} />

      <div className="flex-1 overflow-y-auto pt-6 pr-8 pb-8 pl-2">
        <p className="text-sm mono mb-6 token-comment">// README.md</p>
        <div className="space-y-0.5" style={{ maxWidth: 640 }}>
          {renderMarkdown(README)}
        </div>
      </div>
    </div>
  );
}
