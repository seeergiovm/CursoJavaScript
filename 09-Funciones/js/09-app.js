//Añadir funciones a un objeto

const reproductor = {
    reproducir: function (id) {
        console.log(`Reproduciendo canción... ${id}`);
    },
    pausar: function () {
        console.log(`Pausar canción..`);
    }
}

console.log(reproductor.reproducir(30));

console.log(reproductor.pausar);