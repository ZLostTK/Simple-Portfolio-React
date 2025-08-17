# 🚀 Portafolio Simple

Un portafolio personal moderno y responsive construido con React, TypeScript y Vite.

## ✨ Características

- 🎨 **Diseño Moderno**: Interfaz limpia y profesional
- 📱 **Responsive**: Optimizado para todos los dispositivos
- ⚡ **Rendimiento**: Construido con Vite para máxima velocidad
- 🎭 **Animaciones**: Transiciones suaves con Framer Motion
- 🧪 **Testing**: Cobertura completa de tests con Vitest
- 🚀 **CI/CD**: Despliegue automático con GitHub Actions

## 🛠️ Tecnologías

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animaciones**: Framer Motion
- **Testing**: Vitest + Testing Library
- **Linting**: ESLint + Prettier
- **Package Manager**: pnpm

## 🚀 Instalación

### Prerrequisitos

- Node.js 20.x o superior
- pnpm 8.x o superior

### Pasos

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/ZLostTK/Portafolio-Simple.git
   cd Portafolio-Simple
   ```

2. **Instalar dependencias**
   ```bash
   pnpm install
   ```

3. **Ejecutar en desarrollo**
   ```bash
   pnpm dev
   ```

4. **Construir para producción**
   ```bash
   pnpm build
   ```

## 📦 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `pnpm dev` | Inicia el servidor de desarrollo |
| `pnpm build` | Construye la aplicación para producción |
| `pnpm build:gh-pages` | Construye específicamente para GitHub Pages |
| `pnpm preview` | Previsualiza la build de producción |
| `pnpm test` | Ejecuta los tests |
| `pnpm test:coverage` | Ejecuta tests con reporte de cobertura |
| `pnpm lint` | Ejecuta ESLint |
| `pnpm format` | Formatea el código con Prettier |

## 🌐 Despliegue

### GitHub Pages

El proyecto está configurado para desplegarse automáticamente en GitHub Pages:

1. **Configurar GitHub Pages**:
   - Ve a Settings > Pages en tu repositorio
   - Source: Deploy from a branch
   - Branch: `gh-pages` o `main`
   - Folder: `/ (root)`

2. **Despliegue automático**:
   - Cada push a `main` activará el workflow de GitHub Actions
   - El sitio se construirá y desplegará automáticamente

3. **URL del sitio**:
   - `https://zlosttk.github.io/Portafolio-Simple/`

### Despliegue Manual

Si prefieres desplegar manualmente:

```bash
# Construir para GitHub Pages
pnpm run build:gh-pages

# Desplegar con gh-pages
pnpm run deploy
```

### Vercel/Netlify

El proyecto también incluye configuraciones para:

- **Vercel**: `pnpm run build:vercel`
- **Netlify**: `pnpm run build:netlify`

## 🔧 Configuración

### Variables de Entorno

Copia `.env.example` a `.env.local` y configura:

```bash
# API
VITE_API_URL=http://localhost:3000/api

# Analytics
VITE_ANALYTICS_ID=your-analytics-id

# Contacto
VITE_CONTACT_EMAIL=your-email@example.com

# GitHub
VITE_GITHUB_URL=https://github.com/yourusername

# Portfolio
VITE_PORTFOLIO_URL=https://your-portfolio.com
```

### Configuración de Vite

- **Desarrollo**: Base path `/`
- **GitHub Pages**: Base path `/Portafolio-Simple/`
- **Producción**: Configuración optimizada para cada plataforma

## 🧪 Testing

### Ejecutar Tests

```bash
# Todos los tests
pnpm test

# Con cobertura
pnpm test:coverage

# UI de tests
pnpm test:ui

# Tests en modo watch
pnpm test --watch
```

### Cobertura de Tests

El proyecto mantiene una cobertura mínima del 85% en:
- Componentes React
- Hooks personalizados
- Utilidades y helpers
- Store de estado

## 📁 Estructura del Proyecto

```
📦 Portafolio-Simple
 ┣ 📂 src/
 ┃ ┣ 📂 components/     # Componentes React
 ┃ ┣ 📂 hooks/          # Hooks personalizados
 ┃ ┣ 📂 store/          # Estado global (Zustand)
 ┃ ┣ 📂 config/         # Configuración
 ┃ ┗ 📂 assets/         # Recursos estáticos
 ┣ 📂 public/           # Archivos públicos
 ┣ 📂 tests/            # Configuración de tests
 ┣ 📂 .github/          # Workflows de GitHub Actions
 ┗ 📂 docs/             # Documentación
```

## 🚨 Solución de Problemas

### Errores 404 en GitHub Pages

Si experimentas errores 404 para archivos CSS/JS:

1. **Verificar configuración de Vite**:
   - Asegúrate de que `base: '/Portafolio-Simple/'` esté configurado
   - Usa `pnpm run build:gh-pages` para builds específicos

2. **Verificar archivos de build**:
   - Los assets deben estar en `dist/assets/`
   - El `index.html` debe referenciar rutas correctas

3. **Limpiar caché del navegador**:
   - Usa modo incógnito para testing
   - Limpia caché y cookies

### Problemas de Build

1. **Verificar dependencias**:
   ```bash
   pnpm install --frozen-lockfile
   ```

2. **Limpiar caché**:
   ```bash
   pnpm store prune
   rm -rf node_modules pnpm-lock.yaml
   pnpm install
   ```

3. **Verificar Node.js**:
   - Usa Node.js 20.x
   - Verifica versión de pnpm (8.x)

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Convenciones de Commit

- `feat:` Nueva funcionalidad
- `fix:` Corrección de bugs
- `docs:` Documentación
- `style:` Formato de código
- `refactor:` Refactorización
- `test:` Tests
- `chore:` Tareas de mantenimiento

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver [LICENSE](LICENSE) para más detalles.

## 📞 Contacto

- **Email**: anxerdev@gmail.com
- **GitHub**: [@ZLostTK](https://github.com/ZLostTK)
- **Portfolio**: [anxer.is-a.dev](https://anxer.is-a.dev/)

---

⭐ Si te gusta este proyecto, ¡dale una estrella!
