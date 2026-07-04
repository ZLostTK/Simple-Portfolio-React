'use client';

import { ChevronDown, ChevronRight, FileText, FolderOpen } from 'lucide-react';
import { useState } from 'react';
import { FILES, getFileLabel } from '@/src/lib/fileSystem';
import type { FileId } from '@/src/shared/types';

interface FileExplorerProps {
  activeFile: FileId;
  openTabs: FileId[];
  onFileSelect: (id: FileId) => void;
}

function FileIcon({ ext, color }: { ext: string; color: string }) {
  const labels: Record<string, string> = {
    tsx:  'JSX',  html: 'HTM', js: 'JS', json: 'JS',
    ts:   'TS',   css:  'CSS', md: 'MD', pdf:  'PDF',
  };
  return (
    <span
      className="inline-flex items-center justify-center text-[9px] font-bold rounded-sm mono flex-shrink-0"
      style={{ width: 18, height: 16, background: color + '22', color, border: `1px solid ${color}44` }}
    >
      {labels[ext] ?? ext.toUpperCase().slice(0, 3)}
    </span>
  );
}

export default function FileExplorer({ activeFile, openTabs, onFileSelect }: FileExplorerProps) {
  const [srcOpen, setSrcOpen] = useState(true);
  const [dataOpen, setDataOpen] = useState(true);

  const srcFiles = FILES.filter((f) => f.path === 'src/');
  const dataFiles = FILES.filter((f) => f.path === 'data/');
  const rootFiles = FILES.filter((f) => f.path === './');

  function renderFile(f: (typeof FILES)[0]) {
    const isActive = f.id === activeFile;
    const isOpen = openTabs.includes(f.id);
    return (
      <button
        key={f.id}
        onClick={() => onFileSelect(f.id)}
        className="flex items-center gap-2 w-full px-3 py-1 text-xs text-left transition-colors group mono"
        style={{
          paddingLeft: 24,
          background: isActive ? 'rgba(0,122,204,0.15)' : 'transparent',
          color: isActive ? '#ffffff' : '#9c9cbf',
          borderLeft: isActive ? '1px solid #007acc' : '1px solid transparent',
        }}
      >
        <FileIcon ext={f.ext} color={f.iconColor} />
        <span className="truncate" style={{ color: isActive ? '#ffffff' : '#c0c0d0' }}>
          {getFileLabel(f)}
        </span>
        {isOpen && !isActive && (
          <span className="ml-auto w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#858585' }} />
        )}
      </button>
    );
  }

  function FolderRow({ label, open, onToggle }: { label: string; open: boolean; onToggle: () => void }) {
    return (
      <button
        onClick={onToggle}
        className="flex items-center gap-1 w-full px-2 py-1 text-xs font-semibold tracking-widest transition-colors"
        style={{ paddingLeft: 8, color: '#8888aa' }}
      >
        {open ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
        <FolderOpen size={14} style={{ color: '#dcb67a' }} />
        <span className="mono uppercase text-[10px] tracking-widest ml-1">{label}</span>
      </button>
    );
  }

  return (
    <div
      className="flex flex-col overflow-hidden flex-shrink-0"
      style={{ width: 220, background: '#16213e', borderRight: '1px solid #252545' }}
    >
      {/* Header */}
      <div
        className="px-3 py-2 text-[10px] font-bold tracking-widest uppercase select-none"
        style={{ color: '#8888aa', borderBottom: '1px solid #252545', height: 35 }}
      >
        Portfolio
      </div>

      {/* Explorer section header */}
      <div
        className="px-3 py-1 text-[10px] font-semibold tracking-widest uppercase select-none flex items-center gap-1"
        style={{ color: '#6c6c8a', borderBottom: '1px solid #1a1a3a', background: '#0f0f1e' }}
      >
        <ChevronDown size={10} />
        Explorer
      </div>

      {/* File tree */}
      <div className="flex-1 overflow-y-auto py-1">
        {/* src/ folder */}
        <FolderRow label="src" open={srcOpen} onToggle={() => setSrcOpen((v) => !v)} />
        {srcOpen && srcFiles.map(renderFile)}

        {/* data/ folder */}
        <FolderRow label="data" open={dataOpen} onToggle={() => setDataOpen((v) => !v)} />
        {dataOpen && dataFiles.map(renderFile)}

        {/* root files */}
        {rootFiles.map(renderFile)}

        {/* Resume */}
        <button
          className="flex items-center gap-2 w-full text-xs text-left py-1 mono transition-colors"
          style={{ paddingLeft: 24, color: '#9c9cbf' }}
        >
          <span
            className="inline-flex items-center justify-center text-[9px] font-bold rounded-sm mono flex-shrink-0"
            style={{ width: 18, height: 16, background: '#ef444422', color: '#ef4444', border: '1px solid #ef444444' }}
          >
            PDF
          </span>
          <span style={{ color: '#c0c0d0' }}>Alexander_Martinez_Resume.pdf</span>
        </button>
      </div>

      {/* Bottom: Copilot badge */}
      <div
        className="px-3 py-2 flex items-center gap-2 cursor-pointer transition-colors"
        style={{ borderTop: '1px solid #252545', background: '#0f0f1e' }}
      >
        <div
          className="flex items-center justify-center rounded-full flex-shrink-0"
          style={{ width: 24, height: 24, background: 'linear-gradient(135deg,#007acc,#0050aa)' }}
        >
          <span className="text-white text-[10px] font-bold">AI</span>
        </div>
        <div>
          <div className="text-[11px] font-medium" style={{ color: '#d4d4d4' }}>Alexander's Copilot</div>
          <div className="text-[9px]" style={{ color: '#6c6c8a' }}>open</div>
        </div>
        <span
          className="ml-auto text-[9px] px-1.5 py-0.5 rounded"
          style={{ background: '#007acc33', color: '#007acc' }}
        >
          AI
        </span>
      </div>
    </div>
  );
}
