'use client';

import { ChevronRight } from 'lucide-react';
import { FILE_MAP, getFileLabel } from '@/src/lib/fileSystem';
import type { FileId } from '@/src/shared/types';

interface BreadcrumbProps {
  activeFile: FileId;
}

export default function Breadcrumb({ activeFile }: BreadcrumbProps) {
  const file = FILE_MAP[activeFile];
  const segments = ['alexander-martinez', file.path.replace(/\//g, '') || '.', getFileLabel(file)];

  return (
    <div
      className="flex items-center px-4 flex-shrink-0"
      style={{ height: 26, background: '#1a1a2e', borderBottom: '1px solid #1e1e3a' }}
    >
      {segments.map((seg, i) => (
        <span key={i} className="flex items-center gap-1">
          {i > 0 && <ChevronRight size={10} style={{ color: '#454560' }} />}
          <span
            className="text-xs mono transition-colors"
            style={{ color: i === segments.length - 1 ? '#d4d4d4' : '#6c6c8a' }}
          >
            {seg}
          </span>
        </span>
      ))}
    </div>
  );
}
