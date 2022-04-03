
/************funciones esfribir****************/

function escribirMensajeNombre(mensaje) {
  var capturar = document.querySelector(".error__nombreapellido");
  capturar.innerHTML = mensaje;
  capturar.style.visibility = "visible";
}

function escribirMensajeCorreo(mensaje) {
  var capturar = document.querySelector(".error__correo");
  capturar.innerHTML = mensaje;
  capturar.style.visibility = "visible";
}

function escribirMensajeMensaje(mensaje) {
  var capturar = document.querySelector(".error__mensaje");
  capturar.innerHTML = mensaje;
  capturar.style.visibility = "visible";
}
/****************************************/
/**********validaciones********/

function validarNombre () {
    let capturarElemento = document.querySelector("#nombreapellido");
    let contenido = capturarElemento.value;
    let letras = contenido.split('')
    var error = document.querySelector(".error__nombreapellido");
      if (letras.length==0) {
        console.log(letras.length)
        escribirMensajeNombre("Por favor, escriba su nombre y apellido.");
      }
      else if (letras.length<=50){
        error.style.visibility = "hidden";
      }
      else if (letras.length>50) {
        console.log(letras.length)
        escribirMensajeNombre("Por favor, este campo no debe superar los 50 caracteres.");
      }                              
}


function validarCorreo () {
  var seccionEmail = document.querySelector("#correoelectronico");
  var error = document.querySelector(".error__correo");
  var email = seccionEmail.value;
  var letras = email.split('');
  var regex = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
  // /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      if (letras.length==0) {
          escribirMensajeCorreo("Por favor, escriba su correo electrónico.");
      }
      else if (letras.length>0){
        if (regex.test(email)){
        //  .test(email)){
          error.style.visibility = "hidden";
        } 
        else{
          error.style.visibility = "visible";
          escribirMensajeCorreo("Este campo no tiene el formato correcto.");
        }
      } 
}


function validarMensaje () {
  let capturarElemento = document.querySelector("#mensaje");
  let contenido = capturarElemento.value;
  let letras = contenido.split('')
  var error = document.querySelector(".error__mensaje");
    if (letras.length==0) {
      console.log(letras.length)
      escribirMensajeMensaje("Por favor, escriba un mensaje.");
    }
    else if (letras.length<=300){
      error.style.visibility = "hidden";
    }
    else if (letras.length>300) {
      escribirMensajeMensaje("Por favor, este campo no debe superar los 300 caracteres.");
    }                              
}

function multicomprobacion(){
  event.preventDefault(); 
  validarNombre ();
  validarCorreo ();
  validarMensaje ();
}