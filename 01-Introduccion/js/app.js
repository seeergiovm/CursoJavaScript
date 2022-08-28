console.time('Hola');

const nombre = prompt('cual es tu nombre??');

//Toma el nombre y lo muestra en pantalla
document.querySelector('.contenido').innerHTML = `${nombre} está aprendiendo JavaScript moderno`;

//console.error("Algo salió mal");

// Sirve para poner una marca de inicio y otra final para ver cuanto tarda en ejecutarse el
// código, útil para comparar códigos y optimizar
console.timeEnd('Hola');

//No son necesarios los ;