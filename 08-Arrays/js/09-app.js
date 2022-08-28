//.forEach para iterar un array

const carrito = [
    { nombre: 'Monitor de 30 pulgadas', precio: 300 },
    { nombre: 'Monitor de 40 pulgadas', precio: 350 },
    { nombre: 'Monitor de 20 pulgadas', precio: 390 },
    { nombre: 'Monitor de 250 pulgadas', precio: 700 },
    { nombre: 'Monitor de 310 pulgadas', precio: 100 },
    { nombre: 'Monitor de 320 pulgadas', precio: 950 },
]
for (let i = 0; i < carrito.length; i++) {
    console.log(`${carrito[i].nombre} con precio de ${carrito[i].precio}`);
}

console.log("----------")

//forEach --> metodo para recorrer un array
carrito.forEach(function (producto) {
    console.log(`${producto.nombre} con precio de ${producto.precio}`);
});