window.onload = (event) => {
    const loginForm = document.getElementById('loginForm');
    const loginMessage = document.getElementById('loginMessage');
    const apiUrl = 'http://localhost:3000'; 

    // Asegúrate de que loginForm existe antes de agregar el event listener
    if (loginForm) {
        loginForm.addEventListener('submit', async function(event){
            event.preventDefault(); // Prevenir que se envie el formulario de manera tradicional.

            const username = document.getElementById('empleado_id').value;
            const password = document.getElementById('contrasena').value;
            console.log(username, password);
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
                    window.location.href = `dashboard.html#${encodeData}`;
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
};
