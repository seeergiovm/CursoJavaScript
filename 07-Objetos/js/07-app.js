//Problema con los objetos

const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

//Los objetos aunque estén declarados con const, se pueden modificar sus propiedades
producto.disponible = false;

console.log(producto)