window.onload = (event) => {
    const loginForm = document.getElementById('inicio_usuarios');
    const loginMessage = document.getElementById('loginMessage');

    loginForm.addEventListener('submit', async function(event){

        event.preventDefault(); // Prevenir que se envie el formulario de manera tradicional.

        const username = document.getElementById('empleado_id').value;
        const password = document.getElementById('contrasena').value;

        try {
            const response = await fetch('http://localhost:3000/api/login', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({"empleado_id": username, "contrasena": password}),
            });

            const data = await response.json();
            console.log(data);
            const encodeData = btoa(JSON.stringify(data));
            console.log(encodeData);

            if (response.ok) {
                loginMessage.textContent = 'Login Exitoso';
                loginMessage.style.color = 'green';
    //            window.location.href = `/dashboard.html#${encodeData}`;
            } else {
                loginMessage.textContent = data.message || 'Error en el Login';
                loginMessage.style.color = 'red'
            }
        } catch (error) {
            console.log (error)
            loginMessage.textContent = 'Hubo un Error en el Login';
            loginMessage.style.color = 'red'
        }

    });

};