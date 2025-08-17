// Configuración del sitio
export const siteConfig = {
  // Base path para GitHub Pages
  basePath: import.meta.env.PROD ? '/Portafolio-Simple' : '',

  // URL del sitio
  url: import.meta.env.PROD
    ? 'https://zlosttk.github.io/Portafolio-Simple'
    : 'http://localhost:3000',

  // Título del sitio
  title: 'Portafolio Simple - Desarrollador Full Stack',

  // Descripción del sitio
  description:
    'Un portafolio moderno y profesional construido con React, TypeScript y las mejores tecnologías web.',

  // Autor
  author: 'AnxerDev',

  // Redes sociales
  social: {
    github: 'https://github.com/ZLostTK',
    email: 'anxerdev@gmail.com',
    portfolio: 'https://anxer.is-a.dev/',
  },
};

// Función para obtener la URL completa
export const getFullUrl = (path: string = '') => {
  return `${siteConfig.basePath}${path}`;
};

// Función para verificar si estamos en GitHub Pages
export const isGitHubPages = () => {
  return import.meta.env.PROD && window.location.hostname.includes('github.io');
};
