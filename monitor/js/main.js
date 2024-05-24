//alert("HOLA MUNDO")

let mensaje = document.getElementById("respuesta");

function callApiRequest(){
axios
  .get('https://3.144.198.104/iot-car-control/back-end/apis/getRegistro.php')
  .then(function (response) {
    // manejar respuesta exitosa
    console.log(response);

    let respuestaServidor = 
    response.data == 'f'?"ADELANTE":
    response.data == 'b'?"ATRÁS":
    response.data == 'l'?"IZQUIERDA":
    response.data == 'r'?"DERECHA":
    "DETENER";

    respuesta.innerHTML = "Última Orden: <strong> "+respuestaServidor + "</strong>";
  })
  .catch(function (error) {
    // manejar error
    console.log(error);
  })
  .finally(function () {
    // siempre sera executado
  });
}

setInterval(callApiRequest, 2000);

