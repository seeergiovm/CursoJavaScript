//agregar o eliminar propiedades de un objeto

const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
}

//Agregar propiedad
producto.imagen = "imagen.jpg"

//Eliminar propiedad
delete producto.disponible;
console.log(producto)