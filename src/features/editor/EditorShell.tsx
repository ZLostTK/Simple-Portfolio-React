'use client';

import { useCallback, useEffect, useState } from 'react';
import type { FileId } from '@/src/shared/types';

import ActivityBar from './ActivityBar';
import FileExplorer from './FileExplorer';
import MenuBar from './MenuBar';
import TabBar from './TabBar';
import Breadcrumb from './Breadcrumb';
import StatusBar from './StatusBar';
import CommandPalette from './CommandPalette';
import Terminal from '@/src/features/terminal/Terminal';
import CopilotPanel from '@/src/features/copilot/CopilotPanel';

import HomeFile from '@/src/features/portfolio/HomeFile';
import AboutFile from '@/src/features/portfolio/AboutFile';
import ProjectsFile from '@/src/features/portfolio/ProjectsFile';
import SkillsFile from '@/src/features/portfolio/SkillsFile';
import ExperienceFile from '@/src/features/portfolio/ExperienceFile';
import ContactFile from '@/src/features/portfolio/ContactFile';
import ReadmeFile from '@/src/features/portfolio/ReadmeFile';

const FILE_COMPONENTS: Record<FileId, React.ComponentType> = {
  home:       HomeFile,
  about:      AboutFile,
  projects:   ProjectsFile,
  skills:     SkillsFile,
  experience: ExperienceFile,
  contact:    ContactFile,
  readme:     ReadmeFile,
};

export default function EditorShell() {
  const [activeFile, setActiveFile] = useState<FileId>('home');
  const [openTabs, setOpenTabs] = useState<FileId[]>(['home']);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activePanel, setActivePanel] = useState('files');
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [copilotOpen, setCopilotOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  const openFile = useCallback((id: FileId) => {
    setActiveFile(id);
    setOpenTabs((tabs) => tabs.includes(id) ? tabs : [...tabs, id]);
  }, []);

  const closeTab = useCallback((id: FileId) => {
    setOpenTabs((tabs) => {
      const next = tabs.filter((t) => t !== id);
      if (activeFile === id && next.length > 0) {
        const idx = Math.min(tabs.indexOf(id), next.length - 1);
        setActiveFile(next[idx]);
      }
      return next;
    });
  }, [activeFile]);

  // Keyboard shortcuts
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        setCommandPaletteOpen(true);
      }
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'C') {
        e.preventDefault();
        setCopilotOpen(true);
      }
      if ((e.ctrlKey || e.metaKey) && e.key === '`') {
        e.preventDefault();
        setTerminalOpen((o) => !o);
      }
      if (e.key === 'Escape') {
        setCommandPaletteOpen(false);
      }
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const ActiveComponent = FILE_COMPONENTS[activeFile] ?? HomeFile;

  return (
    <div className="flex flex-col" style={{ height: '100vh', background: '#1a1a2e', overflow: 'hidden' }}>
      {/* Menu / Title Bar */}
      <MenuBar onCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Main area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Activity Bar */}
        <ActivityBar
          sidebarOpen={sidebarOpen}
          onToggleSidebar={() => setSidebarOpen((o) => !o)}
          activePanel={activePanel}
          onPanelChange={(p) => {
            if (p === 'copilot') { setCopilotOpen(true); return; }
            setActivePanel(p);
          }}
        />

        {/* Sidebar */}
        {sidebarOpen && (
          <FileExplorer
            activeFile={activeFile}
            openTabs={openTabs}
            onFileSelect={openFile}
          />
        )}

        {/* Editor column */}
        <div className="flex flex-col flex-1 overflow-hidden">
          {/* Tabs */}
          <TabBar
            openTabs={openTabs}
            activeFile={activeFile}
            onTabSelect={setActiveFile}
            onTabClose={closeTab}
          />

          {/* Breadcrumb */}
          <Breadcrumb activeFile={activeFile} />

          {/* Editor content */}
          <div className="flex-1 overflow-hidden" style={{ background: '#1a1a2e' }}>
            <ActiveComponent />
          </div>

          {/* Terminal */}
          {terminalOpen && (
            <Terminal
              onClose={() => setTerminalOpen(false)}
              onFileOpen={openFile}
            />
          )}
        </div>

        {/* Copilot Panel */}
        {copilotOpen && (
          <CopilotPanel onClose={() => setCopilotOpen(false)} />
        )}
      </div>

      {/* Status Bar */}
      <StatusBar
        activeFile={activeFile}
        onTerminalToggle={() => setTerminalOpen((o) => !o)}
      />

      {/* Command Palette */}
      {commandPaletteOpen && (
        <CommandPalette
          onClose={() => setCommandPaletteOpen(false)}
          onFileSelect={(id) => { openFile(id); setCommandPaletteOpen(false); }}
          onOpenCopilot={() => { setCopilotOpen(true); setCommandPaletteOpen(false); }}
        />
      )}
    </div>
  );
}
