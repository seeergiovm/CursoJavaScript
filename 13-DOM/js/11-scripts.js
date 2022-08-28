//Ejemplo avanzado uso JS

const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('footer');

//Registrar eventos, si alguien da click se ejecuta la función (se puede hacer la función aparte)
/*btnFlotante.addEventListener('click', () => {
    console.log('Diste click en el boton')
});   */

btnFlotante.addEventListener('click', mostrarOcultarFooter);

//hay que agregar la clase activo o quitarla dependiendo de si se muestra o no
function mostrarOcultarFooter() {
    if (footer.classList.contains('activo')) {
        footer.classList.remove('activo');
        btnFlotante.classList.remove('activo');
        btnFlotante.textContent = 'Idioma y moneda';
    } else {
        footer.classList.add('activo');
        btnFlotante.classList.add('activo');
        btnFlotante.textContent = 'X cerrar';
    }
}
