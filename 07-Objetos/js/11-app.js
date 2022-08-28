//Funciones en objetos y acceder a sus elementos

//Para acceder a los elementos dentro del objeto hay que utilizar `this.`
const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function () {
        console.log(`El producto ${this.nombre} tiene un precio de ${this.precio}`)
    }
}

producto.mostrarInfo();