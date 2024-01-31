document.addEventListener("DOMContentLoaded", function() {
    const generateButton2 = document.getElementById("generateButton2");
    const customPasswordField = document.getElementById("customPassword");
    const saveButton2 = document.getElementById("saveButton2");

    generateButton2.addEventListener("click", function() {
        
    });

    saveButton2.addEventListener("click", function() {
        const passwordToSave = customPasswordField.value;
        if (passwordToSave) {
            // Realizar una solicitud HTTP POST al servidor para guardar la contraseña
            const xhr = new XMLHttpRequest();
            xhr.open("POST", "php/contrasenas_personalizadas_be.php", true);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    alert(xhr.responseText);
                }
            };
            xhr.send("contrasena_personalizada=" + encodeURIComponent(passwordToSave));
        } else {
            alert("No hay contraseña para guardar. Genera una contraseña primero.");
        }
    });
});

function mixAndGenerate() {
    let customPassword = document.getElementById("customPassword").value;

    while (customPassword.length < 12) {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
        const randomIndex = Math.floor(Math.random() * characters.length);
        customPassword += characters.charAt(randomIndex);
    }

    const mixedPassword = mixCharacters(customPassword);
    document.getElementById("customPassword").value = mixedPassword;
}

function mixCharacters(input) {
    const charactersArray = input.split('');
    for (let i = charactersArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [charactersArray[i], charactersArray[j]] = [charactersArray[j], charactersArray[i]];
    }
    return charactersArray.join('');
}

function copyMixedPassword() {
    const customPassword = document.getElementById("customPassword");
    customPassword.select();
    document.execCommand("copy");
    alert("Contraseña aleatoria copiada al portapapeles: " + customPassword.value);
}

