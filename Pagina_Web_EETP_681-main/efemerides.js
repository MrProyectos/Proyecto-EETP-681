document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.toggle-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Ocultar todos los contenidos
            document.querySelectorAll('.content').forEach(content => {
                content.style.display = 'none';
            });

            // Mostrar el contenido correspondiente
            const targetId = button.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);
            
            if (targetContent.style.display === 'block') {
                targetContent.style.display = 'none';
            } else {
                targetContent.style.display = 'block';
            }
        });
    });
});

// Selecciona el botón por su ID
const button = document.getElementById('confettiButton');

// Añade un evento al botón para lanzar confeti al hacer clic
button.addEventListener('click', () => {
    // Lanza confeti usando la librería canvas-confetti
    confetti({
        particleCount: 1500,
        spread: 360,
        origin: { y: 0.4 }
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
