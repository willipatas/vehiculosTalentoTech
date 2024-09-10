/* Confirmación en el formulario de que las contraseñas escritas son las mismas */

    document.addEventListener("DOMContentLoaded", function() {
        const form = document.querySelector("form");
        const contrasena = document.getElementById("contrasena");
        const confirmContrasena = document.getElementById("confirmContrasena");
        const errorMessage = document.getElementById("error-message");

        form.addEventListener("submit", function(event) {
            // Verificar si las contraseñas coinciden
            if (contrasena.value !== confirmContrasena.value) {
                event.preventDefault(); // Evita que el formulario se envíe
                errorMessage.style.display = "block"; // Muestra el mensaje de error
            } else {
                errorMessage.style.display = "none"; // Oculta el mensaje de error
            }
        });
    });

    // Script para el cierre de sesión
    document.addEventListener('DOMContentLoaded', () => {
        const logoutLink = document.getElementById('logoutLink');
    
        if (logoutLink) {
            logoutLink.addEventListener('click', (event) => {
                event.preventDefault(); // Previene el comportamiento por defecto del enlace
    
                // Elimina el token del almacenamiento local
                localStorage.removeItem('token');
    
                // Redirige al usuario a la página de inicio de sesión
                window.location.href = '/index.html'; 
            });
        }
    });