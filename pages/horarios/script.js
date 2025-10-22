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

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".tab-button");
  const contents = document.querySelectorAll(".tab-content");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tabId = btn.dataset.tab || btn.getAttribute("data-tab") || btn.id.replace("btn-", "");

      // Quitar estado activo previo
      buttons.forEach((b) => b.classList.remove("active"));
      contents.forEach((c) => {
        c.classList.remove("active");
        c.style.opacity = "0";
        c.style.transform = "translateY(10px)";
      });

      // Activar el nuevo botón
      btn.classList.add("active");

      // Buscar el contenedor correspondiente
      const target = document.getElementById(tabId);
      if (target) {
        target.classList.add("active");

        // Animación suave de entrada
        setTimeout(() => {
          target.style.opacity = "1";
          target.style.transform = "translateY(0)";
        }, 50);
      }

      // Hacer scroll hacia arriba en móvil al cambiar de curso
      if (window.innerWidth < 768) {
        window.scrollTo({
          top: document.querySelector(".horarios").offsetTop - 40,
          behavior: "smooth",
        });
      }
    });
  });

  // Activar por defecto la primera pestaña
  if (buttons.length > 0) {
    buttons[0].classList.add("active");
    if (contents[0]) contents[0].classList.add("active");
  }
});

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
