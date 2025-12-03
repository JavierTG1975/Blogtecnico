# 🎬 Cómo Ver el Proyecto en Acción

## 🖥️ Opción 1: Abrir Directamente (Más Rápido)

### Windows PowerShell:
```powershell
# Navega a la carpeta del proyecto
cd "d:\javier\Universidad\2Cuatrimestre\ESTRUCTURAS DE DATOS II\Tercer_corte\Blogtecnico"

# Abre el archivo index.html en el navegador predeterminado
start index.html
```

✅ Ventaja: Inmediato, sin necesidad de servidor
❌ Desventaja: Algunos navegadores restringen ciertas funciones con `file://`

---

## 🔧 Opción 2: Con Servidor Local Python (Recomendado)

### Paso 1: Abre PowerShell

```powershell
# Navega a la carpeta del proyecto
cd "d:\javier\Universidad\2Cuatrimestre\ESTRUCTURAS DE DATOS II\Tercer_corte\Blogtecnico"
```

### Paso 2: Inicia el servidor

#### Si tienes Python 3:
```powershell
python -m http.server 8000
```

#### Si tienes Python 2:
```powershell
python -m SimpleHTTPServer 8000
```

### Paso 3: Abre en navegador

Cualquiera de estos enlaces:
- http://localhost:8000
- http://127.0.0.1:8000

### Paso 4: Para salir
```powershell
# Presiona Ctrl+C en la terminal
```

✅ Ventaja: Funciona perfectamente, emula servidor real
✅ Ventaja: Canvas y todas las funciones funcionan sin restricciones

---

## 🌐 Opción 3: Con Node.js (Si lo tienes instalado)

### Paso 1: Instala http-server globalmente (primera vez)
```powershell
npm install -g http-server
```

### Paso 2: Inicia el servidor
```powershell
# Navega a la carpeta del proyecto
cd "d:\javier\Universidad\2Cuatrimestre\ESTRUCTURAS DE DATOS II\Tercer_corte\Blogtecnico"

# Inicia el servidor
http-server
```

### Paso 3: Abre en navegador
```
http://localhost:8080
```

---

## 💻 Opción 4: Con VS Code (La Mejor)

### Paso 1: Abre VS Code
```powershell
# Desde PowerShell en la carpeta del proyecto
code .
```

### Paso 2: Instala "Live Server" extension
- Click en "Extensions" (Ctrl+Shift+X)
- Busca: `Live Server`
- Instala de Ritwick Dey

### Paso 3: Abre el archivo
- Click derecho en `index.html`
- Selecciona: "Open with Live Server"

✅ Ventaja: Se actualiza automáticamente al guardar cambios
✅ Ventaja: IDE completo para editar
✅ Ventaja: Excelente para debugging

---

## 📱 Probar Responsividad

Una vez que tengas el blog abierto en el navegador:

### F12 para abrir Developer Tools:
```
Presiona: F12 (o Ctrl+Shift+I)
```

### Cambiar a modo móvil:
```
Presiona: Ctrl+Shift+M (o click en icono de móvil)
```

### Dimensiones para probar:
- **Móvil**: 375 x 667 (iPhone)
- **Tablet**: 768 x 1024 (iPad)
- **Desktop**: 1920 x 1080 (Pantalla completa)

---

## 🔍 Verificar que Todo Funciona

### Checklist después de abrir:

1. **Navbar**
   - [ ] Visible en la parte superior
   - [ ] Links clickeables
   - [ ] Color azul degradado

2. **Hero Section**
   - [ ] Título grande: "Estructura de Datos: Grafos"
   - [ ] Subtítulo descriptivo

3. **Posts Grid**
   - [ ] 3 tarjetas visibles en desktop
   - [ ] Botones "Leer más" funcionales

4. **Post #1 - Introducción**
   - [ ] Click en "Leer más" muestra el post
   - [ ] Título: "Introducción a los Grafos: Nodos, Aristas y Tipos"
   - [ ] Canvas se dibuja (5 nodos conectados)

5. **Post #2 - Representación**
   - [ ] Click en navbar funciona
   - [ ] Canvas se dibuja con el grafo
   - [ ] Tabla de matriz visible
   - [ ] Lista de adyacencia visible

6. **Post #3 - Algoritmos**
   - [ ] BFS canvas se dibuja
   - [ ] DFS canvas se dibuja
   - [ ] Tabla comparativa visible
   - [ ] Pseudocódigo legible

