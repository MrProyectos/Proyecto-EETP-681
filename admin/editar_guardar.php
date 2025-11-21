<?php
session_start();
if (!isset($_SESSION["loggeado"])) exit();

$archivo = "../avisos.json";
$data = json_decode(file_get_contents($archivo), true);

$id = $_POST["id"];

foreach ($data["avisos"] as &$aviso) {
    if ($aviso["id"] == $id) {

        $aviso["titulo"] = $_POST["titulo"];
        $aviso["contenido"] = $_POST["contenido"];
        $aviso["fecha_expiracion"] = $_POST["fecha_expiracion"] ?: null;
        $aviso["activo"] = isset($_POST["activo"]) ? 1 : 0;

        break;
    }
}

file_put_contents($archivo, json_encode($data, JSON_PRETTY_PRINT));

header("Location: panel.php");
exit();
