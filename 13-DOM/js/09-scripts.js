//Eliminar elementos en el DOM

const primerEnlace = document.querySelector('a');
//primerEnlace.remove();

console.log(primerEnlace)


//Eliminar desde el padre
const navegacion = document.querySelector('.navegacion');

console.log(navegacion.removeChild(navegacion.children[2]));
