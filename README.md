# 🚀 Portafolio Simple - Desarrollador Full Stack

Un portafolio moderno y profesional construido con React, TypeScript y las mejores tecnologías web.

## ✨ Características

- 🎨 **Diseño Moderno**: Interfaz elegante con tema oscuro y animaciones fluidas
- 📱 **Responsive**: Optimizado para todos los dispositivos
- ⚡ **Performance**: Carga rápida y optimización SEO
- 🔧 **TypeScript**: Código tipado y mantenible
- 🎭 **Animaciones**: Transiciones suaves con Framer Motion
- 📊 **Gráficas Interactivas**: Visualización de habilidades con Chart.js
- 📋 **Tablas Avanzadas**: Componentes de datos con TanStack Table
- ✅ **Validación**: Formularios robustos con Zod
- 🎯 **SEO Optimizado**: Meta tags y structured data
- 🧪 **Testing**: Cobertura completa con Vitest
- 🚀 **CI/CD**: Pipeline automatizado con GitHub Actions

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React 18** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de CSS
- **Framer Motion** - Animaciones
- **Vite** - Build tool rápido

### Bibliotecas Imprescindibles
- **Zod** - Validación de esquemas
- **Day.js** - Manejo de fechas
- **TanStack Table** - Tablas de datos
- **Chart.js** - Gráficas interactivas
- **Zustand** - Estado global
- **React Hook Form** - Formularios
- **React Helmet Async** - SEO

### Herramientas de Desarrollo
- **ESLint** - Linting de código
- **Prettier** - Formateo automático
- **Vitest** - Testing framework
- **Husky** - Git hooks
- **Commitlint** - Validación de commits

## 🚀 Instalación

### Prerrequisitos
- Node.js 20.x o superior
- pnpm (recomendado) o npm

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tuusuario/portafolio-simple.git
   cd portafolio-simple
   ```

2. **Instalar dependencias**
   ```bash
   pnpm install
   ```

3. **Configurar variables de entorno**
   ```bash
   cp .env.example .env.local
   # Editar .env.local con tus configuraciones
   ```

4. **Ejecutar en desarrollo**
   ```bash
   pnpm dev
   ```

5. **Construir para producción**
   ```bash
   pnpm build
   ```

## 📁 Estructura del Proyecto

```
📦 portafolio-simple
 ┣ 📂 src/
 ┃ ┣ 📂 components/          # Componentes React
 ┃ ┃ ┣ 📂 hooks/            # Hooks personalizados
 ┃ ┃ ┣ 📂 store/            # Estado global (Zustand)
 ┃ ┃ ┣ 📂 test/             # Configuración de testing
 ┃ ┃ ┗ 📂 utils/            # Utilidades y helpers
 ┣ 📂 .github/
 ┃ ┗ 📂 workflows/          # GitHub Actions
 ┣ 📂 public/               # Archivos estáticos
 ┣ 📄 package.json          # Dependencias y scripts
 ┣ 📄 vite.config.ts        # Configuración de Vite
 ┣ 📄 tailwind.config.js    # Configuración de Tailwind
 ┣ 📄 vitest.config.ts      # Configuración de Vitest
 ┗ 📄 README.md             # Documentación
```

## 🧪 Testing

### Ejecutar Tests
```bash
# Tests en modo watch
pnpm test

# Tests con cobertura
pnpm test:coverage

# Tests con UI
pnpm test:ui
```

### Cobertura de Código
El proyecto apunta a una cobertura mínima del **85%** para mantener la calidad del código.

## 🔧 Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `pnpm dev` | Servidor de desarrollo |
| `pnpm build` | Construcción para producción |
| `pnpm preview` | Vista previa de la build |
| `pnpm lint` | Ejecutar ESLint |
| `pnpm lint:fix` | Corregir errores de ESLint |
| `pnpm format` | Formatear código con Prettier |
| `pnpm type-check` | Verificación de tipos TypeScript |
| `pnpm test` | Ejecutar tests |
| `pnpm test:coverage` | Tests con reporte de cobertura |

## 🚀 Deployment

### Vercel (Recomendado)
1. Conectar tu repositorio a Vercel
2. Configurar variables de entorno
3. Deploy automático en cada push a main

### Netlify
1. Conectar tu repositorio a Netlify
2. Configurar build command: `pnpm build`
3. Configurar publish directory: `dist`

## 📊 CI/CD Pipeline

El proyecto incluye un pipeline completo de CI/CD que:

- ✅ **Linting**: Verifica calidad del código
- ✅ **Testing**: Ejecuta tests automáticamente
- ✅ **Type Checking**: Valida tipos TypeScript
- ✅ **Build**: Construye la aplicación
- ✅ **Deploy**: Despliega automáticamente
- ✅ **Security**: Auditoría de seguridad
- ✅ **Performance**: Lighthouse audit

## 🎨 Personalización

### Colores y Temas
Edita `tailwind.config.js` para personalizar:
- Paleta de colores
- Tipografías
- Espaciados
- Breakpoints

### Componentes
Los componentes están diseñados para ser fácilmente personalizables:
- Props configurables
- Clases CSS modulares
- Temas dinámicos

## 🔒 Seguridad

- **Dependencias**: Auditoría automática con `pnpm audit`
- **TypeScript**: Validación de tipos en tiempo de compilación
- **ESLint**: Reglas de seguridad configuradas
- **Pre-commit hooks**: Validación antes de cada commit

## 📈 Performance

- **Lazy Loading**: Componentes cargados bajo demanda
- **Code Splitting**: División automática del bundle
- **Optimización de imágenes**: WebP y lazy loading
- **PWA Ready**: Configuración para Progressive Web App

## 🌐 SEO

- **Meta tags**: Open Graph y Twitter Cards
- **Structured Data**: Schema.org markup
- **Sitemap**: Generación automática
- **Robots.txt**: Configuración para crawlers

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'feat: add amazing feature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Convenciones de Commit
Usamos [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` Nueva funcionalidad
- `fix:` Corrección de bugs
- `docs:` Documentación
- `style:` Cambios de estilo
- `refactor:` Refactorización
- `test:` Tests
- `chore:` Tareas de mantenimiento

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 🙏 Agradecimientos

- [React](https://reactjs.org/) - Biblioteca de UI
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Framer Motion](https://www.framer.com/motion/) - Animaciones
- [Vite](https://vitejs.dev/) - Build tool
- [Vitest](https://vitest.dev/) - Testing framework

## 📞 Contacto

- **Email**: tu@email.com
- **LinkedIn**: [Tu Perfil](https://linkedin.com/in/tuusuario)
- **GitHub**: [@tuusuario](https://github.com/tuusuario)
- **Portfolio**: [tuportafolio.com](https://tuportafolio.com)

---

⭐ **Si te gusta este proyecto, dale una estrella en GitHub!**
