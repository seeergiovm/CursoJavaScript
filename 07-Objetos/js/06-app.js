//Destructuring de objetos anidados

const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        peso: 10,
        medida: "1m"
    }
}


const { nombre, informacion: { peso } } = producto;

console.log(nombre)

console.log(peso)