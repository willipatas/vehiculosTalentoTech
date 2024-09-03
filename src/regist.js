registerForm.addEventListener('submit', async function(event){

    event.preventDefault(); // Prevenir que se envie el formulario de manera tradicional.

    const newUserName = document.getElementById('new_username').value;
    const newPassword = document.getElementById('new_password').value;
    const newEmail = document.getElementById('email').value;

    try {
        const response = await fetch(`${apiUrl}/user/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userName: newUserName, password: newPassword, email: newEmail}),
        });

        const data = await response.json();
        console.log(data);

        if (response.ok) {
            registerMessage.textContent = 'Registro Exitoso';
            registerMessage.style.color = 'green'
        } else {
            registerMessage.textContent = data.message || 'Error en el Registro';
            registerMessage.style.color = 'red'
        }
    } catch (error) {
        console.log (error)
        registerMessage.textContent = 'Hubo un Error en el Registro';
        registerMessage.style.color = 'red'
    }

});