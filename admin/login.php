<?php
// admin/login.php
session_start();
if (isset($_SESSION['user_id'])) {
    header("Location: panel.php");
    exit;
}
include "../conexion.php";
$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $usuario = $_POST['usuario'] ?? '';
    $password = $_POST['password'] ?? '';

    $stmt = $conn->prepare("SELECT id, nombre, password, rol FROM usuarios WHERE usuario = ?");
    $stmt->bind_param("s", $usuario);
    $stmt->execute();
    $stmt->bind_result($id, $nombre, $hash, $rol);
    if ($stmt->fetch()) {
        if (password_verify($password, $hash)) {
            // login OK
            $_SESSION['user_id'] = $id;
            $_SESSION['user_name'] = $nombre;
            $_SESSION['user_rol'] = $rol;
            header("Location: panel.php");
            exit;
        } else {
            $error = "Usuario o contraseña incorrectos.";
        }
    } else {
        $error = "Usuario o contraseña incorrectos.";
    }
    $stmt->close();
}
?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Login - Admin</title>
<style>
body{font-family:Arial,Helvetica,sans-serif;display:flex;align-items:center;justify-content:center;height:100vh;background:#f5f5f5}
.login-box{background:#fff;padding:20px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.1);width:320px}
input{width:100%;padding:8px;margin:6px 0;border:1px solid #ccc;border-radius:4px}
button{width:100%;padding:10px;background:#2c7be5;color:#fff;border:none;border-radius:4px;cursor:pointer}
.error{color:#b00020;margin-top:8px}
</style>
</head>
<body>
<div class="login-box">
  <h3>Ingreso administrativo</h3>
  <form method="POST">
    <input type="text" name="usuario" placeholder="Usuario" required>
    <input type="password" name="password" placeholder="Contraseña" required>
    <button type="submit">Entrar</button>
    <?php if ($error): ?><div class="error"><?=htmlspecialchars($error)?></div><?php endif; ?>
  </form>
</div>
</body>
</html>
