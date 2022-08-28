//Eventos con el scroll del mouse
//Viene bien para meter animaciones dependiendo de donde se encuentre en la página


//window esta por encima de document
window.addEventListener('scroll', () => {

    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();

    if (ubicacion.top < 100) {
        console.log('El elemento ya está visible')
    } else {
        console.log('Aun no, da más scroll')
    }
    console.log(ubicacion)


    /*const scrollPX = window.scrollY;

    console.log(scrollPX)*/
})