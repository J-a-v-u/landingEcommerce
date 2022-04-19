/*

    
    let link = document.querySelector('.link-popup');


function verPopup() {
    var galeria = document.querySelector('#popup');
    
    galeria.style.visibility = 'show';


console.log("kjsdkgfdjghj");
}
*/
 /*   
var links = new Array();

var links = document.querySelectorAll('.links-producto')

 links.addEventListener('click', dondeClick);
function dondeClick(event) {
    var element = event.target;   
 console.log(element)
}
*/

// Creamos un array vacio
//let ElementosClick = new Array();
// Capturamos el click y lo pasamos a una funcion
document.onclick = captura_click;
	
function captura_click(event) {
	deleteImg();
    //ElementosClick = [];
	// Funcion para capturar el click del raton
	let HaHechoClick;
	HaHechoClick = event.target;
let verificacion = HaHechoClick.classList.contains('links-producto')

	if (verificacion) {
		// Añadimos el elemento al array de elementos
		//ElementosClick.push(HaHechoClick);
		// Una prueba con salida en consola
		
		const parent = event.target.parentElement;

			console.log(parent)

		imagen = parent.querySelector('.imagen')
		
		

		const cambiarImagen = document.querySelector('.imagen-producto')
		const seccionImg = document.createElement('img');
		seccionImg.classList.add('to-delete');
		cambiarImagen.appendChild(seccionImg);
		seccionImg.src = imagen.src;
	} else {
		return;
	}
	
}


function deleteImg() {
	const deleteImagen = document.querySelectorAll('.to-delete');
	deleteImagen.forEach(element => element.remove());
	
}

