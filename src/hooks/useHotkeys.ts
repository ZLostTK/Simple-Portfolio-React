import { useEffect } from 'react'
import hotkeys from 'hotkeys-js'

interface HotkeyConfig {
  key: string
  callback: (event: KeyboardEvent) => void
  description?: string
  preventDefault?: boolean
}

export const useHotkeys = (hotkeyConfigs: HotkeyConfig[]) => {
  useEffect(() => {
    const cleanupFunctions: (() => void)[] = []

    hotkeyConfigs.forEach(({ key, callback, preventDefault = true }) => {
      hotkeys(key, (event) => {
        if (preventDefault) {
          event.preventDefault()
        }
        callback(event)
      })
      
      cleanupFunctions.push(() => hotkeys.unbind(key))
    })

    return () => {
      cleanupFunctions.forEach(cleanup => cleanup())
    }
  }, [hotkeyConfigs])

  return {
    // Método para registrar hotkeys dinámicamente
    registerHotkey: (config: HotkeyConfig) => {
      hotkeys(config.key, (event) => {
        if (config.preventDefault !== false) {
          event.preventDefault()
        }
        config.callback(event)
      })
    },
    
    // Método para desregistrar hotkeys
    unregisterHotkey: (key: string) => {
      hotkeys.unbind(key)
    }
  }
}

// Hotkeys predefinidos útiles para el portafolio
export const PORTFOLIO_HOTKEYS: HotkeyConfig[] = [
  {
    key: 'ctrl+k, cmd+k',
    callback: () => {
      // Abrir búsqueda o navegación rápida
      console.log('Búsqueda rápida')
    },
    description: 'Búsqueda rápida'
  },
  {
    key: 'ctrl+shift+d, cmd+shift+d',
    callback: () => {
      // Cambiar tema oscuro/claro
      document.documentElement.classList.toggle('dark')
    },
    description: 'Cambiar tema'
  },
  {
    key: 'esc',
    callback: () => {
      // Cerrar modales o menús
      const modals = document.querySelectorAll('[data-modal]')
      modals.forEach(modal => {
        if (modal instanceof HTMLElement) {
          modal.style.display = 'none'
        }
      })
    },
    description: 'Cerrar modales'
  }
]
