import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Configuración específica para GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '/Portafolio-Simple/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          framer: ['framer-motion'],
        },
        // Nombres de archivos consistentes para GitHub Pages
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    // Optimizaciones para GitHub Pages
    minify: 'esbuild', // Usar esbuild en lugar de terser
    target: 'es2015',
    // Asegurar que los assets se copien correctamente
    assetsInlineLimit: 0,
  },
  // Configuración específica para GitHub Pages
  define: {
    'process.env.NODE_ENV': '"production"',
    'process.env.BASE_URL': '"/Portafolio-Simple/"',
  },
})
