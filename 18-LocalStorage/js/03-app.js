//Eliminar y actualizar elementos del localStorage
localStorage.removeItem('nombre');


//Actualizar un registro
const mesesArray3 = JSON.parse(localStorage.getItem('meses'));
console.log(mesesArray3);
mesesArray3.push('nuevo mes');
console.log(mesesArray3);
localStorage.setItem('meses', JSON.stringify(mesesArray3));


//localStorage.clear(); //Elimina todo lo que hay en el localStorage