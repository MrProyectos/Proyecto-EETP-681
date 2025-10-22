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

// Obtener elementos
const modal = document.getElementById("modalInscripcion");
const closeBtn = document.querySelector(".close");

// Función para abrir el modal
function abrirModalInscripcion() {
  modal.style.display = "flex";
}

// Cerrar cuando se hace click en la X
closeBtn.onclick = function () {
  modal.style.display = "none";
};

// Cerrar cuando se hace click fuera del contenido
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Botón volver arriba con animación
const btnVolverArriba = document.getElementById("btnVolverArriba");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btnVolverArriba.classList.add("mostrar");
  } else {
    btnVolverArriba.classList.remove("mostrar");
  }
});

btnVolverArriba.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
