//for ... of
//Itera sobre arrays
const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar'];

const carrito = [
    { nombre: 'Monitor de 30 pulgadas', precio: 300 },
    { nombre: 'Monitor de 40 pulgadas', precio: 350 },
    { nombre: 'Monitor de 20 pulgadas', precio: 390 },
    { nombre: 'Monitor de 250 pulgadas', precio: 700 },
    { nombre: 'Monitor de 310 pulgadas', precio: 100 },
    { nombre: 'Monitor de 320 pulgadas', precio: 950 },
];

//Para recorrer arrays me parece la más comoda
for (let pendiente of pendientes) {
    console.log(pendiente);
}

for (let producto of carrito) {
    console.log(producto.nombre)
}