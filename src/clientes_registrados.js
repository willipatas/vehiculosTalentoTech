window.onload = (event) => {
    //const encodeData = window.location.hash.substring(1);
    //const data = JSON.parse(atob(encodeData));
    //console.log(data);
    loadEmpleadosRegistrados();

    const crearCliente = document.getElementById('crear_cliente');

    crearCliente.addEventListener('click', function(event){
        window.location.href = '../panel_empleados/crearCliente.html';
    });
        
};

const apiUrl = 'http://localhost:3000'; 

// Función para cargar la información de empleados registrados de la base de datos

async function loadEmpleadosRegistrados() {
    try {
        const response = await fetch(`${apiUrl}/clientes_registrados`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const clientes_registrados = await response.json();
        console.log(clientes_registrados);

        const tableBody = document.getElementById('clientes_registrados');
        tableBody.innerHTML = '';

        clientes_registrados.forEach(clientes_registrados => {
            const row = document.createElement('tr');

            const idCell = document.createElement('td');
            idCell.textContent = clientes_registrados.id;

            const nombre_clienteCell = document.createElement('td');
            nombre_clienteCell.textContent = clientes_registrados.nombre_cliente;

            const correo_clienteCell = document.createElement('td');
            correo_clienteCell.textContent = clientes_registrados.correo_cliente;

            const telefono_clienteCell = document.createElement('td');
            telefono_clienteCell.textContent = clientes_registrados.telefono_cliente;

            const direccion_clienteCell = document.createElement('td');
            direccion_clienteCell.textContent = clientes_registrados.direccion_cliente;

            const ciudad_clienteCell = document.createElement('td');
            ciudad_clienteCell.textContent = clientes_registrados.ciudad_cliente;

            row.appendChild(idCell);
            row.appendChild(nombre_clienteCell);
            row.appendChild(correo_clienteCell);
            row.appendChild(telefono_clienteCell);
            row.appendChild(direccion_clienteCell);
            row.appendChild(ciudad_clienteCell);

            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error(error);
    }
}

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