//Añadir nuevos elementos final y principio del array

const meses = [];

//Definir un producto
const producto = {
    nombre: "Monitor",
    precio: 400
}

const producto2 = {
    nombre: "Celular",
    precio: 200
}

//push --> agrega elemento al final de un arreglo
meses.push(producto);
meses.push(producto2);

const producto3 = {
    nombre: "Torre",
    precio: 300
}

//unshift --> añade elemento al principio del array
meses.unshift(producto3)


console.table(meses);