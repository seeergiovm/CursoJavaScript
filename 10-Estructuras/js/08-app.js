//Detener la ejecución de un if con una función

const puntuaje = 500;

if (puntuaje > 300) {
    console.log('Buen puntuaje')
} else if (puntuaje > 400) {
    console.log('Que locura de puntos')
}

//Para que no pase eso encapsular en función y poner un return en cada condicion;