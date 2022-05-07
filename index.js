
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

function calcularHonorarios(){ 
/*La presente calculadora se utiliza para 
calcular los honorarios que le corresponden
a un abogado por la tramitacion de un juicio ejecutivo */
let base;
base= document.getElementById("monto").value
console.log(base)
base = Number (base);
let operacion = Number (base * 0.20 * 0.60);
//se declara como constante el valor de 1 JUS, para usarlo cuando se necesite
const JUS =  3557; 

//se divide el valor en pesos por el valor del JUS, para obtener el valor en JUS
//se redondea el número con Math.round, sino tiene muuuchos decimales
let valorEnJUS = Math.round(operacion/JUS)

if (operacion >= 14231) {
   
    document.getElementById("calculo").innerHTML =  "Los honorarios del abogado son " + valorEnJUS + " JUS ($"+operacion +")"
}
else {
    operacion = 14231
    
    document.getElementById("calculo").innerHTML = "Los honorarios del abogado son 4 JUS ($14231)"
}

  return operacion
}

let miArray = []
if (localStorage.getItem("historial")){
miArray = JSON.parse(localStorage.getItem("historial"))
document.getElementById("historial").innerHTML = JSON.stringify(miArray)
}
else { miArray = []
console.log("no existe")
}

function guardar() {
    const abogado = new Abogado ();
    abogado.nombre = document.getElementById("nombre").value
    abogado.apellido = document.getElementById("apellido").value
    abogado.matricula = document.getElementById("matricula").value
    abogado.expediente = document.getElementById("expediente").value
    abogado.honorarios = calcularHonorarios ()
    miArray.push(abogado)
    //console.log(miArray)
    document.getElementById("historial").innerHTML = JSON.stringify(miArray)
    localStorage.setItem("historial", JSON.stringify(miArray)); 
   
}

function agregar(){
    let tabla = document.getElementById("table")
     for(let i=0; i=miArray.length; i++){  
      let fila = document.createElement ("tr")
      fila.innerHTML= `<td>1</td>
                      <td>${miArray[i]?.nombre}</td>
                      <td>${miArray[i]?.apellido}</td>
                      <td>${miArray[i]?.matricula}</td>
                      <td>${miArray[i]?.expediente}</td>
                      <td>${miArray[i]?.honorarios}</td>
                      <td><button>Eliminar</button></td>`
     tabla.appendChild(fila); 
     }
}



function borrar() {
    localStorage.clear("historial")
    miArray = []
    document.getElementById("historial").innerHTML = miArray
}

const btn = document.querySelector('#borrar')
 
btn.addEventListener('click', () => {
Swal.fire({
    title: 'Estas seguro?',
    text: "Esta accion es irrevertible!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, borralo!'
  }).then((result) => {
    if (result.isConfirmed) {
        borrar()
      Swal.fire(
        'Borrado!',
        'El historial fue borrado.',
        'success'
      )
    }
  })
}) 

const lista = document.querySelector('#listado')
fetch('https://cors-solucion.herokuapp.com/https://api-dolar-argentina.herokuapp.com/api/nacion',
)
    .then( (resp) => resp.json() )
    .then( (data) => {
          const li = document.createElement('li')
          li.innerHTML = `
              <h4> Cotización Dolar BANCO NACION</h4>
              <p>Fecha ${data.fecha}</p>
              <p>Precio compra ${data.compra}</p>
              <p>Precio venta ${data.venta}</p>
          `
          lista.append(li)
      
  })

