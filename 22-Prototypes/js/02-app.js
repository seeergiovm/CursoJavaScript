//El problema de no usar prototypes
/*En un proyecto grande pueden existir muchas funciones que no especifiquen
bien cual es su uso y se utilicen de manera errónea, esto lo soluciona el prototype*/
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const juan = new Cliente('Juan', 5000);

function formatearCliente(cliente) {
    const { nombre, saldo } = cliente;

    return `El cliente ${nombre} tiene un saldo de ${saldo}`;
}

function formatearEmpresa(empresa) {
    const { nombre, saldo, categoria } = empresa;

    return `El cliente ${nombre} tiene un saldo de ${saldo}, y su categoría es
    ${categoria}`;
}

console.log(formatearCliente(juan));

function Empresa(nombre, saldo, categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const CCJ = new Empresa('Codigo con Juan', 4000, 'Cursos');

console.log(formatearEmpresa(CCJ));