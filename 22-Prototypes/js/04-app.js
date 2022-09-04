//Heredar un prototype

function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function () {
    let tipo;

    if (this.saldo > 10000) {
        tipo = 'Gold'
    } else if (this.saldo > 5000) {
        tipo = 'Platinum'
    } else {
        tipo = 'Normal'
    }
    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function () {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: 
    ${this.tipoCliente()}`;
}

Cliente.prototype.retiraSaldo = function (retira) {
    this.saldo -= retira;
}



function Persona(nombre, saldo, telefono) {
    //heredar en el constructor
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
}

//Heredar las funciones de Cliente a Persona
Persona.prototype = Object.create(Cliente.prototype);

Persona.prototype.constructor = Cliente;

//Instanciarlo
const javi = new Persona('Javi', 5000, 690009088);
console.log(javi)


Persona.prototype.mostrarTelefono = function () {
    return `El teléfono de esta persona es ${this.telefono}`;
}

console.log(javi.mostrarTelefono());