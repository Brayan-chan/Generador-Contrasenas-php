<?php
include 'conexion_be.php';

$contrasena_random = $_POST['contrasena_random'];

// Insertar la contraseña en la tabla de la base de datos
$query = "INSERT INTO savecontrasenas(contrasenas)
          VALUES('$contrasena_random')";

$ejecutar = mysqli_query($conexion, $query);

if ($ejecutar) {
    echo 'Contraseña guardada en la base de datos: ' . $contrasena_random;
} else {
    echo 'Error al guardar la contraseña en la base de datos';
}

mysqli_close($conexion);
?>
