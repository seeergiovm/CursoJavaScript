//METHODS --> REPLACE, SLICE Y SUBSTRING

const producto = "Monitor 20 pulgadas";

//replace --> sustituye
console.log(producto.replace('pulgadas', '"'));

//slice --> corta una 'rebanada' del string
console.log(producto.slice(0, 3));
console.log(producto.slice(8));

//substring --> igual que slice pero mejorado
console.log(producto.substring(0, 10));

const usuario = "Pepe";

//charAt --> devuelve el carácter en esa posición
console.log(usuario.charAt(0));