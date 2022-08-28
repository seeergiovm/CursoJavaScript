//Cambiando el CSS con JavaScript

const encabezado = document.querySelector('h1');
console.log(encabezado.style);

encabezado.style.backgroundColor = 'red';
encabezado.style.fontFamily = 'Arial';

//Diferencia de CSS y propiedad style JS: background-color --> backgroundColor


//Es mejor editar clases o id's con JS que hacer el trabajo de CSS como arriba

const card = document.querySelector('.card');

card.classList.add('nueva-clase');
card.classList.remove('nueva-clase');
console.log(card.classList);