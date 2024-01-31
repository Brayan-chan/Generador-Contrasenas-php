<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generador de Contraseñas</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>Generador de Contraseñas</h1>
        </header>
        <nav>
            <ul>
                <li><a href="Editar.php">Contraseñas Guardadas</a></li>
                <li><a href="Papelera.php">Papelera</a></li>
                <li><a href="#">Inicio</a></li>
            </ul>
        </nav>
        <main>

            <div class="input-container">
                <form action="php/contrasenas_random_be.php" method="POST" class="formulario__random">
                    <h2>Generar contraseña aleatoria</h2>
                    <input type="text" placeholder="Contrasena Random" name="contrasena_random" id="randomPassword" readonly>
                    <button type="button" id="generateButton">Generar</button>
                    <button type="button" onclick="copyRandomPassword()" class="copyButton">Copiar</button>
                    <button type="button" id="saveButton">Guardar</button> <!-- Cambiado a type="button" -->
                </form>
                <form action="php/contrasenas_personalizadas_be.php" method="POST" class="formulario__personalizado">
                    <h2>Personalizar contraseña</h2>
                    <input type="text" placeholder="Contrasena Personalizada" name="contrasena_personalizada" id="customPassword" maxlength="12">
                    <button type="button" id="generateButton2" onclick="mixAndGenerate()">Mezclar y Generar</button>
                    <button type="button" onclick="copyMixedPassword()" class="copyButton2">Copiar</button>
                    <button type="button" id="saveButton2">Guardar</button> <!-- Cambiado a type="submit" -->
                </form>

            </div>

        </main>
        <aside>
            <h3>Información sobre el generador</h3>
            <p>Este generador de contraseñas te permite crear contraseñas seguras de forma aleatoria o personalizada.</p>
            <h3>Nuestros metodos</h3>
            <p>Utilizamos un sistema de mezcla de caracteres y al momento de ser guardado en la base de datos este se encriptara para que ser dificil de hackear.</p>
            <a style="color: white" href="Editar.php">Editar contraseñas</a>
        </aside>
    </div>
    <footer>
        <p>Propietario: Dev. Chan Pacheco Brayan</p>
        <p>Contacto: businesscenteraplication@gmail.com</p>
    </footer>
    <script src="js/funciones.js"></script>
    <script src="js/funciones2.js"></script>
</body>
</html>
