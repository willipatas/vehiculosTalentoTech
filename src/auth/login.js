window.onload = (event) => {
    const loginForm = document.getElementById('loginForm');
    const loginMessage = document.getElementById('loginMessage');
    const registrationForm = document.getElementById('registrationForm');
    const registrationMessage = document.getElementById('registrationMessage');
    const apiUrl = 'https://proyecto-vehiculos-talentotech.vercel.app'; 


    if (loginForm) {
        loginForm.addEventListener('submit', async function(event){
            event.preventDefault(); // Prevenir que se envie el formulario de manera tradicional.

            const username = document.getElementById('empleado_id').value;
            const password = document.getElementById('contrasena').value;
            
            try {
                const response = await fetch(`${apiUrl}/api/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({"empleado_id": username, "contrasena": password}),
                });

                const data = await response.json();
                console.log(data);
                const encodeData = btoa(JSON.stringify(data));
                console.log(encodeData);

                if (response.ok) {
                    loginMessage.textContent = 'Login Exitoso';
                    loginMessage.style.color = 'green';
                    window.location.href = `/pages/dashboard.html#${encodeData}`;
                } else {
                    loginMessage.textContent = data.message || 'Error en el Login';
                    loginMessage.style.color = 'red';
                }
            } catch (error) {
                console.log(error);
                loginMessage.textContent = 'Hubo un Error en el Login';
                loginMessage.style.color = 'red';
            }
        });

    } else {
        console.error('Formulario de login no encontrado.');
    }

        registrationForm.addEventListener('submit', async function(event){
            event.preventDefault(); // Prevenir que se envie el formulario de manera tradicional.

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
