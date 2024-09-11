window.onload = async (event) => {
    const idActualizarCliente = getQueryParams('id');
    const cliente = await cargarCliente(idActualizarCliente);
    const id = document.getElementById('id');
    const nombre_cliente = document.getElementById('nombre_cliente');
    const correo_cliente = document.getElementById('correo_cliente');
    const telefono_cliente = document.getElementById('telefono_cliente');
    const direccion_cliente = document.getElementById('direccion_cliente');
    const ciudad_cliente = document.getElementById('ciudad_cliente');
    const contrasena = document.getElementById('contrasena');

    id.value = cliente.id;
    nombre_cliente.value = cliente.nombre_cliente;
    correo_cliente.value = cliente.correo_cliente;
    telefono_cliente.value = cliente.telefono_cliente;
    direccion_cliente.value = cliente.direccion_cliente;
    ciudad_cliente.value = cliente.ciudad_cliente;
    contrasena.value = cliente.contrasena;

    actualizarClienteForm.addEventListener('submit', async function (event) {
        event.preventDefault();
        await actualizarCliente(idActualizarCliente, nombre_cliente.value, correo_cliente.value, telefono_cliente.value, direccion_cliente.value, ciudad_cliente.value, contrasena.value);
    });
};

const apiUrl = 'https://proyecto-vehiculos-talentotech.vercel.app';

function getQueryParams(param) {
    const urlParams = new URLSearchParams(window.location.search);

    return urlParams.get(param);
};

async function cargarCliente(id) {
    try {
        const response = await fetch(`${apiUrl}/clientes_registrados/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const clientes_registrados = await response.json();
        return clientes_registrados[0];
    } catch (error) {
        console.error(error);
    }
};

async function actualizarCliente(id, nombre_cliente, correo_cliente, telefono_cliente, direccion_cliente, ciudad_cliente, contrasena) {
    try {
        const response = await fetch(`${apiUrl}/actualizarCliente/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({nombre_cliente, correo_cliente, telefono_cliente, direccion_cliente, ciudad_cliente, contrasena}),
        });
        console.log(response);
            if (response.ok) {
                window.alert('Cliente actualizado exitosamente.');
            } else {
                window.alert('Cliente no actualizado');
            }
    } catch (error) {
        console.error(error);
        window.alert('Tenemos problemas técnicos');
    }
};
