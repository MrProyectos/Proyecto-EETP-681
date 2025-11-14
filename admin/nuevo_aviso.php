<form action="guardar_aviso.php" method="POST">
    <label>Título:</label>
    <input type="text" name="titulo" required>

    <label>Contenido:</label>
    <textarea name="contenido" required></textarea>

    <label>Fecha de expiración:</label>
    <input type="date" name="fecha_expiracion">

    <label>Activo:</label>
    <input type="checkbox" name="activo" checked>

    <button type="submit">Guardar</button>
</form>
