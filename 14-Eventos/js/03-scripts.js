//Eventos sobre los inputs

const busqueda = document.querySelector('.busqueda');

busqueda.addEventListener('input', (evt) => {
    //evt.target.value --> permite ver lo que se está escribiendo en el input
    console.log(evt.target.value);
});

//EVENTOS
//blur --> cuando clikas y sales de un input, muy util para validaciones de forms
//copy --> cuando copias
//paste --> cuando pegas