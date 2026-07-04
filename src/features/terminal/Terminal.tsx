'use client';

import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import type { FileId, TerminalEntry } from '@/src/shared/types';

interface TerminalProps {
  onClose: () => void;
  onFileOpen: (id: FileId) => void;
}

const WHOAMI_OUTPUT = `alexander-martinez — Full-Stack Developer
Location   : San Juan del Río, Querétaro, México
Email      : anxerdev@gmail.com
Phone      : +52 427 126 6833
GitHub     : github.com/ZLostTK
Portfolio  : anxer.is-a.dev
LinkedIn   : linkedin.com/in/alexander-martínez-gonzález-01b13041b
Education  : CBTis N°145 — Technician Degree in Programming (in progress)
Status     : Open to freelance and full-time opportunities`;

const GIT_LOG = `* f8a3c12 (HEAD -> main) feat: open-source dark mode PR merged to firecrawl/open-lovable
* 7d2e91b feat: implement Kordia offline music streaming PWA
* 3c5a70e feat: AnxerStudios dockerized streaming platform
* b8d1f3e feat: Anxershop B2C streaming e-commerce (load ≤ 6s)
* 2a9c4d1 feat: ZLostTK Game Hub — 4-renderer engine + P2P multiplayer
* 1e7f820 feat: CBTis N°145 accounting education app
* 0d3b912 init: portfolio — alexander-martinez-gonzalez`;

const HELP_TEXT = `Available commands:
  cat <file>         — view file in editor
  open <file>        — same as cat
  whoami             — who am I?
  echo <text>        — print text
  date               — show current date & time
  git log            — show recent commits
  node --version     — show Node.js version
  ls                 — list portfolio files
  clear              — clear the terminal
  help               — show this message`;

const LS_OUTPUT = `src/
├── home.tsx
├── about.html
├── projects.js
├── experience.ts
└── contact.css
data/
└── skills.json
./
└── README.md`;

const FILE_IDS: Record<string, FileId> = {
  'home.tsx': 'home', 'about.html': 'about', 'projects.js': 'projects',
  'skills.json': 'skills', 'experience.ts': 'experience',
  'contact.css': 'contact', 'readme.md': 'readme',
};

export default function Terminal({ onClose, onFileOpen }: TerminalProps) {
  const [history, setHistory] = useState<TerminalEntry[]>([
    { type: 'output', text: HELP_TEXT },
  ]);
  const [input, setInput] = useState('');
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState(-1);
  const [activeTab, setActiveTab] = useState<'terminal' | 'problems' | 'output'>('terminal');
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  function addOutput(text: string, type: TerminalEntry['type'] = 'output') {
    setHistory((h) => [...h, { type, text }]);
  }

  function handleCommand(raw: string) {
    const cmd = raw.trim();
    if (!cmd) return;
    setHistory((h) => [...h, { type: 'command', text: cmd }]);
    setCmdHistory((h) => [cmd, ...h]);
    setHistIdx(-1);

    const [prog, ...args] = cmd.split(' ');

    if (prog === 'clear') { setHistory([]); return; }
    if (prog === 'whoami') { addOutput(WHOAMI_OUTPUT); return; }
    if (prog === 'date') { addOutput(new Date().toString()); return; }
    if (prog === 'git' && args[0] === 'log') { addOutput(GIT_LOG); return; }
    if (prog === 'node' && args[0] === '--version') { addOutput('v20.11.0'); return; }
    if (prog === 'ls') { addOutput(LS_OUTPUT); return; }
    if (prog === 'help') { addOutput(HELP_TEXT); return; }
    if (prog === 'echo') { addOutput(args.join(' ')); return; }
    if (prog === 'cat' || prog === 'open') {
      const target = args[0]?.toLowerCase();
      const fileId = FILE_IDS[target];
      if (fileId) {
        addOutput(`Opening ${target} in editor...`);
        onFileOpen(fileId);
      } else {
        addOutput(`cat: ${args[0]}: No such file. Try: home.tsx, about.html, projects.js, skills.json, experience.ts, contact.css, readme.md`, 'error');
      }
      return;
    }
    addOutput(`bash: ${prog}: command not found. Type 'help' for available commands.`, 'error');
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const next = Math.min(histIdx + 1, cmdHistory.length - 1);
      setHistIdx(next);
      setInput(cmdHistory[next] ?? '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = Math.max(histIdx - 1, -1);
      setHistIdx(next);
      setInput(next === -1 ? '' : cmdHistory[next] ?? '');
    }
  }

  return (
    <div
      className="flex flex-col flex-shrink-0"
      style={{ height: 200, background: '#0d0d1a', borderTop: '1px solid #252545' }}
    >
      {/* Tabs */}
      <div
        className="flex items-center flex-shrink-0"
        style={{ height: 30, background: '#141428', borderBottom: '1px solid #252545' }}
      >
        {(['terminal', 'problems', 'output'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="px-4 h-full text-xs uppercase tracking-widest transition-colors mono"
            style={{
              color: activeTab === tab ? '#d4d4d4' : '#6c6c8a',
              borderBottom: activeTab === tab ? '1px solid #007acc' : '1px solid transparent',
            }}
          >
            {tab}
          </button>
        ))}
        <div className="flex items-center gap-2 ml-auto pr-3">
          <button onClick={onClose} className="p-1 rounded hover:bg-white/10 transition-colors" style={{ color: '#6c6c8a' }}>
            <X size={13} />
          </button>
        </div>
      </div>

      {/* Terminal content */}
      {activeTab === 'terminal' && (
        <div
          className="flex-1 overflow-y-auto px-4 py-2 font-mono text-xs"
          style={{ color: '#d4d4d4' }}
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((entry, i) => (
            <div key={i} className="leading-5 whitespace-pre-wrap">
              {entry.type === 'command' && (
                <span>
                  <span style={{ color: '#a6e22e' }}>anxer</span>
                  <span style={{ color: '#d4d4d4' }}>@</span>
                  <span style={{ color: '#66d9e8' }}>portfolio</span>
                  <span style={{ color: '#d4d4d4' }}> : ~ $ </span>
                  <span>{entry.text}</span>
                </span>
              )}
              {entry.type === 'output' && <span style={{ color: '#c0c0d0' }}>{entry.text}</span>}
              {entry.type === 'error' && <span style={{ color: '#f44747' }}>{entry.text}</span>}
            </div>
          ))}
          {/* Input line */}
          <div className="flex items-center leading-5 mt-1">
            <span style={{ color: '#a6e22e' }}>anxer</span>
            <span style={{ color: '#d4d4d4' }}>@</span>
            <span style={{ color: '#66d9e8' }}>portfolio</span>
            <span style={{ color: '#d4d4d4' }}>&nbsp;: ~ $&nbsp;</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent outline-none mono text-xs"
              style={{ color: '#d4d4d4' }}
              autoFocus
            />
            <span className="w-2 h-3.5 cursor-blink inline-block" style={{ background: '#d4d4d4' }} />
          </div>
          <div ref={bottomRef} />
        </div>
      )}
      {activeTab === 'problems' && (
        <div className="flex-1 flex items-center justify-center" style={{ color: '#6c6c8a' }}>
          <span className="text-xs mono">No problems detected</span>
        </div>
      )}
      {activeTab === 'output' && (
        <div className="flex-1 flex items-center justify-center" style={{ color: '#6c6c8a' }}>
          <span className="text-xs mono">No output</span>
        </div>
      )}
    </div>
  );
}
