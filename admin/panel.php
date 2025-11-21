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
$avisos = $data["avisos"];
?>
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><title>Panel de Avisos</title></head>
<body>
<h1>Panel de Avisos</h1>
<div style="text-align: right; margin-bottom: 15px;">
    <a href="logout.php" style="
        padding: 8px 14px;
        background: #cc0000;
        color: white;
        text-decoration: none;
        border-radius: 6px;
        font-weight: bold;
    ">Cerrar sesión</a>
</div>

<a href="nuevo_aviso.php">Nuevo Aviso</a>
<table border="1" cellpadding="5">
<tr><th>Título</th><th>Activo</th><th>Expira</th><th>Acciones</th></tr>
<?php foreach ($avisos as $a): ?>
<tr>
<td><?= htmlspecialchars($a["titulo"]) ?></td>
<td><?= $a["activo"] ? "Sí" : "No" ?></td>
<td><?= $a["fecha_expiracion"] ?></td>
<td>
<a href="editar_aviso.php?id=<?= $a["id"] ?>">Editar</a> |
<a href="eliminar_aviso.php?id=<?= $a["id"] ?>" onclick="return confirm('Eliminar?')">Eliminar</a>
</td>
</tr>
<?php endforeach; ?>
</table>
</body>
</html>
