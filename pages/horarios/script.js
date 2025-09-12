const toggle = document.getElementById("menu-toggle");
const nav = document.querySelector(".menu-nav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
  toggle.classList.toggle("open");
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

const buttons = document.querySelectorAll(".tab-button");
    const contents = document.querySelectorAll(".tab-content");

    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        // desactivar todos
        buttons.forEach(b => b.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));

        // activar el clickeado
        btn.classList.add("active");
        document.getElementById(btn.dataset.tab).classList.add("active");
      });
    });