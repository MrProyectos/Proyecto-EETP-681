<?php
session_start();

$usuario_correcto = "admin";
$password_correcto = "1234";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if ($_POST["usuario"] == $usuario_correcto && $_POST["password"] == $password_correcto) {
        $_SESSION["admin"] = true;
        header("Location: avisos.php");
        exit();
    } else {
        $error = "Usuario o contraseña incorrectos";
    }
}
?>
<form method="POST">
    <h2>Login</h2>
    <input type="text" name="usuario" placeholder="Usuario">
    <input type="password" name="password" placeholder="Contraseña">
    <button type="submit">Entrar</button>
    <p><?php if(isset($error)) echo $error; ?></p>
</form>
