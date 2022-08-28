//Arrow Functions --> VENTAJAS

const aprendiendo = function (tecnologia, tecnologia2) {
    console.log(`Aprendiendo ${tecnologia} y ${tecnologia2}`);
}

aprendiendo('JS', 'NodeJS');


//Con un parámetro no hace falta paréntesis, con varios si
const aprendiendo3 = (tecnologia, tecnologia2) => console.log(`Aprendiendo ${tecnologia} y ${tecnologia2}`);

aprendiendo3('JS');