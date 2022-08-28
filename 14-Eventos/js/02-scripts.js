//Eventos con el mouse

const nav = document.querySelector('.navegacion');

//registrar un evento
nav.addEventListener('mouseenter', () => {
    console.log('entrando en en nav')
    nav.style.backgroundColor = 'blue';
})

nav.addEventListener('mouseout', () => {
    console.log('saliendo en en nav')
    nav.style.backgroundColor = 'white';
})

nav.addEventListener('mousedown', () => {
    console.log('entrando en en nav')
    nav.style.backgroundColor = 'green';
})

nav.addEventListener('mouseup', () => {
    console.log('entrando en en nav')
    nav.style.backgroundColor = 'yellow';
})

// mousedown --> similar al click
// click
// dblclick
// mouseup --> cuando sueltas el mouse