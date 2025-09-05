<?php
require('fpdf/fpdf.php');
require('fpdi/src/autoload.php');

use setasign\Fpdi\Fpdi;

// Inicializo el PDF
$pdf = new FPDI();
$pdf->SetFont('Arial','',8);

// Archivo de base
$archivo_pdf = "Planilla Inscripción 1er año Secundaria.pdf";
$pdf->setSourceFile($archivo_pdf);

//
// ================== PÁGINA 1 ==================
//
$pdf->AddPage();
$tplId = $pdf->importPage(1);
$pdf->useTemplate($tplId, 0, 0, 210);

// -------- DATOS DEL ALUMNO --------
$pdf->SetXY(40, 40); $pdf->Write(0, $_POST['alumno_nombre']);
$pdf->SetXY(160, 40); $pdf->Write(0, $_POST['alumno_dni']);
$pdf->SetXY(40, 46); $pdf->Write(0, $_POST['alumno_fnac']);
$pdf->SetXY(100, 46); $pdf->Write(0, $_POST['alumno_pais_nac']);
$pdf->SetXY(40, 52); $pdf->Write(0, $_POST['alumno_nacionalidad']);
$pdf->SetXY(100, 52); $pdf->Write(0, $_POST['alumno_domicilio']);
$pdf->SetXY(40, 58); $pdf->Write(0, $_POST['alumno_tel']);
$pdf->SetXY(100, 58); $pdf->Write(0, $_POST['alumno_mail']);
$pdf->SetXY(160, 58); $pdf->Write(0, $_POST['alumno_etnia']);

// -------- ASIGNACIÓN UNIVERSAL / DISCAPACIDAD --------
$pdf->SetXY(40, 70); $pdf->Write(0, "Asignación Universal: ".$_POST['asignacion']);
$pdf->SetXY(40, 76); $pdf->Write(0, "Discapacidad: ".$_POST['discapacidad']);
$pdf->SetXY(100, 76); $pdf->Write(0, "Detalle: ".$_POST['discapacidad_detalle']);
$pdf->SetXY(40, 82); $pdf->Write(0, "Escuela Especial: ".$_POST['escuela_especial']);
$pdf->SetXY(100, 82); $pdf->Write(0, "Cuál: ".$_POST['escuela_especial_detalle']);

// -------- GRUPO FAMILIAR / HERMANOS --------
$pdf->SetXY(40, 94); $pdf->MultiCell(150, 4, $_POST['grupo_familiar']);
$pdf->SetXY(40, 110); $pdf->Write(0, "Hermano: ".$_POST['hermano1_nombre']." Curso: ".$_POST['hermano1_curso']);
$pdf->SetXY(40, 116); $pdf->Write(0, "Hermano: ".$_POST['hermano2_nombre']." Curso: ".$_POST['hermano2_curso']);

// -------- OTROS DATOS --------
$pdf->SetXY(40, 128); $pdf->Write(0, "Restricción Judicial: ".$_POST['restriccion']);
$pdf->SetXY(100, 128); $pdf->Write(0, $_POST['restriccion_detalle']);
$pdf->SetXY(40, 134); $pdf->Write(0, "Adjunta documentación: ".$_POST['adjunta_doc']);

// -------- PERSONAS AUTORIZADAS --------
$pdf->SetXY(40, 146); $pdf->Write(0, $_POST['autorizado1_apellido']." ".$_POST['autorizado1_nombre']." DNI: ".$_POST['autorizado1_dni']);
$pdf->SetXY(40, 152); $pdf->Write(0, $_POST['autorizado2_apellido']." ".$_POST['autorizado2_nombre']." DNI: ".$_POST['autorizado2_dni']);

