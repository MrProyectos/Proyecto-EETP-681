window.onload = function() {
    // Obtén la referencia al contenedor del popup y al body
    var popup = document.getElementById("popup-container");
    var body = document.body;

    // Mostrar la ventana emergente automáticamente al cargar la página
    popup.style.display = "block";
    body.classList.add('block-scroll');

    // Cerrar el popup al hacer clic en el overlay
    var overlay = document.getElementById("popup-overlay");
    overlay.addEventListener('click', function() {
        // Ocultar el popup y permitir el scroll nuevamente
        popup.style.display = "none";
        body.classList.remove('block-scroll');
    });
};