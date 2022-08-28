//ArrayMethods --> .findIndex -- Encuentra el índice del valor que busques

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

meses.forEach((mes, i) => {
    if (mes === 'Abril') {
        console.log(`Encontrado en el mes ${i}`)
    }
})

const indice = meses.findIndex(mes => mes === 'Abril')
console.log(indice)

const indice2 = meses.findIndex(mes => mes === 'Diciembre')
console.log(indice2)

//Encontrar indice arreglo de objetos
//findIndex si existen varias coincidencias se queda con el índice de la primera que encuentra
const indice3 = carrito.findIndex(producto => producto.precio === 100);
console.log(indice3)