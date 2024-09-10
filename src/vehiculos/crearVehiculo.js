window.onload = (event) => {
    const apiUrl = 'http://localhost:3000'; 
    const clienteForm = document.getElementById('vehiculoForm');
    

    clienteForm.addEventListener('submit', async function (event) {
        event.preventDefault();

        const marca = document.getElementById('marca').value;
        const modelo = document.getElementById('modelo').value;
        const anio = document.getElementById('anio').value; 
        const color = document.getElementById('color').value; 
        const tipo_motor = document.getElementById('tipo_motor').value; 
        const precio_alquiler_diario = document.getElementById('precio_alquiler_diario').value; 

        try {
            const response = await fetch(`${apiUrl}/nuevo_vehiculo`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({"marca": marca, "modelo": modelo, "anio": anio, "color": color, "tipo_motor": tipo_motor, "precio_alquiler_diario": precio_alquiler_diario}),
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