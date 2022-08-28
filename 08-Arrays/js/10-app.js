//.map para iterar un array

const carrito = [
    { nombre: 'Monitor de 30 pulgadas', precio: 300 },
    { nombre: 'Monitor de 40 pulgadas', precio: 350 },
    { nombre: 'Monitor de 20 pulgadas', precio: 390 },
    { nombre: 'Monitor de 250 pulgadas', precio: 700 },
    { nombre: 'Monitor de 310 pulgadas', precio: 100 },
    { nombre: 'Monitor de 320 pulgadas', precio: 950 },
]



//forEach --> metodo para recorrer un array
const array1 = carrito.forEach(function (producto) {
    return `${producto.nombre} con precio de ${producto.precio}`;
});

console.log("----------")

//map --> metodo para recorrer un array. Se diferencia con foreach con que este puede 
// crear nuevos arrays
const array2 = carrito.map(function (producto) {
    return `${producto.nombre} con precio de ${producto.precio}`;
});

console.log(array1)
console.log(array2)