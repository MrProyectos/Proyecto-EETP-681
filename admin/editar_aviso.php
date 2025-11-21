<?php
session_start();
if (!isset($_SESSION["loggeado"])) {
    header("Location: login.php");
    exit();
}

$archivo = "../avisos.json";
$data = json_decode(file_get_contents($archivo), true);

$id = $_GET["id"];
$aviso = null;

foreach ($data["avisos"] as $a) {
    if ($a["id"] == $id) {
        $aviso = $a;
        break;
    }
}

if (!$aviso) {
    echo "Aviso no encontrado";
    exit();
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Editar Aviso</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="apple-touch-icon" sizes="180x180" href="assets/favicon/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="assets/favicon/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="assets/favicon/favicon-16x16.png" />
    <link rel="manifest" href="assets/favicon/site.webmanifest" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
</head>

<body class="bg-light">

<div class="container mt-4">

    <h2>Editar Aviso</h2>

    <form action="editar_guardar.php" method="POST" class="card p-4 shadow">

        <input type="hidden" name="id" value="<?= $aviso["id"] ?>">

        <label class="mt-2">Título</label>
        <input name="titulo" class="form-control" value="<?= htmlspecialchars($aviso["titulo"]) ?>" required>

        <label class="mt-3">Contenido</label>
        <textarea name="contenido" class="form-control" rows="5" required><?= htmlspecialchars($aviso["contenido"]) ?></textarea>

        <label class="mt-3">Fecha de expiración</label>
        <input type="date" name="fecha_expiracion" value="<?= $aviso["fecha_expiracion"] ?>" class="form-control">

        <div class="form-check mt-3">
            <input type="checkbox" name="activo" class="form-check-input" <?= $aviso["activo"] ? "checked" : "" ?>>
            <label class="form-check-label">Activo</label>
        </div>

        <button class="btn btn-warning mt-4">Guardar Cambios</button>

    </form>

</div>

</body>
</html>
