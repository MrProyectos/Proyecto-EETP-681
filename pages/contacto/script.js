const toggle = document.getElementById("menu-toggle");
  const nav = document.querySelector(".menu-nav");

  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
    toggle.classList.toggle("open");
  });

  document.addEventListener("DOMContentLoaded", function () {
  const textarea = document.getElementById("mensaje");

  // Auto-ajustar altura del textarea
  textarea.addEventListener("input", function () {
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";
  });

  // Validación básica antes de enviar
  const form = document.querySelector(".formulario");
  form.addEventListener("submit", function (e) {
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !email || !mensaje) {
      e.preventDefault();
      alert("Por favor, completa todos los campos obligatorios.");
    }
  });
});
