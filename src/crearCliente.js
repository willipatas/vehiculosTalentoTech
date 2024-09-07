window.onload = (event) => {
    const apiUrl = 'http://localhost:3000'; 
    const clienteForm = document.getElementById('clienteForm');
    

    clienteForm.addEventListener('submit', async function (event) {
        event.preventDefault();

        const nombre_cliente = document.getElementById('nombre_cliente').value;
        const correo_cliente = document.getElementById('correo_cliente').value;
        const telefono_cliente = document.getElementById('telefono_cliente').value; 
        const direccion_cliente = document.getElementById('direccion_cliente').value; 
        const ciudad_cliente = document.getElementById('ciudad_cliente').value; 
        const contrasena = document.getElementById('contrasena').value; 


        try {
            const response = await fetch(`${apiUrl}/nuevo_usuario`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({"nombre_cliente": nombre_cliente, "correo_cliente": correo_cliente, "telefono_cliente": telefono_cliente, "direccion_cliente": direccion_cliente, "ciudad_cliente": ciudad_cliente, "contrasena": contrasena}),
            });

            const data = await response.json();
            console.log(data);
            const encodeData = btoa(JSON.stringify(data));
            console.log(encodeData);

            if (response.ok) {
                registrationMessage.textContent = 'Registro Exitoso';
                registrationMessage.style.color = 'green';
            } else {
                registrationMessage.textContent = data.message || 'Error en el registro';
                registrationMessage.style.color = 'red';
            }
        } catch (error) {
            console.log(error);
            registrationMessage.textContent = 'Hubo un Error en el registro';
            registrationMessage.style.color = 'red';
        }
    });
        
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