'use client';

import { GitBranch, AlertCircle, AlertTriangle, Zap } from 'lucide-react';
import { FILE_MAP, getFileLabel } from '@/src/lib/fileSystem';
import type { FileId } from '@/src/shared/types';

interface StatusBarProps {
  activeFile: FileId;
  onTerminalToggle: () => void;
}

const EXT_LANGUAGE: Record<string, string> = {
  tsx: 'TypeScript React',
  html: 'HTML',
  js: 'JavaScript',
  json: 'JSON',
  ts: 'TypeScript',
  css: 'CSS',
  md: 'Markdown',
};

export default function StatusBar({ activeFile, onTerminalToggle }: StatusBarProps) {
  const file = FILE_MAP[activeFile];
  const lang = EXT_LANGUAGE[file.ext] ?? file.ext.toUpperCase();

  return (
    <div
      className="flex items-center justify-between flex-shrink-0 mono text-[11px] select-none"
      style={{ height: 22, background: '#007acc', color: '#ffffff', paddingLeft: 8, paddingRight: 8 }}
    >
      {/* Left */}
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-1 hover:bg-white/10 px-2 py-0.5 rounded transition-colors">
          <GitBranch size={12} />
          <span>main</span>
        </button>
        <button
          className="flex items-center gap-1 hover:bg-white/10 px-2 py-0.5 rounded transition-colors"
          onClick={onTerminalToggle}
        >
          <AlertCircle size={12} />
          <span>0</span>
          <AlertTriangle size={12} className="ml-1" />
          <span>0</span>
        </button>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <span>Ln 1, Col 1</span>
        <span>UTF-8</span>
        <span>Prettier</span>
        <span>{lang}</span>
        <button className="flex items-center gap-1 hover:bg-white/10 px-2 py-0.5 rounded transition-colors">
          <Zap size={11} />
          <span>Anxer Dark</span>
        </button>
        <span style={{ color: '#cce8ff' }}>18:38</span>
      </div>
    </div>
  );
}
