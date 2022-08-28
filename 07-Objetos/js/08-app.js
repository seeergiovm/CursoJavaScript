//Congelar un objeto para no poder modificarlo

//use strict --> Si se añade, se regulan las normas más estrictas, (se soluciona lo de los obj p.ej)
"use strict";


const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

//freeze --> hace que se comporte el objeto realmente como un const
Object.freeze(producto);

//da error, 
//producto.imagen = "imagen.jpg"

console.log(producto)

console.log(Object.isFrozen(producto))
