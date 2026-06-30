// mi.js

// 1. Mostrar mensaje de bienvenida al cargar la página
window.onload = function() {
    alert("Bienvenido a DRY‑ON | Impermeabilizante ecológico");
};

// 2. Carrusel simple: cambiar imágenes cada 3 segundos
let index = 0;
function cambiarImagenes() {
    const slides = document.querySelectorAll(".slides img");
    slides.forEach(img => img.style.display = "none"); // ocultar todas
    index++;
    if (index > slides.length) { index = 1; }
    slides[index - 1].style.display = "block"; // mostrar la actual
}
setInterval(cambiarImagenes, 3000); // cada 3 segundos

// 3. Botón de WhatsApp con confirmación
document.querySelector(".boton").addEventListener("click", function(event) {
    let confirmar = confirm("¿Quieres abrir WhatsApp para contactar a DRY‑ON?");
    if (!confirmar) {
        event.preventDefault(); // cancela si el usuario dice que no
    }
});

// 4. Mostrar fecha y hora actual en el footer
function mostrarFechaHora() {
    const footer = document.querySelector("footer");
    let fecha = new Date().toLocaleString();
    let p = document.createElement("p");
    p.textContent = "Fecha y hora de visita: " + fecha;
    footer.appendChild(p);
}
mostrarFechaHora();

// 5. Interacción con el proceso: resaltar pasos al pasar el mouse
const pasos = document.querySelectorAll(".proceso li");
pasos.forEach(paso => {
    paso.onmouseover = function() {
        paso.style.backgroundColor = "#e0f7fa";
    };
    paso.onmouseout = function() {
        paso.style.backgroundColor = "transparent";
    };
});

