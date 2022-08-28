//ArrayMethods --> .concat //concatenar arrays

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const meses2 = ['Agosto', 'Septiembre'];

const resultado = meses.concat(meses2, 'algun mes mas');

console.log(resultado)

//spread operator

const resultado2 = [...meses, ...meses2, 'otro mes'];

console.log(resultado2)