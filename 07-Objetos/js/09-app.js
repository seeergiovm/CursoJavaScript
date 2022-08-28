//Sellar un objeto

//use strict --> Si se añade, se regulan las normas más estrictas, (se soluciona lo de los obj p.ej)
//proporciona metodos: freeze y seal
"use strict";


const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

//seal --> no se pueden agregar ni eliminar propiedades pero si modificar las que hay
Object.seal(producto);

//da error, 
//producto.imagen = "imagen.jpg"

console.log(producto)

console.log(Object.isSealed(producto))