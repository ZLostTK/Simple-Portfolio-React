<div align="center">

# VS Code Portfolio — Alexander Martínez

![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=for-the-badge&logo=tailwind-css)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-latest-000000?style=for-the-badge)
![MIT License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**Un portafolio interactivo con apariencia de VS Code** — construido con Next.js, TypeScript y Tailwind CSS.

[Demo](https://anxer.is-a.dev) · [Reportar Bug](https://github.com/ZLostTK/Simple-Portfolio-React/issues) · [Solicitar Feature](https://github.com/ZLostTK/Simple-Portfolio-React/issues)

![Screenshot](public/og-image.png)

</div>

---

## ✨ Características

- **Shell de VS Code funcional** — Barra de título, Activity Bar, File Explorer, tabs, breadcrumbs, Status Bar
- **7 secciones tipo archivo** — Home, About, Projects, Skills, Experience, Contact, README
- **Paleta de comandos** — `Ctrl+P` / `Cmd+P` para navegar entre archivos
- **Terminal interactiva** — `Ctrl+ñ` / `Ctrl+\`` con comandos reales (`whoami`, `ls`, `cat`, `git log`, etc.)
- **Panel Copilot** — `Ctrl+Shift+C` / `Cmd+Shift+C` — chat simulado con IA sobre el portafolio
- **Efecto máquina de escribir** en el hero
- **Barras de progreso animadas** en skills
- **Modo oscuro** estilo VS Code "Anxer Dark"
- **Diseño responsivo** y accesible
- **Totalmente estático** — deployable a GitHub Pages, Netlify, o cualquier CDN

## 🚀 Stack

| Capa | Tecnología |
|------|-----------|
| Framework | Next.js 16 (App Router) |
| Lenguaje | TypeScript 6 |
| Estilos | Tailwind CSS 3 + `tailwindcss-animate` |
| Componentes | shadcn/ui (Radix UI) |
| Iconos | lucide-react |
| Linter | ESLint 9 (flat config) |
| Paquetería | pnpm 9 |

## 📁 Estructura

```
├── app/
│   ├── globals.css          # Estilos globales y variables CSS
│   ├── layout.tsx           # Root layout con metadata
│   └── page.tsx             # Entry point → EditorShell
├── src/
│   ├── features/
│   │   ├── copilot/         # Panel Copilot simulado
│   │   ├── editor/          # EditorShell y componentes del VS Code
│   │   ├── portfolio/       # Componentes de cada sección (Home, About, etc.)
│   │   └── terminal/        # Terminal interactiva
│   ├── lib/                 # Utilidades y helpers
│   └── shared/              # Componentes compartidos (tipos, LineNumbers)
├── components/
│   └── ui/                  # Componentes shadcn/ui (~47 componentes)
├── hooks/                   # Custom hooks
├── lib/                     # Utilidades adicionales
├── public/                  # Assets estáticos
└── .github/workflows/       # CI + Deploy a GitHub Pages
```

## 🛠️ Empezar

```bash
# Clonar
git clone https://github.com/ZLostTK/Simple-Portfolio-React.git
cd Simple-Portfolio-React

# Instalar dependencias
pnpm install

# Desarrollo
pnpm dev          # http://localhost:3000

# TypeScript check
pnpm typecheck

# Lint
pnpm lint

# Build producción
pnpm build

# Build para GitHub Pages
GH_PAGES=true pnpm build
```

## 🌐 Deploy

### GitHub Pages (automático)

El workflow `deploy-gh-pages.yml` construye con `GH_PAGES=true` y despliega a GitHub Pages en cada push a `master`. Solo necesitas:

1. Ir a **Settings > Pages** en tu repo
2. En "Source", seleccionar **GitHub Actions**
3. Listo — cada push despliega automáticamente

> Si usas un dominio personalizado, el `basePath` se ajusta automáticamente. Sin `GH_PAGES=true`, el build genera rutas sin prefijo.

### GitHub Pages (manual)

```bash
GH_PAGES=true pnpm build
# El output estático se genera en ./out/
# Puedes subirlo manualmente a la branch gh-pages o usar cualquier CDN
```

### Netlify

El `netlify.toml` ya está configurado. Conecta tu repo en Netlify y despliega.

## 🔄 CI/CD

| Workflow | Trigger | Qué hace |
|----------|---------|----------|
| **CI** | Push/PR a `master` | `pnpm install` → `pnpm typecheck` → `pnpm lint` → `pnpm build` |
| **Deploy to GitHub Pages** | Push a `master` + manual | Build con `GH_PAGES=true` y despliega a GitHub Pages |

## 📄 Licencia

MIT © [Alexander Martínez González](https://github.com/ZLostTK)

---

<div align="center">
  Hecho con ☕, 🎧 y mucho cariño por un dev mexicano 🇲🇽
</div>
