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

  // ================== PÁGINA 2: MADRE / PADRE ==================
  const page2 = pdfDoc.getPages()[1];

  // Ejemplo: MADRE
  page2.drawText(formData.get("madre_apellido") || "", { x: 100, y: 725, size: fontSize, font: helvetica });
  page2.drawText(formData.get("madre_nombre") || "", { x: 300, y: 725, size: fontSize, font: helvetica });
  page2.drawText(formData.get("madre_doc_tipo") || "", { x: 134, y: 927, size: fontSize, font: helvetica });
  page2.drawText(formData.get("madre_dni") || "", { x: 500, y: 725, size: fontSize, font: helvetica });
  if (formData.get("madre_vive") === "Sí") page2.drawText("X", { x: 120, y: 910, size: fontSize, font: helvetica });
  else if (formData.get("madre_vive") === "No")
    page2.drawText("X", { x: 213, y: 851, size: fontSize, font: helvetica });
  page2.drawText(formData.get("madre_fallecimiento") || "", { x: 302, y: 910, size: fontSize, font: helvetica });
  page2.drawText(formData.get("madre_localidad") || "", { x: 235, y: 884, size: fontSize, font: helvetica });
  page2.drawText(formData.get("madre_nacimiento") || "", { x: 652, y: 884, size: fontSize, font: helvetica });
  page2.drawText(formData.get("madre_nacionalidad") || "", { x: 134, y: 867, size: fontSize, font: helvetica });
  page2.drawText(formData.get("madre_estado_civil") || "", { x: 452, y: 867, size: fontSize, font: helvetica });
  if (formData.get("madre_pueblo") === "Sí") page2.drawText("X", { x: 174, y: 851, size: fontSize, font: helvetica });
  else if (formData.get("madre_pueblo") === "No")
    page2.drawText("X", { x: 213, y: 851, size: fontSize, font: helvetica });
  page2.drawText(formData.get("madre_etnia") || "", { x: 254, y: 851, size: fontSize, font: helvetica });

  // ================== PÁGINA 3: TUTOR Y OTROS DATOS ==================
  const page3 = pdfDoc.getPages()[2];
  page3.drawText(formData.get("tutor_apellido") || "", { x: 100, y: 700, size: fontSize, font: helvetica });
  page3.drawText(formData.get("tutor_nombre") || "", { x: 300, y: 700, size: fontSize, font: helvetica });
  page3.drawText(formData.get("tutor_dni") || "", { x: 500, y: 700, size: fontSize, font: helvetica });
  // ... (seguir con resto de campos tutor y las secciones de sala, internado, documentación, etc.)

  // ================== SALIDA FINAL ==================
  const pdfBytes = await pdfDoc.save();
  const blob = new Blob([pdfBytes], { type: "application/pdf" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "Inscripcion_Completada.pdf";
  link.click();
});
