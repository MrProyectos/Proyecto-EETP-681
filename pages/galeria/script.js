document.addEventListener("DOMContentLoaded", () => {
  const imagenes = {
    Construccion: [
      "assets/img/Construccion/cont1.JPG",
      "assets/img/Construccion/cont2.JPG",
      "assets/img/Construccion/cont3.JPG",
      "assets/img/Construccion/cont4.JPG",
      "assets/img/Construccion/cont5.JPG",
      "assets/img/Construccion/cont6.JPG",
      "assets/img/Construccion/cont7.JPG",
      "assets/img/Construccion/cont8.JPG",
      "assets/img/Construccion/cont9.JPG",
    ],
    Campamentos: [
      "assets/img/Campamentos/camp1.jpg",
      "assets/img/Campamentos/camp2.jpg",
      "assets/img/Campamentos/camp3.jpg",
      "assets/img/Campamentos/camp4.jpg",
      "assets/img/Campamentos/camp5.jpg"
    ],
    Bicicleteadas: [
      "assets/img/Bicicleteadas/bici1.JPEG",
      "assets/img/Bicicleteadas/bici2.JPEG",
      "assets/img/Bicicleteadas/bici3.JPEG",
      "assets/img/Bicicleteadas/bici4.JPEG",
      "assets/img/Bicicleteadas/bici5.JPG",
      "assets/img/Bicicleteadas/bici6.JPG",
      "assets/img/Bicicleteadas/bici7.JPG",
      "assets/img/Bicicleteadas/bici8.JPG",
      "assets/img/Bicicleteadas/bici9.JPG",
      "assets/img/Bicicleteadas/bici10.JPG",
      "assets/img/Bicicleteadas/bici11.JPG"
    ],
    Escuela:[
      "assets/img/Escuela/esca1.JPG",
      "assets/img/Escuela/esca2.JPG",
      "assets/img/Escuela/esca3.jpeg",
      "assets/img/Escuela/esca4.jpeg",
      "assets/img/Escuela/esca5.jpeg",
      "assets/img/Escuela/esca6.jpeg",
      "assets/img/Escuela/esca7.jpeg"
    ],
    Estudiantinas:[
      "assets/img/Estudiantinas/priv1.JPEG",
      "assets/img/Estudiantinas/priv2.JPEG",
      "assets/img/Estudiantinas/priv3.JPEG",
      "assets/img/Estudiantinas/priv4.JPEG",
      "assets/img/Estudiantinas/priv5.JPEG",
      "assets/img/Estudiantinas/priv6.jpg",
      "assets/img/Estudiantinas/priv7.jpg",
      "assets/img/Estudiantinas/priv8.jpg",
      "assets/img/Estudiantinas/priv9.jpg",
      "assets/img/Estudiantinas/priv10.jpg",
      "assets/img/Estudiantinas/priv11.JPG",
      "assets/img/Estudiantinas/priv12.jpeg",
      "assets/img/Estudiantinas/priv13.jpeg",
      "assets/img/Estudiantinas/priv14.jpeg",
      "assets/img/Estudiantinas/priv14.JPG"
    ],
    Expotec:[
      "assets/img/Expotec/peñt1.jpg",
      "assets/img/Expotec/peñt2.jpg",
      "assets/img/Expotec/peñt3.jpg",
      "assets/img/Expotec/peñt4.jpg",
      "assets/img/Expotec/peñt5.jpg",
      "assets/img/Expotec/peñt6.jpg",
      "assets/img/Expotec/peñt7.jpg",
      "assets/img/Expotec/peñt8.jpg",
      "assets/img/Expotec/peñt9.jpg"
    ],
    Inauguracion:[
      "assets/img/Inauguracion/inag1.JPG",
      "assets/img/Inauguracion/inag2.JPG",
      "assets/img/Inauguracion/inag3.JPG",
      "assets/img/Inauguracion/inag4.JPG",
      "assets/img/Inauguracion/inag5.JPG",
      "assets/img/Inauguracion/inag6.jpg",
      "assets/img/Inauguracion/inag7.jpg",
      "assets/img/Inauguracion/inag8.jpg",
      "assets/img/Inauguracion/inag9.JPG",
    ],
    MaratonLectura:[
      "assets/img/MaratonLectura/lect1.jpeg",
      "assets/img/MaratonLectura/lect2.jpeg",
      "assets/img/MaratonLectura/lect3.jpeg",
      "assets/img/MaratonLectura/lect4.jpeg",
      "assets/img/MaratonLectura/lect5.jpeg",
      "assets/img/MaratonLectura/lect6.jpeg",
      "assets/img/MaratonLectura/lect7.jpeg"
    ],
    Santafejuega: [
      "assets/img/Santafejuega/Sjuega1.JPG",
      "assets/img/Santafejuega/Sjuega2.JPG",
      "assets/img/Santafejuega/Sjuega3.JPG",
      "assets/img/Santafejuega/Sjuega4.JPG",
      "assets/img/Santafejuega/Sjuega5.JPG",
      "assets/img/Santafejuega/Sjuega6.JPG",
      "assets/img/Santafejuega/Sjuega7.JPG",
      "assets/img/Santafejuega/Sjuega8.JPG",
      "assets/img/Santafejuega/Sjuega9.JPG",
      "assets/img/Santafejuega/Sjuega10.JPG",
      "assets/img/Santafejuega/Sjuega11.JPG",
      "assets/img/Santafejuega/Sjuega12.JPG",
      "assets/img/Santafejuega/Sjuega13.jpeg",
      "assets/img/Santafejuega/Sjuega14.JPG"
    ],
    Tecnomate: [
      "assets/img/Tecnomate/tecm1.1.jpg",
      "assets/img/Tecnomate/tecm2.jpg",
      "assets/img/Tecnomate/tecm3.jpg",
      "assets/img/Tecnomate/tecm4.jpg",
      "assets/img/Tecnomate/tecm5.jpg",
      "assets/img/Tecnomate/tecm6.jpg",
      "assets/img/Tecnomate/tecm7.jpg",
      "assets/img/Tecnomate/tecm8.jpg",
      "assets/img/Tecnomate/tecm9.jpg",
      "assets/img/Tecnomate/tecm10.jpg",
      "assets/img/Tecnomate/tecm11.jpg",
      "assets/img/Tecnomate/tecm12.jpg",
      "assets/img/Tecnomate/tecm13.jpg",
      "assets/img/Tecnomate/tecm14.jpg"
    ],
    
    ViajeCordoba: [
      "assets/img/ViajeCordoba/cord1.JPG",
      "assets/img/ViajeCordoba/cord2.JPG",
      "assets/img/ViajeCordoba/cord3.JPG",
      "assets/img/ViajeCordoba/cord4.JPG",
      "assets/img/ViajeCordoba/cord5.JPG",
      "assets/img/ViajeCordoba/cord6.JPG",
      "assets/img/ViajeCordoba/cord7.JPG",
      "assets/img/ViajeCordoba/cord8.JPG",
      "assets/img/ViajeCordoba/cord9.JPG",
      "assets/img/ViajeCordoba/cord10.JPG",
      "assets/img/ViajeCordoba/cord11.JPG",
      "assets/img/ViajeCordoba/cord12.JPG",
      "assets/img/ViajeCordoba/cord13.JPG"
    ],
    ViajeMendoza: [
      "assets/img/ViajeMendoza/mend1.jpg",
      "assets/img/ViajeMendoza/mend2.jpg",
      "assets/img/ViajeMendoza/mend3.jpg",
      "assets/img/ViajeMendoza/mend4.jpg",
      "assets/img/ViajeMendoza/mend5.jpg",
      "assets/img/ViajeMendoza/mend6.jpeg",
      "assets/img/ViajeMendoza/mend7.JPG",
      "assets/img/ViajeMendoza/mend8.jpg",
      "assets/img/ViajeMendoza/mend9.JPG",
      "assets/img/ViajeMendoza/mend10.JPG",
      "assets/img/ViajeMendoza/mend11.JPG",
      "assets/img/ViajeMendoza/mend12.JPG",
      "assets/img/ViajeMendoza/mend13.JPG",
      "assets/img/ViajeMendoza/mend14.JPG",
      "assets/img/ViajeMendoza/mend15.JPG",
      "assets/img/ViajeMendoza/mend17.jpeg",
      "assets/img/ViajeMendoza/mend19.jpeg",
      "assets/img/ViajeMendoza/mend20.jpeg",
      "assets/img/ViajeMendoza/mend21.jpeg",
      "assets/img/ViajeMendoza/mend22.jpeg",
      "assets/img/ViajeMendoza/mend23.jpeg",
      "assets/img/ViajeMendoza/mend24.jpeg",
      "assets/img/ViajeMendoza/mend25.jpeg",
      "assets/img/ViajeMendoza/mend26.jpeg",
      "assets/img/ViajeMendoza/mend27.jpeg",
      "assets/img/ViajeMendoza/mend28.jpg",
      "assets/img/ViajeMendoza/mend29.jpg",
      "assets/img/ViajeMendoza/mend30.jpg",
    ]
  };

  const modal = document.getElementById("modal");
  const imgGrande = document.getElementById("img-grande");
  const cerrar = modal.querySelector(".cerrar");
  const prev = modal.querySelector(".prev");
  const next = modal.querySelector(".next");
  const accesos = document.querySelectorAll(".acceso");

  let carpetaActual = null;
  let indexActual = 0;

  accesos.forEach((acceso) => {
    acceso.addEventListener("click", () => {
      const folder = acceso.dataset.folder;
      if (!imagenes[folder]) return;

      carpetaActual = folder;
      indexActual = 0;
      mostrarImagen();
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
    });
  });

  function mostrarImagen() {
    const arr = imagenes[carpetaActual];
    if (!arr || !arr.length) return;
    imgGrande.src = arr[indexActual];
    imgGrande.alt = `${carpetaActual} - ${indexActual + 1}/${arr.length}`;
  }

  function prevImg() {
    const arr = imagenes[carpetaActual];
    indexActual = (indexActual - 1 + arr.length) % arr.length;
    mostrarImagen();
  }

  function nextImg() {
    const arr = imagenes[carpetaActual];
    indexActual = (indexActual + 1) % arr.length;
    mostrarImagen();
  }

  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    carpetaActual = null;
  }

  cerrar.addEventListener("click", closeModal);
  prev.addEventListener("click", prevImg);
  next.addEventListener("click", nextImg);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("open")) return;
    if (e.key === "ArrowLeft") prevImg();
    else if (e.key === "ArrowRight") nextImg();
    else if (e.key === "Escape") closeModal();
  });

  imgGrande.addEventListener("error", () => {
    imgGrande.alt = "Error cargando imagen";
  });
});
