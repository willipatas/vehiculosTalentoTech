window.onload = (event) => {
    const idActualizarCliente = getQueryParams('id');
    console.log(idActualizarCliente);
    
};

const apiUrl = 'http://localhost:3000';


function getQueryParams(param) {
    const urlParams = new URLSearchParams(window.location.search);

    return urlParams.get(param);
};



async function actualizarCliente(id) {
    try {
        const response = await fetch(`${apiUrl}/clientes_registrados/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const clientes_registrados = await response.json();
        return categories[0];
    } catch (error) {
        console.error(error);
    }
};


window.onload = async (event) => {
    const idActualizarCliente = getQueryParams('id');
    const actualizarCliente = await actualizarCliente(idActualizarCliente);
    const idcliente = document.getElementById('id');
    const nombre = document.getElementById('nombre_cliente');
    const correo = document.getElementById('correo_cliente');
    const telefono = document.getElementById('telefono_cliente');
    const direccion = document.getElementById('direccion_cliente');
    const ciudad = document.getElementById('ciudad_cliente');
    const contrasena = document.getElementById('contrasena');

    idcliente = actualizarCliente.id;
    nombre = actualizarCliente.nombre_cliente;
    correo = actualizarCliente.correo_cliente;
    telefono = actualizarCliente.telefono_cliente;
    direccion = actualizarCliente.direccion_cliente;
    ciudad = actualizarCliente.ciudad_cliente;
    contrasena = actualizarCliente.contrasena;

};

const apiUrl = 'http://localhost:3000'; 

function getQueryParams(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
};



