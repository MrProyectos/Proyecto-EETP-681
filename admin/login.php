<?php session_start(); ?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Login Administrador</title>
    </head>

    <body>
        <h2>Ingreso al Panel</h2>

        <?php if (isset($_GET["error"])): ?>
        <p style="color:red;">Credenciales incorrectas</p>
        <?php endif; ?>

        <form action="validar.php" method="POST">
            Usuario:<br>
            <input type="text" name="usuario" required><br><br>

            Contraseña:<br>
            <input type="password" name="password" required><br><br>

            <button type="submit">Ingresar</button>
        </form>

    </body>
</html>