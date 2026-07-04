'use client';

import {
  Files,
  Search,
  GitBranch,
  Package,
  Bug,
  Sparkles,
  Settings,
  User,
} from 'lucide-react';

interface ActivityBarProps {
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
  activePanel: string;
  onPanelChange: (panel: string) => void;
}

const topIcons = [
  { id: 'files',      Icon: Files,     label: 'Explorer' },
  { id: 'search',     Icon: Search,    label: 'Search' },
  { id: 'git',        Icon: GitBranch, label: 'Source Control' },
  { id: 'extensions', Icon: Package,   label: 'Extensions' },
  { id: 'debug',      Icon: Bug,       label: 'Run & Debug' },
  { id: 'copilot',    Icon: Sparkles,  label: 'Copilot' },
];

export default function ActivityBar({
  sidebarOpen,
  onToggleSidebar,
  activePanel,
  onPanelChange,
}: ActivityBarProps) {
  function handleClick(id: string) {
    if (id === activePanel && sidebarOpen) {
      onToggleSidebar();
    } else {
      onPanelChange(id);
      if (!sidebarOpen) onToggleSidebar();
    }
  }

  return (
    <div
      className="flex flex-col items-center justify-between py-1 flex-shrink-0"
      style={{ width: 48, background: '#0f0f23', borderRight: '1px solid #252545' }}
    >
      <div className="flex flex-col items-center gap-1 w-full">
        {topIcons.map(({ id, Icon, label }) => (
          <button
            key={id}
            title={label}
            onClick={() => handleClick(id)}
            className="relative flex items-center justify-center w-full group transition-colors"
            style={{
              height: 48,
              color: activePanel === id ? '#ffffff' : '#6c7099',
              borderLeft: activePanel === id ? '2px solid #007acc' : '2px solid transparent',
              background: activePanel === id ? 'rgba(255,255,255,0.05)' : 'transparent',
            }}
          >
            <Icon size={22} strokeWidth={1.5} />
            <span
              className="absolute left-full ml-2 px-2 py-1 text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 mono"
              style={{ background: '#1e1e3a', color: '#d4d4d4', border: '1px solid #252545' }}
            >
              {label}
            </span>
          </button>
        ))}
      </div>
      <div className="flex flex-col items-center gap-1 pb-2">
        <button
          title="Account"
          className="flex items-center justify-center w-full transition-colors"
          style={{ height: 48, color: '#6c7099' }}
        >
          <User size={22} strokeWidth={1.5} />
        </button>
        <button
          title="Settings"
          className="flex items-center justify-center w-full transition-colors"
          style={{ height: 48, color: '#6c7099' }}
        >
          <Settings size={22} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}
