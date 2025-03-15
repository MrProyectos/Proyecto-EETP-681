document.addEventListener('DOMContentLoaded', function () {
  const overlay = document.getElementById('overlay');
  const overlayContent = document.getElementById('overlay-content');
  const clickableImages = document.querySelectorAll('.clickable-img');

  clickableImages.forEach(img => {
      img.addEventListener('click', function () {
          // Extraer la URL de la imagen
          const backgroundImage = window.getComputedStyle(this).backgroundImage;
          const src = backgroundImage.match(/url\(["']?([^"']+)["']?\)/)[1];
          
          const imagePath = src.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
          const fullPath = `imagenes/${imagePath.split('/').pop()}`; // Ajusta si la estructura es diferente
          
          // Verifica la URL en la consola (opcional)
          console.log(fullPath);

          // Mostrar la imagen en el overlay
          overlayContent.innerHTML = `<img src="${fullPath}" alt="Imagen agrandada">`;
          overlay.style.display = 'flex';
      });
  });

  overlay.addEventListener('click', function () {
      overlay.style.display = 'none';
      overlayContent.innerHTML = '';
  });
});

var regresar = $("#irArriba");
    $(window).scroll(function () {
        if ($(window).scrollTop() > 400){
            regresar.addClass("visible");
        }else{
            regresar.removeClass("visible");
        }
    });
    regresar.on("click", function(evento) {
        evento.preventDefault();
        $("html, body").animate({scrollTop: 0}, 500);

    })
