document.addEventListener("DOMContentLoaded", () => {
  // DEFINÍ ACÁ las imágenes (rutas relativas desde tu index.html)
  const imagenes = {
    folder1: [
      "img/folder1/2009.jpg",
      "img/folder1/2011.jpg",
      "img/folder1/2017.jpg",
    ],
    folder2: [
      "img/folder2/2009.jpg",
      "img/folder2/2022.jpeg",
      "img/folder2/2017.jpg",
    ],
  };

  const modal = document.getElementById("modal");
  const modalContent = modal.querySelector(".modal-content");
  const imgGrande = document.getElementById("img-grande");
  const cerrar = modal.querySelector(".cerrar");
  const prev = modal.querySelector(".prev");
  const next = modal.querySelector(".next");
  const accesos = document.querySelectorAll(".acceso");

  let carpetaActual = null;
  let indexActual = 0;

  // Abrir modal al clickear el acceso
  accesos.forEach((acceso) => {
    acceso.addEventListener("click", () => {
      const folder = acceso.dataset.folder;
      console.log("Acceso clickeado ->", folder);

      if (!imagenes[folder]) {
        console.error("No hay imágenes definidas para:", folder);
        alert(
          `No se encontraron imágenes para "${folder}". Revisá las claves en script.js y el atributo data-folder.`
        );
        return;
      }

      carpetaActual = folder;
      indexActual = 0;
      mostrarImagen();
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
    });
  });

  function mostrarImagen() {
    if (!carpetaActual) return;
    const arr = imagenes[carpetaActual];
    if (!arr || !arr.length) {
      console.error("Array vacío para", carpetaActual);
      alert("No hay imágenes en la carpeta seleccionada.");
      closeModal();
      return;
    }

    imgGrande.src = arr[indexActual];
    imgGrande.alt = `${carpetaActual} - ${indexActual + 1}/${arr.length}`;
  }

  function prevImg() {
    if (!carpetaActual) return;
    const arr = imagenes[carpetaActual];
    indexActual = (indexActual - 1 + arr.length) % arr.length;
    mostrarImagen();
  }

  function nextImg() {
    if (!carpetaActual) return;
    const arr = imagenes[carpetaActual];
    indexActual = (indexActual + 1) % arr.length;
    mostrarImagen();
  }

  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    carpetaActual = null;
  }

  // eventos
  cerrar.addEventListener("click", closeModal);
  prev.addEventListener("click", prevImg);
  next.addEventListener("click", nextImg);

  // cerrar clickeando fuera (overlay)
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  // teclado
  document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("open")) return;
    if (e.key === "ArrowLeft") prevImg();
    else if (e.key === "ArrowRight") nextImg();
    else if (e.key === "Escape") closeModal();
  });

  // debug: si falla la carga de la imagen
  imgGrande.addEventListener("error", () => {
    console.error("Error cargando imagen:", imgGrande.src);
    imgGrande.alt = "Error cargando imagen";
  });
});
