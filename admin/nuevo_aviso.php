<?php
session_start();
if (!isset($_SESSION["loggeado"])) {
    header("Location: login.php");
    exit();
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>Nuevo Aviso</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body class="bg-light">

<div class="container mt-4">
    <h2>Nuevo Aviso</h2>

    <form action="guardar_aviso.php" method="POST" class="card p-4 shadow">

        <label class="mt-2">Título</label>
        <input name="titulo" class="form-control" required>

        <label class="mt-3">Contenido</label>
        <textarea name="contenido" class="form-control" rows="5" required></textarea>

        <label class="mt-3">Fecha de expiración (opcional)</label>
        <input type="date" name="fecha_expiracion" class="form-control">

        <div class="form-check mt-3">
            <input type="checkbox" name="activo" class="form-check-input" checked>
            <label class="form-check-label">Activo</label>
        </div>

        <button class="btn btn-success mt-4">Guardar Aviso</button>
    </form>

</div>

</body>
</html>
