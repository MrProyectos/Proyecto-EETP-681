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
$aviso = null;

foreach ($data["avisos"] as $a) {
    if ($a["id"] == $id) { $aviso = $a; break; }
}
?>
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><title>Editar Aviso</title></head>
<body>
<h1>Editar Aviso</h1>
<form action="editar_guardar.php" method="POST">
<input type="hidden" name="id" value="<?= $aviso["id"] ?>">

Título:<br>
<input type="text" name="titulo" value="<?= htmlspecialchars($aviso["titulo"]) ?>" required><br><br>

Contenido:<br>
<textarea name="contenido" required><?= htmlspecialchars($aviso["contenido"]) ?></textarea><br><br>

Fecha de expiración:<br>
<input type="date" name="fecha_expiracion" value="<?= $aviso["fecha_expiracion"] ?>"><br><br>

Activo:
<input type="checkbox" name="activo" <?= $aviso["activo"] ? "checked" : "" ?>><br><br>

<button type="submit">Guardar Cambios</button>
</form>
</body>
</html>
