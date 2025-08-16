import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook } from '@testing-library/react';

// Mock hotkeys-js antes de importar el hook
vi.mock('hotkeys-js', () => ({
  default: {
    on: vi.fn(),
    off: vi.fn(),
    unbind: vi.fn(),
  },
}));

// Importar después del mock
import { useHotkeys } from './useHotkeys';

describe('useHotkeys', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should provide registerHotkey method', () => {
    const { result } = renderHook(() => useHotkeys([]));
    
    expect(typeof result.current.registerHotkey).toBe('function');
  });

  it('should provide unregisterHotkey method', () => {
    const { result } = renderHook(() => useHotkeys([]));
    
    expect(typeof result.current.unregisterHotkey).toBe('function');
  });

  it('should handle empty hotkey configs', () => {
    const { result } = renderHook(() => useHotkeys([]));
    
    expect(result.current).toBeDefined();
    expect(result.current.registerHotkey).toBeDefined();
    expect(result.current.unregisterHotkey).toBeDefined();
  });

  it('should have correct return structure', () => {
    const { result } = renderHook(() => useHotkeys([]));
    
    expect(result.current).toHaveProperty('registerHotkey');
    expect(result.current).toHaveProperty('unregisterHotkey');
  });
});
