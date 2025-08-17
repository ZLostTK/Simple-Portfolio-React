// Configuración de entorno para diferentes plataformas de despliegue
export const config = {
  // URL base para assets y rutas
  baseUrl: (() => {
    if (typeof window !== 'undefined') {
      // En el navegador, usar la ruta actual
      return window.location.pathname.includes('/Portafolio-Simple') 
        ? '/Portafolio-Simple' 
        : '';
    }
    // En el servidor, usar la variable de entorno
    return process.env.NODE_ENV === 'production' ? '/Portafolio-Simple' : '';
  })(),
  
  // Configuración de la API
  apiUrl: process.env.VITE_API_URL || 'http://localhost:3000/api',
  
  // Configuración de la aplicación
  appName: 'Portafolio Simple',
  appVersion: process.env.npm_package_version || '1.0.0',
  
  // Configuración de GitHub Pages
  isGitHubPages: process.env.NODE_ENV === 'production' && 
                 (typeof window !== 'undefined' && window.location.hostname.includes('github.io')),
  
  // Configuración de desarrollo
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
}

// Función helper para construir URLs absolutas
export const buildUrl = (path: string): string => {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${config.baseUrl}/${cleanPath}`.replace(/\/+/g, '/');
}

// Función helper para assets
export const assetUrl = (assetPath: string): string => {
  return buildUrl(assetPath);
}
