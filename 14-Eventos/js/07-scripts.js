//Preveenir Event Bubbling con Delegation
//comprobando que la clase del objetivo que clickas es la que buscas
const cardDiv = document.querySelector('.card');

cardDiv.addEventListener('click', (e) => {
    //target dice a lo q estas clickando
    console.log(e.target.classList);

    if (e.target.classList.contains('titulo')) {
        console.log('Diste click en titulo');
    }

    if (e.target.classList.contains('precio')) {
        console.log('Diste click en precio');
    }

    if (e.target.classList.contains('card')) {
        console.log('Diste click en card');
    }
})