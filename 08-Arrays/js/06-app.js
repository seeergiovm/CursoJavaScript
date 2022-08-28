//Crear array con spread operator

const carrito = [];

//Definir un producto
const producto = {
    nombre: "Monitor",
    precio: 400
}

const producto2 = {
    nombre: "Celular",
    precio: 200
}

const producto3 = {
    nombre: "Torre",
    precio: 300
}

let resultado;

resultado = [...carrito, producto];

resultado = [...resultado, producto3];

console.table(resultado);