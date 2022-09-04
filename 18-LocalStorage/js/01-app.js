//Primeros pasos con local Storage: almacenando datos

localStorage.setItem('nombre', 'Pepe');
//En el navegador en el inspector, en Aplication --> Local Storage se puede observar

//Local storage solo almacena strings
//Forma de almacenar objetos,arrays... convirtiendolos en strings
const producto = {
    nombre: "Monitor 24 Pulgadas",
    precio: 300
}

const productoString = JSON.stringify(producto);
console.log(productoString);
localStorage.setItem('producto', productoString);

const meses = ['enero', 'febrero', 'marzo'];
localStorage.setItem('meses', JSON.stringify(meses));

sessionStorage.setItem('nombre', 'Juana');