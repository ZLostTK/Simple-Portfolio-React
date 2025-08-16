# 🚀 Portfolio Moderno - React + Framer Motion + Tailwind CSS

Un sitio web de portafolio personal moderno y responsivo construido con las mejores tecnologías web.

## ✨ Características

- 🎨 **Diseño Moderno**: Interfaz elegante con tema oscuro y acentos azules
- 📱 **Completamente Responsivo**: Optimizado para todos los dispositivos
- 🎭 **Animaciones Fluidas**: Transiciones suaves con Framer Motion
- ⚡ **Rendimiento Optimizado**: Construido con Vite para máxima velocidad
- 🎯 **SEO Friendly**: Estructura semántica y metadatos optimizados
- ♿ **Accesible**: Cumple con estándares de accesibilidad web

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React 18 + TypeScript
- **Animaciones**: Framer Motion
- **Estilos**: Tailwind CSS
- **Build Tool**: Vite
- **Linting**: ESLint + Prettier
- **Gestión de Paquetes**: pnpm

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js 18+ 
- pnpm (recomendado) o npm

### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <tu-repositorio>
   cd portafolio-simple
   ```

2. **Instalar dependencias**
   ```bash
   pnpm install
   # o
   npm install
   ```

3. **Ejecutar en desarrollo**
   ```bash
   pnpm dev
   # o
   npm run dev
   ```

4. **Construir para producción**
   ```bash
   pnpm build
   # o
   npm run build
   ```

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Header.tsx      # Navegación principal
│   ├── Hero.tsx        # Sección de bienvenida
│   ├── About.tsx       # Información personal
│   ├── Skills.tsx      # Habilidades técnicas
│   ├── Projects.tsx    # Galería de proyectos
│   ├── Contact.tsx     # Formulario de contacto
│   ├── Footer.tsx      # Pie de página
│   └── LoadingScreen.tsx # Pantalla de carga
├── App.tsx             # Componente principal
├── main.tsx            # Punto de entrada
└── index.css           # Estilos globales y Tailwind
```

## 🎨 Personalización

### Colores
Los colores se pueden personalizar en `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    // ... más variantes
  },
  dark: {
    50: '#f8fafc',
    // ... más variantes
  }
}
```

### Contenido
Edita los componentes para personalizar:
- Información personal en `About.tsx`
- Proyectos en `Projects.tsx`
- Habilidades en `Skills.tsx`
- Enlaces de contacto en `Contact.tsx`

### Imágenes
Reemplaza los placeholders con tus propias imágenes:
- Foto de perfil
- Capturas de proyectos
- Logos y iconos

## 📱 Secciones del Portafolio

### 🏠 **Hero Section**
- Presentación personal impactante
- Llamadas a la acción
- Estadísticas destacadas
- Elementos visuales animados

### 👤 **Sobre Mí**
- Historia personal
- Experiencia laboral
- Educación y certificaciones
- Información de contacto

### 🎯 **Habilidades**
- Categorías técnicas (Frontend, Backend, Herramientas)
- Barras de progreso animadas
- Habilidades blandas
- Niveles de competencia

### 🚀 **Proyectos**
- Galería filtrable por categorías
- Modal de detalles del proyecto
- Enlaces a demos y código
- Tecnologías utilizadas

### 📞 **Contacto**
- Formulario funcional
- Información de contacto
- Enlaces a redes sociales
- Estado de disponibilidad

## 🎭 Animaciones

El portafolio incluye animaciones suaves y atractivas:

- **Entrada de elementos**: Aparecen con efectos de fade y slide
- **Hover effects**: Interacciones responsivas en botones y tarjetas
- **Scroll animations**: Elementos que se animan al hacer scroll
- **Transiciones de página**: Navegación fluida entre secciones
- **Loading screen**: Pantalla de carga con elementos orbitales

## 🔧 Scripts Disponibles

```json
{
  "dev": "vite",                    # Servidor de desarrollo
  "build": "tsc && vite build",     # Construcción para producción
  "preview": "vite preview",        # Vista previa de la build
  "lint": "eslint .",               # Verificación de código
  "format": "prettier --write",     # Formateo automático
  "type-check": "tsc --noEmit"      # Verificación de tipos
}
```

## 📊 Optimizaciones

- **Code Splitting**: Carga diferida de componentes
- **Lazy Loading**: Imágenes y recursos optimizados
- **Bundle Analysis**: Análisis de tamaño del bundle
- **Performance Monitoring**: Métricas de rendimiento

## 🌐 Despliegue

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### GitHub Pages
```bash
npm run build
# Subir carpeta dist a gh-pages
```

## 📈 Próximas Mejoras

- [ ] **Blog integrado** con MDX
- [ ] **Sistema de temas** (claro/oscuro)
- [ ] **Internacionalización** (i18n)
- [ ] **CMS headless** para gestión de contenido
- [ ] **Analytics** y métricas de usuario
- [ ] **PWA** con funcionalidades offline
- [ ] **Testing** con Vitest y Playwright

## 🤝 Contribuciones

Las contribuciones son bienvenidas! Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 🙏 Agradecimientos

- [Framer Motion](https://www.framer.com/motion/) por las increíbles animaciones
- [Tailwind CSS](https://tailwindcss.com/) por el sistema de diseño
- [Vite](https://vitejs.dev/) por la herramienta de build ultra rápida
- [React](https://reactjs.org/) por el framework increíble

## 📞 Contacto

¿Tienes preguntas o sugerencias? ¡Me encantaría escuchar de ti!

- **Email**: tu@email.com
- **LinkedIn**: [linkedin.com/in/tu-perfil](https://linkedin.com/in/tu-perfil)
- **GitHub**: [github.com/tu-usuario](https://github.com/tu-usuario)

---

⭐ **Si te gusta este proyecto, ¡dale una estrella en GitHub!**
