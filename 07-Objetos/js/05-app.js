//Objetos dentro de objetos

const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        peso: 10,
        medida: "1m"
    }
}

console.log(producto)

console.log(producto.informacion)
