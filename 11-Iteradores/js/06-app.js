//.forEach .map

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar'];

//forEach esta diseñado para recorrer arreglos
pendientes.forEach((pendiente) => {
    console.log(`${pendiente}`);
})

pendientes.forEach((pendiente, indice) => {
    console.log(`${indice} : ${pendiente}`);
})

pendientes.map((pendiente, indice) => {
    console.log(`${indice} : ${pendiente}`);
})