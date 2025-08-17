import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useAppStore } from './useAppStore';

describe('useAppStore', () => {
  beforeEach(() => {
    // Reset store before each test
    act(() => {
      useAppStore.getState().reset();
    });
  });

  it('should have initial state', () => {
    const { result } = renderHook(() => useAppStore());

    expect(result.current.isLoading).toBe(true);
    expect(result.current.isDarkMode).toBe(true);
    expect(result.current.currentSection).toBe('home');
    expect(result.current.isMenuOpen).toBe(false);
    expect(result.current.language).toBe('es');
    expect(result.current.animationsEnabled).toBe(true);
  });

  it('should toggle dark mode', () => {
    const { result } = renderHook(() => useAppStore());

    act(() => {
      result.current.toggleDarkMode();
    });

    expect(result.current.isDarkMode).toBe(false);
  });

  it('should set loading state', () => {
    const { result } = renderHook(() => useAppStore());

    act(() => {
      result.current.setLoading(false);
    });

    expect(result.current.isLoading).toBe(false);
  });

  it('should set current section', () => {
    const { result } = renderHook(() => useAppStore());

    act(() => {
      result.current.setCurrentSection('about');
    });

    expect(result.current.currentSection).toBe('about');
  });

  it('should toggle menu', () => {
    const { result } = renderHook(() => useAppStore());

    act(() => {
      result.current.toggleMenu();
    });

    expect(result.current.isMenuOpen).toBe(true);
  });

  it('should set language', () => {
    const { result } = renderHook(() => useAppStore());

    act(() => {
      result.current.setLanguage('en');
    });

    expect(result.current.language).toBe('en');
  });

  it('should toggle animations', () => {
    const { result } = renderHook(() => useAppStore());

    act(() => {
      result.current.toggleAnimations();
    });

    expect(result.current.animationsEnabled).toBe(false);
  });

  it('should reset to initial state', () => {
    const { result } = renderHook(() => useAppStore());

    // Change some values
    act(() => {
      result.current.setLoading(false);
      result.current.setCurrentSection('about');
      result.current.setLanguage('en');
    });

    // Reset
    act(() => {
      result.current.reset();
    });

    expect(result.current.isLoading).toBe(true);
    expect(result.current.currentSection).toBe('home');
    expect(result.current.language).toBe('es');
  });
});
