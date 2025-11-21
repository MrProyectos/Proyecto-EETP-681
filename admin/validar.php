<?php
session_start();
require "config.php";

$u = $_POST["usuario"] ?? "";
$p = $_POST["password"] ?? "";

// Validación simple
if ($u === $ADMIN_USER && $p === $ADMIN_PASS) {
    $_SESSION["loggeado"] = true;
    header("Location: panel.php");
    exit();
}

header("Location: login.php?error=1");
exit();
