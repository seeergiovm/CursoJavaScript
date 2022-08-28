//CORTAR ESPACIOS EN BLANCO
const producto = "       Monitor 20 pulgadas            ";

console.log(producto);
console.log(producto.length);

console.log(producto.trimStart());
console.log(producto.trimEnd());

//ambas direcciones
console.log(producto.trim().length);