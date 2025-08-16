import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AppState {
  // UI State
  isLoading: boolean
  isDarkMode: boolean
  currentSection: string
  isMenuOpen: boolean
  
  // User Preferences
  language: 'es' | 'en'
  animationsEnabled: boolean
  
  // Actions
  setLoading: (loading: boolean) => void
  toggleDarkMode: () => void
  setCurrentSection: (section: string) => void
  toggleMenu: () => void
  setLanguage: (lang: 'es' | 'en') => void
  toggleAnimations: () => void
  
  // Reset
  reset: () => void
}

const initialState = {
  isLoading: true,
  isDarkMode: true,
  currentSection: 'home',
  isMenuOpen: false,
  language: 'es' as const,
  animationsEnabled: true,
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      ...initialState,
      
      setLoading: (loading) => set({ isLoading: loading }),
      
      toggleDarkMode: () => set((state) => ({ 
        isDarkMode: !state.isDarkMode 
      })),
      
      setCurrentSection: (section) => set({ currentSection: section }),
      
      toggleMenu: () => set((state) => ({ 
        isMenuOpen: !state.isMenuOpen 
      })),
      
      setLanguage: (language) => set({ language }),
      
      toggleAnimations: () => set((state) => ({ 
        animationsEnabled: !state.animationsEnabled 
      })),
      
      reset: () => set(initialState),
    }),
    {
      name: 'portafolio-store',
      partialize: (state) => ({
        isDarkMode: state.isDarkMode,
        language: state.language,
        animationsEnabled: state.animationsEnabled,
      }),
    }
  )
)
