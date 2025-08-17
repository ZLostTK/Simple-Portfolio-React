import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook } from '@testing-library/react';

// Mock IntersectionObserver
const mockIntersectionObserver = vi.fn();
const mockDisconnect = vi.fn();
const mockObserve = vi.fn();
const mockUnobserve = vi.fn();

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: mockIntersectionObserver,
});

// Importar después del mock
import { useIntersectionObserver } from './useIntersectionObserver';

describe('useIntersectionObserver', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockIntersectionObserver.mockImplementation(() => ({
      observe: mockObserve,
      unobserve: mockUnobserve,
      disconnect: mockDisconnect,
    }));
  });

  it('should return elementRef and isIntersecting', () => {
    const { result } = renderHook(() => useIntersectionObserver());

    expect(result.current.elementRef).toBeDefined();
    expect(typeof result.current.isIntersecting).toBe('boolean');
    expect(result.current.isIntersecting).toBe(false);
  });

  it('should not observe when ref is null initially', () => {
    renderHook(() => useIntersectionObserver());

    expect(mockObserve).not.toHaveBeenCalled();
  });

  it('should return correct initial state', () => {
    const { result } = renderHook(() => useIntersectionObserver());

    expect(result.current.elementRef.current).toBe(null);
    expect(result.current.isIntersecting).toBe(false);
  });

  it('should handle custom options gracefully', () => {
    const options = {
      threshold: 0.5,
      rootMargin: '10px',
      root: null,
    };

    const { result } = renderHook(() => useIntersectionObserver(options));

    expect(result.current.elementRef).toBeDefined();
    expect(result.current.isIntersecting).toBe(false);
  });
});
