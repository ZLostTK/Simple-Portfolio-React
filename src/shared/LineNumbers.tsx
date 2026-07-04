'use client';

interface LineNumbersProps {
  count: number;
  activeLines?: number[];
}

export default function LineNumbers({ count, activeLines = [] }: LineNumbersProps) {
  return (
    <div className="select-none text-right pr-4 pt-6 min-w-[48px]" style={{ color: '#3c3c5c' }}>
      {Array.from({ length: count }, (_, i) => i + 1).map((n) => (
        <div
          key={n}
          className="text-xs leading-6 font-mono"
          style={{
            color: activeLines.includes(n) ? '#858585' : '#3c3c5c',
          }}
        >
          {n}
        </div>
      ))}
    </div>
  );
}
