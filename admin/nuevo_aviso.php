<?php
session_start();
if (!isset($_SESSION["loggeado"]) || $_SESSION["loggeado"] !== true) {
    header("Location: login.php");
    exit();
}
?>

<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><title>Nuevo Aviso</title></head>
<body>
<h1>Nuevo Aviso</h1>
<form action="guardar_aviso.php" method="POST">
Título:<br>
<input type="text" name="titulo" required><br><br>

Contenido:<br>
<textarea name="contenido" required></textarea><br><br>

Fecha de expiración:<br>
<input type="date" name="fecha_expiracion"><br><br>

Activo:
<input type="checkbox" name="activo" checked><br><br>

<button type="submit">Guardar</button>
</form>
</body>
</html>
