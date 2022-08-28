// VARIABLES
const btnEnviar = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetBtn');
const formulario = document.querySelector('#enviar-mail');

//Variables para campos
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

eventListeners();
function eventListeners() {
    //Cuando la app arranca
    document.addEventListener('DOMContentLoaded', iniciarApp);

    //Campos del formulario
    //evento blur --> cuando pinchas en un campo y te sales, se activa
    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);

    //Reinicia el formulario
    btnReset.onclick = resetearFormulario();

    //Enviar email
    formulario.addEventListener('submit', enviarEmail);
}


// FUNCIONES
function iniciarApp() {
    console.log('Iniciando...')
    btnEnviar.disabled = true;
    //Tailwind --> Framework de CSS con clases que dan estilo
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}

//Valida el formulario
function validarFormulario(e) {

    if (e.target.value.length > 0) {

        //Elimina errores
        const error = document.querySelector('p.error');
        if (error) {
            error.remove();
        }

        e.target.classList.remove('border', 'border-red-500');
        e.target.classList.add('border', 'border-green-500');
    } else {
        e.target.classList.remove('border', 'border-green-500');
        e.target.classList.add('border', 'border-red-500');

        mostrarError('Todos los campos son obligatorios');
    }

    //Validar email
    if (e.target.type === 'email') {

        if (er.test(e.target.value)) {
            const error = document.querySelector('p.error');
            if (error) {
                error.remove();
            }

            e.target.classList.remove('border', 'border-red-500');
            e.target.classList.add('border', 'border-green-500');
        } else {
            e.target.classList.remove('border', 'border-green-500');
            e.target.classList.add('border', 'border-red-500');

            mostrarError('Email no válido');
        }
    }

    if (er.test(email.value) && asunto.value !== '' && mensaje.value !== '') {
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
    }
}

function mostrarError(mensaje) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'mt-5',
        'text-center', 'error');

    const errores = document.querySelectorAll('.error');
    //.length solo existe en querySelectorAll, ya que querySelector solo coge uno
    if (errores.length === 0) {
        formulario.appendChild(mensajeError);
    }

}

//funcion enviar email
function enviarEmail(e) {
    e.preventDefault();
    //Mostrar spinner
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex';

    //Despues de 3 segundos ocultar el spinner y mostrar el mensaje
    //setInterval --> cada ? s se ejecuta lo que indiques
    setTimeout(() => {
        spinner.style.display = 'none';

        //Mensaje que dice q se envio correctamente
        const parrafo = document.createElement('p');
        parrafo.textContent = 'El email se envió correctamente';
        parrafo.classList.add('border', 'border-black-500', 'bg-black-500', 'text-white-500', 'p-2', 'my-10',
            'text-center')

        //Inserta el párrafo antes del spinner
        formulario.insertBefore(parrafo, spinner);

        setTimeout(() => {
            parrafo.remove(); //Eliminar el mensaje de texto
            resetearFormulario();
        }, 5000);
    }, 3000);
}




//Resetear formulario
function resetearFormulario() {
    formulario.reset();

    iniciarApp();
}