// Mostrar secciones al hacer clic en menú
document.querySelectorAll(".sidebar a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    document.querySelectorAll(".seccion").forEach(sec => sec.style.display = "none");
    target.style.display = "block";
    window.scrollTo({ top: target.offsetTop - 80, behavior: "smooth" });
  });
});

// Carrusel automático
const slides = document.querySelectorAll(".carousel .slides img");
const indicators = document.querySelector(".indicators");
let index = 0;

slides.forEach((_, i) => {
  const dot = document.createElement("span");
  if (i === 0) dot.classList.add("active");
  indicators.appendChild(dot);
});

function showSlide(i) {
  slides.forEach((slide, idx) => {
    slide.style.display = (idx === i) ? "block" : "none";
    indicators.children[idx].classList.toggle("active", idx === i);
  });
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

showSlide(index);
setInterval(nextSlide, 3000);

// Indicadores clicables
Array.from(indicators.children).forEach((dot, i) => {
  dot.addEventListener("click", () => {
    index = i;
    showSlide(index);
  });
});
