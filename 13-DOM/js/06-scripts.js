//Modificar textos o Imagenes con JS

const encabezado = document.querySelector('.contenido-hero h1');

console.log(encabezado)

console.log(encabezado.innerText); //si en el CSS esta hidden, no lo encuentra
console.log(encabezado.textContent); // este si, es mejor
console.log(encabezado.innerHTML); //se trae el HTML

document.querySelector('.contenido-hero h1').textContent = 'nuevo Heading';


//Modificar imagen
const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg';
console.log(imagen)