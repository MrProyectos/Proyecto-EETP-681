document.addEventListener("DOMContentLoaded", function () {
  // Toggle menú hamburguesa
  const toggle = document.getElementById("menu-toggle");
  const nav = document.querySelector(".menu-nav");

  if (toggle) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("active");
      toggle.classList.toggle("open");
    });
  }

  // Auto-ajustar altura del textarea (si existe en la página)
  const textarea = document.getElementById("mensaje");
  if (textarea) {
    textarea.addEventListener("input", function () {
      this.style.height = "auto";
      this.style.height = this.scrollHeight + "px";
    });
  }

  // Validación básica del formulario (si existe)
  const form = document.querySelector(".formulario");
  if (form) {
    form.addEventListener("submit", function (e) {
      const nombre = document.getElementById("nombre").value.trim();
      const email = document.getElementById("email").value.trim();
      const mensaje = document.getElementById("mensaje").value.trim();

      if (!nombre || !email || !mensaje) {
        e.preventDefault();
        alert("Por favor, completa todos los campos obligatorios.");
      }
    });
  }
});
