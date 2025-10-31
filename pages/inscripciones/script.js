import { PDFDocument, StandardFonts } from "https://cdn.skypack.dev/pdf-lib";

document.getElementById("inscripcionForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const url = "inscripcion.pdf"; // Ruta del PDF base
  const existingPdfBytes = await fetch(`${url}?v=${Date.now()}`).then((res) => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontSize = 9;
  const formData = new FormData(e.target);

  // ================== PÁGINA 1 ==================
  const page1 = pdfDoc.getPages()[0];

  // -------- ESTABLECIMIENTO --------
  page1.drawText(formData.get("establecimiento_nombre") || "", { x: 83, y: 728, size: fontSize, font: helvetica });
  page1.drawText(formData.get("establecimiento_numero") || "", { x: 407, y: 728, size: fontSize, font: helvetica });
  page1.drawText(formData.get("establecimiento_regionaleduc") || "", {
    x: 543,
    y: 728,
    size: fontSize,
    font: helvetica,
  });
  page1.drawText(formData.get("establecimiento_ciclolec") || "", { x: 473, y: 708, size: fontSize, font: helvetica });
  const sector = formData.get("establecimiento_sector");
  if (sector === "Estatal") page1.drawText("X", { x: 130, y: 708, size: fontSize, font: helvetica });
  if (sector === "Privado") page1.drawText("X", { x: 170, y: 708, size: fontSize, font: helvetica });
  if (sector === "Municipal") page1.drawText("X", { x: 239, y: 708, size: fontSize, font: helvetica });

  // -------- ESCUELA DE PROCEDENCIA --------
  page1.drawText(formData.get("escuela_nombre") || "", { x: 82, y: 666, size: fontSize, font: helvetica });
  page1.drawText(formData.get("escuela_numero") || "", { x: 342, y: 666, size: fontSize, font: helvetica });
  page1.drawText(formData.get("escuela_direccion") || "", { x: 435, y: 666, size: fontSize, font: helvetica });
  page1.drawText(formData.get("escuela_localidad") || "", { x: 88, y: 653, size: fontSize, font: helvetica });
  page1.drawText(formData.get("escuela_provincia") || "", { x: 320, y: 653, size: fontSize, font: helvetica });
  page1.drawText(formData.get("escuela_pais") || "", { x: 472, y: 653, size: fontSize, font: helvetica });
  const escuelaSector = formData.get("escuela_sector");
  if (escuelaSector === "Estatal") page1.drawText("X", { x: 133, y: 640, size: fontSize, font: helvetica });
  if (escuelaSector === "Privado") page1.drawText("X", { x: 186, y: 640, size: fontSize, font: helvetica });

  // -------- ALUMNO --------
  page1.drawText(formData.get("alumno_nombre") || "", { x: 158, y: 588, size: fontSize, font: helvetica });
  page1.drawText(formData.get("alumno_dni") || "", { x: 64, y: 574, size: fontSize, font: helvetica });
  page1.drawText(formData.get("alumno_fnac") || "", { x: 122, y: 548, size: fontSize, font: helvetica });
  page1.drawText(formData.get("alumno_pais") || "", { x: 332, y: 548, size: fontSize, font: helvetica });
  page1.drawText(formData.get("alumno_domicilio") || "", { x: 85, y: 522, size: fontSize, font: helvetica });
  page1.drawText(formData.get("alumno_localidad") || "", { x: 342, y: 522, size: fontSize, font: helvetica });
  page1.drawText(formData.get("alumno_tel") || "", { x: 84, y: 511, size: fontSize, font: helvetica });
  page1.drawText(formData.get("alumno_mail") || "", { x: 285, y: 511, size: fontSize, font: helvetica });
  page1.drawText(formData.get("alumno_etnia") || "", { x: 290, y: 498, size: fontSize, font: helvetica });
  if (formData.get("alumno_pueblo") === "Sí") page1.drawText("X", { x: 143, y: 498, size: fontSize, font: helvetica });
  else if (formData.get("alumno_pueblo") === "No")
    page1.drawText("X", { x: 178, y: 498, size: fontSize, font: helvetica });
  if (formData.get("alumno_nacionalidad") === "Argentino Nativo")
    page1.drawText("X", { x: 158, y: 536, size: fontSize, font: helvetica });
  else if (formData.get("alumno_nacionalidad") === "Argentino Naturalizado")
    page1.drawText("X", { x: 250, y: 536, size: fontSize, font: helvetica });
  else if (formData.get("alumno_nacionalidad") === "Argentino por opcion")
    page1.drawText("X", { x: 336, y: 536, size: fontSize, font: helvetica });
  else if (formData.get("alumno_nacionalidad") === "Extranjero")
    page1.drawText("X", { x: 388, y: 536, size: fontSize, font: helvetica });

  // -------- SITUACIÓN SOCIAL --------
  if (formData.get("asignacion") === "Sí") page1.drawText("X", { x: 145, y: 438, size: fontSize, font: helvetica });
  else if (formData.get("asignacion") === "No")
    page1.drawText("X", { x: 178, y: 438, size: fontSize, font: helvetica });
  if (formData.get("discapacidad") === "Sí") page1.drawText("X", { x: 349, y: 458, size: fontSize, font: helvetica });
  else if (formData.get("discapacidad") === "No")
    page1.drawText("X", { x: 385, y: 458, size: fontSize, font: helvetica });
  page1.drawText(formData.get("discapacidad_detalle") || "", { x: 272, y: 445, size: fontSize, font: helvetica });

  // -------- ESCUELA ESPECIAL --------
  if (formData.get("escuela_especial") === "Sí")
    page1.drawText("X", { x: 395, y: 433, size: fontSize, font: helvetica });
  else if (formData.get("escuela_especial") === "No")
    page1.drawText("X", { x: 430, y: 433, size: fontSize, font: helvetica });
  page1.drawText(formData.get("escuela_especial_detalle") || "", { x: 274, y: 420, size: fontSize, font: helvetica });

  // -------- GRUPO FAMILIAR --------
  page1.drawText(formData.get("grupo_familiar") || "", { x: 46, y: 363, size: fontSize, font: helvetica });
  page1.drawText(formData.get("hermano1_nombre") || "", { x: 359, y: 366, size: fontSize, font: helvetica });
  page1.drawText(formData.get("hermano1_curso") || "", { x: 678, y: 366, size: fontSize, font: helvetica });
  page1.drawText(formData.get("hermano2_nombre") || "", { x: 359, y: 352, size: fontSize, font: helvetica });
  page1.drawText(formData.get("hermano2_curso") || "", { x: 678, y: 352, size: fontSize, font: helvetica });
  page1.drawText(formData.get("hermano3_nombre") || "", { x: 359, y: 335, size: fontSize, font: helvetica });
  page1.drawText(formData.get("hermano3_curso") || "", { x: 678, y: 335, size: fontSize, font: helvetica });

  // -------- OTROS DATOS --------
  if (formData.get("restriccion") === "Sí") page1.drawText("X", { x: 99, y: 280, size: fontSize, font: helvetica });
  else if (formData.get("restriccion") === "No")
    page1.drawText("X", { x: 135, y: 280, size: fontSize, font: helvetica });
  page1.drawText(formData.get("restriccion_apellido") || "", { x: 354, y: 300, size: fontSize, font: helvetica });
  page1.drawText(formData.get("restriccion_nombre") || "", { x: 354, y: 280, size: fontSize, font: helvetica });
  page1.drawText(formData.get("restriccion_dni") || "", { x: 346, y: 262, size: fontSize, font: helvetica });
  if (formData.get("adjunta_doc") === "Sí") page1.drawText("X", { x: 249, y: 261, size: fontSize, font: helvetica });
  else if (formData.get("adjunta_doc") === "No")
    page1.drawText("X", { x: 284, y: 261, size: fontSize, font: helvetica });

  // -------- PERSONAS AUTORIZADAS --------
  page1.drawText(formData.get("autorizado1_apellido") || "", { x: 83, y: 219, size: fontSize, font: helvetica });
  page1.drawText(formData.get("autorizado1_nombre") || "", { x: 83, y: 199, size: fontSize, font: helvetica });
  page1.drawText(formData.get("autorizado1_dni") || "", { x: 73, y: 181, size: fontSize, font: helvetica });
  page1.drawText(formData.get("autorizado2_apellido") || "", { x: 354, y: 218, size: fontSize, font: helvetica });
  page1.drawText(formData.get("autorizado2_nombre") || "", { x: 354, y: 199, size: fontSize, font: helvetica });
  page1.drawText(formData.get("autorizado2_dni") || "", { x: 346, y: 180, size: fontSize, font: helvetica });

  // -------- ACTIVIDADES --------
  const deporte = formData.get("deporte");
  if (deporte === "Federado") page1.drawText("X", { x: 136, y: 138, size: fontSize, font: helvetica });
  else if (deporte === "No Federado") page1.drawText("X", { x: 208, y: 138, size: fontSize, font: helvetica });
  page1.drawText(formData.get("deporte_cual") || "", { x: 92, y: 125, size: fontSize, font: helvetica });

  if (formData.get("musica") === "Sí") page1.drawText("X", { x: 94, y: 112, size: fontSize, font: helvetica });
  else if (formData.get("musica") === "No") page1.drawText("X", { x: 130, y: 112, size: fontSize, font: helvetica });
  page1.drawText(formData.get("musica_cual") || "", { x: 92, y: 100, size: fontSize, font: helvetica });

  if (formData.get("teatro") === "Sí") page1.drawText("X", { x: 92, y: 87, size: fontSize, font: helvetica });
  else if (formData.get("teatro") === "No") page1.drawText("X", { x: 127, y: 87, size: fontSize, font: helvetica });

  if (formData.get("idioma") === "Sí") page1.drawText("X", { x: 92, y: 75, size: fontSize, font: helvetica });
  else if (formData.get("idioma") === "No") page1.drawText("X", { x: 129, y: 75, size: fontSize, font: helvetica });
  page1.drawText(formData.get("idioma_cual") || "", { x: 190, y: 75, size: fontSize, font: helvetica });
  page1.drawText(formData.get("otras_actividades") || "", { x: 318, y: 121, size: fontSize, font: helvetica });

  // ================== PÁGINA 2: MADRE  ================== //
  const page2 = pdfDoc.getPages()[1];

  page2.drawText(formData.get("madre_apellido") || "", { x: 88, y: 736, size: fontSize, font: helvetica });
  page2.drawText(formData.get("madre_nombre") || "", { x: 44, y: 723, size: fontSize, font: helvetica });
  page2.drawText(formData.get("madre_doc_tipo") || "", { x: 100, y: 711, size: fontSize, font: helvetica });
  page2.drawText(formData.get("madre_dni") || "", { x: 172, y: 711, size: fontSize, font: helvetica });

  if (formData.get("madre_doc") === "tramite") page2.drawText("X", { x: 418, y: 709, size: fontSize, font: helvetica });
  else if (formData.get("madre_doc") === "no tiene")
    page2.drawText("X", { x: 478, y: 709, size: fontSize, font: helvetica });

  if (formData.get("madre_vive") === "Si") page2.drawText("X", { x: 88, y: 697, size: fontSize, font: helvetica });
  else if (formData.get("madre_vive") === "No")
    page2.drawText("X", { x: 115, y: 697, size: fontSize, font: helvetica });

  page2.drawText(formData.get("madre_fallecimiento") || "", { x: 230, y: 697, size: fontSize, font: helvetica });
  page2.drawText(formData.get("madre_localidad") || "", { x: 179, y: 678, size: fontSize, font: helvetica });
  page2.drawText(formData.get("madre_nacimiento") || "", { x: 500, y: 678, size: fontSize, font: helvetica });
  page2.drawText(formData.get("madre_nacionalidad") || "", { x: 102, y: 666, size: fontSize, font: helvetica });
  page2.drawText(formData.get("madre_estado_civil") || "", { x: 345, y: 666, size: fontSize, font: helvetica });

  if (formData.get("madre_pueblo") === "Sí") page2.drawText("X", { x: 130, y: 652, size: fontSize, font: helvetica });
  else if (formData.get("madre_pueblo") === "No")
    page2.drawText("X", { x: 162, y: 652, size: fontSize, font: helvetica });
  page2.drawText(formData.get("madre_etnia") || "", { x: 194, y: 653, size: fontSize, font: helvetica });

  if (formData.get("madre_asistio_establecimiento") === "Sí")
    page2.drawText("X", { x: 508, y: 652, size: fontSize, font: helvetica });
  else if (formData.get("madre_asistio_establecimiento") === "No")
    page2.drawText("X", { x: 540, y: 652, size: fontSize, font: helvetica });

  if (formData.get("madre_nivel") === "Primario")
    page2.drawText("X", { x: 150, y: 640, size: fontSize, font: helvetica });
  else if (formData.get("madre_nivel") === "Secundario")
    page2.drawText("X", { x: 204, y: 640, size: fontSize, font: helvetica });
  else if (formData.get("madre_nivel") === "Terciario")
    page2.drawText("X", { x: 268, y: 640, size: fontSize, font: helvetica });
  else if (formData.get("madre_nivel") === "Universitario")
    page2.drawText("X", { x: 309, y: 640, size: fontSize, font: helvetica });

  if (formData.get("madre_completo") === "Si") page2.drawText("X", { x: 515, y: 640, size: fontSize, font: helvetica });
  else if (formData.get("madre_completo") === "No")
    page2.drawText("X", { x: 545, y: 640, size: fontSize, font: helvetica });

  page2.drawText(formData.get("madre_domicilio") || "", { x: 84, y: 628, size: fontSize, font: helvetica });
  page2.drawText(formData.get("madre_localidad2") || "", { x: 492, y: 628, size: fontSize, font: helvetica });
  page2.drawText(formData.get("madre_tel") || "", { x: 98, y: 615, size: fontSize, font: helvetica });
  page2.drawText(formData.get("madre_cel") || "", { x: 297, y: 615, size: fontSize, font: helvetica });
  page2.drawText(formData.get("madre_mail") || "", { x: 448, y: 615, size: fontSize, font: helvetica });

  if (formData.get("madre_jefe") === "Si") page2.drawText("X", { x: 139, y: 601, size: fontSize, font: helvetica });
  else if (formData.get("madre_jefe") === "No")
    page2.drawText("X", { x: 169, y: 601, size: fontSize, font: helvetica });

  page2.drawText(formData.get("madre_ocupacion") || "", { x: 338, y: 601, size: fontSize, font: helvetica });
  page2.drawText(formData.get("madre_lugarocup") || "", { x: 84, y: 590, size: fontSize, font: helvetica });

  page2.drawText(formData.get("madre_telefono") || "", { x: 396, y: 590, size: fontSize, font: helvetica });

  if (formData.get("madre_actividad") === "1") page2.drawText("X", { x: 142, y: 576, size: fontSize, font: helvetica });
  else if (formData.get("madre_actividad") === "2")
    page2.drawText("X", { x: 201, y: 576, size: fontSize, font: helvetica });
  else if (formData.get("madre_actividad") === "3")
    page2.drawText("X", { x: 298, y: 576, size: fontSize, font: helvetica });
  else if (formData.get("madre_actividad") === "4")
    page2.drawText("X", { x: 430, y: 576, size: fontSize, font: helvetica });
  else if (formData.get("madre_actividad") === "5")
    page2.drawText("X", { x: 45, y: 564, size: fontSize, font: helvetica });
  else if (formData.get("madre_actividad") === "6")
    page2.drawText("X", { x: 104, y: 564, size: fontSize, font: helvetica });
  else if (formData.get("madre_actividad") === "7")
    page2.drawText("X", { x: 200, y: 564, size: fontSize, font: helvetica });
  else if (formData.get("madre_actividad") === "8")
    page2.drawText("X", { x: 360, y: 564, size: fontSize, font: helvetica });
  else if (formData.get("madre_actividad") === "9")
    page2.drawText("X", { x: 449, y: 564, size: fontSize, font: helvetica });

  // ================== PÁGINA 2: PADRE  ================== //

  page2.drawText(formData.get("padre_apellido") || "", { x: 88, y: 509, size: fontSize, font: helvetica });
  page2.drawText(formData.get("padre_nombre") || "", { x: 308, y: 509, size: fontSize, font: helvetica });
  page2.drawText(formData.get("padre_doc_tipo") || "", { x: 98, y: 490, size: fontSize, font: helvetica });
  page2.drawText(formData.get("padre_dni") || "", { x: 170, y: 490, size: fontSize, font: helvetica });

  if (formData.get("padre_doc") === "tramite") page2.drawText("X", { x: 418, y: 490, size: fontSize, font: helvetica });
  else if (formData.get("padre_doc") === "no tiene")
    page2.drawText("X", { x: 479, y: 490, size: fontSize, font: helvetica });

  if (formData.get("padre_vive") === "Si") page2.drawText("X", { x: 89, y: 473, size: fontSize, font: helvetica });
  else if (formData.get("padre_vive") === "No")
    page2.drawText("X", { x: 115, y: 473, size: fontSize, font: helvetica });

  page2.drawText(formData.get("padre_fallecimiento") || "", { x: 230, y: 473, size: fontSize, font: helvetica });
  page2.drawText(formData.get("padre_localidad") || "", { x: 178, y: 445, size: fontSize, font: helvetica });
  page2.drawText(formData.get("padre_nacimiento") || "", { x: 498, y: 445, size: fontSize, font: helvetica });
  page2.drawText(formData.get("padre_nacionalidad") || "", { x: 102, y: 426, size: fontSize, font: helvetica });
  page2.drawText(formData.get("padre_estado_civil") || "", { x: 346, y: 426, size: fontSize, font: helvetica });

  if (formData.get("padre_pueblo") === "Si") page2.drawText("X", { x: 130, y: 409, size: fontSize, font: helvetica });
  else if (formData.get("padre_pueblo") === "No")
    page2.drawText("X", { x: 160, y: 409, size: fontSize, font: helvetica });
  page2.drawText(formData.get("padre_etnia") || "", { x: 194, y: 409, size: fontSize, font: helvetica });

  if (formData.get("padre_asistio_establecimiento") === "Si")
    page2.drawText("X", { x: 507, y: 409, size: fontSize, font: helvetica });
  else if (formData.get("padre_asistio_establecimiento") === "No")
    page2.drawText("X", { x: 538, y: 409, size: fontSize, font: helvetica });

  if (formData.get("padre_nivel") === "Primario")
    page2.drawText("X", { x: 149, y: 389, size: fontSize, font: helvetica });
  else if (formData.get("padre_nivel") === "Secundario")
    page2.drawText("X", { x: 202, y: 389, size: fontSize, font: helvetica });
  else if (formData.get("padre_nivel") === "Terciario")
    page2.drawText("X", { x: 265, y: 389, size: fontSize, font: helvetica });
  else if (formData.get("padre_nivel") === "Universitario")
    page2.drawText("X", { x: 306, y: 389, size: fontSize, font: helvetica });

  if (formData.get("padre_completo") === "Si") page2.drawText("X", { x: 514, y: 389, size: fontSize, font: helvetica });
  else if (formData.get("padre_completo") === "No")
    page2.drawText("X", { x: 544, y: 389, size: fontSize, font: helvetica });

  page2.drawText(formData.get("padre_domicilio") || "", { x: 86, y: 368, size: fontSize, font: helvetica });
  page2.drawText(formData.get("padre_localidad2") || "", { x: 492, y: 368, size: fontSize, font: helvetica });
  page2.drawText(formData.get("padre_tel") || "", { x: 100, y: 350, size: fontSize, font: helvetica });
  page2.drawText(formData.get("padre_cel") || "", { x: 297, y: 350, size: fontSize, font: helvetica });
  page2.drawText(formData.get("padre_mail") || "", { x: 447, y: 350, size: fontSize, font: helvetica });

  if (formData.get("padre_jefe") === "Si") page2.drawText("X", { x: 138, y: 332, size: fontSize, font: helvetica });
  else if (formData.get("padre_jefe") === "No")
    page2.drawText("X", { x: 168, y: 332, size: fontSize, font: helvetica });

  page2.drawText(formData.get("padre_ocupacion") || "", { x: 338, y: 332, size: fontSize, font: helvetica });
  page2.drawText(formData.get("padre_lugarocup") || "", { x: 83, y: 312, size: fontSize, font: helvetica });

  page2.drawText(formData.get("padre_telefono") || "", { x: 395, y: 312, size: fontSize, font: helvetica });

  if (formData.get("padre_actividad") === "1") page2.drawText("X", { x: 141, y: 294, size: fontSize, font: helvetica });
  else if (formData.get("padre_actividad") === "2")
    page2.drawText("X", { x: 218, y: 294, size: fontSize, font: helvetica });
  else if (formData.get("padre_actividad") === "3")
    page2.drawText("X", { x: 316, y: 294, size: fontSize, font: helvetica });
  else if (formData.get("padre_actividad") === "4")
    page2.drawText("X", { x: 447, y: 294, size: fontSize, font: helvetica });
  else if (formData.get("padre_actividad") === "5")
    page2.drawText("X", { x: 45, y: 274, size: fontSize, font: helvetica });
  else if (formData.get("padre_actividad") === "6")
    page2.drawText("X", { x: 102, y: 274, size: fontSize, font: helvetica });
  else if (formData.get("padre_actividad") === "7")
    page2.drawText("X", { x: 217, y: 274, size: fontSize, font: helvetica });
  else if (formData.get("padre_actividad") === "8")
    page2.drawText("X", { x: 380, y: 274, size: fontSize, font: helvetica });
  else if (formData.get("padre_actividad") === "9")
    page2.drawText("X", { x: 469, y: 274, size: fontSize, font: helvetica });

  // ================== PÁGINA 2: TUTOR ==================

  page2.drawText(formData.get("tutor_apellido") || "", { x: 88, y: 222, size: fontSize, font: helvetica });
  page2.drawText(formData.get("tutor_nombre") || "", { x: 276, y: 222, size: fontSize, font: helvetica });
  page2.drawText(formData.get("tutor_doc_tipo") || "", { x: 100, y: 210, size: fontSize, font: helvetica });
  page2.drawText(formData.get("tutor_dni") || "", { x: 172, y: 210, size: fontSize, font: helvetica });

  if (formData.get("tutor_doc") === "tramite") page2.drawText("X", { x: 418, y: 210, size: fontSize, font: helvetica });
  else if (formData.get("tutor_doc") === "no tiene")
    page2.drawText("X", { x: 478, y: 210, size: fontSize, font: helvetica });

  page2.drawText(formData.get("tutor_localidad") || "", { x: 178, y: 197, size: fontSize, font: helvetica });
  page2.drawText(formData.get("tutor_nacimiento") || "", { x: 425, y: 197, size: fontSize, font: helvetica });
  page2.drawText(formData.get("tutor_nacionalidad") || "", { x: 100, y: 185, size: fontSize, font: helvetica });
  page2.drawText(formData.get("tutor_estado_civil") || "", { x: 243, y: 185, size: fontSize, font: helvetica });
  page2.drawText(formData.get("tutor_parentezco") || "", { x: 385, y: 185, size: fontSize, font: helvetica });

  if (formData.get("tutor_pueblo") === "Si") page2.drawText("X", { x: 130, y: 174, size: fontSize, font: helvetica });
  else if (formData.get("tutor_pueblo") === "No")
    page2.drawText("X", { x: 160, y: 174, size: fontSize, font: helvetica });
  page2.drawText(formData.get("tutor_etnia") || "", { x: 194, y: 174, size: fontSize, font: helvetica });

  if (formData.get("tutor_asistio_establecimiento") === "Si")
    page2.drawText("X", { x: 507, y: 174, size: fontSize, font: helvetica });
  else if (formData.get("tutor_asistio_establecimiento") === "No")
    page2.drawText("X", { x: 538, y: 174, size: fontSize, font: helvetica });

  if (formData.get("tutor_nivel") === "Primario")
    page2.drawText("X", { x: 149, y: 161, size: fontSize, font: helvetica });
  else if (formData.get("tutor_nivel") === "Secundario")
    page2.drawText("X", { x: 202, y: 161, size: fontSize, font: helvetica });
  else if (formData.get("tutor_nivel") === "Terciario")
    page2.drawText("X", { x: 266, y: 161, size: fontSize, font: helvetica });
  else if (formData.get("tutor_nivel") === "Universitario")
    page2.drawText("X", { x: 308, y: 161, size: fontSize, font: helvetica });

  if (formData.get("tutor_completo") === "Si") page2.drawText("X", { x: 514, y: 161, size: fontSize, font: helvetica });
  else if (formData.get("tutor_completo") === "No")
    page2.drawText("X", { x: 544, y: 161, size: fontSize, font: helvetica });

  page2.drawText(formData.get("tutor_domicilio") || "", { x: 86, y: 147, size: fontSize, font: helvetica });
  page2.drawText(formData.get("tutor_localidad2") || "", { x: 456, y: 147, size: fontSize, font: helvetica });
  page2.drawText(formData.get("tutor_tel") || "", { x: 99, y: 134, size: fontSize, font: helvetica });
  page2.drawText(formData.get("tutor_cel") || "", { x: 228, y: 134, size: fontSize, font: helvetica });
  page2.drawText(formData.get("tutor_mail") || "", { x: 311, y: 134, size: fontSize, font: helvetica });

  if (formData.get("tutor_jefe") === "Si") page2.drawText("X", { x: 138, y: 124, size: fontSize, font: helvetica });
  else if (formData.get("tutor_jefe") === "No")
    page2.drawText("X", { x: 169, y: 124, size: fontSize, font: helvetica });

  page2.drawText(formData.get("tutor_ocupacion") || "", { x: 339, y: 124, size: fontSize, font: helvetica });
  page2.drawText(formData.get("tutor_lugarocup") || "", { x: 82, y: 110, size: fontSize, font: helvetica });

  page2.drawText(formData.get("tutor_telefono") || "", { x: 396, y: 110, size: fontSize, font: helvetica });

  if (formData.get("tutor_actividad") === "1") page2.drawText("X", { x: 141, y: 98, size: fontSize, font: helvetica });
  else if (formData.get("tutor_actividad") === "2")
    page2.drawText("X", { x: 219, y: 98, size: fontSize, font: helvetica });
  else if (formData.get("tutor_actividad") === "3")
    page2.drawText("X", { x: 315, y: 98, size: fontSize, font: helvetica });
  else if (formData.get("tutor_actividad") === "4")
    page2.drawText("X", { x: 454, y: 98, size: fontSize, font: helvetica });
  else if (formData.get("tutor_actividad") === "5")
    page2.drawText("X", { x: 50, y: 86, size: fontSize, font: helvetica });
  else if (formData.get("tutor_actividad") === "6")
    page2.drawText("X", { x: 105, y: 86, size: fontSize, font: helvetica });
  else if (formData.get("tutor_actividad") === "7")
    page2.drawText("X", { x: 221, y: 86, size: fontSize, font: helvetica });
  else if (formData.get("tutor_actividad") === "8")
    page2.drawText("X", { x: 389, y: 86, size: fontSize, font: helvetica });
  else if (formData.get("tutor_actividad") === "9")
    page2.drawText("X", { x: 478, y: 86, size: fontSize, font: helvetica });

  // ================== PÁGINA 3: OTROS DATOS ==================
  const page3 = pdfDoc.getPages()[2];

  // Función para dividir texto largo automáticamente (versión compatible con pdf-lib)
  function drawWrappedText(page, text, x, y, maxWidth, lineHeight) {
    if (!text) return;
    const words = text.split(" ");
    let line = "";
    let offsetY = 0;

    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + " ";
      const testWidth = helvetica.widthOfTextAtSize(testLine, fontSize);

      if (testWidth > maxWidth && n > 0) {
        page.drawText(line.trim(), { x, y: y - offsetY, size: fontSize, font: helvetica });
        line = words[n] + " ";
        offsetY += lineHeight;
      } else {
        line = testLine;
      }
    }

    page.drawText(line.trim(), { x, y: y - offsetY, size: fontSize, font: helvetica });
  }

  // -------- OTROS DATOS DE LA INSCRIPCIÓN --------
  if (formData.get("sala4") === "Sí") page3.drawText("X", { x: 242, y: 750, size: fontSize, font: helvetica });
  else if (formData.get("sala4") === "No") page3.drawText("X", { x: 274, y: 750, size: fontSize, font: helvetica });

  if (formData.get("sala5") === "Sí") page3.drawText("X", { x: 242, y: 732, size: fontSize, font: helvetica });
  else if (formData.get("sala5") === "No") page3.drawText("X", { x: 274, y: 732, size: fontSize, font: helvetica });

  if (formData.get("internado") === "Sí") page3.drawText("X", { x: 242, y: 716, size: fontSize, font: helvetica });
  else if (formData.get("internado") === "No") page3.drawText("X", { x: 274, y: 716, size: fontSize, font: helvetica });

  if (formData.get("internado_fuera") === "Sí")
    page3.drawText("X", { x: 242, y: 699, size: fontSize, font: helvetica });
  else if (formData.get("internado_fuera") === "No")
    page3.drawText("X", { x: 274, y: 699, size: fontSize, font: helvetica });

  if (formData.get("hospital") === "Sí") page3.drawText("X", { x: 515, y: 750, size: fontSize, font: helvetica });
  else if (formData.get("hospital") === "No") page3.drawText("X", { x: 546, y: 750, size: fontSize, font: helvetica });

  if (formData.get("ambito_rural") === "Sí") page3.drawText("X", { x: 515, y: 732, size: fontSize, font: helvetica });
  else if (formData.get("ambito_rural") === "No")
    page3.drawText("X", { x: 546, y: 732, size: fontSize, font: helvetica });

  if (formData.get("encierro") === "Sí") page3.drawText("X", { x: 515, y: 716, size: fontSize, font: helvetica });
  else if (formData.get("encierro") === "No") page3.drawText("X", { x: 546, y: 716, size: fontSize, font: helvetica });

  if (formData.get("materias") === "Sí") page3.drawText("X", { x: 515, y: 699, size: fontSize, font: helvetica });
  else if (formData.get("materias") === "No") page3.drawText("X", { x: 546, y: 699, size: fontSize, font: helvetica });

  // -------- REGRESO AL SISTEMA EDUCATIVO --------
  if (formData.get("regreso_corresponde")) page3.drawText("X", { x: 40, y: 614, size: fontSize, font: helvetica });

  // Programa "Vuelvo a Estudiar"
  if (formData.get("regreso_propaganda")) page3.drawText("X", { x: 180, y: 598, size: fontSize, font: helvetica });
  if (formData.get("regreso_comentarios")) page3.drawText("X", { x: 266, y: 598, size: fontSize, font: helvetica });
  if (formData.get("regreso_equipo")) page3.drawText("X", { x: 350, y: 598, size: fontSize, font: helvetica });
  drawWrappedText(page3, formData.get("regreso_otro"), 680, 585, 100, 10);

  // Otros Programas
  if (formData.get("regreso_progresar")) page3.drawText("X", { x: 180, y: 574, size: fontSize, font: helvetica });
  if (formData.get("regreso_fines")) page3.drawText("X", { x: 265, y: 574, size: fontSize, font: helvetica });
  if (formData.get("regreso_oportunidad")) page3.drawText("X", { x: 350, y: 574, size: fontSize, font: helvetica });
  drawWrappedText(page3, formData.get("regreso_otro"), 37, 560, 100, 10);

  // Otros
  if (formData.get("regreso_cobro")) page3.drawText("X", { x: 180, y: 549, size: fontSize, font: helvetica });
  if (formData.get("regreso_propia")) page3.drawText("X", { x: 293, y: 549, size: fontSize, font: helvetica });
  if (formData.get("regreso_familiar")) page3.drawText("X", { x: 456, y: 549, size: fontSize, font: helvetica });
  if (formData.get("regreso_becas")) page3.drawText("X", { x: 180, y: 538, size: fontSize, font: helvetica });
  if (formData.get("regreso_cambio_escuela")) page3.drawText("X", { x: 294, y: 538, size: fontSize, font: helvetica });
  drawWrappedText(page3, formData.get("regreso_otro"), 38, 525, 100, 10);

  // Procedencia
  if (formData.get("procedencia_rendimiento"))
    page3.drawText("-------", { x: 67, y: 481, size: fontSize, font: helvetica });
  if (formData.get("procedencia_domilicio"))
    page3.drawText("-------", { x: 170, y: 481, size: fontSize, font: helvetica });
  if (formData.get("procedencia_nivel")) page3.drawText("-------", { x: 252, y: 470, size: fontSize, font: helvetica });
  if (formData.get("procedencia_conducta"))
    page3.drawText("-------", { x: 327, y: 481, size: fontSize, font: helvetica });
  if (formData.get("procedencia_disconformidad"))
    page3.drawText("-------", { x: 444, y: 481, size: fontSize, font: helvetica });
  if (formData.get("procedencia_distancia"))
    page3.drawText("-------", { x: 52, y: 468, size: fontSize, font: helvetica });
  if (formData.get("procedencia_otracausa"))
    page3.drawText("-------", { x: 133, y: 468, size: fontSize, font: helvetica });
  if (formData.get("procedencia_problemas"))
    page3.drawText("-------", { x: 206, y: 468, size: fontSize, font: helvetica });
  if (formData.get("procedencia_trabajoalum"))
    page3.drawText("-------", { x: 310, y: 468, size: fontSize, font: helvetica });
  if (formData.get("procedencia_trabajopadre"))
    page3.drawText("-------", { x: 400, y: 468, size: fontSize, font: helvetica });

  // -------- DOCUMENTACIÓN A PRESENTAR --------
  if (formData.get("doc_partida") === "Sí") page3.drawText("X", { x: 243, y: 365, size: fontSize, font: helvetica });
  else if (formData.get("doc_partida") === "No")
    page3.drawText("X", { x: 274, y: 365, size: fontSize, font: helvetica });
  if (formData.get("doc_fotodni") === "Sí") page3.drawText("X", { x: 243, y: 348, size: fontSize, font: helvetica });
  else if (formData.get("doc_fotodni") === "No")
    page3.drawText("X", { x: 274, y: 348, size: fontSize, font: helvetica });
  if (formData.get("doc_foto") === "Sí") page3.drawText("X", { x: 243, y: 331, size: fontSize, font: helvetica });
  else if (formData.get("doc_foto") === "No") page3.drawText("X", { x: 274, y: 331, size: fontSize, font: helvetica });
  if (formData.get("doc_certificado") === "Sí")
    page3.drawText("X", { x: 243, y: 314, size: fontSize, font: helvetica });
  else if (formData.get("doc_certificado") === "No")
    page3.drawText("X", { x: 274, y: 314, size: fontSize, font: helvetica });
  if (formData.get("doc_escolar") === "Sí") page3.drawText("X", { x: 243, y: 296, size: fontSize, font: helvetica });
  else if (formData.get("doc_escolar") === "No")
    page3.drawText("X", { x: 274, y: 296, size: fontSize, font: helvetica });
  if (formData.get("doc_fotocopia") === "Sí") page3.drawText("X", { x: 515, y: 364, size: fontSize, font: helvetica });
  else if (formData.get("doc_fotocopia") === "No")
    page3.drawText("X", { x: 546, y: 364, size: fontSize, font: helvetica });
  drawWrappedText(page3, formData.get("doc_otro"), 316, 334, 120, 10);

  // ======== GENERAR Y DESCARGAR PDF FINAL ========
  const pdfBytes = await pdfDoc.save();
  console.log("PDF generado con datos:", pdfBytes.byteLength);

  const blob = new Blob([pdfBytes], { type: "application/pdf" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "inscripcion_completa.pdf";
  link.click();
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
