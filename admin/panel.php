<?php
session_start();
if (!isset($_SESSION["loggeado"])) {
    header("Location: login.php");
    exit();
}

$archivo = "../avisos.json";
$data = json_decode(file_get_contents($archivo), true);
$avisos = $data["avisos"];
?>
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>Panel de Avisos</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body class="bg-light">

<nav class="navbar navbar-dark bg-primary px-3">
    <span class="navbar-brand d-flex align-items-center">
        <img src="../assets/img/logo-escuela.png" width="40" class="me-2">
        Administración
    </span>
    <a href="logout.php" class="btn btn-danger">Cerrar sesión</a>
</nav>

<div class="container mt-4">

    <div class="d-flex justify-content-between">
        <h2>Avisos</h2>
        <a href="nuevo_aviso.php" class="btn btn-success">Nuevo Aviso</a>
    </div>

    <table class="table table-bordered table-striped mt-3">
        <tr>
            <th>Título</th>
            <th>Activo</th>
            <th>Expira</th>
            <th>Acciones</th>
        </tr>

        <?php foreach ($avisos as $a): ?>
        <tr>
            <td><?= htmlspecialchars($a["titulo"]) ?></td>
            <td>
                <?= $a["activo"] ? "<span class='badge bg-success'>Activo</span>" : "<span class='badge bg-secondary'>Inactivo</span>" ?>
            </td>
            <td><?= $a["fecha_expiracion"] ?></td>
            <td>
                <a href="editar_aviso.php?id=<?= $a['id'] ?>" class="btn btn-warning btn-sm">Editar</a>
                <a href="eliminar_aviso.php?id=<?= $a['id'] ?>" class="btn btn-danger btn-sm" onclick="return confirm('¿Eliminar aviso?')">Eliminar</a>
            </td>
        </tr>
        <?php endforeach; ?>
    </table>

</div>

</body>
</html>
