<?php
session_start();
if (!isset($_SESSION["loggeado"]) || $_SESSION["loggeado"] !== true) {
    header("Location: login.php");
    exit();
}
?>

<?php
$archivo = "../avisos.json";
$data = json_decode(file_get_contents($archivo), true);

$id = $_GET["id"];

$data["avisos"] = array_values(array_filter($data["avisos"], function($a) use ($id) {
    return $a["id"] != $id;
}));

file_put_contents($archivo, json_encode($data, JSON_PRETTY_PRINT));

header("Location: panel.php");
exit();
