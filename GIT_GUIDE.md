# Guía: Control de Versiones con Git y GitHub

Este documento explica cómo versionar el Blog Técnico con Git y GitHub.

## 📋 Requisitos Previos

- Git instalado en tu máquina ([descargar](https://git-scm.com/download))
- Cuenta de GitHub ([crear cuenta](https://github.com/signup))
- Terminal/PowerShell configurada

## 🚀 Configuración Inicial

### 1. Configurar Git Localmente

```powershell
# Configurar nombre de usuario
git config --global user.name "Tu Nombre"

# Configurar correo
git config --global user.email "tu.email@example.com"

# Verificar configuración
git config --list
```

### 2. Inicializar Repositorio Local

```powershell
# Navegar a la carpeta del proyecto
cd d:\javier\Universidad\2Cuatrimestre\ESTRUCTURAS DE DATOS II\Tercer_corte\Blogtecnico

# Inicializar repositorio Git
git init

# Verificar estado
git status
```

## 📝 Flujo de Trabajo Básico

### 1. Agregar Cambios al Staging Area

```powershell
# Agregar todos los cambios
git add .

# Agregar archivo específico
git add index.html

# Verificar cambios staged
git status
```

### 2. Hacer Commit

```powershell
# Commit simple
git commit -m "Agregar página principal del blog"

# Commit con descripción detallada
git commit -m "Agregar página principal del blog

- Incluir 3 posts principales
- Navegación sticky en navbar
- Diseño responsive"
```

### 3. Ver Historial de Commits

```powershell
# Ver últimos commits
git log

# Ver formato compacto
git log --oneline

# Ver últimos 5 commits
git log -5

# Ver cambios de un commit
git show HASH_DEL_COMMIT
```

## 🔄 Conectar con GitHub

### 1. Crear Repositorio en GitHub

1. Ir a [github.com/new](https://github.com/new)
2. Nombre del repositorio: `Blogtecnico`
3. Descripción: "Blog técnico sobre estructura de datos: Grafos"
4. Seleccionar: Public
5. NO inicializar con README (ya tienes uno)
6. Crear repositorio

### 2. Conectar Repositorio Local con GitHub

```powershell
# Agregar remote origin
git remote add origin https://github.com/TU_USUARIO/Blogtecnico.git

# Verificar remote
git remote -v

# Renombrar rama (si es necesario)
git branch -M main

# Enviar cambios (primer push)
git push -u origin main
```

## 📤 Enviar Cambios a GitHub

### Primera Vez
```powershell
git push -u origin main
```

### Siguiente Veces
```powershell
git push
```

## 🔍 Comandos Útiles

```powershell
# Ver estado del repositorio
git status

# Ver cambios no staged
git diff

# Ver cambios staged
git diff --staged

# Revertir cambios en archivo
git checkout -- archivo.html

# Deshacer último commit (local)
git reset --soft HEAD~1

# Ver ramas
git branch

# Crear nueva rama
git checkout -b nombre-rama

# Cambiar de rama
git checkout nombre-rama

# Fusionar rama
git merge nombre-rama

# Eliminar rama
git branch -d nombre-rama
```

## 💾 Commits Recomendados para Este Proyecto

### 1. Estructura Base
```powershell
git add .
git commit -m "Crear estructura base del blog con HTML, CSS y JavaScript"
```

### 2. Post 1
```powershell
git add index.html script.js
git commit -m "Agregar Post #1: Introducción a los Grafos"
```

### 3. Post 2
```powershell
git add index.html script.js
git commit -m "Agregar Post #2: Representación de Grafos"
```

### 4. Post 3
```powershell
git add index.html script.js
git commit -m "Agregar Post #3: Algoritmos de Recorrido (BFS y DFS)"
```

### 5. Ejemplos
```powershell
git add ejemplos-codigo.html
git commit -m "Agregar página con ejemplos de código en Python y JavaScript"
```

### 6. Documentación
```powershell
git add README.md
git commit -m "Documentación completa del proyecto"
```

## 🏷️ Convención de Commits

Para mantener un historial limpio y profesional:

- **Add**: `git commit -m "Add: Descripción de lo agregado"`
- **Modify**: `git commit -m "Modify: Descripción del cambio"`
- **Fix**: `git commit -m "Fix: Descripción del problema solucionado"`
- **Delete**: `git commit -m "Delete: Descripción de lo eliminado"`
- **Docs**: `git commit -m "Docs: Actualización de documentación"`

Ejemplo:
```powershell
git commit -m "Add: Visualizador de grafos con Canvas API"
git commit -m "Fix: Corrección de responsividad en móviles"
git commit -m "Docs: Actualización de README con instrucciones"
```

## 🔐 Autenticación con GitHub

### Opción 1: Personal Access Token (Recomendado)

1. Ir a GitHub → Settings → Developer Settings → Personal access tokens
2. Crear nuevo token con permisos `repo`
3. Copiar el token
4. Usar como contraseña en git push:

```powershell
git push
# Pedir usuario: Tu_usuario
# Pedir contraseña: Pega_el_token
```

### Opción 2: SSH (Más Seguro)

```powershell
# Generar clave SSH
ssh-keygen -t ed25519 -C "tu.email@example.com"

# Agregar a GitHub: Settings → SSH and GPG keys → New SSH key
# Cambiar URL del remote
git remote set-url origin git@github.com:TU_USUARIO/Blogtecnico.git
```

## 📊 Ver Cambios Antes de Commit

```powershell
# Ver cambios no staged
git diff

# Ver cambios staged
git diff --staged

# Ver cambios en archivo específico
git diff index.html
```

## 🆘 Deshacer Cambios

### Deshacer cambios en archivo (antes de add)
```powershell
git checkout -- nombre-archivo
```

### Deshacer cambios ya agregados (después de add)
```powershell
git reset HEAD nombre-archivo
```

### Deshacer último commit (mantener cambios)
```powershell
git reset --soft HEAD~1
```

### Deshacer último commit (perder cambios)
```powershell
git reset --hard HEAD~1
```

## 📈 Ejemplo de Sesión Completa

```powershell
# 1. Verificar estado
git status

# 2. Ver cambios
git diff

# 3. Agregar cambios
git add .

# 4. Verificar staging
git status

# 5. Hacer commit
git commit -m "Add: Visualización de algoritmo BFS en Canvas"

# 6. Ver historial
git log --oneline

# 7. Enviar a GitHub
git push

# 8. Verificar en GitHub.com
```

## 🎓 Recursos Adicionales

- [Documentación oficial de Git](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Git Cheat Sheet](https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf)

---

**¡Ahora estás listo para versionar tu Blog Técnico! 🚀**
