//Switch para múltiples condiciones

const metodoPago = 'efectivo';

switch (metodoPago) {
    case 'efectivo':
        console.log("El metodo de pago es efectivo");
        break;
    default:
        console.log('No tengo efectivo');
        break;
}