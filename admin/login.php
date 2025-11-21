<?php session_start(); ?>
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>Login — Administración</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body class="bg-light d-flex justify-content-center align-items-center" style="height:100vh;">

<div class="card shadow p-4" style="width: 380px;">
    <img src="../assets/img/logo-escuela.png" width="80" class="mx-auto d-block mb-3">

    <h4 class="text-center mb-3">Panel Administrativo</h4>

    <?php if(isset($_GET['error'])): ?>
        <div class="alert alert-danger">Credenciales incorrectas</div>
    <?php endif; ?>

    <form action="validar.php" method="POST">
        <input name="usuario" class="form-control mb-3" placeholder="Usuario" required>
        <input type="password" name="password" class="form-control mb-3" placeholder="Contraseña" required>
        <button class="btn btn-primary w-100">Ingresar</button>
    </form>
</div>

</body>
</html>
