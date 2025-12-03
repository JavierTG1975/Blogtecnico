# 🚀 FASE 2: Publicación en GitHub Pages

## 📋 Objetivo

Publicar el Blog Técnico en GitHub Pages y obtener un link público para presentar.

**Link que obtendrás**: `https://JavierTG1975.github.io/Blogtecnico`

---

## 🔧 PASO 1: Preparación Local

### 1.1 Verificar Git está instalado

```powershell
git --version
```

Deberías ver algo como: `git version 2.40.0`

Si no lo ves, descarga Git de: https://git-scm.com/download/win

### 1.2 Configurar tu identidad en Git (primera vez)

```powershell
git config --global user.name "Tu Nombre Completo"
git config --global user.email "tu.email@gmail.com"

# Verificar que se configuró
git config --global --list
```

---

## 💾 PASO 2: Inicializar Git en la carpeta

### 2.1 Navega a la carpeta del proyecto

```powershell
cd "d:\javier\Universidad\2Cuatrimestre\ESTRUCTURAS DE DATOS II\Tercer_corte\Blogtecnico"
```

### 2.2 Inicializa el repositorio Git

```powershell
git init
```

**Resultado esperado**:
```
Initialized empty Git repository in D:\javier\Universidad\...\.git\
```

### 2.3 Verifica el estado

```powershell
git status
```

Deberías ver archivos sin rastrear (en rojo).

---

## 📦 PASO 3: Hacer el primer commit

### 3.1 Agregar todos los archivos

```powershell
git add .
```

### 3.2 Hacer el primer commit

```powershell
git commit -m "feat: Blog técnico de Grafos completo

- 3 posts sobre estructura de datos Grafos
- 4 visualizadores Canvas interactivos
- Diseño responsive
- Documentación técnica
- Sin dependencias externas"
```

**Resultado**:
```
[main (root-commit) abc1234] feat: Blog técnico de Grafos completo
 16 files changed, 4000 insertions(+)
```

### 3.3 Verifica los commits

```powershell
git log --oneline
```

---

## 🌐 PASO 4: Crear repositorio en GitHub

### 4.1 Ir a GitHub

Abre: https://github.com/new

### 4.2 Llenar el formulario

**Nombre del repositorio**: `Blogtecnico` (debe ser exacto)

**Descripción**: 
```
Blog técnico sobre Estructura de Datos: Grafos
Con 3 posts, visualizadores Canvas y documentación completa
```

**Visibility**: Selecciona **PUBLIC** ✅ (IMPORTANTE para GitHub Pages)

### 4.3 Crear el repositorio

- NO marques "Initialize this repository with a README"
- NO marques "Add .gitignore"
- NO marques "Choose a license"
- Click en **"Create repository"**

### 4.4 Copiar la URL

Te aparecerá algo como:
```
https://github.com/JavierTG1975/Blogtecnico.git
```

**Cópiala** (la necesitarás en el siguiente paso)

---

## 🔗 PASO 5: Conectar con GitHub

### 5.1 Agregar el remote

En PowerShell, en la carpeta del proyecto:

```powershell
git remote add origin https://github.com/JavierTG1975/Blogtecnico.git
```

⚠️ **Reemplaza `JavierTG1975` con tu usuario de GitHub**

### 5.2 Verificar la conexión

```powershell
git remote -v
```

Deberías ver:
```
origin  https://github.com/JavierTG1975/Blogtecnico.git (fetch)
origin  https://github.com/JavierTG1975/Blogtecnico.git (push)
```

### 5.3 Hacer push al servidor

```powershell
git branch -M main
git push -u origin main
```

**Te pedirá autenticación:**

Si usa HTTPS (el más común):
- Usuario: Tu usuario de GitHub
- Contraseña: Tu token de acceso personal (ver abajo)

---

## 🔐 PASO 6: Autenticación con GitHub

### Opción A: Token Personal (Recomendado)

1. Ve a: https://github.com/settings/tokens
2. Click en **"Generate new token"** → **"Generate new token (classic)"**
3. **Token name**: `Blog-Tecnico-Token`
4. **Expiration**: Selecciona 90 días
5. **Scopes**: Marca `repo` (acceso a repositorios)
6. Click en **"Generate token"**
7. **Copia el token** (no podrás verlo de nuevo)

### Usar el token

