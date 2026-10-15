const fs = require('fs');
const path = require('path');
const JavaScriptObfuscator = require('javascript-obfuscator');

console.log('[BUILD] Iniciando proceso de compilación, empaquetado y ofuscación militar...');

const rootDir = path.resolve(__dirname, '..');
const srcDir = path.join(rootDir, 'src');

// 1. Leer los archivos fuente limpios
const securityCode = fs.readFileSync(path.join(srcDir, 'security.js'), 'utf8');
const dataCode = fs.readFileSync(path.join(srcDir, 'cameras_data.js'), 'utf8');
const scriptCode = fs.readFileSync(path.join(srcDir, 'script.js'), 'utf8');

// 2. Empaquetar todo dentro de una clausura hermética (IIFE)
const bundleCode = `
// ============================================================
// SISTEMA DE SEGURIDAD MUNICIPAL - BILBAO CCTV [ENCRYPTED CORE]
// ACCESO RESTRINGIDO // COPYRIGHT (C) 2026 TODOS LOS DERECHOS RESERVADOS
// ============================================================

${securityCode}

(function(window, document) {
    'use strict';

    ${dataCode}

    ${scriptCode}

    // Exponer únicamente controladores UI requeridos por eventos HTML
    window.iniciarSecuenciaLogin = iniciarSecuenciaLogin;
    window.toggleSidebarMobile = toggleSidebarMobile;
    window.cambiarModoVista = cambiarModoVista;
    window.limpiarBusqueda = limpiarBusqueda;
    window.filtrarPorTexto = filtrarPorTexto;
    window.cambiarCapaMapa = cambiarCapaMapa;
    window.centrarBilbao = centrarBilbao;
    window.handleBackdropClick = handleBackdropClick;
    window.cerrarModal = cerrarModal;
    window.forzarRefrescoCamara = forzarRefrescoCamara;
    window.toggleZoomModal = toggleZoomModal;
    window.abrirModal = abrirModal;

})(window, document);
`;

console.log('[BUILD] Código unificado generado (' + (bundleCode.length / 1024).toFixed(1) + ' KB). Ofuscando con RC4 y autodefensa...');

// 3. Ejecutar JavaScript Obfuscator con nivel alto de seguridad
const obfuscatedResult = JavaScriptObfuscator.obfuscate(bundleCode, {
    compact: true,
    controlFlowFlattening: true,
    controlFlowFlatteningThreshold: 0.75,
    deadCodeInjection: true,
    deadCodeInjectionThreshold: 0.3,
    stringArray: true,
    stringArrayEncoding: ['rc4'],
    stringArrayThreshold: 0.8,
    splitStrings: true,
    splitStringsChunkLength: 6,
    transformObjectKeys: true,
    selfDefending: true,
    debugProtection: true,
    debugProtectionInterval: 1500,
    disableConsoleOutput: true,
    sourceMap: false
});

const outputPath = path.join(rootDir, 'app.bundle.js');
fs.writeFileSync(outputPath, obfuscatedResult.getObfuscatedCode(), 'utf8');

console.log('[BUILD] ✅ app.bundle.js generado con éxito (' + (fs.statSync(outputPath).size / 1024).toFixed(1) + ' KB)!');
console.log('[BUILD] Código fuente, coordenadas y lógica 100% blindados.');
