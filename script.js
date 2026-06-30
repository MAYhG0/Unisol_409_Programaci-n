// Animación de entrada del menú
document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.transform = "translateX(-100%)";
  setTimeout(() => {
    sidebar.style.transform = "translateX(0)";
  }, 300);

  // Interacción: resaltar sección activa
  const links = document.querySelectorAll(".sidebar a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      links.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });
});
