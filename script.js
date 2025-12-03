// ===== FUNCIONALIDAD DE NAVEGACIÓN =====
function mostrarSeccion(seccionId) {
    // Ocultar todas las secciones
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach(sec => sec.classList.remove('activa'));

    // Mostrar la sección seleccionada
    const seccion = document.getElementById(seccionId);
    if (seccion) {
        seccion.classList.add('activa');
    }

    // Actualizar enlaces de navegación
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    
    const enlaceActivo = document.querySelector(`.nav-link[onclick="mostrarSeccion('${seccionId}')"]`);
    if (enlaceActivo) {
        enlaceActivo.classList.add('active');
    }

    // Scroll al inicio
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== DIBUJAR GRAFO #1 (Introducción - No dirigido 5 nodos) =====
function dibujarGrafo1() {
    const canvas = document.getElementById('canvasGrafo1');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // Ajustar tamaño del canvas
    canvas.width = canvas.offsetWidth;
    canvas.height = 400;

    // Definir nodos
    const nodos = {
        A: { x: 200, y: 100 },
        B: { x: 400, y: 100 },
        C: { x: 300, y: 250 },
        D: { x: 150, y: 300 },
        E: { x: 450, y: 300 }
    };

    // Definir aristas
    const aristas = [
        ['A', 'B'],
        ['A', 'C'],
        ['B', 'C'],
        ['B', 'D'],
        ['C', 'E'],
        ['D', 'E']
    ];

    // Dibujar aristas
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 2;
    aristas.forEach(([n1, n2]) => {
        ctx.beginPath();
        ctx.moveTo(nodos[n1].x, nodos[n1].y);
        ctx.lineTo(nodos[n2].x, nodos[n2].y);
        ctx.stroke();
    });

    // Dibujar nodos
    Object.entries(nodos).forEach(([nombre, pos]) => {
        // Círculo del nodo
        ctx.fillStyle = '#2563eb';
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, 25, 0, Math.PI * 2);
        ctx.fill();

        // Texto del nodo
        ctx.fillStyle = 'white';
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(nombre, pos.x, pos.y);
    });
}

// ===== DIBUJAR GRAFO #2 (Representación de Grafos) =====
function dibujarGrafo2() {
    const canvas = document.getElementById('canvasGrafo2');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    canvas.width = canvas.offsetWidth;
    canvas.height = 300;

    // Definir nodos en posición circular
    const nodos = {
        A: { x: 150, y: 150, label: 'A' },
        B: { x: 250, y: 100, label: 'B' },
        C: { x: 250, y: 200, label: 'C' },
        D: { x: 150, y: 250, label: 'D' }
    };

    // Aristas para grafo no dirigido
    const aristas = [
        ['A', 'B'],
        ['A', 'C'],
        ['B', 'C'],
        ['B', 'D']
    ];

    // Dibujar aristas
    ctx.strokeStyle = '#06b6d4';
    ctx.lineWidth = 2;
    aristas.forEach(([n1, n2]) => {
        ctx.beginPath();
        ctx.moveTo(nodos[n1].x, nodos[n1].y);
        ctx.lineTo(nodos[n2].x, nodos[n2].y);
        ctx.stroke();
    });

    // Dibujar nodos
    Object.entries(nodos).forEach(([nombre, pos]) => {
        ctx.fillStyle = '#0f766e';
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, 20, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = 'white';
        ctx.font = 'bold 14px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(nombre, pos.x, pos.y);
    });
}

// ===== DIBUJAR ÁRBOL BFS =====
function dibujarBFS() {
    const canvas = document.getElementById('canvasBFS');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = 350;

    // Nodos y posiciones para visualizar BFS en niveles
    const nodos = {
        'A': { x: 200, y: 50, nivel: 0 },
        'B': { x: 100, y: 150, nivel: 1 },
        'C': { x: 300, y: 150, nivel: 1 },
        'D': { x: 50, y: 250, nivel: 2 },
        'E': { x: 150, y: 250, nivel: 2 },
        'F': { x: 250, y: 250, nivel: 2 },
        'G': { x: 350, y: 250, nivel: 2 },
        'H': { x: 200, y: 320, nivel: 3 },
        'I': { x: 300, y: 320, nivel: 3 }
    };

    const aristas = [
        ['A', 'B'],
        ['A', 'C'],
        ['B', 'D'],
        ['B', 'E'],
        ['C', 'F'],
        ['C', 'G'],
        ['E', 'H'],
        ['F', 'I']
    ];

    // Dibujar aristas
    ctx.strokeStyle = '#93c5fd';
    ctx.lineWidth = 2;
    aristas.forEach(([n1, n2]) => {
        ctx.beginPath();
        ctx.moveTo(nodos[n1].x, nodos[n1].y);
        ctx.lineTo(nodos[n2].x, nodos[n2].y);
        ctx.stroke();
    });

    // Dibujar nodos con color según nivel
    const colores = ['#2563eb', '#3b82f6', '#60a5fa', '#93c5fd'];
    Object.entries(nodos).forEach(([nombre, pos]) => {
        ctx.fillStyle = colores[pos.nivel];
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, 18, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = 'white';
        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(nombre, pos.x, pos.y);
    });

    // Dibujar leyenda de niveles
    ctx.font = '11px Arial';
    ctx.fillStyle = '#6b7280';
    ctx.textAlign = 'left';
    ctx.fillText('Nivel 0:', 10, 340);
    ctx.fillStyle = '#2563eb';
    ctx.fillText('● Inicio', 60, 340);

    ctx.fillStyle = '#6b7280';
    ctx.fillText('Nivel 1:', 130, 340);
    ctx.fillStyle = '#3b82f6';
    ctx.fillText('● Vecinos', 190, 340);

    ctx.fillStyle = '#6b7280';
    ctx.fillText('Nivel 2,3:', 270, 340);
    ctx.fillStyle = '#60a5fa';
    ctx.fillText('● Más profundo', 345, 340);
}

