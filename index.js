
// La idea es que la aplicacion web tenga un historial de los honorarios que se le han regulado a X abogado
// Para ello voy a usar una clase junto con unn constructor para crear los perfiles de cada letrado
class Abogado{
    constructor (nombre, apellido, matricula, expediente, honorarios){
        this.nombre = nombre;
        this.apellido = apellido;
        this.matricula = matricula;
        this.expediente = expediente;
        this.honorarios = honorarios;
        this.usuario = function (){console.log ("Se ha creado el usuario" + this.nombre + this.apellido)}
    }
}

function calcularHonorarios (){ 
/*La presente calculadora se utiliza para 
calcular los honorarios que le corresponden
a un abogado por la tramitacion de un juicio ejecutivo */
let base;
base = prompt ("Introduzaca el monto base del juicio actualizado");
base = Number (base);
let operacion = Number (base * 0.20 * 0.60);
//se declara como constante el valor de 1 JUS, para usarlo cuando se necesite
const JUS =  3557; 

//se divide el valor en pesos por el valor del JUS, para obtener el valor en JUS
//se redondea el número con Math.round, sino tiene muuuchos decimales
let valorEnJUS = Math.round(operacion/JUS)

if (operacion >= 14231) {
    alert ("Los honorarios del abogado son " + valorEnJUS + " JUS ($"+operacion +")");}
else {(operacion = 14231)
    alert ("Los honorarios del abogado son 4 JUS ($14231)");}
    return operacion
}

const abogado = new Abogado ();

let miArray = []

for (let i = 0; i<4; i++) {
    abogado.nombre = prompt ("Introduzca el nombre")
    abogado.apellido = prompt("Introduzca el apellido")
    abogado.matricula = prompt ("Introduzca la matricula")
    abogado.expediente = prompt ("Introduzca el numero de expediente")
    abogado.honorarios = calcularHonorarios ()
    console.log(abogado)
    miArray.push(abogado)
}

console.log (miArray)
console.log("Largo", miArray.length)