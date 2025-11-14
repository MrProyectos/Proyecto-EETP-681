<?php
include '../conexion.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $titulo = $_POST['titulo'] ?? '';
    $contenido = $_POST['contenido'] ?? '';
    $fecha_expiracion = $_POST['fecha_expiracion'] ?? null;
    $activo = isset($_POST['activo']) ? 1 : 0;

    // Si la fecha viene vacía, guardar NULL
    if ($fecha_expiracion === '') {
        $fecha_expiracion = null;
    }

    $sql = $conn->prepare("
        INSERT INTO avisos (titulo, contenido, fecha_expiracion, activo)
        VALUES (?, ?, ?, ?)
    ");

    $sql->bind_param("sssi", $titulo, $contenido, $fecha_expiracion, $activo);

    if ($sql->execute()) {
        header("Location: panel.php?success=1");
        exit();
    } else {
        echo "Error al guardar: " . $conn->error;
    }
}
?>
