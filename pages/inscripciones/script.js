import { PDFDocument, StandardFonts } from "https://cdn.skypack.dev/pdf-lib";

document.getElementById("inscripcionForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const url = "inscripcion.pdf"; // PDF base
  const existingPdfBytes = await fetch(url).then((res) => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontSize = 9;
  const formData = new FormData(e.target);

  // ================== PÁGINA 1 ==================
  const page1 = pdfDoc.getPages()[0];

  // -------- ESTABLECIMIENTO --------
  page1.drawText(formData.get("establecimiento_nombre") || "", { x: 115, y: 950, size: fontSize, font: helvetica });
  page1.drawText(formData.get("establecimiento_numero") || "", { x: 583, y: 950, size: fontSize, font: helvetica });
  page1.drawText(formData.get("establecimiento_regionaleduc") || "", {
    x: 708,
    y: 950,
    size: fontSize,
    font: helvetica,
  });
  page1.drawText(formData.get("establecimiento_ciclolec") || "", { x: 624, y: 925, size: fontSize, font: helvetica });
  const sector = formData.get("establecimiento_sector");
  if (sector === "Estatal") page1.drawText("X", { x: 173, y: 925, size: fontSize, font: helvetica });
  if (sector === "Privado") page1.drawText("X", { x: 226, y: 925, size: fontSize, font: helvetica });
  if (sector === "Municipal") page1.drawText("X", { x: 315, y: 925, size: fontSize, font: helvetica });

  // -------- ESCUELA DE PROCEDENCIA --------
  page1.drawText(formData.get("escuela_nombre") || "", { x: 109, y: 869, size: fontSize, font: helvetica });
  page1.drawText(formData.get("escuela_numero") || "", { x: 451, y: 869, size: fontSize, font: helvetica });
  page1.drawText(formData.get("escuela_direccion") || "", { x: 568, y: 869, size: fontSize, font: helvetica });
  page1.drawText(formData.get("escuela_localidad") || "", { x: 119, y: 853, size: fontSize, font: helvetica });
  page1.drawText(formData.get("escuela_provincia") || "", { x: 421, y: 853, size: fontSize, font: helvetica });
  page1.drawText(formData.get("escuela_pais") || "", { x: 617, y: 853, size: fontSize, font: helvetica });
  const escuelaSector = formData.get("escuela_sector");
  if (escuelaSector === "Estatal") page1.drawText("X", { x: 178, y: 835, size: fontSize, font: helvetica });
  if (escuelaSector === "Privado") page1.drawText("X", { x: 246, y: 835, size: fontSize, font: helvetica });

  // -------- ALUMNO --------
  page1.drawText(formData.get("alumno_nombre") || "", { x: 88, y: 785, size: fontSize, font: helvetica });
  page1.drawText(formData.get("alumno_dni") || "", { x: 88, y: 749, size: fontSize, font: helvetica });
  page1.drawText(formData.get("alumno_fnac") || "", { x: 164, y: 715, size: fontSize, font: helvetica });
  page1.drawText(formData.get("alumno_pais") || "", { x: 438, y: 715, size: fontSize, font: helvetica });
  page1.drawText(formData.get("alumno_domicilio") || "", { x: 114, y: 685, size: fontSize, font: helvetica });
  page1.drawText(formData.get("alumno_tel") || "", { x: 114, y: 668, size: fontSize, font: helvetica });
  page1.drawText(formData.get("alumno_mail") || "", { x: 376, y: 668, size: fontSize, font: helvetica });
  page1.drawText(formData.get("alumno_etnia") || "", { x: 380, y: 651, size: fontSize, font: helvetica });
  if (formData.get("alumno_pueblo") === "Sí") page1.drawText("X", { x: 189, y: 651, size: fontSize, font: helvetica });
  else if (formData.get("alumno_pueblo") === "No")
    page1.drawText("X", { x: 235, y: 651, size: fontSize, font: helvetica });

  if (formData.get("alumno_nacionalidad") === "Argentino Nativo")
    page1.drawText("X", { x: 209, y: 701, size: fontSize, font: helvetica });
  else if (formData.get("alumno_nacionalidad") === "Argentino Naturalizado")
    page1.drawText("X", { x: 329, y: 701, size: fontSize, font: helvetica });
  else if (formData.get("alumno_nacionalidad") === "Argentino por opcion")
    page1.drawText("X", { x: 441, y: 701, size: fontSize, font: helvetica });
  else if (formData.get("alumno_nacionalidad") === "Extranjero")
    page1.drawText("X", { x: 509, y: 701, size: fontSize, font: helvetica });

  // -------- SITUACIÓN SOCIAL --------
  if (formData.get("asignacion") === "Sí") page1.drawText("X", { x: 190, y: 569, size: fontSize, font: helvetica });
  else if (formData.get("asignacion") === "No")
    page1.drawText("X", { x: 231, y: 569, size: fontSize, font: helvetica });
  if (formData.get("discapacidad") === "Sí") page1.drawText("X", { x: 455, y: 595, size: fontSize, font: helvetica });
  else if (formData.get("discapacidad") === "No")
    page1.drawText("X", { x: 502, y: 595, size: fontSize, font: helvetica });
  page1.drawText(formData.get("discapacidad_detalle") || "", { x: 358, y: 578, size: fontSize, font: helvetica });

  // -------- ESCUELA ESPECIAL --------
  if (formData.get("escuela_especial") === "Sí")
    page1.drawText("X", { x: 515, y: 562, size: fontSize, font: helvetica });
  else if (formData.get("escuela_especial") === "No")
    page1.drawText("X", { x: 562, y: 562, size: fontSize, font: helvetica });
  page1.drawText(formData.get("escuela_especial_detalle") || "", { x: 359, y: 545, size: fontSize, font: helvetica });

  // -------- GRUPO FAMILIAR --------
  page1.drawText(formData.get("grupo_familiar") || "", { x: 64, y: 471, size: fontSize, font: helvetica });
  page1.drawText(formData.get("hermano1_nombre") || "", { x: 467, y: 475, size: fontSize, font: helvetica });
  page1.drawText(formData.get("hermano1_curso") || "", { x: 678, y: 477, size: fontSize, font: helvetica });
  page1.drawText(formData.get("hermano2_nombre") || "", { x: 467, y: 457, size: fontSize, font: helvetica });
  page1.drawText(formData.get("hermano2_curso") || "", { x: 678, y: 455, size: fontSize, font: helvetica });
  page1.drawText(formData.get("hermano3_nombre") || "", { x: 467, y: 437, size: fontSize, font: helvetica });
  page1.drawText(formData.get("hermano3_curso") || "", { x: 678, y: 439, size: fontSize, font: helvetica });

  // -------- OTROS DATOS --------
  if (formData.get("restriccion") === "Sí") page1.drawText("X", { x: 131, y: 365, size: fontSize, font: helvetica });
  else if (formData.get("restriccion") === "No")
    page1.drawText("X", { x: 178, y: 365, size: fontSize, font: helvetica });
  page1.drawText(formData.get("restriccion_apellido") || "", { x: 461, y: 390, size: fontSize, font: helvetica });
  page1.drawText(formData.get("restriccion_nombre") || "", { x: 463, y: 360, size: fontSize, font: helvetica });
  page1.drawText(formData.get("restriccion_dni") || "", { x: 452, y: 340, size: fontSize, font: helvetica });
  if (formData.get("adjunta_doc") === "Sí") page1.drawText("X", { x: 325, y: 340, size: fontSize, font: helvetica });
  else if (formData.get("adjunta_doc") === "No")
    page1.drawText("X", { x: 370, y: 340, size: fontSize, font: helvetica });

  // -------- PERSONAS AUTORIZADAS --------
  page1.drawText(formData.get("autorizado1_apellido") || "", { x: 112, y: 286, size: fontSize, font: helvetica });
  page1.drawText(formData.get("autorizado1_nombre") || "", { x: 112, y: 260, size: fontSize, font: helvetica });
  page1.drawText(formData.get("autorizado1_dni") || "", { x: 100, y: 236, size: fontSize, font: helvetica });
  page1.drawText(formData.get("autorizado2_apellido") || "", { x: 463, y: 286, size: fontSize, font: helvetica });
  page1.drawText(formData.get("autorizado2_nombre") || "", { x: 463, y: 260, size: fontSize, font: helvetica });
  page1.drawText(formData.get("autorizado2_dni") || "", { x: 453, y: 236, size: fontSize, font: helvetica });

  // -------- ACTIVIDADES --------
  const deporte = formData.get("deporte");
  if (deporte === "Federado") page1.drawText("X", { x: 178, y: 181, size: fontSize, font: helvetica });
  else if (deporte === "No Federado") page1.drawText("X", { x: 272, y: 181, size: fontSize, font: helvetica });
  page1.drawText(formData.get("deporte_cual") || "", { x: 123, y: 162, size: fontSize, font: helvetica });

  if (formData.get("musica") === "Sí") page1.drawText("X", { x: 124, y: 146, size: fontSize, font: helvetica });
  else if (formData.get("musica") === "No") page1.drawText("X", { x: 171, y: 146, size: fontSize, font: helvetica });
  page1.drawText(formData.get("musica_cual") || "", { x: 123, y: 129, size: fontSize, font: helvetica });

  if (formData.get("teatro") === "Sí") page1.drawText("X", { x: 120, y: 115, size: fontSize, font: helvetica });
  else if (formData.get("teatro") === "No") page1.drawText("X", { x: 167, y: 115, size: fontSize, font: helvetica });

  if (formData.get("idioma") === "Sí") page1.drawText("X", { x: 122, y: 97, size: fontSize, font: helvetica });
  else if (formData.get("idioma") === "No") page1.drawText("X", { x: 169, y: 97, size: fontSize, font: helvetica });
  page1.drawText(formData.get("idioma_cual") || "", { x: 251, y: 95, size: fontSize, font: helvetica });
  page1.drawText(formData.get("otras_actividades") || "", { x: 417, y: 153, size: fontSize, font: helvetica });

  // ================== PÁGINA 2: MADRE  ================== //
  const page2 = pdfDoc.getPages()[1];

  page2.drawText(formData.get("madre_apellido") || "", { x: 100, y: 725, size: fontSize, font: helvetica });
  page2.drawText(formData.get("madre_nombre") || "", { x: 300, y: 725, size: fontSize, font: helvetica });
  page2.drawText(formData.get("madre_doc_tipo") || "", { x: 134, y: 927, size: fontSize, font: helvetica });
  page2.drawText(formData.get("madre_dni") || "", { x: 500, y: 725, size: fontSize, font: helvetica });

  if (formData.get("madre_doc") === "tramite") page2.drawText("X", { x:547, y:928 , size: fontSize, font: helvetica });
  else if (formData.get("madre_doc") === "no tiene")
    page2.drawText("X", { x:626, y:928, size: fontSize, font: helvetica });

  if (formData.get("madre_vive") === "Si") page2.drawText("X", { x: 120, y: 910, size: fontSize, font: helvetica });
  else if (formData.get("madre_vive") === "No")
    page2.drawText("X", { x:152, y:910, size: fontSize, font: helvetica });

  page2.drawText(formData.get("madre_fallecimiento") || "", { x: 302, y: 910, size: fontSize, font: helvetica });
  page2.drawText(formData.get("madre_localidad") || "", { x: 235, y: 884, size: fontSize, font: helvetica });
  page2.drawText(formData.get("madre_nacimiento") || "", { x: 652, y: 884, size: fontSize, font: helvetica });
  page2.drawText(formData.get("madre_nacionalidad") || "", { x: 134, y: 867, size: fontSize, font: helvetica });
  page2.drawText(formData.get("madre_estado_civil") || "", { x: 452, y: 867, size: fontSize, font: helvetica });

  if (formData.get("madre_pueblo") === "Sí") page2.drawText("X", { x: 174, y: 851, size: fontSize, font: helvetica });
  else if (formData.get("madre_pueblo") === "No")
    page2.drawText("X", { x: 213, y: 851, size: fontSize, font: helvetica });
  page2.drawText(formData.get("madre_etnia") || "", { x: 254, y: 851, size: fontSize, font: helvetica });

  if (formData.get("madre_asistio_establecimiento") === "Sí")
    page2.drawText("X", { x: 664, y: 851, size: fontSize, font: helvetica });
  else if (formData.get("madre_asistio_establecimiento") === "No")
    page2.drawText("X", { x: 704, y: 851, size: fontSize, font: helvetica });

  if (formData.get("madre_nivel") === "Primario")
    page2.drawText("X", { x: 198, y: 835, size: fontSize, font: helvetica });
  else if (formData.get("madre_nivel") === "Secundario")
    page2.drawText("X", { x: 268, y: 835, size: fontSize, font: helvetica });
  else if (formData.get("madre_nivel") === "Terciario")
    page2.drawText("X", { x: 350, y: 835, size: fontSize, font: helvetica });
  else if (formData.get("madre_nivel") === "Universitario")
    page2.drawText("X", { x: 404, y: 835, size: fontSize, font: helvetica });

  if (formData.get("madre_completo") === "Si") page2.drawText("X", { x: 672, y: 836, size: fontSize, font: helvetica });
  else if (formData.get("madre_completo") === "No")
    page2.drawText("X", { x: 712, y: 836, size: fontSize, font: helvetica });

  page2.drawText(formData.get("madre_domicilio") || "", { x: 114, y: 818, size: fontSize, font: helvetica });
  page2.drawText(formData.get("madre_localidad2") || "", { x: 642, y: 818, size: fontSize, font: helvetica });
  page2.drawText(formData.get("madre_tel") || "", { x: 133, y: 800, size: fontSize, font: helvetica });
  page2.drawText(formData.get("madre_cel") || "", { x: 389, y: 800, size: fontSize, font: helvetica });
  page2.drawText(formData.get("madre_mail") || "", { x: 585, y: 800, size: fontSize, font: helvetica });

  if (formData.get("madre_jefe") === "Si") page2.drawText("X", { x: 184, y: 786, size: fontSize, font: helvetica });
  else if (formData.get("madre_jefe") === "No")
    page2.drawText("X", { x: 223, y: 786, size: fontSize, font: helvetica });

  page2.drawText(formData.get("madre_ocupacion") || "", { x: 443, y: 783, size: fontSize, font: helvetica });
  page2.drawText(formData.get("madre_lugarocup") || "", { x: 110, y: 768, size: fontSize, font: helvetica });

  page2.drawText(formData.get("madre_telefono") || "", { x: 517, y: 768, size: fontSize, font: helvetica });

  if (formData.get("madre_actividad") === "1") page2.drawText("X", { x: 188, y: 754, size: fontSize, font: helvetica });
  else if (formData.get("madre_actividad") === "2")
    page2.drawText("X", { x: 265, y: 754, size: fontSize, font: helvetica });
  else if (formData.get("madre_actividad") === "3")
    page2.drawText("X", { x: 391, y: 754, size: fontSize, font: helvetica });
  else if (formData.get("madre_actividad") === "4")
    page2.drawText("X", { x: 563, y: 754, size: fontSize, font: helvetica });
  else if (formData.get("madre_actividad") === "5")
    page2.drawText("X", { x: 63, y: 738, size: fontSize, font: helvetica });
  else if (formData.get("madre_actividad") === "6")
    page2.drawText("X", { x: 139, y: 739, size: fontSize, font: helvetica });
  else if (formData.get("madre_actividad") === "7")
    page2.drawText("X", { x: 265, y: 738, size: fontSize, font: helvetica });
  else if (formData.get("madre_actividad") === "8")
    page2.drawText("X", { x: 471, y: 739, size: fontSize, font: helvetica });
  else if (formData.get("madre_actividad") === "9")
    page2.drawText("X", { x: 587, y: 739, size: fontSize, font: helvetica });

  // ================== PÁGINA 2: PADRE  ================== //

  page2.drawText(formData.get("padre_apellido") || "", { x:118, y:665, size: fontSize, font: helvetica });
  page2.drawText(formData.get("padre_nombre") || "", { x:405, y:665, size: fontSize, font: helvetica });
  page2.drawText(formData.get("padre_doc_tipo") || "", { x:135, y:643, size: fontSize, font: helvetica });
  page2.drawText(formData.get("padre_dni") || "", { x:226, y:643, size: fontSize, font: helvetica });

  if (formData.get("padre_doc") === "tramite") page2.drawText("X", { x:547, y:643 , size: fontSize, font: helvetica });
  else if (formData.get("padre_doc") === "no tiene")
    page2.drawText("X", { x:625, y:643, size: fontSize, font: helvetica });

  if (formData.get("padre_vive") === "Si") page2.drawText("X", { x:120, y:618  , size: fontSize, font: helvetica });
  else if (formData.get("padre_vive") === "No")
    page2.drawText("X", { x:152, y:618, size: fontSize, font: helvetica });

  page2.drawText(formData.get("padre_fallecimiento") || "", { x:302, y:618, size: fontSize, font: helvetica });
  page2.drawText(formData.get("padre_localidad") || "", { x:234, y:582, size: fontSize, font: helvetica });
  page2.drawText(formData.get("padre_nacimiento") || "", { x:652, y:582, size: fontSize, font: helvetica });
  page2.drawText(formData.get("padre_nacionalidad") || "", { x:135, y:556, size: fontSize, font: helvetica });
  page2.drawText(formData.get("padre_estado_civil") || "", { x:453, y:557, size: fontSize, font: helvetica });

  if (formData.get("padre_pueblo") === "Si") page2.drawText("X", { x:174, y:534, size: fontSize, font: helvetica });
  else if (formData.get("padre_pueblo") === "No")
    page2.drawText("X", { x:213, y:534, size: fontSize, font: helvetica });
  page2.drawText(formData.get("padre_etnia") || "", { x:255, y:534, size: fontSize, font: helvetica });

  if (formData.get("padre_asistio_establecimiento") === "Si")
    page2.drawText("X", { x:664, y:535, size: fontSize, font: helvetica });
  else if (formData.get("padre_asistio_establecimiento") === "No")
    page2.drawText("X", { x:704, y:535, size: fontSize, font: helvetica });

  if (formData.get("padre_nivel") === "Primario")
    page2.drawText("X", { x:198, y:510, size: fontSize, font: helvetica });
  else if (formData.get("padre_nivel") === "Secundario")
    page2.drawText("X", { x:267, y:510, size: fontSize, font: helvetica });
  else if (formData.get("padre_nivel") === "Terciario")
    page2.drawText("X", { x:350, y:510, size: fontSize, font: helvetica });
  else if (formData.get("padre_nivel") === "Universitario")
    page2.drawText("X", { x:404, y:510, size: fontSize, font: helvetica });

  if (formData.get("padre_completo") === "Si") page2.drawText("X", { x:672, y:510, size: fontSize, font: helvetica });
  else if (formData.get("padre_completo") === "No")
    page2.drawText("X", { x:712, y:510, size: fontSize, font: helvetica });

  page2.drawText(formData.get("padre_domicilio") || "", { x:115, y:485, size: fontSize, font: helvetica });
  page2.drawText(formData.get("padre_localidad2") || "", { x:643, y:485, size: fontSize, font: helvetica });
  page2.drawText(formData.get("padre_tel") || "", { x:132, y:459, size: fontSize, font: helvetica });
  page2.drawText(formData.get("padre_cel") || "", { x:390, y:459, size: fontSize, font: helvetica });
  page2.drawText(formData.get("padre_mail") || "", { x:588, y:459, size: fontSize, font: helvetica });

  if (formData.get("padre_jefe") === "Si") page2.drawText("X", { x:184, y:435, size: fontSize, font: helvetica });
  else if (formData.get("padre_jefe") === "No")
    page2.drawText("X", { x:223, y:435, size: fontSize, font: helvetica });

  page2.drawText(formData.get("padre_ocupacion") || "", { x:445, y:434, size: fontSize, font: helvetica });
  page2.drawText(formData.get("padre_lugarocup") || "", { x:111, y:411, size: fontSize, font: helvetica });

  page2.drawText(formData.get("padre_telefono") || "", { x:518, y:411, size: fontSize, font: helvetica });

  if (formData.get("padre_actividad") === "1") page2.drawText("X", { x:188, y:386, size: fontSize, font: helvetica });
  else if (formData.get("padre_actividad") === "2")
    page2.drawText("X", { x:289, y:386, size: fontSize, font: helvetica });
  else if (formData.get("padre_actividad") === "3")
    page2.drawText("X", { x:415, y:386, size: fontSize, font: helvetica });
  else if (formData.get("padre_actividad") === "4")
    page2.drawText("X", { x:586, y:386, size: fontSize, font: helvetica });
  else if (formData.get("padre_actividad") === "5")
    page2.drawText("X", { x:63, y:362, size: fontSize, font: helvetica });
  else if (formData.get("padre_actividad") === "6")
    page2.drawText("X", { x:137, y:362, size: fontSize, font: helvetica });
  else if (formData.get("padre_actividad") === "7")
    page2.drawText("X", { x:286, y:362, size: fontSize, font: helvetica });
  else if (formData.get("padre_actividad") === "8")
    page2.drawText("X", { x:498, y:362, size: fontSize, font: helvetica });
  else if (formData.get("padre_actividad") === "9")
    page2.drawText("X", { x:615, y:362, size: fontSize, font: helvetica });


  // ================== PÁGINA 2: TUTOR ==================

   page2.drawText(formData.get("tutor_apellido") || "", { x:117, y:293, size: fontSize, font: helvetica });
  page2.drawText(formData.get("tutor_nombre") || "", { x:362, y:293, size: fontSize, font: helvetica });
  page2.drawText(formData.get("tutor_doc_tipo") || "", { x:133, y:276, size: fontSize, font: helvetica });
  page2.drawText(formData.get("tutor_dni") || "", { x:224, y:277, size: fontSize, font: helvetica });

  if (formData.get("tutor_doc") === "tramite") page2.drawText("X", { x:547, y:278 , size: fontSize, font: helvetica });
  else if (formData.get("tutor_doc") === "no tiene")
    page2.drawText("X", { x:626, y:278, size: fontSize, font: helvetica });

  page2.drawText(formData.get("tutor_localidad") || "", { x:235, y:261, size: fontSize, font: helvetica });
  page2.drawText(formData.get("tutor_nacimiento") || "", { x:555, y:261, size: fontSize, font: helvetica });
  page2.drawText(formData.get("tutor_nacionalidad") || "", { x:134, y:245, size: fontSize, font: helvetica });
  page2.drawText(formData.get("tutor_estado_civil") || "", { x:322, y:245, size: fontSize, font: helvetica });
  page2.drawText(formData.get("tutor_parentezco") || "", { x:504, y:245, size: fontSize, font: helvetica });

  if (formData.get("tutor_pueblo") === "Si") page2.drawText("X", { x:174, y:230, size: fontSize, font: helvetica });
  else if (formData.get("tutor_pueblo") === "No")
    page2.drawText("X", { x:212, y:230, size: fontSize, font: helvetica });
  page2.drawText(formData.get("tutor_etnia") || "", { x:255, y:227, size: fontSize, font: helvetica });

  if (formData.get("tutor_asistio_establecimiento") === "Si")
    page2.drawText("X", { x:664, y:230, size: fontSize, font: helvetica });
  else if (formData.get("tutor_asistio_establecimiento") === "No")
    page2.drawText("X", { x:704, y:230, size: fontSize, font: helvetica });

  if (formData.get("tutor_nivel") === "Primario")
    page2.drawText("X", { x:198, y:212, size: fontSize, font: helvetica });
  else if (formData.get("tutor_nivel") === "Secundario")
    page2.drawText("X", { x:267, y:213, size: fontSize, font: helvetica });
  else if (formData.get("tutor_nivel") === "Terciario")
    page2.drawText("X", { x:350, y:213, size: fontSize, font: helvetica });
  else if (formData.get("tutor_nivel") === "Universitario")
    page2.drawText("X", { x:404, y:213, size: fontSize, font: helvetica });

  if (formData.get("tutor_completo") === "Si") page2.drawText("X", { x:672, y:212, size: fontSize, font: helvetica });
  else if (formData.get("tutor_completo") === "No")
    page2.drawText("X", { x:712, y:212, size: fontSize, font: helvetica });

  page2.drawText(formData.get("tutor_domicilio") || "", { x:115, y:195, size: fontSize, font: helvetica });
  page2.drawText(formData.get("tutor_localidad2") || "", { x:596, y:195, size: fontSize, font: helvetica });
  page2.drawText(formData.get("tutor_tel") || "", { x:132, y:179, size: fontSize, font: helvetica });
  page2.drawText(formData.get("tutor_cel") || "", { x:299, y:179, size: fontSize, font: helvetica });
  page2.drawText(formData.get("tutor_mail") || "", { x:408, y:179, size: fontSize, font: helvetica });

  if (formData.get("tutor_jefe") === "Si") page2.drawText("X", { x:184, y:163, size: fontSize, font: helvetica });
  else if (formData.get("tutor_jefe") === "No")
    page2.drawText("X", { x:223, y:163, size: fontSize, font: helvetica });

  page2.drawText(formData.get("tutor_ocupacion") || "", { x:443, y:163, size: fontSize, font: helvetica });
  page2.drawText(formData.get("tutor_lugarocup") || "", { x:110, y:145, size: fontSize, font: helvetica });

  page2.drawText(formData.get("tutor_telefono") || "", { x:518, y:145, size: fontSize, font: helvetica });

  if (formData.get("tutor_actividad") === "1") page2.drawText("X", { x:188, y:131, size: fontSize, font: helvetica });
  else if (formData.get("tutor_actividad") === "2")
    page2.drawText("X", { x:288, y:131, size: fontSize, font: helvetica });
  else if (formData.get("tutor_actividad") === "3")
    page2.drawText("X", { x:415, y:131, size: fontSize, font: helvetica });
  else if (formData.get("tutor_actividad") === "4")
    page2.drawText("X", { x:595, y:130, size: fontSize, font: helvetica });
  else if (formData.get("tutor_actividad") === "5")
    page2.drawText("X", { x:69, y:116, size: fontSize, font: helvetica });
  else if (formData.get("tutor_actividad") === "6")
    page2.drawText("X", { x:142, y:116, size: fontSize, font: helvetica });
  else if (formData.get("tutor_actividad") === "7")
    page2.drawText("X", { x:291, y:116, size: fontSize, font: helvetica });
  else if (formData.get("tutor_actividad") === "8")
    page2.drawText("X", { x:510, y:116, size: fontSize, font: helvetica });
  else if (formData.get("tutor_actividad") === "9")
    page2.drawText("X", { x:626, y:116, size: fontSize, font: helvetica });

  // ================== PÁGINA 3: OTROS DATOS ==================
  const page3 = pdfDoc.getPages()[2];
  // ================== PÁGINA 3: OTROS DATOS, REGRESO Y DOCUMENTACIÓN ==================

// Función para dividir texto largo automáticamente
function drawWrappedText(page, text, x, y, maxWidth, lineHeight) {
  if (!text) return;
  const lines = pdfDoc.splitTextToSize(text, maxWidth, { font: helvetica, size: fontSize });
  lines.forEach((line, i) => {
    page.drawText(line, { x, y: y - i * lineHeight, size: fontSize, font: helvetica });
  });
}

// -------- OTROS DATOS DE LA INSCRIPCIÓN --------
if (formData.get("sala4") === "Sí") page3.drawText("X", { x: 320, y: 979, size: fontSize, font: helvetica });
else if (formData.get("sala4") === "No") page3.drawText("X", { x: 360, y: 979, size: fontSize, font: helvetica });

if (formData.get("sala5") === "Sí") page3.drawText("X", { x: 320, y: 956, size: fontSize, font: helvetica });
else if (formData.get("sala5") === "No") page3.drawText("X", { x: 360, y: 956, size: fontSize, font: helvetica });

if (formData.get("internado") === "Sí") page3.drawText("X", { x: 320, y: 934, size: fontSize, font: helvetica });
else if (formData.get("internado") === "No") page3.drawText("X", { x: 360, y: 934, size: fontSize, font: helvetica });

if (formData.get("hospital") === "Sí") page3.drawText("X", { x: 320, y: 910, size: fontSize, font: helvetica });
else if (formData.get("hospital") === "No") page3.drawText("X", { x: 360, y: 910, size: fontSize, font: helvetica });

if (formData.get("materias") === "Sí") page3.drawText("X", { x: 673, y: 979, size: fontSize, font: helvetica });
else if (formData.get("materias") === "No") page3.drawText("X", { x: 714, y: 979, size: fontSize, font: helvetica });

if (formData.get("ambito_rural") === "Sí") page3.drawText("X", { x: 673, y: 956, size: fontSize, font: helvetica });
else if (formData.get("ambito_rural") === "No") page3.drawText("X", { x: 714, y: 956, size: fontSize, font: helvetica });

if (formData.get("encierro") === "Sí") page3.drawText("X", { x: 673, y: 934, size: fontSize, font: helvetica });
else if (formData.get("encierro") === "No") page3.drawText("X", { x: 714, y: 934, size: fontSize, font: helvetica });

if (formData.get("materias") === "Sí") page3.drawText("X", { x: 673, y: 910, size: fontSize, font: helvetica });
else if (formData.get("materias") === "No") page3.drawText("X", { x: 714, y: 910, size: fontSize, font: helvetica });

// -------- REGRESO AL SISTEMA EDUCATIVO --------
if (formData.get("regreso_corresponde")) page3.drawText("X", { x: 55, y: 801, size: fontSize, font: helvetica });

// Programa "Vuelvo a Estudiar"
if (formData.get("regreso_propaganda")) page3.drawText("X", { x: 238, y: 780, size: fontSize, font: helvetica });
if (formData.get("regreso_comentarios")) page3.drawText("X", { x: 351, y: 780, size: fontSize, font: helvetica });
if (formData.get("regreso_equipo")) page3.drawText("X", { x: 460, y: 780, size: fontSize, font: helvetica });
drawWrappedText(page3, formData.get("regreso_otro"), 680, 780, 100, 10);

// Otros Programas
if (formData.get("regreso_progresar")) page3.drawText("X", { x: 238, y: 748, size: fontSize, font: helvetica });
if (formData.get("regreso_fines")) page3.drawText("X", { x: 350, y: 748, size: fontSize, font: helvetica });
if (formData.get("regreso_oportunidad")) page3.drawText("X", { x: 460, y: 748, size: fontSize, font: helvetica });
drawWrappedText(page3, formData.get("regreso_otro"), 673, 747, 100, 10);

// Otros
if (formData.get("regreso_cobro")) page3.drawText("X", { x: 238, y: 717, size: fontSize, font: helvetica });
if (formData.get("regreso_becas")) page3.drawText("X", { x: 238, y: 703, size: fontSize, font: helvetica });
if (formData.get("regreso_propia")) page3.drawText("X", { x: 386, y: 718, size: fontSize, font: helvetica });
if (formData.get("regreso_cambio_escuela")) page3.drawText("X", { x: 386, y: 702, size: fontSize, font: helvetica });
if (formData.get("regreso_familiar")) page3.drawText("X", { x: 598, y: 718, size: fontSize, font: helvetica });
drawWrappedText(page3, formData.get("regreso_otro"), 619, 702, 100, 10);

// Procedencia
if (formData.get("procedencia_rendimiento")) page3.drawText("X", { x: 53, y: 629, size: fontSize, font: helvetica });
if (formData.get("procedencia_domilicio")) page3.drawText("X", { x: 205, y: 629, size: fontSize, font: helvetica });
if (formData.get("procedencia_nivel")) page3.drawText("X", { x: 315, y: 629, size: fontSize, font: helvetica });
if (formData.get("procedencia_conducta")) page3.drawText("X", { x: 407, y: 629, size: fontSize, font: helvetica });
if (formData.get("procedencia_disconformidad")) page3.drawText("X", { x: 522, y: 629, size: fontSize, font: helvetica });
if (formData.get("procedencia_distancia")) page3.drawText("X", { x: 52, y: 614, size: fontSize, font: helvetica });
if (formData.get("procedencia_otracausa")) page3.drawText("X", { x: 175, y: 614, size: fontSize, font: helvetica });
if (formData.get("procedencia_problemas")) page3.drawText("X", { x: 239, y: 614, size: fontSize, font: helvetica });
if (formData.get("procedencia_trabajoalum")) page3.drawText("X", { x: 387, y: 614, size: fontSize, font: helvetica });
if (formData.get("procedencia_trabajopadre")) page3.drawText("X", { x: 494, y: 614, size: fontSize, font: helvetica });

// -------- DOCUMENTACIÓN A PRESENTAR --------
if (formData.get("doc_partida")) page3.drawText("X", { x: 320, y: 477, size: fontSize, font: helvetica });
if (formData.get("doc_libreta")) page3.drawText("X", { x: 360, y: 477, size: fontSize, font: helvetica });
if (formData.get("doc_fotocopia")) page3.drawText("X", { x: 320, y: 456, size: fontSize, font: helvetica });
if (formData.get("doc_foto")) page3.drawText("X", { x: 320, y: 433, size: fontSize, font: helvetica });
if (formData.get("doc_escolar")) page3.drawText("X", { x: 320, y: 412, size: fontSize, font: helvetica });
if (formData.get("doc_certificado")) page3.drawText("X", { x: 320, y: 389, size: fontSize, font: helvetica });
if (formData.get("doc_fotocopia")) page3.drawText("X", { x: 674, y: 477, size: fontSize, font: helvetica });
drawWrappedText(page3, formData.get("doc_otros"), 445, 456, 120, 10);


  // -------- DOCUMENTACIÓN --------
  if (formData.get("doc_partida") === "Sí") page3.drawText("X", { x: 320, y: 477, size: fontSize, font: helvetica });
  else if (formData.get("doc_partida") === "No") page3.drawText("X", { x: 360, y: 477, size: fontSize, font: helvetica });

  if (formData.get("doc_libreta") === "Sí") page3.drawText("X", { x: 320, y: 456, size: fontSize, font: helvetica });
  else if (formData.get("doc_libreta") === "No") page3.drawText("X", { x: 360, y: 456, size: fontSize, font: helvetica });

  if (formData.get("doc_foto") === "Sí") page3.drawText("X", { x: 320, y: 433, size: fontSize, font: helvetica });
  else if (formData.get("doc_foto") === "No") page3.drawText("X", { x: 360, y: 433, size: fontSize, font: helvetica });

  if (formData.get("doc_escolar") === "Sí") page3.drawText("X", { x: 320, y: 412, size: fontSize, font: helvetica });
  else if (formData.get("doc_escolar") === "No") page3.drawText("X", { x: 360, y: 412, size: fontSize, font: helvetica });

  if (formData.get("doc_certificado") === "Sí") page3.drawText("X", { x: 320, y: 389, size: fontSize, font: helvetica });
  else if (formData.get("doc_certificado") === "No") page3.drawText("X", { x: 360, y: 389, size: fontSize, font: helvetica });

  if (formData.get("doc_fotocopia") === "Sí") page3.drawText("X", { x: 674, y: 477, size: fontSize, font: helvetica });
  else if (formData.get("doc_fotocopia") === "No") page3.drawText("X", { x: 714, y: 477, size: fontSize, font: helvetica });

  if (formData.get("doc_otros")) page3.drawText(formData.get("doc_otros"), { x: 445, y: 456, size: fontSize, font: helvetica });


  // ================== SALIDA FINAL ==================
  const pdfBytes = await pdfDoc.save();
  const blob = new Blob([pdfBytes], { type: "application/pdf" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "Inscripcion_Completada.pdf";
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
