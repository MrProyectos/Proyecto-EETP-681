import { PDFDocument, StandardFonts } from "https://cdn.skypack.dev/pdf-lib";

document
  .getElementById("inscripcionForm")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    // Cargar PDF base
    const url = "inscripcion.pdf";
    const existingPdfBytes = await fetch(url).then((res) => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(existingPdfBytes);

    const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const fontSize = 9;

    const formData = new FormData(e.target);

    // ================== PÁGINA 1 ==================
    const page1 = pdfDoc.getPages()[0];

    // Alumno
    page1.drawText(formData.get("alumno_nombre") || "", {
      x: 246,
      y: 837,
      size: fontSize,
      font: helvetica,
    });
    page1.drawText(formData.get("alumno_dni") || "", {
      x: 88,
      y: 749,
      size: fontSize,
      font: helvetica,
    });
    page1.drawText(formData.get("alumno_fnac") || "", {
      x: 164,
      y: 715,
      size: fontSize,
      font: helvetica,
    });
    page1.drawText(formData.get("alumno_pais") || "", {
      x: 438,
      y: 715,
      size: fontSize,
      font: helvetica,
    });
    page1.drawText(formData.get("alumno_nacionalidad") || "", {
      x: 209,
      y: 701,
      size: fontSize,
      font: helvetica,
    });
    page1.drawText(formData.get("alumno_domicilio") || "", {
      x: 114,
      y: 685,
      size: fontSize,
      font: helvetica,
    });
    page1.drawText(formData.get("alumno_tel") || "", {
      x: 114,
      y: 668,
      size: fontSize,
      font: helvetica,
    });
    page1.drawText(formData.get("alumno_mail") || "", {
      x: 376,
      y: 668,
      size: fontSize,
      font: helvetica,
    });

    // Pueblo originario
    if (formData.get("alumno_pueblo") === "Sí")
      page1.drawText("X", { x: 189, y: 651, size: fontSize, font: helvetica });
    else if (formData.get("alumno_pueblo") === "No")
      page1.drawText("X", { x: 235, y: 651, size: fontSize, font: helvetica });
    page1.drawText(formData.get("alumno_etnia") || "", {
      x: 380,
      y: 651,
      size: fontSize,
      font: helvetica,
    });

    // Asignación Universal
    if (formData.get("asignacion") === "Sí")
      page1.drawText("X", { x: 190, y: 569, size: fontSize, font: helvetica });
    else if (formData.get("asignacion") === "No")
      page1.drawText("X", { x: 231, y: 569, size: fontSize, font: helvetica });

    // Discapacidad
    if (formData.get("discapacidad") === "Sí")
      page1.drawText("X", { x: 455, y: 595, size: fontSize, font: helvetica });
    else if (formData.get("discapacidad") === "No")
      page1.drawText("X", { x: 502, y: 595, size: fontSize, font: helvetica });
    page1.drawText(formData.get("discapacidad_detalle") || "", {
      x: 358,
      y: 578,
      size: fontSize,
      font: helvetica,
    });

    // Escuela especial
    if (formData.get("escuela_especial") === "Sí")
      page1.drawText("X", { x: 515, y: 562, size: fontSize, font: helvetica });
    else if (formData.get("escuela_especial") === "No")
      page1.drawText("X", { x: 562, y: 562, size: fontSize, font: helvetica });
    page1.drawText(formData.get("escuela_especial_detalle") || "", {
      x: 359,
      y: 545,
      size: fontSize,
      font: helvetica,
    });

    // Grupo familiar y hermanos
    page1.drawText(formData.get("grupo_familiar") || "", {
      x: 64,
      y: 471,
      size: fontSize,
      font: helvetica,
    });
    page1.drawText(formData.get("hermano1_nombre") || "", {
      x: 467,
      y: 475,
      size: fontSize,
      font: helvetica,
    });
    page1.drawText(formData.get("hermano1_curso") || "", {
      x: 678,
      y: 477,
      size: fontSize,
      font: helvetica,
    });
    page1.drawText(formData.get("hermano2_nombre") || "", {
      x: 467,
      y: 457,
      size: fontSize,
      font: helvetica,
    });
    page1.drawText(formData.get("hermano2_curso") || "", {
      x: 678,
      y: 455,
      size: fontSize,
      font: helvetica,
    });
    page1.drawText(formData.get("hermano3_nombre") || "", {
      x: 467,
      y: 437,
      size: fontSize,
      font: helvetica,
    });
    page1.drawText(formData.get("hermano3_curso") || "", {
      x: 678,
      y: 439,
      size: fontSize,
      font: helvetica,
    });

    // ================== PÁGINA 2 ==================
    const page2 = pdfDoc.getPages()[1];

    // Madre
    page2.drawText(formData.get("madre_apellido") || "", {
      x: 80,
      y: 720,
      size: fontSize,
      font: helvetica,
    });
    page2.drawText(formData.get("madre_nombre") || "", {
      x: 250,
      y: 720,
      size: fontSize,
      font: helvetica,
    });
    if (formData.get("madre_vive") === "Sí")
      page2.drawText("X", { x: 300, y: 710, size: fontSize, font: helvetica });
    else if (formData.get("madre_vive") === "No")
      page2.drawText("X", { x: 350, y: 710, size: fontSize, font: helvetica });
    page2.drawText(formData.get("madre_fnac") || "", {
      x: 160,
      y: 700,
      size: fontSize,
      font: helvetica,
    });
    page2.drawText(formData.get("madre_nacionalidad") || "", {
      x: 250,
      y: 680,
      size: fontSize,
      font: helvetica,
    });
    page2.drawText(formData.get("madre_etnia") || "", {
      x: 380,
      y: 670,
      size: fontSize,
      font: helvetica,
    });
    page2.drawText(formData.get("madre_estado_civil") || "", {
      x: 120,
      y: 650,
      size: fontSize,
      font: helvetica,
    });
    page2.drawText(formData.get("madre_nivel") || "", {
      x: 120,
      y: 630,
      size: fontSize,
      font: helvetica,
    });
    page2.drawText(formData.get("madre_domicilio") || "", {
      x: 120,
      y: 610,
      size: fontSize,
      font: helvetica,
    });
    page2.drawText(formData.get("madre_tel") || "", {
      x: 120,
      y: 590,
      size: fontSize,
      font: helvetica,
    });
    page2.drawText(formData.get("madre_mail") || "", {
      x: 300,
      y: 590,
      size: fontSize,
      font: helvetica,
    });
    page2.drawText(formData.get("madre_ocupacion") || "", {
      x: 120,
      y: 570,
      size: fontSize,
      font: helvetica,
    });
    if (formData.get("madre_jefe") === "Sí")
      page2.drawText("X", { x: 300, y: 570, size: fontSize, font: helvetica });

    // Padre
    page2.drawText(formData.get("padre_apellido") || "", {
      x: 80,
      y: 500,
      size: fontSize,
      font: helvetica,
    });
    page2.drawText(formData.get("padre_nombre") || "", {
      x: 250,
      y: 500,
      size: fontSize,
      font: helvetica,
    });
    if (formData.get("padre_vive") === "Sí")
      page2.drawText("X", { x: 300, y: 490, size: fontSize, font: helvetica });
    else if (formData.get("padre_vive") === "No")
      page2.drawText("X", { x: 350, y: 490, size: fontSize, font: helvetica });
    page2.drawText(formData.get("padre_fnac") || "", {
      x: 160,
      y: 480,
      size: fontSize,
      font: helvetica,
    });
    page2.drawText(formData.get("padre_nacionalidad") || "", {
      x: 250,
      y: 460,
      size: fontSize,
      font: helvetica,
    });
    page2.drawText(formData.get("padre_etnia") || "", {
      x: 380,
      y: 450,
      size: fontSize,
      font: helvetica,
    });
    page2.drawText(formData.get("padre_estado_civil") || "", {
      x: 120,
      y: 430,
      size: fontSize,
      font: helvetica,
    });
    page2.drawText(formData.get("padre_nivel") || "", {
      x: 120,
      y: 410,
      size: fontSize,
      font: helvetica,
    });
    page2.drawText(formData.get("padre_domicilio") || "", {
      x: 120,
      y: 390,
      size: fontSize,
      font: helvetica,
    });
    page2.drawText(formData.get("padre_tel") || "", {
      x: 120,
      y: 370,
      size: fontSize,
      font: helvetica,
    });
    page2.drawText(formData.get("padre_mail") || "", {
      x: 300,
      y: 370,
      size: fontSize,
      font: helvetica,
    });
    page2.drawText(formData.get("padre_ocupacion") || "", {
      x: 120,
      y: 350,
      size: fontSize,
      font: helvetica,
    });
    if (formData.get("padre_jefe") === "Sí")
      page2.drawText("X", { x: 300, y: 350, size: fontSize, font: helvetica });

    // Tutor
    page2.drawText(formData.get("tutor_apellido") || "", {
      x: 80,
      y: 280,
      size: fontSize,
      font: helvetica,
    });
    page2.drawText(formData.get("tutor_nombre") || "", {
      x: 250,
      y: 280,
      size: fontSize,
      font: helvetica,
    });
    if (formData.get("tutor_vive") === "Sí")
      page2.drawText("X", { x: 300, y: 270, size: fontSize, font: helvetica });
    else if (formData.get("tutor_vive") === "No")
      page2.drawText("X", { x: 350, y: 270, size: fontSize, font: helvetica });
    page2.drawText(formData.get("tutor_fnac") || "", {
      x: 160,
      y: 260,
      size: fontSize,
      font: helvetica,
    });
    page2.drawText(formData.get("tutor_nacionalidad") || "", {
      x: 250,
      y: 240,
      size: fontSize,
      font: helvetica,
    });
    page2.drawText(formData.get("tutor_etnia") || "", {
      x: 380,
      y: 230,
      size: fontSize,
      font: helvetica,
    });
    page2.drawText(formData.get("tutor_estado_civil") || "", {
      x: 120,
      y: 210,
      size: fontSize,
      font: helvetica,
    });
    page2.drawText(formData.get("tutor_nivel") || "", {
      x: 120,
      y: 190,
      size: fontSize,
      font: helvetica,
    });
    page2.drawText(formData.get("tutor_domicilio") || "", {
      x: 120,
      y: 170,
      size: fontSize,
      font: helvetica,
    });
    page2.drawText(formData.get("tutor_tel") || "", {
      x: 120,
      y: 150,
      size: fontSize,
      font: helvetica,
    });
    page2.drawText(formData.get("tutor_mail") || "", {
      x: 300,
      y: 150,
      size: fontSize,
      font: helvetica,
    });
    page2.drawText(formData.get("tutor_ocupacion") || "", {
      x: 120,
      y: 130,
      size: fontSize,
      font: helvetica,
    });
    if (formData.get("tutor_jefe") === "Sí")
      page2.drawText("X", { x: 300, y: 130, size: fontSize, font: helvetica });

    // ================== PÁGINA 3 ==================
    const page3 = pdfDoc.getPages()[2];

    // Otros datos inscripción
    if (formData.get("sala4"))
      page3.drawText("X", { x: 100, y: 730, size: fontSize, font: helvetica });
    if (formData.get("sala5"))
      page3.drawText("X", { x: 200, y: 730, size: fontSize, font: helvetica });
    if (formData.get("internado"))
      page3.drawText("X", { x: 300, y: 730, size: fontSize, font: helvetica });
    if (formData.get("hospital"))
      page3.drawText("X", { x: 400, y: 730, size: fontSize, font: helvetica });
    if (formData.get("ambito_rural"))
      page3.drawText("X", { x: 500, y: 730, size: fontSize, font: helvetica });
    if (formData.get("encierro"))
      page3.drawText("X", { x: 600, y: 730, size: fontSize, font: helvetica });
    if (formData.get("materias"))
      page3.drawText("X", { x: 700, y: 730, size: fontSize, font: helvetica });

    // Regreso al sistema
    page3.drawText(formData.get("regreso_programa") || "", {
      x: 120,
      y: 700,
      size: fontSize,
      font: helvetica,
    });
    page3.drawText(formData.get("regreso_detalle") || "", {
      x: 120,
      y: 680,
      size: fontSize,
      font: helvetica,
    });

    // Procedencia
    page3.drawText(formData.get("procedencia") || "", {
      x: 120,
      y: 650,
      size: fontSize,
      font: helvetica,
    });
    page3.drawText(formData.get("motivo") || "", {
      x: 120,
      y: 630,
      size: fontSize,
      font: helvetica,
    });

    // Documentación
    if (formData.get("doc_partida"))
      page3.drawText("X", { x: 120, y: 600, size: fontSize, font: helvetica });
    if (formData.get("doc_dni"))
      page3.drawText("X", { x: 200, y: 600, size: fontSize, font: helvetica });
    if (formData.get("doc_libreta"))
      page3.drawText("X", { x: 280, y: 600, size: fontSize, font: helvetica });
    if (formData.get("doc_7mo"))
      page3.drawText("X", { x: 360, y: 600, size: fontSize, font: helvetica });
    if (formData.get("doc_foto"))
      page3.drawText("X", { x: 440, y: 600, size: fontSize, font: helvetica });
    if (formData.get("doc_boletin"))
      page3.drawText("X", { x: 520, y: 600, size: fontSize, font: helvetica });
    if (formData.get("doc_certificado"))
      page3.drawText("X", { x: 600, y: 600, size: fontSize, font: helvetica });

    // Constancia
    page3.drawText(formData.get("constancia") || "", {
      x: 120,
      y: 550,
      size: fontSize,
      font: helvetica,
    });

    // ================== SALIDA ==================
    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Inscripcion_Completada.pdf";
    link.click();
  });
