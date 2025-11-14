<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit;
}
include "../conexion.php";

$error = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $titulo = $_POST['titulo'] ?? '';
    $contenido = $_POST['contenido'] ?? '';
    $fecha_exp = $_POST['fecha_expiracion'] ?: null;
    $activo = isset($_POST['activo']) ? 1 : 0;

    $stmt = $conn->prepare("INSERT INTO avisos (titulo, contenido, fecha_expiracion, activo) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("sssi", $titulo, $contenido, $fecha_exp, $activo);
    if ($stmt->execute()) {
        header("Location: panel.php");
        exit;
    } else {
        $error = "Error al guardar: " . $stmt->error;
    }
}
?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Nuevo Aviso</title>
<style>body{font-family:Arial;padding:20px}input,textarea{width:100%;padding:8px;margin:6px 0;border:1px solid #ccc}button{padding:10px 16px}</style>
</head>
<body>
<h3>Nuevo aviso</h3>
<form method="POST">
  <input type="text" name="titulo" placeholder="Título" required>
  <textarea name="contenido" rows="6" placeholder="Contenido" required></textarea>
  <label>Fecha de expiración (opcional):</label>
  <input type="date" name="fecha_expiracion">
  <label><input type="checkbox" name="activo" checked> Activo</label>
  <div style="margin-top:10px">
    <button type="submit">Guardar</button>
    <a href="panel.php" style="margin-left:8px">Cancelar</a>
  </div>
  <?php if ($error) echo "<p style='color:red;'>".htmlspecialchars($error)."</p>"; ?>
</form>
</body>
</html>
