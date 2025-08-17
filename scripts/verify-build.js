#!/usr/bin/env node

/**
 * Script de verificación del build para GitHub Pages
 * Verifica que todos los archivos necesarios estén presentes y las rutas sean correctas
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distPath = path.join(__dirname, '..', 'dist');

console.log('🔍 Verificando build para GitHub Pages...\n');

// Verificar que dist existe
if (!fs.existsSync(distPath)) {
  console.error('❌ Error: La carpeta dist no existe');
  console.log('Ejecuta: pnpm run build:gh-pages');
  process.exit(1);
}

// Verificar index.html
const indexPath = path.join(distPath, 'index.html');
if (!fs.existsSync(indexPath)) {
  console.error('❌ Error: index.html no encontrado');
  process.exit(1);
}

// Verificar assets folder
const assetsPath = path.join(distPath, 'assets');
if (!fs.existsSync(assetsPath)) {
  console.error('❌ Error: Carpeta assets no encontrada');
  process.exit(1);
}

// Verificar archivos CSS y JS
const files = fs.readdirSync(assetsPath);
const cssFiles = files.filter(f => f.endsWith('.css'));
const jsFiles = files.filter(f => f.endsWith('.js'));

if (cssFiles.length === 0) {
  console.error('❌ Error: No se encontraron archivos CSS');
  process.exit(1);
}

if (jsFiles.length === 0) {
  console.error('❌ Error: No se encontraron archivos JavaScript');
  process.exit(1);
}

// Verificar contenido del index.html
const indexContent = fs.readFileSync(indexPath, 'utf8');
const hasCorrectBasePath = indexContent.includes('/Portafolio-Simple/');
const hasAssets = indexContent.includes('assets/');

if (!hasCorrectBasePath) {
  console.error('❌ Error: index.html no tiene la ruta base correcta para GitHub Pages');
  process.exit(1);
}

if (!hasAssets) {
  console.error('❌ Error: index.html no referencia archivos de assets');
  process.exit(1);
}

// Verificar archivos específicos
console.log('✅ Verificación completada exitosamente\n');
console.log('📁 Estructura del build:');
console.log(`   📄 index.html (${(fs.statSync(indexPath).size / 1024).toFixed(2)} KB)`);
console.log(`   📁 assets/ (${cssFiles.length} CSS, ${jsFiles.length} JS)`);

console.log('\n📋 Archivos de assets:');
cssFiles.forEach(file => {
  const filePath = path.join(assetsPath, file);
  const size = (fs.statSync(filePath).size / 1024).toFixed(2);
  console.log(`   🎨 ${file} (${size} KB)`);
});

jsFiles.forEach(file => {
  const filePath = path.join(assetsPath, file);
  const size = (fs.statSync(filePath).size / 1024).toFixed(2);
  console.log(`   📜 ${file} (${size} KB)`);
});

console.log('\n🚀 El build está listo para GitHub Pages!');
console.log('💡 URL esperada: https://zlosttk.github.io/Portafolio-Simple/');