// -------- ACTIVIDADES EXTRAESCOLARES --------
$pdf->SetXY(40, 166); $pdf->Write(0, "Deporte: ".$_POST['deporte']." - ".$_POST['deporte_cual']);
$pdf->SetXY(40, 172); $pdf->Write(0, "Música: ".$_POST['musica']." - ".$_POST['musica_cual']);
$pdf->SetXY(40, 178); $pdf->Write(0, "Teatro: ".$_POST['teatro']);
$pdf->SetXY(40, 184); $pdf->Write(0, "Idiomas: ".$_POST['idioma']." - ".$_POST['idioma_cual']);
$pdf->SetXY(120, 166); $pdf->MultiCell(70, 4, "Otras actividades: ".$_POST['otras_actividades']);


//
// ================== PÁGINA 2 ==================
//
$pdf->AddPage();
$tplId = $pdf->importPage(2);
$pdf->useTemplate($tplId, 0, 0, 210);

// -------- DATOS MADRE --------
$pdf->SetXY(40, 40); $pdf->Write(0, $_POST['madre_apellido']." ".$_POST['madre_nombre']);
$pdf->SetXY(40, 46); $pdf->Write(0, $_POST['madre_doc_tipo']." ".$_POST['madre_dni']);
$pdf->SetXY(100, 46); $pdf->Write(0, "Vive: ".$_POST['madre_vive']." - Fallecimiento: ".$_POST['madre_fallecimiento']);
$pdf->SetXY(40, 52); $pdf->Write(0, $_POST['madre_localidad_nac']." ".$_POST['madre_provincia_nac']);
$pdf->SetXY(100, 52); $pdf->Write(0, "Nacionalidad: ".$_POST['madre_nacionalidad']);
$pdf->SetXY(40, 58); $pdf->Write(0, "Pueblo originario: ".$_POST['madre_pueblo']." - Etnia: ".$_POST['madre_etnia']);
$pdf->SetXY(40, 64); $pdf->Write(0, "Estado civil: ".$_POST['madre_estado_civil']);
$pdf->SetXY(40, 70); $pdf->Write(0, "Nivel educativo: ".$_POST['madre_nivel']);
$pdf->SetXY(40, 76); $pdf->Write(0, "Domicilio: ".$_POST['madre_domicilio']);
$pdf->SetXY(40, 82); $pdf->Write(0, "Teléfono: ".$_POST['madre_tel']." - Mail: ".$_POST['madre_mail']);
$pdf->SetXY(40, 88); $pdf->Write(0, "Ocupación: ".$_POST['madre_ocupacion']." - Jefe de hogar: ".$_POST['madre_jefe']);

// -------- DATOS PADRE --------
$pdf->SetXY(40, 110); $pdf->Write(0, $_POST['padre_apellido']." ".$_POST['padre_nombre']);
$pdf->SetXY(40, 116); $pdf->Write(0, $_POST['padre_doc_tipo']." ".$_POST['padre_dni']);
$pdf->SetXY(100, 116); $pdf->Write(0, "Vive: ".$_POST['padre_vive']." - Fallecimiento: ".$_POST['padre_fallecimiento']);
$pdf->SetXY(40, 122); $pdf->Write(0, $_POST['padre_localidad_nac']." ".$_POST['padre_provincia_nac']);
$pdf->SetXY(100, 122); $pdf->Write(0, "Nacionalidad: ".$_POST['padre_nacionalidad']);
$pdf->SetXY(40, 128); $pdf->Write(0, "Pueblo originario: ".$_POST['padre_pueblo']." - Etnia: ".$_POST['padre_etnia']);
$pdf->SetXY(40, 134); $pdf->Write(0, "Estado civil: ".$_POST['padre_estado_civil']);
$pdf->SetXY(40, 140); $pdf->Write(0, "Nivel educativo: ".$_POST['padre_nivel']);
$pdf->SetXY(40, 146); $pdf->Write(0, "Domicilio: ".$_POST['padre_domicilio']);
$pdf->SetXY(40, 152); $pdf->Write(0, "Teléfono: ".$_POST['padre_tel']." - Mail: ".$_POST['padre_mail']);
$pdf->SetXY(40, 158); $pdf->Write(0, "Ocupación: ".$_POST['padre_ocupacion']." - Jefe de hogar: ".$_POST['padre_jefe']);

