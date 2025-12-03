#!/usr/bin/env powershell
# Script para publicar el Blog Técnico en GitHub Pages
# Este script automatiza todos los pasos

Write-Host "════════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "  PUBLICADOR AUTOMÁTICO - Blog Técnico en GitHub Pages" -ForegroundColor Cyan
Write-Host "════════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host ""

# Colores
$success = "Green"
$error = "Red"
$warning = "Yellow"
$info = "Cyan"

# Función para pausar
function Pause {
    Write-Host "Presiona Enter para continuar..." -ForegroundColor $warning
    Read-Host
}

# PASO 1: Verificar Git
Write-Host "📋 PASO 1: Verificando Git..." -ForegroundColor $info
git --version > $null 2>&1
if ($?) {
    Write-Host "✅ Git está instalado" -ForegroundColor $success
} else {
    Write-Host "❌ Git NO está instalado" -ForegroundColor $error
    Write-Host "Descarga desde: https://git-scm.com/download/win" -ForegroundColor $warning
    exit 1
}
Write-Host ""

# PASO 2: Configurar Git
Write-Host "⚙️  PASO 2: Configurando identidad Git..." -ForegroundColor $info
$nombre = Read-Host "¿Cuál es tu nombre? (para Git)"
$email = Read-Host "¿Cuál es tu email? (para Git)"

git config --global user.name "$nombre"
git config --global user.email "$email"

Write-Host "✅ Identidad configurada:" -ForegroundColor $success
Write-Host "   Nombre: $nombre" -ForegroundColor $info
Write-Host "   Email: $email" -ForegroundColor $info
Write-Host ""

# PASO 3: Inicializar Git local
Write-Host "📦 PASO 3: Inicializando repositorio local..." -ForegroundColor $info
if (Test-Path ".git") {
    Write-Host "⚠️  Git ya estaba inicializado" -ForegroundColor $warning
} else {
    git init
    Write-Host "✅ Repositorio local inicializado" -ForegroundColor $success
}
Write-Host ""

# PASO 4: Hacer commit
Write-Host "💾 PASO 4: Creando primer commit..." -ForegroundColor $info
git add .
git commit -m "feat: Blog técnico de Grafos completo

- 3 posts sobre estructura de datos Grafos
- 4 visualizadores Canvas interactivos
- Diseño responsive
- Documentación técnica completa
- Sin dependencias externas
- Tipografía moderna con Google Fonts"

if ($?) {
    Write-Host "✅ Primer commit realizado" -ForegroundColor $success
} else {
    Write-Host "⚠️  El repositorio ya tenía commits" -ForegroundColor $warning
}
Write-Host ""

# PASO 5: Pedir datos de GitHub
Write-Host "🔗 PASO 5: Conectando con GitHub..." -ForegroundColor $info
Write-Host ""
Write-Host "Necesito tu información de GitHub:" -ForegroundColor $warning
$usuario = Read-Host "¿Cuál es tu usuario de GitHub? (ej: JavierTG1975)"
$repo = Read-Host "¿Cuál es el nombre del repositorio? (ej: Blogtecnico)"

$url = "https://github.com/$usuario/$repo.git"
Write-Host ""
Write-Host "URL del repositorio:" -ForegroundColor $info
Write-Host "  $url" -ForegroundColor $info
Write-Host ""

# PASO 6: Agregar remote
Write-Host "🌐 PASO 6: Agregando remote origin..." -ForegroundColor $info
git remote remove origin 2> $null
git remote add origin $url

if ($?) {
    Write-Host "✅ Remote agregado correctamente" -ForegroundColor $success
} else {
    Write-Host "❌ Error al agregar remote" -ForegroundColor $error
    exit 1
}
Write-Host ""

# PASO 7: Hacer push
Write-Host "📤 PASO 7: Subiendo código a GitHub..." -ForegroundColor $info
Write-Host ""
Write-Host "Esto abrirá una ventana de autenticación de GitHub" -ForegroundColor $warning
Write-Host "Si no aparece, usa Token Personal:" -ForegroundColor $warning
Write-Host "  Usuario: $usuario" -ForegroundColor $info
Write-Host "  Contraseña: Tu Token Personal de GitHub" -ForegroundColor $info
Write-Host ""

git branch -M main
git push -u origin main

if ($?) {
    Write-Host "✅ Código subido a GitHub correctamente" -ForegroundColor $success
} else {
    Write-Host "❌ Error al subir a GitHub" -ForegroundColor $error
    Write-Host "Verifica tu usuario y contraseña" -ForegroundColor $warning
    exit 1
}
Write-Host ""

# PASO 8: Información final
Write-Host "════════════════════════════════════════════════════════════" -ForegroundColor $success
Write-Host "🎉 ¡CASI LISTO!" -ForegroundColor $success
Write-Host "════════════════════════════════════════════════════════════" -ForegroundColor $success
Write-Host ""

Write-Host "✅ Código subido a GitHub" -ForegroundColor $success
Write-Host ""

Write-Host "📋 PRÓXIMO PASO: Habilitar GitHub Pages" -ForegroundColor $warning
Write-Host ""
Write-Host "1. Abre: https://github.com/$usuario/$repo/settings/pages" -ForegroundColor $info
Write-Host "2. En 'Source', selecciona 'Deploy from a branch'" -ForegroundColor $info
Write-Host "3. Selecciona rama 'main' y carpeta '/root'" -ForegroundColor $info
Write-Host "4. Click en 'Save'" -ForegroundColor $info
Write-Host ""
Write-Host "Espera 2-5 minutos y tu blog estará en:" -ForegroundColor $success
Write-Host "⭐ https://$usuario.github.io/$repo" -ForegroundColor $success
Write-Host ""

# Ofrecer abrir GitHub
$abrir = Read-Host "¿Deseas abrir GitHub en el navegador? (s/n)"
if ($abrir -eq "s") {
    start "https://github.com/$usuario/$repo/settings/pages"
}

Write-Host ""
Write-Host "════════════════════════════════════════════════════════════" -ForegroundColor $success
Write-Host "📚 Para más info, lee: GITHUB_PAGES_GUIDE.md" -ForegroundColor $info
Write-Host "════════════════════════════════════════════════════════════" -ForegroundColor $success
