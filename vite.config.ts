import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false, // Deshabilitar sourcemaps para producción
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          framer: ['framer-motion'],
        },
        // Asegurar que los nombres de archivos sean consistentes
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    // Optimizaciones para producción
    minify: 'esbuild', // Usar esbuild en lugar de terser
    target: 'es2015',
    // Asegurar que los assets se sirvan correctamente
    assetsInlineLimit: 4096,
  },
  preview: {
    port: 4173,
    open: true,
  },
})
