'use client';

import { X } from 'lucide-react';
import { FILE_MAP, getFileLabel } from '@/src/lib/fileSystem';
import type { FileId } from '@/src/shared/types';

interface TabBarProps {
  openTabs: FileId[];
  activeFile: FileId;
  onTabSelect: (id: FileId) => void;
  onTabClose: (id: FileId) => void;
}

function FileIcon({ ext, color }: { ext: string; color: string }) {
  const labels: Record<string, string> = {
    tsx: 'JSX', html: 'HTM', js: 'JS', json: '{}',
    ts: 'TS', css: 'CSS', md: 'MD',
  };
  return (
    <span
      className="inline-flex items-center justify-center text-[8px] font-bold rounded-sm mono flex-shrink-0"
      style={{ width: 16, height: 14, background: color + '22', color, border: `1px solid ${color}44` }}
    >
      {labels[ext] ?? ext.toUpperCase().slice(0, 3)}
    </span>
  );
}

export default function TabBar({ openTabs, activeFile, onTabSelect, onTabClose }: TabBarProps) {
  if (openTabs.length === 0) return null;

  return (
    <div
      className="flex items-end overflow-x-auto flex-shrink-0 scrollbar-hide"
      style={{ height: 35, background: '#141428', borderBottom: '1px solid #252545' }}
    >
      {openTabs.map((id) => {
        const file = FILE_MAP[id];
        const isActive = id === activeFile;
        return (
          <div
            key={id}
            onClick={() => onTabSelect(id)}
            className="flex items-center gap-1.5 px-3 cursor-pointer flex-shrink-0 group h-full transition-colors"
            style={{
              background: isActive ? '#1a1a2e' : 'transparent',
              borderRight: '1px solid #252545',
              borderTop: isActive ? '1px solid #007acc' : '1px solid transparent',
              color: isActive ? '#ffffff' : '#858585',
              minWidth: 100,
              maxWidth: 180,
            }}
          >
            <FileIcon ext={file.ext} color={file.iconColor} />
            <span className="text-xs truncate mono flex-1">{getFileLabel(file)}</span>
            <button
              onClick={(e) => { e.stopPropagation(); onTabClose(id); }}
              className="flex-shrink-0 p-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/10"
              style={{ color: '#858585' }}
            >
              <X size={12} />
            </button>
          </div>
        );
      })}
    </div>
  );
}
