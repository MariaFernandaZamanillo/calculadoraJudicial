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

if (operacion >= 14231) {alert ("Los honorarios del abogado son " + valorEnJUS + " JUS ($"+operacion +")");}
else {alert ("Los honorarios del abogado son 4 JUS ($14231)");}