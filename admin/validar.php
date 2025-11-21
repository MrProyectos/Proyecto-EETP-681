<?php
session_start();

// Credenciales directas (podés cambiarlas cuando quieras)
$ADMIN_USER = "admin";
$ADMIN_PASS = "eetp681AVISOS"; // podés cambiarlo, o pedirme versión con hash

$u = $_POST["usuario"] ?? "";
$p = $_POST["password"] ?? "";

if ($u === $ADMIN_USER && $p === $ADMIN_PASS) {
    $_SESSION["loggeado"] = true;
    header("Location: panel.php");
    exit();
}

header("Location: login.php?error=1");
exit();
