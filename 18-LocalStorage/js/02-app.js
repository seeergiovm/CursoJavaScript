//Consultar elementos del local Storage
const nombre = localStorage.getItem('nombre');

console.log(nombre);

const productoJSON = localStorage.getItem('producto');
//JSON.parse convierte el string al formato que realmente es
console.log(JSON.parse(productoJSON));

const mesesArray2 = localStorage.getItem('meses');
console.log(JSON.parse(mesesArray2));