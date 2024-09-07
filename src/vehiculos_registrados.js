window.onload = (event) => {
    loadVehiculosRegistrados();

    const boton_crear_cliente = document.getElementById('boton_crear_vehiculo');

    boton_crear_cliente.addEventListener('click', function(event){
        window.location.href = '../panel_vehículos/crear_vehiculos.html';
    });
};

const apiUrl = 'http://localhost:3000'; 

// Función para cargar la información de vehículos registrados de la base de datos
async function loadVehiculosRegistrados() {
    try {
        const response = await fetch(`${apiUrl}/vehiculos_registrados`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const vehiculos_registrados = await response.json();
        console.log(vehiculos_registrados);

        const tableBody = document.getElementById('tabla_vehiculos_registrados');
        tableBody.innerHTML = '';

        vehiculos_registrados.forEach(vehiculo => {
            const row = document.createElement('tr');

            const idCell = document.createElement('td');
            idCell.textContent = vehiculo.id;

            const marcaCell = document.createElement('td');
            marcaCell.textContent = vehiculo.marca;

            const modeloCell = document.createElement('td');
            modeloCell.textContent = vehiculo.modelo;

            const anioCell = document.createElement('td');
            anioCell.textContent = vehiculo.anio;

            const colorCell = document.createElement('td');
            colorCell.textContent = vehiculo.color;

            const tipo_motorCell = document.createElement('td');
            tipo_motorCell.textContent = vehiculo.tipo_motor;

            const precio_alquiler_diarioCell = document.createElement('td');

            // Aplicamos el formato de moneda COP a precio_alquiler_diario
            let precioFormateado = new Intl.NumberFormat('es-CO', {
                style: 'currency',
                currency: 'COP'
            }).format(vehiculo.precio_alquiler_diario);

            precio_alquiler_diarioCell.textContent = precioFormateado;

            // Añadimos las celdas a la fila
            row.appendChild(idCell);
            row.appendChild(marcaCell);
            row.appendChild(modeloCell);
            row.appendChild(anioCell);
            row.appendChild(colorCell);
            row.appendChild(tipo_motorCell);
            row.appendChild(precio_alquiler_diarioCell);

            // Añadimos la fila al cuerpo de la tabla
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
