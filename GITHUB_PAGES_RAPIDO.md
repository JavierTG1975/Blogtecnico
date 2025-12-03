# 🚀 CÓMO PUBLICAR EN GITHUB PAGES - VERSIÓN RÁPIDA

## 3 Formas de Hacer Esto

---

## ✅ OPCIÓN 1: Script Automático (LA MÁS FÁCIL)

### Paso 1: Ejecutar el script
```powershell
cd "d:\javier\Universidad\2Cuatrimestre\ESTRUCTURAS DE DATOS II\Tercer_corte\Blogtecnico"
.\PUBLICAR_EN_GITHUB.ps1
```

### Paso 2: Responder preguntas
- Tu nombre
- Tu email
- Tu usuario de GitHub
- Nombre del repositorio

### Paso 3: Autenticarse
- GitHub te pedirá usuario y contraseña
- O usa Token Personal

### Paso 4: Habilitar GitHub Pages
- El script abre GitHub automáticamente
- Configura como indica el script
- ¡Listo!

**Tiempo**: 5-10 minutos

---

## ✅ OPCIÓN 2: Comandos Manuales (MÁS CONTROL)

### Paso 1: Configurar Git
```powershell
git config --global user.name "Tu Nombre"
git config --global user.email "tu.email@gmail.com"
```

### Paso 2: Ir a la carpeta
```powershell
cd "d:\javier\Universidad\2Cuatrimestre\ESTRUCTURAS DE DATOS II\Tercer_corte\Blogtecnico"
```

### Paso 3: Inicializar y hacer commit
```powershell
git init
git add .
git commit -m "Blog técnico de Grafos v1.0"
```

### Paso 4: Crear repositorio en GitHub
1. Abre: https://github.com/new
2. Nombre: `Blogtecnico`
3. Descripción: "Blog técnico sobre Grafos"
4. Visibilidad: **PUBLIC** ✅
5. Crear repositorio
6. Copiar URL que aparece

### Paso 5: Conectar y subir
```powershell
git remote add origin https://github.com/TU_USUARIO/Blogtecnico.git
git branch -M main
git push -u origin main
```

### Paso 6: Habilitar GitHub Pages
1. Abre: https://github.com/TU_USUARIO/Blogtecnico/settings/pages
2. Source: "Deploy from a branch"
3. Branch: "main" / "/root"
4. Guardar
5. Esperar 5 minutos

**Tu blog está en**: `https://TU_USUARIO.github.io/Blogtecnico`

**Tiempo**: 10-15 minutos

---

## ✅ OPCIÓN 3: Interfaz GitHub Desktop (VISUAL)

### Paso 1: Descargar GitHub Desktop
- Abre: https://desktop.github.com
- Descarga e instala

### Paso 2: Inicializar repositorio
- Abre GitHub Desktop
- File → New Repository
- Name: `Blogtecnico`
- Local Path: Tu carpeta del proyecto
- Crear

### Paso 3: Hacer primer commit
- Verás archivos sin rastrear
- Escribe mensaje: "Blog técnico de Grafos"
- Click en "Commit to main"

### Paso 4: Publicar en GitHub
- Click en "Publish repository"
- Nombre: `Blogtecnico`
- Descripción: "Blog técnico sobre Grafos"
- Público: ✅ SI
- Click "Publish"

### Paso 5: Habilitar GitHub Pages
1. Abre: https://github.com/TU_USUARIO/Blogtecnico/settings/pages
2. Source: "Deploy from a branch"
3. Branch: "main" / "/root"
4. Guardar

**Tu blog está en**: `https://TU_USUARIO.github.io/Blogtecnico`

**Tiempo**: 5-10 minutos

---

## 📋 Checklist: Lo Que Necesitas

- [ ] Cuenta en GitHub (gratis): https://github.com/signup
- [ ] Git instalado: https://git-scm.com/download/win
- [ ] La carpeta del blog con todos los archivos
- [ ] Internet conectada

---

## 🎯 El Resultado Final

Después de todo, tendrás:

```
Tu Blog Online: https://JavierTG1975.github.io/Blogtecnico
```

**Este es el link que debes cargar en la actividad**

---

## 🆘 Problemas Comunes

### "fatal: not a git repository"
→ Ejecuta `git init` en la carpeta correcta

### "authentication failed"
→ Usa Token Personal (más seguro que contraseña)

### "GitHub Pages not loading"
→ Espera 5-10 minutos más
→ Verifica que el repositorio sea PUBLIC
→ Verifica que esté en /settings/pages

### "El blog se ve diferente en GitHub"
→ Borra caché: Ctrl+Shift+R
→ Espera a que se reconstruya

---

## 🚀 Recomendación

**Usa la OPCIÓN 1** (script automático) es la más fácil y rápida.

Si tienes problemas, usa **OPCIÓN 2** (comandos) para tener más control.

---

## 📚 Más Información

Ver archivo completo: `GITHUB_PAGES_GUIDE.md`

---

## ✨ ¡LISTO!

Una vez completado, tu blog está:
- ✅ Publicado en GitHub
- ✅ Accesible desde cualquier navegador
- ✅ Con un link profesional
- ✅ Listo para presentar

**¡Éxito! 🎉**