7. **Responsividad**
   - [ ] En móvil: 1 columna
   - [ ] En tablet: 2 columnas
   - [ ] En desktop: 3 columnas

8. **Navegación**
   - [ ] Links en navbar funcionan
   - [ ] Transiciones suaves
   - [ ] Scroll funciona

---

## 🎮 Interacciones para Probar

1. **Haz click en cada sección del navbar**
   - Debe cambiar de post suavemente

2. **Haz click en "Leer más" en homepage**
   - Debe abrir el post respectivo

3. **Redimensiona el navegador**
   - El layout debe adaptarse

4. **Abre la consola (F12)**
   - No debe haber errores

5. **Scroll por los posts**
   - Debe ser suave
   - Canvas debe ser visible

---

## 🐛 Si Algo No Funciona

### Los Canvas no se ven:
1. Abre la consola (F12)
2. Busca errores en rojo
3. Verifica que `script.js` esté en la misma carpeta
4. Recarga la página (Ctrl+R o F5)

### Los estilos no se aplican:
1. Verifica que `styles.css` esté en la misma carpeta
2. Limpia caché: Ctrl+Shift+R
3. Abre la consola para buscar errores

### La navegación no funciona:
1. Abre la consola (F12 → Console)
2. Busca mensajes de error
3. Verifica que `script.js` esté cargado

### Rendimiento lento:
1. En dispositivos antiguos es normal
2. Intenta en otro navegador (Chrome, Firefox)
3. Desactiva extensiones del navegador

---

## 📊 Información del Servidor

### Cuando ejecutes `python -m http.server 8000`:

```
Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...
127.0.0.1 - - [02/Dec/2025 10:30:45] "GET / HTTP/1.1" 200 -
127.0.0.1 - - [02/Dec/2025 10:30:45] "GET /styles.css HTTP/1.1" 200 -
127.0.0.1 - - [02/Dec/2025 10:30:45] "GET /script.js HTTP/1.1" 200 -
```

✅ Status 200 = OK
❌ Status 404 = Archivo no encontrado

---

## 🎯 Prueba Final Completa

1. ✅ Abre el servidor
2. ✅ Navega por todos los posts
3. ✅ Verifica cada Canvas
4. ✅ Prueba responsividad
5. ✅ Abre consola (sin errores)
6. ✅ Prueba en móvil
7. ✅ Todo funciona = ¡Éxito!

---

## 📸 Lo Que Deberías Ver

### Homepage (Inicio)
- Logo y navegación en la parte superior
- 3 tarjetas de posts
- Gradiente azul en navbar

### Post #1
- Título y fecha
- Explicación de grafos
- Tipos de grafos
- Canvas con 5 nodos (A, B, C, D, E)

### Post #2
- Explicación de Lista de Adyacencia
- Explicación de Matriz de Adyacencia
- Canvas del grafo
- Tabla de matriz
- Lista de adyacencia formateada

### Post #3
- Explicación de BFS
- Pseudocódigo de BFS
- Canvas de BFS (árbol con colores por niveles)
- Explicación de DFS
- Pseudocódigo de DFS
- Canvas de DFS (árbol con números de orden)
- Tabla comparativa

---

## 💡 Tips Profesionales

1. **Para testing rápido**:
   - Usa VS Code + Live Server
   - Se actualiza con cada guardado

2. **Para ver en otros dispositivos**:
   - En la terminal: `ipconfig` (busca IPv4)
   - Abre: `http://tu-ip:8000` en otro dispositivo

3. **Para grabar un video**:
   - OBS Studio (gratuito)
   - Screencast-o-matic (web)
   - Windows Game Bar (Win+G)

4. **Para enviar a otros**:
   - GitHub Pages (ver README.md)
   - Netlify (deployar gratis)
   - Compartir carpeta por OneDrive/Drive

---

## ✨ ¡Listo!

Ya puedes ver el Blog Técnico de Grafos en acción.

**La mejor forma de empezar es:**

```powershell
cd "d:\javier\Universidad\2Cuatrimestre\ESTRUCTURAS DE DATOS II\Tercer_corte\Blogtecnico"
python -m http.server 8000
```

Luego abre: **http://localhost:8000**

¡Disfruta del blog! 🚀

---

**Última actualización**: 2 de diciembre de 2025