// -------- DATOS TUTOR --------
$pdf->SetXY(40, 180); $pdf->Write(0, $_POST['tutor_apellido']." ".$_POST['tutor_nombre']);
$pdf->SetXY(40, 186); $pdf->Write(0, $_POST['tutor_doc_tipo']." ".$_POST['tutor_dni']);
$pdf->SetXY(100, 186); $pdf->Write(0, "Vive: ".$_POST['tutor_vive']." - Fallecimiento: ".$_POST['tutor_fallecimiento']);
$pdf->SetXY(40, 192); $pdf->Write(0, $_POST['tutor_localidad_nac']." ".$_POST['tutor_provincia_nac']);
$pdf->SetXY(100, 192); $pdf->Write(0, "Nacionalidad: ".$_POST['tutor_nacionalidad']);
$pdf->SetXY(40, 198); $pdf->Write(0, "Pueblo originario: ".$_POST['tutor_pueblo']." - Etnia: ".$_POST['tutor_etnia']);
$pdf->SetXY(40, 204); $pdf->Write(0, "Estado civil: ".$_POST['tutor_estado_civil']);
$pdf->SetXY(40, 210); $pdf->Write(0, "Nivel educativo: ".$_POST['tutor_nivel']);
$pdf->SetXY(40, 216); $pdf->Write(0, "Domicilio: ".$_POST['tutor_domicilio']);
$pdf->SetXY(40, 222); $pdf->Write(0, "Teléfono: ".$_POST['tutor_tel']." - Mail: ".$_POST['tutor_mail']);
$pdf->SetXY(40, 228); $pdf->Write(0, "Ocupación: ".$_POST['tutor_ocupacion']." - Jefe de hogar: ".$_POST['tutor_jefe']);


//
// ================== PÁGINA 3 ==================
//
$pdf->AddPage();
$tplId = $pdf->importPage(3);
$pdf->useTemplate($tplId, 0, 0, 210);

// -------- OTROS DATOS DE INSCRIPCIÓN --------
$pdf->SetXY(40, 40); $pdf->Write(0, "Asistió sala 4: ".$_POST['sala4']);
$pdf->SetXY(80, 40); $pdf->Write(0, "Sala 5: ".$_POST['sala5']);
$pdf->SetXY(120, 40); $pdf->Write(0, "Internado: ".$_POST['internado']);
$pdf->SetXY(160, 40); $pdf->Write(0, "Hospital/domicilio: ".$_POST['hospital']);
$pdf->SetXY(40, 46); $pdf->Write(0, "Ámbito rural: ".$_POST['ambito_rural']);
$pdf->SetXY(80, 46); $pdf->Write(0, "Contexto encierro: ".$_POST['encierro']);
$pdf->SetXY(120, 46); $pdf->Write(0, "Adeuda materias: ".$_POST['materias']);

// -------- REGRESO AL SISTEMA EDUCATIVO --------
$pdf->SetXY(40, 60); $pdf->MultiCell(150, 4, "Regreso al sistema: ".$_POST['regreso_sistema']." - Detalle: ".$_POST['regreso_detalle']);

// -------- PROCEDENCIA --------
$pdf->SetXY(40, 80); $pdf->Write(0, "Procedencia: ".$_POST['procedencia']);
$pdf->SetXY(40, 86); $pdf->Write(0, "Motivo: ".$_POST['motivo']);

// -------- DOCUMENTACIÓN --------
$pdf->SetXY(40, 110); $pdf->MultiCell(150, 4, $_POST['documentacion']);

// -------- CONSTANCIA --------
$pdf->SetXY(40, 140); $pdf->Write(0, "Solicitud: ".$_POST['constancia']);

// -------- FIRMAS --------
$pdf->SetXY(40, 160); $pdf->Write(0, "Firma Alumno: ___________________");
$pdf->SetXY(100, 160); $pdf->Write(0, "Firma Padre/Madre/Tutor: ___________________");

// Salida
$pdf->Output("D", "Inscripcion_Completada.pdf");
