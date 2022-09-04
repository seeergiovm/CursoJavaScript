//Devuelve el dia de hoy en ese mismo instante q se ejecuta
const diaHoy = new Date();

const dia1 = new Date('1-5-2000');

let valor;

valor = diaHoy;
valor = diaHoy.getFullYear();
valor = diaHoy.getMonth();
valor = diaHoy.getMinutes();
valor = diaHoy.getHours();
valor = diaHoy.getTime();

valor = diaHoy.setFullYear(2000);


//Las fechas son objetos
console.log(valor)