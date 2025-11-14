<?php
// admin/panel.php
session_start();
if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit;
}
include "../conexion.php";
$user_name = $_SESSION['user_name'];
$user_rol = $_SESSION['user_rol'];

$avisos = $conn->query("SELECT * FROM avisos ORDER BY fecha_creacion DESC");
?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Panel de Avisos</title>
<style>
body{font-family:Arial,Helvetica,sans-serif;padding:20px;background:#fafafa}
.header{display:flex;justify-content:space-between;align-items:center}
.table{width:100%;border-collapse:collapse;margin-top:12px}
.table th,.table td{border:1px solid #ddd;padding:8px;text-align:left}
.actions a{margin-right:8px}
.add-btn{display:inline-block;padding:8px 12px;background:#28a745;color:#fff;border-radius:4px;text-decoration:none}
.topbar{margin-bottom:12px}
</style>
</head>
<body>
<div class="header">
  <div>
    <h2>Gestión de Avisos</h2>
    <div>Bienvenido, <?=htmlspecialchars($user_name)?> (<?=htmlspecialchars($user_rol)?>)</div>
  </div>
  <div>
    <a href="nuevo.php" class="add-btn">Nuevo aviso</a>
    <a href="logout.php" style="margin-left:10px;">Cerrar sesión</a>
  </div>
</div>

<table class="table">
  <tr><th>Título</th><th>Expira</th><th>Activo</th><th>Creado</th><th>Acciones</th></tr>
  <?php while($row = $avisos->fetch_assoc()): ?>
    <tr>
      <td><?=htmlspecialchars($row['titulo'])?></td>
      <td><?= $row['fecha_expiracion'] ? htmlspecialchars($row['fecha_expiracion']) : '-' ?></td>
      <td><?= $row['activo'] ? 'Sí' : 'No' ?></td>
      <td><?= $row['fecha_creacion'] ?></td>
      <td class="actions">
        <a href="editar.php?id=<?=$row['id']?>">Editar</a>
        <a href="eliminar.php?id=<?=$row['id']?>" onclick="return confirm('Eliminar este aviso?');">Eliminar</a>
      </td>
    </tr>
  <?php endwhile; ?>
</table>
</body>
</html>
