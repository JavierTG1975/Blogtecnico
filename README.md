# 📚 Blog Técnico: Estructura de Datos - Grafos

## Descripción
Blog técnico interactivo dedicado a la estructura de datos **Grafos (Graphs)**. Este proyecto combina contenido educativo de alta calidad con herramientas web modernas (HTML5, CSS3, JavaScript vanilla) y control de versiones con Git/GitHub.

## 🎯 Objetivo
Crear un recurso educativo completo que cubra los aspectos fundamentales de grafos, incluyendo:
- Conceptos básicos (nodos, aristas, tipos)
- Representaciones en memoria
- Algoritmos de recorrido esenciales

## 📖 Contenido del Blog

### Post #1: Introducción a los Grafos: Nodos, Aristas y Tipos
- ✅ Definición de un grafo
- ✅ Conceptos clave: vértices/nodos y aristas/ejes
- ✅ Tipos de grafos:
  - Grafos No Dirigidos
  - Grafos Dirigidos (Dígrafos)
  - Grafos Ponderados
- ✅ Diagrama visual de grafo no dirigido con 5 nodos

### Post #2: Representación de Grafos
- ✅ **Lista de Adyacencia**
  - Definición y características
  - Ventajas y desventajas
  - Complejidad: O(V + E)
- ✅ **Matriz de Adyacencia**
  - Definición y características
  - Ventajas y desventajas
  - Complejidad: O(V²)
- ✅ Comparación visual de ambas representaciones

### Post #3: Algoritmos Fundamentales de Recorrido
- ✅ **Búsqueda en Amplitud (BFS)**
  - Explicación y pseudocódigo
  - Complejidad: O(V + E)
  - Aplicaciones
  - Visualización interactiva
- ✅ **Búsqueda en Profundidad (DFS)**
  - Explicación y pseudocódigo
  - Complejidad: O(V + E)
  - Aplicaciones
  - Visualización interactiva
- ✅ Tabla comparativa BFS vs DFS

## 🛠️ Tecnologías Utilizadas

### Frontend
- **HTML5**: Estructura semántica del contenido
- **CSS3**: Estilos modernos, responsive design, gradientes y animaciones
- **JavaScript**: Lógica interactiva, navegación dinámica, visualización con Canvas API
- **Canvas API**: Diagramas y visualizaciones de grafos

### Control de Versiones
- **Git**: Control de versiones local
- **GitHub**: Repositorio remoto y colaboración

## 📁 Estructura del Proyecto

```
Blogtecnico/
├── index.html           # Página principal (HTML5)
├── styles.css           # Estilos del sitio (CSS3)
├── script.js            # Lógica interactiva (JavaScript)
├── README.md            # Este archivo
└── .gitignore           # Archivos a ignorar en Git
```

## 🎨 Características del Blog

### Diseño Responsivo
- Adaptable a todos los dispositivos (desktop, tablet, móvil)
- Breakpoints optimizados: 768px y 480px
- Grid layout moderno

### Interactividad
- Navegación fluida entre posts
- Canvas interactivos con visualizaciones de grafos
- Animaciones suaves (fade-in, hover effects)
- Barra de navegación sticky

### Contenido Visual
- Diagramas de grafos con Canvas
- Visualización de algoritmos BFS y DFS
- Tablas comparativas
- Código formateado y destacado

### Accesibilidad
- Semántica HTML adecuada
- Contraste de colores apropiado
- Navegación por teclado
- Alt text en elementos visuales

## 🚀 Cómo Usar

### Opción 1: Abrir directamente
1. Descarga o clona el repositorio
2. Abre `index.html` en tu navegador
3. ¡Navega por los posts!

### Opción 2: Con servidor local (recomendado)
```bash
# Con Python 3
python -m http.server 8000

# Con Python 2
python -m SimpleHTTPServer 8000

# Con Node.js (http-server)
npm install -g http-server
http-server
```

Luego abre `http://localhost:8000` en tu navegador.

## 📱 Responsividad

- **Desktop (>768px)**: Grid de 3 columnas, navegación expandida
- **Tablet (768px - 480px)**: Grid adaptativo, navegación comprimida
- **Móvil (<480px)**: Layout de 1 columna, fuente reducida

## 🎓 Aprendizajes Clave

- **HTML5**: Uso de semántica correcta (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- **CSS3**: Gradientes, flexbox, grid, media queries, transiciones
- **JavaScript**: DOM manipulation, Canvas API, eventos, observers
- **Git**: Commits, versionado, flujo de trabajo colaborativo

## 📊 Estadísticas del Proyecto

- **3 Posts Completos**: Cobertura integral de grafos
- **4 Visualizaciones Canvas**: Diagramas interactivos
- **2 Tablas Comparativas**: Análisis de complejidad
- **100% Responsivo**: Mobile-first design
- **0 Dependencias Externas**: JavaScript vanilla, sin frameworks

## 🔍 SEO y Metadatos

- Título descriptivo
- Viewport meta tag
- Charset UTF-8
- Favicon ready (personalizable)

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -m 'Add nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto es de código abierto y está disponible para uso educativo.

## 👤 Autor

**Javier Torres García**
- GitHub: [@JavierTG1975](https://github.com/JavierTG1975)
- Universidad: 2º Cuatrimestre - Tercer Corte
- Asignatura: Estructuras de Datos II

## 📅 Fecha de Creación

2 de diciembre de 2025

## 🎯 Próximas Mejoras Posibles

- [ ] Agregar más posts sobre grafos (componentes conexas, caminos más cortos)
- [ ] Implementar simulador interactivo de algoritmos
- [ ] Agregar ejemplos de código en Python/JavaScript
- [ ] Sistema de comentarios
- [ ] Búsqueda dentro del blog
- [ ] Dark mode
- [ ] Exportar contenido a PDF
- [ ] Versión multiidioma

---

**¡Espero que disfrutes aprendiendo sobre Grafos! 🚀**
