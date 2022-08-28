//ArrayMethods --> .some -- Compueba que algun objeto de un array cumpla la 
// condicion, devuelve booleano
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//Comprobar si un valor existe en un array

meses.forEach((mes) => {
    if (mes == 'Enero') {
        console.log('Enero si existe');
    }

})

//includes --> devuelve un bool diciendo si existe el parámetro en el array
//(no soporta arrays de objetos)
const resultado = meses.includes('Enero');
console.log(resultado);

//En un array de objetos se utiliza .some
//(Soporta ambos)
const existe = carrito.some((producto) => {
    return producto.nombre === 'Celular'
})

console.log(existe)

//En un arreglo tradicional con .some
const existe2 = meses.some((mes) => {
    return mes === 'Febrero'
})

console.log(existe2)