'use client';

import { useEffect, useRef, useState } from 'react';
import { Sparkles, X } from 'lucide-react';
import { FILES, getFileLabel } from '@/src/lib/fileSystem';
import type { FileId } from '@/src/shared/types';

interface CommandPaletteProps {
  onClose: () => void;
  onFileSelect: (id: FileId) => void;
  onOpenCopilot: () => void;
}

function FileIcon({ ext, color }: { ext: string; color: string }) {
  const labels: Record<string, string> = {
    tsx: 'JSX', html: 'HTM', js: 'JS', json: '{}',
    ts: 'TS', css: 'CSS', md: 'MD',
  };
  return (
    <span
      className="inline-flex items-center justify-center text-[9px] font-bold rounded-sm mono flex-shrink-0"
      style={{ width: 20, height: 18, background: color + '22', color, border: `1px solid ${color}44` }}
    >
      {labels[ext] ?? ext.toUpperCase().slice(0, 3)}
    </span>
  );
}

export default function CommandPalette({ onClose, onFileSelect, onOpenCopilot }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { inputRef.current?.focus(); }, []);

  const filteredFiles = FILES.filter((f) =>
    query === '' || getFileLabel(f).toLowerCase().includes(query.toLowerCase())
  );

  const commands = query === '' || 'copilot'.includes(query.toLowerCase())
    ? [{ id: 'copilot', label: "Open Alex's Copilot", shortcut: 'Ctrl+Shift+C', icon: <Sparkles size={14} style={{ color: '#007acc' }} /> }]
    : [];

  const allItems = [...commands, ...filteredFiles.map((f) => ({ ...f, iFile: true }))];

  useEffect(() => { setSelected(0); }, [query]);

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Escape') { onClose(); return; }
    if (e.key === 'ArrowDown') { setSelected((s) => Math.min(s + 1, allItems.length - 1)); e.preventDefault(); return; }
    if (e.key === 'ArrowUp') { setSelected((s) => Math.max(s - 1, 0)); e.preventDefault(); return; }
    if (e.key === 'Enter') {
      const item = allItems[selected];
      if (!item) return;
      if ('iFile' in item) { onFileSelect((item as typeof FILES[0]).id); onClose(); }
      else if (item.id === 'copilot') { onOpenCopilot(); onClose(); }
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20"
      style={{ background: 'rgba(0,0,0,0.5)' }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl rounded-lg overflow-hidden fade-in"
        style={{ background: '#1e1e3a', border: '1px solid #353560', boxShadow: '0 8px 32px rgba(0,0,0,0.6)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search input */}
        <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: '1px solid #252545' }}>
          <span style={{ color: '#6c6c8a' }}>&gt;</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Go to file or run command..."
            className="flex-1 bg-transparent outline-none mono text-sm"
            style={{ color: '#d4d4d4' }}
          />
          <button onClick={onClose}>
            <kbd className="text-xs px-1.5 py-0.5 rounded mono" style={{ background: '#252545', color: '#8888aa', border: '1px solid #353560' }}>
              Esc
            </kbd>
          </button>
        </div>

        {/* Results */}
        <div className="max-h-80 overflow-y-auto">
          {commands.length > 0 && (
            <>
              <div className="px-4 py-1 text-[10px] tracking-widest uppercase" style={{ color: '#6c6c8a' }}>Commands</div>
              {commands.map((cmd, i) => (
                <button
                  key={cmd.id}
                  onClick={() => { if (cmd.id === 'copilot') { onOpenCopilot(); onClose(); } }}
                  onMouseEnter={() => setSelected(i)}
                  className="flex items-center gap-3 w-full px-4 py-2.5 text-left transition-colors"
                  style={{
                    background: selected === i ? 'rgba(0,122,204,0.2)' : 'transparent',
                    color: '#d4d4d4',
                  }}
                >
                  {cmd.icon}
                  <span className="text-sm mono flex-1">{cmd.label}</span>
                  <kbd className="text-[10px] px-1.5 py-0.5 rounded mono" style={{ background: '#252545', color: '#8888aa' }}>
                    {cmd.shortcut}
                  </kbd>
                </button>
              ))}
            </>
          )}
          {filteredFiles.length > 0 && (
            <>
              <div className="px-4 py-1 text-[10px] tracking-widest uppercase" style={{ color: '#6c6c8a' }}>Files</div>
              {filteredFiles.map((file, i) => {
                const idx = i + commands.length;
                return (
                  <button
                    key={file.id}
                    onClick={() => { onFileSelect(file.id); onClose(); }}
                    onMouseEnter={() => setSelected(idx)}
                    className="flex items-center gap-3 w-full px-4 py-2.5 text-left transition-colors"
                    style={{
                      background: selected === idx ? 'rgba(0,122,204,0.2)' : 'transparent',
                      color: '#d4d4d4',
                    }}
                  >
                    <FileIcon ext={file.ext} color={file.iconColor} />
                    <span className="text-sm mono flex-1">{getFileLabel(file)}</span>
                    <span className="text-xs" style={{ color: '#6c6c8a' }}>{file.path}</span>
                  </button>
                );
              })}
            </>
          )}
        </div>

        {/* Footer hint */}
        <div
          className="px-4 py-2 flex items-center gap-3 text-[10px] mono"
          style={{ borderTop: '1px solid #252545', color: '#6c6c8a' }}
        >
          <span><kbd className="px-1 py-0.5 rounded" style={{ background: '#252545' }}>↑↓</kbd> navigate</span>
          <span>·</span>
          <span><kbd className="px-1 py-0.5 rounded" style={{ background: '#252545' }}>↵</kbd> open</span>
          <span>·</span>
          <span><kbd className="px-1 py-0.5 rounded" style={{ background: '#252545' }}>Esc</kbd> close</span>
          <span className="ml-auto">Tip: type "copilot" to open AI chat</span>
        </div>
      </div>
    </div>
  );
}
