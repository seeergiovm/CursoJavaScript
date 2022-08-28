//Diferencias de declaración de funcion

/* Existen dos etapas en la ejecucion de JS:

1ª Etapa de creacion: registra las funciones
2ª Etapa de ejecucion
*/

//Declaración de función
sumar();

function sumar() {
    console.log(2 + 2);
}

//Expresión de función
sumar2();

const sumar2 = function () {
    console.log(3 + 3);
}

