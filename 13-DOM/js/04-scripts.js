//querySelector

//querySelector te devuelve el primer elemento que encuentra y solo uno

const card = document.querySelector('.card');

console.log(card);

//Podemos tener selectores especificos como en css
const info = document.querySelector('.premium .info');

console.log(info);

//Seleccionar segundo card de hospedaje
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)');

console.log(segundoCard)

//Permite seleccionar clases e id
const form = document.querySelector('#formulario')

console.log(form)

//Seleccionar elementos HTML

//Permite seleccionar clases e id
const nav = document.querySelector('nav')

console.log(nav)
