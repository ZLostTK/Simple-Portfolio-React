// Variables de entorno del sitio
export const env = {
  // Modo de desarrollo
  isDev: import.meta.env.DEV,

  // Modo de producción
  isProd: import.meta.env.PROD,

  // Base URL para assets
  baseUrl: import.meta.env.BASE_URL || '/',

  // URL del sitio
  siteUrl: import.meta.env.VITE_SITE_URL || 'http://localhost:3000',

  // API URL
  apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',

  // Analytics
  analyticsId: import.meta.env.VITE_ANALYTICS_ID || '',

  // Contact form
  contactEmail: import.meta.env.VITE_CONTACT_EMAIL || 'anxerdev@gmail.com',

  // GitHub
  githubUrl: import.meta.env.VITE_GITHUB_URL || 'https://github.com/ZLostTK',

  // Portfolio
  portfolioUrl: import.meta.env.VITE_PORTFOLIO_URL || 'https://anxer.is-a.dev/',
};

// Configuración específica para GitHub Pages
export const githubPagesConfig = {
  basePath: '/Portafolio-Simple',
  repository: 'ZLostTK/Portafolio-Simple',
  branch: 'main',
};
