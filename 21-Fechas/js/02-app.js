//Librería Moment.js
//Permite mostrar la fecha con el formato que tu desees

const diaHoy = new Date();

moment.locale('es');

console.log(moment().format('MMMM D YYYY h:mm:ss'));

console.log(moment().format('LLLL', diaHoy));


//Para cupones
console.log(moment().add(3, 'days').calendar());