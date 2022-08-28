//Event Bubbling --> evento que se propaga a los demás

const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titDiv = document.querySelector('.titulo');

//PROBLEMA
/*
cardDiv.addEventListener('click', () => {
    console.log('click en card');
});

infoDiv.addEventListener('click', () => {
    console.log('click en info');
});

titDiv.addEventListener('click', () => {
    console.log('click en titulo');
});
*/

//SOLUCION
cardDiv.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('click en card');
});

infoDiv.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('click en info');
});

titDiv.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('click en titulo');
});

