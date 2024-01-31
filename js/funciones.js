document.addEventListener("DOMContentLoaded", function() {
    const generateButton = document.getElementById("generateButton");
    const randomPasswordField = document.getElementById("randomPassword");
    const saveButton = document.getElementById("saveButton");

    generateButton.addEventListener("click", function() {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
        let password = '';
        for (let i = 0; i < 12; i++) { // Cambiado a 12 caracteres
            const randomIndex = Math.floor(Math.random() * characters.length);
            password += characters.charAt(randomIndex);
        }
        randomPasswordField.value = password;
    });

    saveButton.addEventListener("click", function() {
        const passwordToSave = randomPasswordField.value;
        if (passwordToSave) {
            // Realizar una solicitud HTTP POST al servidor para guardar la contraseña
            const xhr = new XMLHttpRequest();
            xhr.open("POST", "php/contrasenas_random_be.php", true);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    alert(xhr.responseText); // Mostrar la respuesta del servidor (éxito o error)
                }
            };
            xhr.send("contrasena_random=" + encodeURIComponent(passwordToSave));
        } else {
            alert("No hay contraseña para guardar. Genera una contraseña primero.");
        }
    });
});


function copyRandomPassword() {
    const randomPassword = document.getElementById("randomPassword");
    randomPassword.select();
    document.execCommand("copy");
    alert("Contraseña aleatoria copiada al portapapeles: " + randomPassword.value);
}


