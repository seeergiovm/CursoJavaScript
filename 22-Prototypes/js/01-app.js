//Object literal
const cliente = {
    nombre: 'Juan'
}

console.log(cliente)


//Object constructor: objeto reutilizable
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const juan = new Cliente('Juan', 5000);

console.log(juan);