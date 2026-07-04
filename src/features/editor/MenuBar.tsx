'use client';

interface MenuBarProps {
  onCommandPalette: () => void;
}

const menus = ['File', 'Edit', 'View', 'Go', 'Run', 'Terminal', 'Help', 'Copilot'];

export default function MenuBar({ onCommandPalette }: MenuBarProps) {
  return (
    <div
      className="flex items-center select-none flex-shrink-0"
      style={{
        height: 30,
        background: '#0f0f23',
        borderBottom: '1px solid #252545',
      }}
    >
      {/* macOS-style traffic lights */}
      <div className="flex items-center gap-1.5 px-3">
        <span className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
        <span className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
        <span className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
      </div>

      {/* Menu items */}
      <div className="flex items-center gap-0">
        {menus.map((m) => (
          <button
            key={m}
            className="px-3 text-xs transition-colors hover:bg-white/5"
            style={{ color: '#c0c0d0', height: 30 }}
          >
            {m}
          </button>
        ))}
      </div>

      {/* Title / Command Palette trigger */}
      <button
        onClick={onCommandPalette}
        className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1 rounded text-xs transition-colors hover:bg-white/5"
        style={{ color: '#9c9cbf' }}
      >
        <span style={{ color: '#6c6c8a' }}>alexander-martinez : portfolio</span>
        <kbd
          className="px-1.5 py-0.5 text-[10px] rounded mono"
          style={{ background: '#252545', color: '#8888aa', border: '1px solid #353560' }}
        >
          Ctrl P
        </kbd>
      </button>
    </div>
  );
}
