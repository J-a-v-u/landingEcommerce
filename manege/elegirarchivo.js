
let boton = document.getElementById("inputFile")
boton.addEventListener('change', archivoElegido);

function archivoElegido() {
    let escribirNomreArchivo = document.getElementById("elegir__archivo");
    console.log(boton.files[0].name)
    escribirNomreArchivo.innerHTML = "Archivo seleccionado: " + boton.files[0].name;
}
