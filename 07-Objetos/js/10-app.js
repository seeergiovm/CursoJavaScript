//Copiar dos objetos((( Mas bien unir dos objetos)))

const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

const medidas = {
    peso: "1kg",
    medida: "1m"
}

console.log(producto)
console.log(medidas)

//EXISTEN 2 FORMAS DE HACERLO

//FORMA 1
const resultado = Object.assign(producto, medidas)
console.log(resultado)

//FORMA 2: Spread Operator o Rest Operator
const resultado2 = { ...producto, ...medidas }
console.log(resultado2)