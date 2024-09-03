const imageArray = ['Multimedia/bmw2.jpg',
    'https://http2.mlstatic.com/D_NQ_NP_2X_735352-MCO77496135152_072024-F.webp', 
    'https://http2.mlstatic.com/D_NQ_NP_2X_800476-MCO77495803210_072024-F.webp', 
    'https://http2.mlstatic.com/D_NQ_NP_2X_629249-MCO77496085640_072024-F.webp',
    'https://http2.mlstatic.com/D_NQ_NP_2X_991906-MCO77495793514_072024-F.webp'];

const arrayObjects = [
    {imagen:'Multimedia/bmw2.jpg'},
    {imagen: 'https://http2.mlstatic.com/D_NQ_NP_2X_808573-MCO77496085678_072024-F.webp',},
    {imagen: 'https://http2.mlstatic.com/D_NQ_NP_2X_735352-MCO77496135152_072024-F.webp',},
    {imagen: 'https://http2.mlstatic.com/D_NQ_NP_2X_629249-MCO77496085640_072024-F.webp',},
];

const nextImage = () => {
    const image = document.getElementById('imgIdbmw');
    const index = arrayObjects.findIndex(x => x.imagen ===image.src);
    if (index < arrayObjects.length-1)
    {image.src = arrayObjects[index+1].imagen;} 
    else {image.src = arrayObjects[0].imagen;}
};

const previewImage = () => {
    const image = document.getElementById('imgIdbmw');
    const index = imageArray.indexOf(image.src);
    if (index > 0)
    {image.src = imageArray[index-1];} 
    else {image.src = imageArray[imageArray.length-1];}
};

/* jaguar */

const imageArray2 = ['Multimedia/png-jaguar.png',
    'https://assets.choosemycar.com/vehicles/large/5966457_141_8064_vehicle-5966457-001-20240507-161901-c16ad66082b70bb28ac768b730a510f0261837ddb81449eccfc2e4d9d900928d.jpg', 
    'https://i.pinimg.com/originals/dd/e3/17/dde317a9b5a57bd615a81bef7d0658bf.jpg', 
    'https://estaticos.elperiodico.com/resources/jpg/2/3/1525433983232.jpg',
    'https://massinicars.com/26539-large_default/jaguar-xf-30d-v6-300ps-rsport-auto.jpg'];

const arrayObjects2 = [
    {imagen:'Multimedia/png-jaguar.png'},
    {imagen: 'https://massinicars.com/26539-large_default/jaguar-xf-30d-v6-300ps-rsport-auto.jpg',},
    {imagen: 'https://assets.choosemycar.com/vehicles/large/5966457_141_8064_vehicle-5966457-001-20240507-161901-c16ad66082b70bb28ac768b730a510f0261837ddb81449eccfc2e4d9d900928d.jpg',},
    {imagen: 'https://estaticos.elperiodico.com/resources/jpg/2/3/1525433983232.jpg',},
];

const nextImage2 = () => {
    const image = document.getElementById('imgIdjaguar');
    const index = arrayObjects2.findIndex(x => x.imagen ===image.src);
    if (index < arrayObjects2.length-1) 
    {image.src = arrayObjects2[index+1].imagen;} 
    else { image.src = arrayObjects2[0].imagen;}
};

const previewImage2 = () => {
    const image = document.getElementById('imgIdjaguar');
    const index = imageArray2.indexOf(image.src);
    if (index > 0)
    {image.src = imageArray2[index-1];} 
    else { image.src = imageArray2[imageArray.length-1];}
};

/* Rolls-Royce*/

const imageArray3 = ['Multimedia/Rolls-Royce2.png',
    'https://img.remediosdigitales.com/196630/shot-5-f78-wraith-dynamic-final_opt/1366_2000.jpg', 
    'https://espirituracer.com/archivos/2022/09/rolls-royce-ghost-black-badge-1.webp', 
    'https://www.elcarrocolombiano.com/wp-content/uploads/2022/09/26092022-INTERIOR-Rolls-Royce-Ghost-Black-Badge-2-750x518.jpg',
    'https://images.prestigeonline.com/wp-content/uploads/sites/8/2022/05/14155153/screenshot-2022-05-11-at-5-34-00-pm-1024x642-1.jpeg'];
const arrayObjects3 = [
    {imagen:'Multimedia/Rolls-Royce2.png' },
    { imagen: 'https://images.prestigeonline.com/wp-content/uploads/sites/8/2022/05/14155153/screenshot-2022-05-11-at-5-34-00-pm-1024x642-1.jpeg',},
    { imagen: 'https://img.remediosdigitales.com/196630/shot-5-f78-wraith-dynamic-final_opt/1366_2000.jpg',},
    { imagen: 'https://www.elcarrocolombiano.com/wp-content/uploads/2022/09/26092022-INTERIOR-Rolls-Royce-Ghost-Black-Badge-2-750x518.jpg',},
];
const nextImage3 = () => {
    const image = document.getElementById('imgIdrollsroyce');
    const index = arrayObjects3.findIndex(x => x.imagen ===image.src);
    if (index < arrayObjects3.length-1) 
        {image.src = arrayObjects3[index+1].imagen;} 
    else {image.src = arrayObjects3[0].imagen;}
};
const previewImage3 = () => {
    const image = document.getElementById('imgIdrollsroyce');
    const index = imageArray3.indexOf(image.src);
    if (index > 0) { image.src = imageArray3[index-1];}
    else { image.src = imageArray3[imageArray.length-1];}
};


/* Formulario */

window.addEventListener('load', () => {
    const form = document.getElementById('registrationForm');
    form.addEventListener("submit",(event)=>{try {
        const name = document.getElementById('inputName').value;
        const lastName = document.getElementById('inputLastName').value;
        const email = document.getElementById('inputEmail').value;
        const message = document.getElementById('textMessage').value;
    
        if(name === '' || lastName === '' || email === '' || message == ""){
            alert('Por favor rellene los campos.');
        } else {
            const contactMessage = {
                name,
                lastName,
                email,
                message
            };
            console.log(contactMessage);
            alert('Su mensaje ha sido enviado con Exito.')
        }
    } catch (error) {
        console.error(error);
    }});});

/* Confirmación en el formulario de que las contraseñas escritas son las mismas */

    document.addEventListener("DOMContentLoaded", function() {
        const form = document.querySelector("form");
        const password = document.getElementById("password");
        const confirmPassword = document.getElementById("confirm-password");
        const errorMessage = document.getElementById("error-message");

        form.addEventListener("submit", function(event) {
            // Verificar si las contraseñas coinciden
            if (password.value !== confirmPassword.value) {
                event.preventDefault(); // Evita que el formulario se envíe
                errorMessage.style.display = "block"; // Muestra el mensaje de error
            } else {
                errorMessage.style.display = "none"; // Oculta el mensaje de error
            }
        });
    });