// ===== DIBUJAR ÁRBOL DFS =====
function dibujarDFS() {
    const canvas = document.getElementById('canvasDFS');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = 350;

    // Nodos en el mismo grafo pero mostrando orden de recorrido DFS
    const nodos = {
        'A': { x: 200, y: 50, orden: 1 },
        'B': { x: 100, y: 150, orden: 2 },
        'C': { x: 300, y: 150, orden: 5 },
        'D': { x: 50, y: 250, orden: 3 },
        'E': { x: 150, y: 250, orden: 6 },
        'F': { x: 250, y: 250, orden: 7 },
        'G': { x: 350, y: 250, orden: 8 },
        'H': { x: 200, y: 320, orden: 4 },
        'I': { x: 300, y: 320, orden: 9 }
    };

    const aristas = [
        ['A', 'B'],
        ['A', 'C'],
        ['B', 'D'],
        ['B', 'E'],
        ['C', 'F'],
        ['C', 'G'],
        ['E', 'H'],
        ['F', 'I']
    ];

    // Dibujar aristas
    ctx.strokeStyle = '#fca5a5';
    ctx.lineWidth = 2;
    aristas.forEach(([n1, n2]) => {
        ctx.beginPath();
        ctx.moveTo(nodos[n1].x, nodos[n1].y);
        ctx.lineTo(nodos[n2].x, nodos[n2].y);
        ctx.stroke();
    });

    // Dibujar nodos con número de orden
    Object.entries(nodos).forEach(([nombre, pos]) => {
        ctx.fillStyle = '#dc2626';
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, 18, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = 'white';
        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(nombre, pos.x, pos.y - 5);
        ctx.font = '10px Arial';
        ctx.fillText(pos.orden, pos.x, pos.y + 7);
    });

    // Leyenda
    ctx.font = '11px Arial';
    ctx.fillStyle = '#6b7280';
    ctx.textAlign = 'left';
    ctx.fillText('Orden de visitación DFS (1-9):', 10, 340);
    ctx.fillStyle = '#dc2626';
    ctx.fillText('● Profundidad primero', 180, 340);
}

// ===== INICIALIZAR AL CARGAR LA PÁGINA =====
document.addEventListener('DOMContentLoaded', function() {
    // Dibujar grafos cuando sea necesario
    setTimeout(() => {
        dibujarGrafo1();
    }, 100);

    // Mostrar sección inicial
    mostrarSeccion('inicio');
});

// ===== OBSERVERS PARA DIBUJAR CUANDO SEAN VISIBLES =====
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const canvas = entry.target;
            if (canvas.id === 'canvasGrafo2') {
                dibujarGrafo2();
            } else if (canvas.id === 'canvasBFS') {
                dibujarBFS();
            } else if (canvas.id === 'canvasDFS') {
                dibujarDFS();
            }
            observer.unobserve(canvas);
        }
    });
}, observerOptions);

// Observar todos los canvas
document.addEventListener('DOMContentLoaded', function() {
    const canvas2 = document.getElementById('canvasGrafo2');
    const canvasBFS = document.getElementById('canvasBFS');
    const canvasDFS = document.getElementById('canvasDFS');

    if (canvas2) observer.observe(canvas2);
    if (canvasBFS) observer.observe(canvasBFS);
    if (canvasDFS) observer.observe(canvasDFS);
});

// ===== REDIMENSIONAR CANVAS EN RESPONSIVE =====
window.addEventListener('resize', function() {
    dibujarGrafo1();
    dibujarGrafo2();
    dibujarBFS();
    dibujarDFS();
});
