window.onload = (event) => {
    const apiUrl = 'https://proyecto-vehiculos-talentotech.vercel.app';
    const alquilerForm = document.getElementById('alquilerForm');
    const registrationMessage = document.getElementById('registrationMessage'); // Mensaje para mostrar el resultado de la operación

    // Cargar datos al cargar la página
    loadClientes();
    loadVehiculos();
    loadEmpleados();

    alquilerForm.addEventListener('submit', async function (event) {
        event.preventDefault();

        // Obtener los valores de los campos del formulario
        const usuario_id = document.getElementById('usuario_id').value;
        const vehiculo_id = document.getElementById('vehiculo_id').value;
        const vendedor_id = document.getElementById('vendedor_id').value;
        const fecha_inicio = document.getElementById('fecha_inicio').value;
        const fecha_fin = document.getElementById('fecha_fin').value;

        try {
            // Enviar los datos del formulario al servidor
            const response = await fetch(`${apiUrl}/Crear_alquiler`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    usuario_id: usuario_id,
                    vehiculo_id: vehiculo_id,
                    vendedor_id: vendedor_id,
                    fecha_inicio: fecha_inicio,
                    fecha_fin: fecha_fin
                }),
            });

            const data = await response.json();

            // Mostrar el mensaje de éxito o error basado en la respuesta del servidor
            if (response.ok) {
                registrationMessage.textContent = 'Alquiler creado con éxito';
                registrationMessage.style.color = 'green';

                // Redirigir después de 2 segundos
                setTimeout(() => {
                    window.location.href = '/pages/panel_alquileres/alquileres.html';
                }, 2000); // 2000 ms = 2 segundos

            } else {
                registrationMessage.textContent = data.message || 'Error al crear el alquiler';
                registrationMessage.style.color = 'red';
            }
        } catch (error) {
            console.log(error);
            registrationMessage.textContent = 'Hubo un error al crear el alquiler';
            registrationMessage.style.color = 'red';
        }
    });

    // Función para cargar clientes
    async function loadClientes() {
        try {
            const response = await fetch(`${apiUrl}/clientes_registrados`);
            if (!response.ok) {
                throw new Error('Error al cargar los clientes');
            }
            const clientes = await response.json();
            const clientesSelect = document.getElementById('usuario_id'); // ID del select en el HTML

            clientes.forEach(cliente => {
                const option = document.createElement('option');
                option.value = cliente.id;
                option.textContent = cliente.nombre_cliente; 
                clientesSelect.appendChild(option);
            });
        } catch (error) {
            console.error(error);
        }
    }

    // Función para cargar vehículos
    async function loadVehiculos() {
        try {
            const response = await fetch(`${apiUrl}/vehiculos_registrados`);
            if (!response.ok) {
                throw new Error('Error al cargar los vehículos');
            }
            const vehiculos = await response.json();
            const vehiculosSelect = document.getElementById('vehiculo_id'); // ID del select en el HTML

            vehiculos.forEach(vehiculo => {
                const option = document.createElement('option');
                option.value = vehiculo.id;
                option.textContent = `${vehiculo.marca} - ${vehiculo.modelo}`; // Ajusta según el formato deseado
                vehiculosSelect.appendChild(option);
            });
        } catch (error) {
            console.error(error);
        }
    }

    // Función para cargar empleados
    async function loadEmpleados() {
        try {
            const response = await fetch(`${apiUrl}/empleados`);
            if (!response.ok) {
                throw new Error('Error al cargar los empleados');
            }
            const empleados = await response.json();
            const empleadosSelect = document.getElementById('vendedor_id'); // ID del select en el HTML

            empleados.forEach(empleado => {
                const option = document.createElement('option');
                option.value = empleado.id;
                option.textContent = empleado.empleado_id; // Ajusta según el nombre de la propiedad
                empleadosSelect.appendChild(option);
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
};
