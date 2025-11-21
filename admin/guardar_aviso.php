<?php
session_start();
if (!isset($_SESSION["loggeado"])) exit();

$archivo = "../avisos.json";
$data = json_decode(file_get_contents($archivo), true);

$nuevo = [
    "id" => time(),
    "titulo" => $_POST["titulo"],
    "contenido" => $_POST["contenido"],
    "fecha_expiracion" => $_POST["fecha_expiracion"] ?: null,
    "activo" => isset($_POST["activo"]) ? 1 : 0
];

$data["avisos"][] = $nuevo;

// guardar formato elegante JSON
file_put_contents($archivo, json_encode($data, JSON_PRETTY_PRINT));

header("Location: panel.php");
exit();
