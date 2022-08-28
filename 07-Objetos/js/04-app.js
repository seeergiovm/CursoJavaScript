//Destructuring de Objetos --> sacar de una estructura

const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
}

//forma antigua
const nombre1 = producto.nombre;
console.log(nombre1);


//DESTRUCTURING
const { nombre } = producto;
const { precio, disponible } = producto;
console.log(nombre);
console.log(precio);