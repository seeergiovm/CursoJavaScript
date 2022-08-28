//Object .keys, .values y .entries

const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
}

//.keys --> ver nombre propiedades del objeto
console.log(Object.keys(producto))

//.values --> ver valor propiedades del objeto
console.log(Object.values(producto))

//.entries --> ver informacion completa del objeto
console.log(Object.entries(producto))