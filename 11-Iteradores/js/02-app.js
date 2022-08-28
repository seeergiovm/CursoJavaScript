//Break y continue

//Break --> cuando un loop llega a un break se corta y sale del bucle

for (let i = 0; i < 10; i++) {
    if (i == 5) {
        console.log(`Este es el 5`);
        break;
    }
    console.log(`Repeticion ${i}`)
}

//continue --> corta y pasa a la siguiente iteración del bucle

for (let i = 0; i < 10; i++) {
    if (i == 5) {
        console.log(`Este es el 5`);
        continue;
    }
    console.log(`Repeticion ${i}`)
}