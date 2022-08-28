//Arrow functions en el reproductor de musica

const reproductor = {
    cancion: '',
    reproducir: (id) => console.log(`Reproduciendo canción... ${id}`),
    pausar: () => console.log(`Pausar canción..`),

    set nuevaCancion(cancion) {
        this.cancion = cancion;
    },

    get verCancion() {
        console.log(`${this.cancion}`)
    }
}

reproductor.nuevaCancion = "Amarte bien";

reproductor.verCancion;

console.log(reproductor.reproducir(30));

console.log(reproductor.pausar());