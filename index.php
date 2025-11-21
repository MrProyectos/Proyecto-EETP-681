<?php
// Leer avisos del archivo JSON
$avisosData = json_decode(file_get_contents("avisos.json"), true);
$avisos = $avisosData["avisos"];

$aviso = null;
$hoy = date("Y-m-d");

// Buscar el primer aviso activo y no expirado
foreach ($avisos as $a) {
    if ($a["activo"] == 1 && ($a["fecha_expiracion"] === null || $a["fecha_expiracion"] >= $hoy)) {
        $aviso = $a;
        break;
    }
}
?>

<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles.css" />
    <link rel="stylesheet" href="header.css" />
    <link rel="stylesheet" href="footer.css" />
    <title>MENÚ | ESCUELA N°681</title>
    <link rel="apple-touch-icon" sizes="180x180" href="assets/favicon/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="assets/favicon/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="assets/favicon/favicon-16x16.png" />
    <link rel="manifest" href="assets/favicon/site.webmanifest" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
  </head>

  <body>
    <!-- HEADER -->
    <header>
      <!-- LOGO -->
      <a href="index.html"><img src="assets/img/logo-escuela.png" alt="Logo E.E.T.P. N° 681" /></a>
      <!-- NAV -->
      <nav class="menu-nav">
        <ul>
          <!-- MENÚ PRINCIPAL -->
          <li class="nav-1st">
            <a>Menú Principal</a>
            <ul>
              <li><a href="pages/historia/historia.html">Historia</a></li>
              <li><a href="pages/efemerides/efemerides.html">Efemérides</a></li>
            </ul>
          </li>

          <!-- FOTOS -->
          <li class="nav-1st">
            <a>Fotos</a>
            <ul>
              <li><a href="pages/galeria/galeria.html">Galería</a></li>
              <li><a href="pages/egresados/egresados.html">Egresados</a></li>
            </ul>
          </li>

          <!-- ALUMNOS -->
          <li class="nav-1st">
            <a>Alumnos</a>
            <ul>
              <li><a href="pages/materias/materias.html">Materias</a></li>
              <li><a href="pages/horarios/horarios.html">Horarios</a></li>
              <li>
                <a href="pages/reglamento/reglamento.html">Reglamento Institucional</a>
              </li>
            </ul>
          </li>

          <!-- PROFESORES -->
          <li class="nav-1st">
            <a>Profesores</a>
            <ul>
              <li>
                <a
                  href="https://www.santafe.gob.ar/gestioneducativa/#/sso/login?s=85627615&t=v32k6cen4yab0vvpbgn6fkz0umtzlljyfh07iuh4jr4qma"
                  target="_blank"
                  >Mi Legajo</a
                >
              </li>
              <li>
                <a href="https://eetp681v2.plataformainformes.com.ar/login.php" target="_blank">Plataforma Educativa</a>
              </li>
            </ul>
          </li>

          <!-- CONTACTO -->
          <li class="nav-1st">
            <a>Contacto</a>
            <ul>
              <li>
                <a href="#" onclick="abrirModalInscripcion()">Inscripciones</a>
              </li>
              <li>
                <a href="pages/centro/centro.html">Centro de Estudiantes</a>
              </li>
              <li><a href="pages/contacto/contacto.html">Contactanos</a></li>
            </ul>
          </li>
        </ul>
      </nav>

      <!-- Botón Hamburguesa -->
      <div class="menu-toggle" id="menu-toggle">☰</div>
    </header>

    <!-- BODY -->

    <div class="div"></div>
    <!-- SECCION PRESENTACIÓN -->
    <section class="presentacion">
      <div class="name-box">
        <h1>E.E.T.P. N° 681</h1>
        <h2>"Mercedes Álvarez de Segura"</h2>
      </div>
    </section>

    <!-- SECCION INICIOS -->
    <section class="txt">
      <div>
        <h3>NUESTROS INICIOS</h3>
        <p>
          Comenzamos con nuestra escuela cuando Beck y Herzog, fundadores de la localidad destinan solares de tierra
          para la Escuela Humboldt. Es cuando se conforma la Comisión Escolar que administra esas parcelas. Una de las
          actividades que inicia es sostener la enseñanza primaria, cubriendo los honorarios docentes. En septiembre del
          1929 la Comisión cursa nota al Consejo de Educación de la provincia, solicitando la creación de una Escuela
          del Hogar, agrícola u otra semejante. No resuelto nada al efecto oficial, se continúa dictando el curso de
          Corte. En 1940 el Dr. Rafael Vega Milessi, se interesa y cambia ideas con dicha Comisión Escolar, referente a
          la instalación de la “Escuela Mixta de Oficios y del Hogar”; la comisión proveería de un edificio equipado
          para la instalación de la Escuela, Sección Mecánica Eléctrica y la del Hogar para niñas en el taller de Corte.
          El 19 de abril de 1941 es oficializada la “Escuela del Hogar”, posteriormente pasa a ser el 10 de junio del
          mismo año “Escuela de Oficios y del Hogar” iniciando en esa fecha el taller de “Electro Mecánica y
          Carpintería”. Desde 1941 le sucedieron a la escuela distintas denominaciones, pasando desde “Escuela del
          Hogar” para ser en la actualidad Escuela de Educación Técnica Nº681 “Mercedes Álvarez de Segura” con dos
          modalidades: “Técnico en Informática Profesional y Personal” y “Técnico en Equipos e Instalaciones
          Electromecánicas”.
        </p>
      </div>
    </section>

    <!-- SECCION DIRECTIVOS -->

    <section id="directivos">
      <h2>Equipo Directivo</h2>
      <div class="cajas">
        <div class="directivo">
          <h3>Daniel Bertschi</h3>
          <p><strong>Cargo:</strong> Director General</p>
        </div>

        <div class="directivo">
          <h3>Hernán Canetti</h3>
          <p><strong>Cargo:</strong> Vicedirector</p>
        </div>

        <div class="directivo">
          <h3>Ivo Trod</h3>
          <p><strong>Cargo:</strong> Preceptor Mañana</p>
        </div>

        <div class="directivo">
          <h3>Federico Walter</h3>
          <p><strong>Cargo:</strong> Secretario Mañana</p>
        </div>

        <div class="directivo">
          <h3>Carolina Rodríguez</h3>
          <p><strong>Cargo:</strong> Preceptor Tarde</p>
        </div>

        <div class="directivo">
          <h3>Daniel Zimmermann</h3>
          <p><strong>Cargo:</strong> Secretario Tarde</p>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer>
      <section class="disfooter">
        <div class="logoescuelafooter">
          <img src="assets/img/logo-escuela.png" />
        </div>
        <div class="texto-footer">
          <b>EETP N°681 "MERCEDES ÁLVAREZ DE SEGURA"</b>
          <div class="lineatextofooter"></div>
          <div class="socials">
            <a href="https://maps.app.goo.gl/cJATkSFWNjpMFNmA9" target="_blank"
              ><img src="assets/img/ubicacion-icon.png" alt="LOGO UBICACION"
            /></a>
            <a href=""><img src="assets/img/telefono-icon.png" title="3496 480165" alt="LOGO TELEFONO" /></a>
            <a href="https://wa.me/5493496513482" target="_blank"
              ><img src="assets/img/whatsapp-icon.png" alt="LOGO WHATSAPP"
            /></a>
            <a href="mailto:tecnicamercedes@gmail.com" target="_blank"
              ><img src="assets/img/gmail-icon.png" alt="LOGO GMAIL"
            /></a>
            <a href="https://www.instagram.com/eetp681/" target="_blank"
              ><img src="assets/img/instagram-icon.png" alt="LOGO INSTAGRAM"
            /></a>
          </div>
        </div>
      </section>
    </footer>

    <div class="lineafondofooter">
      <p>
        © 2025 eetp681.edu.ar | Todos los derechos reservados |
        <a href="https://www.privacypolicies.com/live/ca073588-3d5d-4256-abb4-9c3293286349" target="_blank"
          >Políticas de Privacidad</a
        >
      </p>
    </div>

    <!-- Ventana emergente (Modal) -->
    <div id="modalInscripcion" class="modal">
      <div class="modal-content">
        <span class="close">&times;</span>
        <h2>Inscripción</h2>
        <p>Descargá el formulario de inscripción en PDF desde el siguiente botón:</p>

        <!-- Botón de descarga -->
        <a href="assets/pdf/Inscripcion-EETP-681.pdf" download class="btn-descargar">📄 Descargar PDF</a>

        <hr style="margin: 20px 0" />

        <!-- Botón de redirección -->
        <a href="pages/inscripciones/inscripciones.html" class="btn-redirigir">➡️ Completar inscripción online</a>
      </div>
    </div>

    <!-- Botón flotante Font Awesome -->
    <button id="btnVolverArriba" title="Volver al inicio">
      <i class="fa-solid fa-arrow-up"></i>
    </button>

    <!-- Modal de Aviso -->
    <?php if ($aviso): ?>
    <div class="modal-overlay" id="modalAviso">
        <div class="modal-box">

            <img src="assets/img/logo-escuela.png" class="modal-logo" alt="Logo">

            <div class="modal-line"></div>
            <div class="modal-line"></div>

            <h2 class="modal-title"><?= htmlspecialchars($aviso['titulo']) ?></h2>
            <p class="modal-text"><?= nl2br(htmlspecialchars($aviso['contenido'])) ?></p>

            <button class="modal-btn" onclick="document.getElementById('modalAviso').style.display='none'">
                Cerrar
            </button>

        </div>
    </div>
    <?php endif; ?>

    <script>
    window.addEventListener("load", () => {
        const modal = document.getElementById("modalAviso");
        if(modal){ modal.style.display = "flex"; }
    });
    </script>


    <script src="script.js"></script>
  </body>
</html>
