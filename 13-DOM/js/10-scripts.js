//Generar HTML desde JavaScript

const enlace = document.createElement('a');

enlace.textContent = "Nuevo enlace";
enlace.href = "/nuevo-enlace";
enlace.target = "_blank";

console.log(enlace);

//Seleccionar navegacion

const nav = document.querySelector('.navegacion');
//appendChild --> añade un elemento hijo
nav.appendChild(enlace);

//insertBefore --> inserta antes de, dentro de un padre (mas facil de ponerlo exactamente en un lugar)
nav.insertBefore(enlace, nav.children[1]);


//setAtributte --> añadir un atributo cualquiera a un elemento


enlace.onclick = miFuncion;

function miFuncion() {
    alert('quack');
}

//-----------------------------------------------------------------------
// Crear un card de forma dinámica

const parrafo1 = document.createElement('p')
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('p')
parrafo2.textContent = 'Concierto de Roooock';
parrafo1.classList.add('titulo');

const parrafo3 = document.createElement('p')
parrafo3.textContent = '$500 por persona';

//Crear div con la clase info
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//Crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';
imagen.alt = 'Texto alternativo';

//Crear la carta
const card = document.createElement('div');
card.classList.add('card');

//Asignar la imagen
card.appendChild(imagen);

//Asignar la info
card.appendChild(info);

//INSERTAR EN EL HTML:: Añadir card a la seccion
contenedorCards = document.querySelector('.hacer .contenedor-cards');
contenedorCards.appendChild(card);
console.log(contenedorCards);