Cuando pida contraseña en PowerShell:
- Usuario: Tu usuario de GitHub
- Contraseña: Pega el token

Guarda el token en un archivo seguro para futuros usos.

---

## ✅ PASO 7: Habilitar GitHub Pages

### 7.1 Ir a configuración del repositorio

1. Ve a: https://github.com/JavierTG1975/Blogtecnico
2. Click en **Settings** (arriba a la derecha)

### 7.2 Buscar GitHub Pages

En el menú lateral izquierdo:
- Click en **"Pages"**

### 7.3 Configurar GitHub Pages

**Build and deployment**:
- **Source**: Selecciona **"Deploy from a branch"** ✅
- **Branch**: Selecciona **"main"** y **"/root"** ✅
- Click en **"Save"**

### 7.4 Esperar a que se construya

Verás un mensaje:
```
Your site is live at https://JavierTG1975.github.io/Blogtecnico/
```

**Espera 2-5 minutos** mientras GitHub construye el sitio.

---

## 🎉 PASO 8: Verificar que funciona

### 8.1 Abre tu blog en línea

Abre el navegador con:
```
https://JavierTG1975.github.io/Blogtecnico
```

⚠️ **Reemplaza `JavierTG1975` con tu usuario de GitHub**

### 8.2 Verifica que todo funciona

- ✅ Página carga correctamente
- ✅ Navbar funciona
- ✅ Posts están visibles
- ✅ Canvas se dibuja
- ✅ Responsive funciona
- ✅ Sin errores en consola (F12)

---

## 📋 Resumen de URLs

| Lo que necesitas | URL |
|-----------------|-----|
| Tu Blog Online | `https://JavierTG1975.github.io/Blogtecnico` |
| Configuración | `https://github.com/JavierTG1975/Blogtecnico` |
| GitHub Pages Settings | `https://github.com/JavierTG1975/Blogtecnico/settings/pages` |

---

## 🔄 Hacer cambios en el futuro

Si quieres actualizar el blog:

```powershell
# 1. Haz cambios en los archivos
# 2. Luego:

git add .
git commit -m "Descripción del cambio"
git push origin main

# GitHub Pages se actualiza automáticamente en 2-5 minutos
```

---

## 🆘 Troubleshooting

### "Authentication failed"
- Verifica tu usuario y contraseña
- O usa un Token Personal (más seguro)

### "The site is taking longer than expected"
- Espera 5-10 minutos más
- Recarga la página

### "404 Not Found" en GitHub Pages
- Verifica que el repositorio sea PUBLIC
- Verifica que GitHub Pages esté habilitado en Settings
- Verifica que la rama sea "main"

### El blog no se ve igual que localmente
- Borra caché del navegador: Ctrl+Shift+R
- Espera a que GitHub Pages reconstruya (~5 min)

### "fatal: 'origin' does not appear to be a 'git' repository"
- Verifica que estés en la carpeta correcta
- Verifica que git init se ejecutó correctamente

---

## 📝 Checklist Final

```
Fase 2: Implementación Técnica
───────────────────────────────
☐ Git instalado y configurado
☐ Repositorio local inicializado
☐ Primer commit hecho
☐ Repositorio creado en GitHub
☐ Remote agregado correctamente
☐ Push a GitHub realizado
☐ GitHub Pages habilitado
☐ Link generado
☐ Blog accesible en línea
☐ Todos los elementos funcionan
☐ Link copiado para presentación
```

---

## 🎯 El Link Final

Una vez completado todo, tu link será:

```
https://JavierTG1975.github.io/Blogtecnico
```

**ESTE es el link que debes cargar en la actividad.**

---

## 📚 Comandos Rápidos

Para referencia futura:

```powershell
# Ver estado
git status

# Ver commits
git log --oneline

# Ver remote
git remote -v

# Hacer cambios y actualizar
git add .
git commit -m "Descripción"
git push origin main

# Ver ramas
git branch -a
```

---

## ✨ ¡LISTO!

Tu blog está **publicado en línea** y accesible desde cualquier navegador con el link:

**`https://JavierTG1975.github.io/Blogtecnico`**

Copia este link y cárgalo en la actividad.

---

**Fecha**: 2 de diciembre de 2025
**Versión**: 1.0.0
**Estado**: ✅ Listo para GitHub Pages
