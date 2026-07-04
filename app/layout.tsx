import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Alexander Martínez — Full-Stack Developer',
  description: 'VS Code-style portfolio of Alexander Martínez González — Full-Stack Developer from México',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
