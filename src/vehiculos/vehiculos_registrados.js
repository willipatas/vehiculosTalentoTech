window.onload = (event) => {
    loadVehiculosRegistrados();
    loadAlquileres();
    loadOptionsForAlquilerForm(); // Llamada a la nueva función para llenar los select

    // Obtener el botón para crear un vehículo
    const boton_crear_vehiculo = document.getElementById('boton_crear_vehiculo');
    // Verificar si el botón existe antes de añadir el listener
    if (boton_crear_vehiculo) {
        boton_crear_vehiculo.addEventListener('click', function(event){
            window.location.href = '../panel_vehículos/crear_vehiculos.html';
        });
    }

    // Obtener el botón para crear un alquiler
    const boton_crear_alquiler = document.getElementById('boton_crear_alquiler');
    // Verificar si el botón existe antes de añadir el listener
    if (boton_crear_alquiler) {
        boton_crear_alquiler.addEventListener('click', function(event){
            window.location.href = '/pages/panel_alquileres/crear_alquiler.html';
        });
    }
};


const apiUrl = 'https://proyecto-vehiculos-talentotech.vercel.app';

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

// Función para cargar la información de alquileres de la base de datos
async function loadAlquileres() {
    try {
        const response = await fetch(`${apiUrl}/alquileres`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const alquileres = await response.json();
        console.log(alquileres);

        const tableBody = document.getElementById('tabla_vehiculos_alquilados');
        tableBody.innerHTML = '';

        alquileres.forEach(alquiler => {
            const row = document.createElement('tr');

            const idCell = document.createElement('td');
            idCell.textContent = alquiler.id_alquiler;

            const nombreClienteCell = document.createElement('td');
            nombreClienteCell.textContent = alquiler.nombre_cliente;

            const vehiculoCell = document.createElement('td');
            vehiculoCell.textContent = alquiler.vehiculo_alquilado;

            const nombreEmpleadoCell = document.createElement('td');
            nombreEmpleadoCell.textContent = alquiler.nombre_empleado;

            const fechaInicioCell = document.createElement('td');
            fechaInicioCell.textContent = new Date(alquiler.fecha_inicio).toLocaleDateString();

            const fechaFinCell = document.createElement('td');
            fechaFinCell.textContent = new Date(alquiler.fecha_fin).toLocaleDateString();

            // Añadimos las celdas a la fila
            row.appendChild(idCell);
            row.appendChild(nombreClienteCell);
            row.appendChild(vehiculoCell);
            row.appendChild(nombreEmpleadoCell);
            row.appendChild(fechaInicioCell);
            row.appendChild(fechaFinCell);

            // Añadimos la fila al cuerpo de la tabla
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error(error);
    }
}

// Función para cargar las listas desplegables en el formulario de alquiler
async function loadOptionsForAlquilerForm() {
    await loadOptions('clientes', 'usuario_id');
    await loadOptions('vehiculos', 'vehiculo_id');
    await loadOptions('users', 'vendedor_id');
}

// Función para cargar opciones en las listas desplegables
async function loadOptions(endpoint, selectId) {
    try {
        const response = await fetch(`${apiUrl}/${endpoint}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const items = await response.json();

        const select = document.getElementById(selectId);
        select.innerHTML = '<option value="">Seleccione</option>'; // Opción predeterminada

        items.forEach(item => {
            const option = document.createElement('option');
            option.value = item.id;
            option.textContent = item.nombre_cliente || `${item.marca} ${item.modelo}`; // Ajusta según el endpoint
            select.appendChild(option);
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
