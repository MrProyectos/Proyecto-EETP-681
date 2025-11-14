<?php
session_start();
if (!isset($_SESSION["admin"])) {
    header("Location: login.php");
    exit();
}

include "../conexion.php";

$avisos = $conn->query("SELECT * FROM avisos ORDER BY id DESC");
?>

<h2>Gestión de Avisos</h2>
<a href="nuevo.php">Nuevo Aviso</a>

<table border="1">
    <tr>
        <th>Título</th>
        <th>Expiración</th>
        <th>Estado</th>
        <th>Acciones</th>
    </tr>

<?php while($row = $avisos->fetch_assoc()): ?>
<tr>
    <td><?= $row['titulo'] ?></td>
    <td><?= $row['fecha_expiracion'] ?></td>
    <td><?= $row['activo'] ? "Activo" : "Inactivo" ?></td>
    <td>
        <a href="editar.php?id=<?= $row['id'] ?>">Editar</a>
    </td>
</tr>
<?php endwhile; ?>
</table>
