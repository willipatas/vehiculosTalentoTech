window.onload = (event) => {

    const registrationMessage = document.getElementById('registrationMessage');

    loadEmpleadosRegistrados();

    const boton_crear_cliente = document.getElementById('boton_crear_cliente');
    

    boton_crear_cliente.addEventListener('click', function(event){
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

            // Botones Acción de Modificar y eliminar
            const accionesCell = document.createElement('td');

            const eliminarBoton = document.createElement('button');
            eliminarBoton.textContent = 'Eliminar';
            eliminarBoton.classList.add('eliminar_boton');
            eliminarBoton.onclick = () => eliminarCliente(clientes_registrados.id, clientes_registrados.nombre_cliente);

            const modificarBoton = document.createElement('button');
            modificarBoton.textContent = 'Modificar';
            modificarBoton.classList.add('modificar_boton');
            modificarBoton.onclick = () => modificarCliente(clientes_registrados.id);

            accionesCell.appendChild(modificarBoton);
            accionesCell.appendChild(eliminarBoton);

            row.appendChild(idCell);
            row.appendChild(nombre_clienteCell);
            row.appendChild(correo_clienteCell);
            row.appendChild(telefono_clienteCell);
            row.appendChild(direccion_clienteCell);
            row.appendChild(ciudad_clienteCell);
            row.appendChild(accionesCell);

            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error(error);
    }
}

async function eliminarCliente(id, nombre_cliente) {
    
    // Mostrar una ventana de confirmación antes de proceder
    const confirmacion = confirm(`¿Estás seguro de que deseas eliminar al cliente: ${nombre_cliente}?`);

    // Si el usuario presiona "Cancelar", no se hace nada
    if (!confirmacion) {
        return;
    }

    try {
        const response = await fetch(`${apiUrl}/borrarCliente/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        const data = await response.json();

        if (response.ok) {
            registrationMessage.textContent = 'Cliente eliminado exitosamente.';
            registrationMessage.style.color = 'green';

            // Recargar la página después de un breve intervalo
            setTimeout(() => {
                window.location.reload(); 
            }, 1000); // Recarga la página después de 1 segundo
        } else {
            registrationMessage.textContent = data.message || 'Error al eliminar el cliente';
            registrationMessage.style.color = 'red';
        }
    } catch (error) {
        console.log(error);
        registrationMessage.textContent = 'Tenemos problemas técnicos';
        registrationMessage.style.color = 'red';
    }
}

function modificarCliente(id) {
    window.location.href = `actualizarCliente.html?id=${id}`;
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