//Destructuring de arrays

const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
}

//DESTRUCTURING con objetos
const { nombre } = producto;

console.log(nombre);

//DESTRUCTURING CON ARRAYS
const numeros = [10, 20, 30, 40, 50];

const [primero, , tercero] = numeros;

console.log(primero);
console.log(tercero);

const [, , , , quinto] = numeros;

console.log(quinto);

const [, , , ...cuarto] = numeros;

console.log(cuarto);


