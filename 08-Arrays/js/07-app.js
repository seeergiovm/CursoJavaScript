//Eliminar elementos con splice

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

const producto4 = {
    nombre: "Raton",
    precio: 50
}

carrito.push(producto);
carrito.push(producto2);
carrito.unshift(producto3);
carrito.push(producto4);

console.table(carrito);

//splice --> Eliminar uno o varios elemento en concreto del array 
//(Parametros:: 1º desde que indice quieres borrar --- 2º nº elementos)
carrito.splice(1, 1);
console.table(carrito);

//pop --> Eliminar ultimo elemento del array
carrito.pop();

console.table(carrito);

//shift --> Eliminar elemento del inicio del array
carrito.shift();

console.table(carrito);

