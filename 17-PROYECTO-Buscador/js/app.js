//Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

const resultado = document.querySelector('#resultado');
//Variable para dterminar si se ha seleccionado alguna categoría
let busqActiva = false;

const max = new Date().getFullYear();
const min = max - 10;

//Generar un objeto con la búsqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
}

//Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(); //muestra los automoviles

    llenarSelect();
});

//Event listener para los select de búsqueda
marca.addEventListener('change', (e) => {
    datosBusqueda.marca = e.target.value
    busqActiva = true;
    filtrarAuto();
});
year.addEventListener('change', (e) => {
    datosBusqueda.year = parseInt(e.target.value)
    busqActiva = true;
    filtrarAuto();
});
minimo.addEventListener('change', (e) => {
    datosBusqueda.minimo = e.target.value
    busqActiva = true;
    filtrarAuto();
});
maximo.addEventListener('change', (e) => {
    datosBusqueda.maximo = e.target.value
    busqActiva = true;
    filtrarAuto();
});
puertas.addEventListener('change', (e) => {
    datosBusqueda.puertas = parseInt(e.target.value)
    busqActiva = true;
    filtrarAuto();
});
transmision.addEventListener('change', (e) => {
    datosBusqueda.transmision = e.target.value
    busqActiva = true;
    filtrarAuto();
});
color.addEventListener('change', (e) => {
    datosBusqueda.color = e.target.value;
    busqActiva = true;
    filtrarAuto();
});

//Funciones
function mostrarAutos(autosBusqueda) {
    limpiarHTML(); //Elimina el HTML previo

    if (busqActiva) {
        autosBusqueda.forEach(auto => {
            const autoHTML = document.createElement('p');

            //Esto es un destructuring
            const { marca, modelo, year, puertas, transmision, precio, color } = auto
            autoHTML.textContent = `
                ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: ${precio}
                - Color: ${color}
            `;

            //insertar en el HTML
            resultado.appendChild(autoHTML);
        });
    } else { //muestra todos antes de hacer alguna busqueda
        autos.forEach(auto => {
            const autoHTML = document.createElement('p');

            //Esto es un destructuring
            const { marca, modelo, year, puertas, transmision, precio, color } = auto
            autoHTML.textContent = `
                ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: ${precio}
                - Color: ${color}
            `;

            //insertar en el HTML
            resultado.appendChild(autoHTML);
        });
    }
}

//Limpiar HTML
function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

//Genera los años del select
function llenarSelect() {

    for (let i = max; i > min; i--) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = `${i}`;
        year.appendChild(opcion);
    }
}

//Funcion que filtra en base a la busqueda
function filtrarAuto() {
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(
        filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);

    if (resultado.length) {
        mostrarAutos(resultado);
    } else {
        noResultado();
    }
}

function noResultado() {

    limpiarHTML();

    const res = document.createElement('p');
    res.textContent = 'No se encontraron resultados en su búsqueda';
    res.classList.add('alerta', 'error');
    resultado.appendChild(res);
}

function filtrarMarca(auto) {
    if (datosBusqueda.marca) {
        return auto.marca === datosBusqueda.marca;
    }
    return auto;
}

function filtrarYear(auto) {

    if (datosBusqueda.year) {
        return auto.year === datosBusqueda.year;
    }
    return auto;
}

function filtrarMinimo(auto) {
    if (datosBusqueda.minimo) {
        return auto.precio >= datosBusqueda.minimo;
    }
    return auto;
}

function filtrarMaximo(auto) {
    if (datosBusqueda.maximo) {
        return auto.precio <= datosBusqueda.maximo;
    }
    return auto;
}

function filtrarPuertas(auto) {
    if (datosBusqueda.puertas) {
        return auto.puertas === datosBusqueda.puertas;
    }
    return auto;
}

function filtrarTransmision(auto) {
    if (datosBusqueda.transmision) {
        return auto.transmision === datosBusqueda.transmision;
    }
    return auto;
}

function filtrarColor(auto) {
    if (datosBusqueda.color) {
        return auto.color === datosBusqueda.color;
    }
    return auto;
}