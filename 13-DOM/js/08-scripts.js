//Traversing the DOM -- Significa ir navegando por los elementos de un HTML

const navegacion = document.querySelector('.navegacion');

/*console.log(navegacion)
console.log(navegacion.childNodes) //Los espacios en blanco son considerados elementos
console.log(navegacion.children[1])    //Este es el bueno */
console.log(navegacion.firstElementChild)
console.log(navegacion.lastElementChild)

const card = document.querySelector('.card');

//Con children asecas lista los hijos
card.children[1].children[1].textContent = 'DJ Rubio';
console.log(card.children[1].children[1].textContent);

card.children[0].src = 'img/hacer2.jpg';
console.log(card.children[0]);


//Traversing del hijo al padre
console.log(card.parentElement);


//nextElementSibling --> Selecciona el siguiente elemento que sea hermano del indicado
console.log(card.nextElementSibling);

//Selecciona el anterior elemento que sea hermano del indicado
const ultimoCard = document.querySelector('.card:nth-child(4)')
console.log(ultimoCard.previousElementSibling);
