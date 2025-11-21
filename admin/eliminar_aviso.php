<?php
session_start();
if (!isset($_SESSION["loggeado"])) exit();

$archivo = "../avisos.json";
$data = json_decode(file_get_contents($archivo), true);

$id = $_GET["id"];

$data["avisos"] = array_values(array_filter(
    $data["avisos"],
    fn($a) => $a["id"] != $id
));

file_put_contents($archivo, json_encode($data, JSON_PRETTY_PRINT));

header("Location: panel.php");
exit();
