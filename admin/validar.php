<?php
session_start();
require_once "config.php";

$u = $_POST["usuario"] ?? "";
$p = $_POST["password"] ?? "";

if ($u === $ADMIN_USER && $p === $ADMIN_PASS) {
    $_SESSION["loggeado"] = true;
    header("Location: panel.php");
    exit();
}

header("Location: login.php?error=1");
exit();
