/********Escribir mensaje de error********/
function escribirMensajeUser(mensaje) {
  let capturar = document.querySelector(".error__user");
  capturar.innerHTML = mensaje;
  capturar.style.visibility = "visible";
}
/********Validar Usuario***************/
let seccionUser = document.querySelector("#user");
var usuarioValidado;
function validarUser () {
  
  let error = document.querySelector(".error__user");
  let user = seccionUser.value;
  let letras = user.split('');
  let regex = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
  /*
Only contains alphanumeric characters, underscore and dot.
Underscore and dot can't be at the end or start of a username (e.g _username / username_ / .username / username.).
Underscore and dot can't be next to each other (e.g user_.name).
Underscore or dot can't be used multiple times in a row (e.g user__name / user..name).
Number of characters must be between 8 to 20.
*/
      if (letras.length==0) {
          escribirMensajeUser("Por favor, escriba su Usuario.");
      }
      else if (letras.length>0){
        if (regex.test(user)){
        //  .test(email)){
          error.style.visibility = "hidden";
          return usuarioValidado = true;
        } 
        else{
          error.style.visibility = "visible";
          escribirMensajeUser("Este campo aun no tiene el formato correcto.");
          return usuarioValidado = false;
        }
      } 
}

/*******Habilitar input password, si se verifica user******/

let pass = document.querySelector("#password");

pass.disabled = true;
user.addEventListener("input", habilitarPass);
function habilitarPass() {
  validarUser();
    if(usuarioValidado){	
        pass.disabled = false;
      } else {pass.disabled = true;}
}
/********Habilitar Boton login si se verifico el pass*******/

let boton = document.querySelector("#login-btn");
boton.disabled = true;
pass.addEventListener("input", habilitar);
function habilitar() {
    if(pass.value.length >= 9){	
        boton.disabled = false;
      } else {boton.disabled = true;}
}
