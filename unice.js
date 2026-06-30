// --- MENÚ PRINCIPAL ---
const links = document.querySelectorAll('.navbar a');
const mainSections = document.querySelectorAll('.contenido section');

// Crear overlay
const overlay = document.createElement('div');
overlay.classList.add('modal-overlay');
document.body.appendChild(overlay);

// Oculta todas las secciones al inicio
mainSections.forEach(sec => sec.classList.remove('active'));

// Evento en cada enlace del menú
links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);

    // Oculta todas las secciones
    mainSections.forEach(sec => sec.classList.remove('active'));
    overlay.classList.remove('active');

    // Muestra la sección seleccionada como modal
    document.getElementById(targetId).classList.add('active');
    overlay.classList.add('active');
  });
});

// Cerrar modal al hacer clic en el overlay
overlay.addEventListener('click', () => {
  mainSections.forEach(sec => sec.classList.remove('active'));
  overlay.classList.remove('active');
});

// --- SUBMENÚ DE PROBLEMAS AMBIENTALES ---
const subLinks = document.querySelectorAll('.submenu a');
const subSections = document.querySelectorAll('.temas section');

// Ocultar todos los subtemas al inicio
subSections.forEach(sec => sec.classList.remove('active'));

// Evento para cada enlace del submenú
subLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);

    // Ocultar todos los subtemas
    subSections.forEach(sec => sec.classList.remove('active'));

    // Mostrar solo el seleccionado como modal
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.classList.add('active');
    }
  });
});

// --- BOTONES "ATRÁS" EN TODAS LAS CAJITAS ---
const volverBtns = document.querySelectorAll('.volver-sub');
const allSections = document.querySelectorAll('.contenido section, .temas section');

volverBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();

    // Si el botón está dentro de un subtema, regresa al menú de Problemas Ambientales
    if (btn.closest('.temas')) {
      subSections.forEach(sec => sec.classList.remove('active'));
      const problemasAmbientales = document.getElementById('proamb');
      if (problemasAmbientales) {
        problemasAmbientales.classList.add('active');
      }
    } else {
      // Si está en una sección principal, cierra todo y quita overlay
      allSections.forEach(sec => sec.classList.remove('active'));
      overlay.classList.remove('active');
    }
  });
});

const carrusel = document.querySelector('.carrusel');
const imagenes = carrusel.querySelectorAll('.imagenes img');
const indicadoresContainer = carrusel.querySelector('.indicadores');

let indice = 0;

// Crear indicadores según cantidad de imágenes
imagenes.forEach((_, i) => {
    const dot = document.createElement('span');
    if(i === 0) dot.classList.add('active'); // primer puntito activo
    dot.addEventListener('click', () => {
        indice = i;
        mostrarImagen(indice);
    });
    indicadoresContainer.appendChild(dot);
});

const indicadores = indicadoresContainer.querySelectorAll('span');

function mostrarImagen(i) {
    imagenes.forEach(img => img.classList.remove('active'));
    indicadores.forEach(dot => dot.classList.remove('active'));
    imagenes[i].classList.add('active');
    indicadores[i].classList.add('active');
}

// ⏱ Cambio automático más rápido (cada 2 segundos)
setInterval(() => {
    indice++;
    if (indice >= imagenes.length) {
        indice = 0; // 🔄 reinicia inmediatamente al principio
    }
    mostrarImagen(indice);
}, 2000); // velocidad ajustada a 2 segundos


//contenido extraaa
const quimicaCards = document.querySelectorAll('.quimica-unicel .card');

quimicaCards.forEach(card => {
  card.addEventListener('click', () => {
    // Quitar estado activo de todas las cajitas
    quimicaCards.forEach(c => c.classList.remove('active'));
    // Activar la cajita seleccionada
    card.classList.add('active');
  });
});


