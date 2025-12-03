#!/usr/bin/env powershell
# Script para iniciar el Blog Técnico de Grafos
# Ejecuta este script para ver el blog automáticamente

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Blog Técnico: Estructura de Datos Grafos" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Obtener ruta actual
$rutaBlog = Split-Path -Parent $MyInvocation.MyCommand.Path

Write-Host "📁 Ubicación del proyecto: $rutaBlog" -ForegroundColor Green
Write-Host ""

# Verificar archivos
$archivos = @("index.html", "styles.css", "script.js")
$todosPresentes = $true

Write-Host "Verificando archivos..." -ForegroundColor Yellow
foreach ($archivo in $archivos) {
    $rutaArchivo = Join-Path $rutaBlog $archivo
    if (Test-Path $rutaArchivo) {
        Write-Host "✅ $archivo encontrado" -ForegroundColor Green
    } else {
        Write-Host "❌ $archivo NO ENCONTRADO" -ForegroundColor Red
        $todosPresentes = $false
    }
}

Write-Host ""

if (-not $todosPresentes) {
    Write-Host "Error: Faltan archivos necesarios" -ForegroundColor Red
    exit 1
}

Write-Host "🚀 Opciones para ver el blog:" -ForegroundColor Cyan
Write-Host ""
Write-Host "1️⃣  Abrir directamente en navegador (más rápido):" -ForegroundColor Yellow
Write-Host "   start index.html" -ForegroundColor White
Write-Host ""
Write-Host "2️⃣  Con servidor Python (recomendado):" -ForegroundColor Yellow
Write-Host "   python -m http.server 8000" -ForegroundColor White
Write-Host "   Luego: http://localhost:8000" -ForegroundColor White
Write-Host ""
Write-Host "3️⃣  Con VS Code Live Server (mejor opción):" -ForegroundColor Yellow
Write-Host "   code . (abre VS Code)" -ForegroundColor White
Write-Host "   Instala extensión 'Live Server'" -ForegroundColor White
Write-Host "   Click derecho en index.html → 'Open with Live Server'" -ForegroundColor White
Write-Host ""

Write-Host "¿Qué opción deseas?" -ForegroundColor Cyan
Write-Host "[1] Abrir directamente" -ForegroundColor White
Write-Host "[2] Iniciar servidor Python" -ForegroundColor White
Write-Host "[3] Abrir con VS Code" -ForegroundColor White
Write-Host "[0] Salir" -ForegroundColor White
Write-Host ""

$opcion = Read-Host "Selecciona (0-3)"

switch ($opcion) {
    "1" {
        Write-Host "🌐 Abriendo index.html..." -ForegroundColor Green
        start (Join-Path $rutaBlog "index.html")
        Write-Host "✅ Abierto en tu navegador predeterminado" -ForegroundColor Green
    }
    "2" {
        Write-Host "🚀 Iniciando servidor Python..." -ForegroundColor Green
        Set-Location $rutaBlog
        python -m http.server 8000
    }
    "3" {
        Write-Host "💻 Abriendo VS Code..." -ForegroundColor Green
        code $rutaBlog
        Write-Host "✅ VS Code abierto. Instala 'Live Server' y abre index.html" -ForegroundColor Green
    }
    "0" {
        Write-Host "❌ Saliendo..." -ForegroundColor Yellow
        exit 0
    }
    default {
        Write-Host "⚠️  Opción no válida" -ForegroundColor Red
        exit 1
    }
}

Write-Host ""
Write-Host "📚 Para más información, lee:" -ForegroundColor Cyan
Write-Host "   - QUICKSTART.md (5 minutos)" -ForegroundColor White
Write-Host "   - README.md (descripción general)" -ForegroundColor White
Write-Host "   - COMO_VER_EL_BLOG.md (instrucciones)" -ForegroundColor White
Write-Host ""
Write-Host "¡Disfruta el blog! 🎉" -ForegroundColor Green
