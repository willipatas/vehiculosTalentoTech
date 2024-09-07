window.onload = (event) => {
    const encodeData = window.location.hash.substring(1);
    const data = JSON.parse(atob(encodeData));
    console.log(data);
};

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