/* eslint-disable @typescript-eslint/no-unused-vars */
import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock de Framer Motion para testing
vi.mock('framer-motion', () => ({
  motion: {
    div: ({
      children,
      whileInView: _whileInView,
      initial: _initial,
      animate: _animate,
      ...props
    }: React.ComponentProps<'div'>) => <div {...props}>{children}</div>,
    button: ({
      children,
      whileInView: _whileInView,
      initial: _initial,
      animate: _animate,
      ...props
    }: React.ComponentProps<'button'>) => (
      <button {...props}>{children}</button>
    ),
    section: ({
      children,
      whileInView: _whileInView,
      initial: _initial,
      animate: _animate,
      ...props
    }: React.ComponentProps<'section'>) => (
      <section {...props}>{children}</section>
    ),
    h1: ({
      children,
      whileInView: _whileInView,
      initial: _initial,
      animate: _animate,
      ...props
    }: React.ComponentProps<'h1'>) => <h1 {...props}>{children}</h1>,
    h2: ({
      children,
      whileInView: _whileInView,
      initial: _initial,
      animate: _animate,
      ...props
    }: React.ComponentProps<'h2'>) => <h2 {...props}>{children}</h2>,
    h3: ({
      children,
      whileInView: _whileInView,
      initial: _initial,
      animate: _animate,
      ...props
    }: React.ComponentProps<'h3'>) => <h3 {...props}>{children}</h3>,
    p: ({
      children,
      whileInView: _whileInView,
      initial: _initial,
      animate: _animate,
      ...props
    }: React.ComponentProps<'p'>) => <p {...props}>{children}</p>,
    span: ({
      children,
      whileInView: _whileInView,
      initial: _initial,
      animate: _animate,
      ...props
    }: React.ComponentProps<'span'>) => <span {...props}>{children}</span>,
    a: ({
      children,
      whileInView: _whileInView,
      initial: _initial,
      animate: _animate,
      ...props
    }: React.ComponentProps<'a'>) => <a {...props}>{children}</a>,
    img: ({
      whileInView: _whileInView,
      initial: _initial,
      animate: _animate,
      ...props
    }: React.ComponentProps<'img'>) => <img {...props} />,
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
}));

// Mock de Intersection Observer
global.IntersectionObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

// Mock de ResizeObserver
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

// Mock de matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});
