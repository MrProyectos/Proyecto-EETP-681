<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit;
}
include "../conexion.php";

$id = intval($_GET['id'] ?? 0);
if (!$id) { header("Location: panel.php"); exit; }

$error = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $titulo = $_POST['titulo'] ?? '';
    $contenido = $_POST['contenido'] ?? '';
    $fecha_exp = $_POST['fecha_expiracion'] ?: null;
    $activo = isset($_POST['activo']) ? 1 : 0;

    $stmt = $conn->prepare("UPDATE avisos SET titulo=?, contenido=?, fecha_expiracion=?, activo=? WHERE id=?");
    $stmt->bind_param("sssii", $titulo, $contenido, $fecha_exp, $activo, $id);
    if ($stmt->execute()) {
        header("Location: panel.php");
        exit;
    } else {
        $error = "Error al actualizar: ".$stmt->error;
    }
}

$stmt = $conn->prepare("SELECT * FROM avisos WHERE id = ?");
$stmt->bind_param("i", $id);
$stmt->execute();
$result = $stmt->get_result();
$row = $result->fetch_assoc();
if (!$row) { header("Location: panel.php"); exit; }
?>
<!doctype html>
<html>
<head><meta charset="utf-8"><title>Editar aviso</title></head>
<body>
<h3>Editar aviso</h3>
<form method="POST">
  <input type="text" name="titulo" value="<?=htmlspecialchars($row['titulo'])?>" required>
  <textarea name="contenido" rows="6" required><?=htmlspecialchars($row['contenido'])?></textarea>
  <label>Fecha de expiración (opcional):</label>
  <input type="date" name="fecha_expiracion" value="<?= $row['fecha_expiracion'] ?>">
  <label><input type="checkbox" name="activo" <?= $row['activo'] ? 'checked' : '' ?>> Activo</label>
  <div style="margin-top:10px">
    <button type="submit">Actualizar</button>
    <a href="panel.php" style="margin-left:8px">Cancelar</a>
  </div>
  <?php if ($error) echo "<p style='color:red;'>".htmlspecialchars($error)."</p>"; ?>
</form>
</body>
</html>
