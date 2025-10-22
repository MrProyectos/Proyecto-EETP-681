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

// Seleccionamos todas las imágenes dentro de .caja-imagen
const imagenes = document.querySelectorAll(".caja-imagen img");
const visor = document.getElementById("visor");
const imagenAmpliada = document.getElementById("imagenAmpliada");
const cerrar = document.getElementById("cerrar");

// Mostrar imagen ampliada al hacer click
imagenes.forEach((img) => {
  img.addEventListener("click", () => {
    visor.style.display = "flex";
    imagenAmpliada.src = img.src;
  });
});

// Cerrar con la X
cerrar.addEventListener("click", () => {
  visor.style.display = "none";
});

// Cerrar clickeando fuera de la imagen
visor.addEventListener("click", (e) => {
  if (e.target !== imagenAmpliada) {
    visor.style.display = "none";
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
