/*
textos = new Array();

textos = [
	bromelia_1 = '1111111111 Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam',
	bromelia_2 = '222222 Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam'

]
*/

function textos(nombre) {
	console.log(nombre);
	console.log(nombre == bromelia_1);
	if(nombre == 'bromelia_1'){
	return  '11111 Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam'
	}
	else if(nombre == 'bromelia_2'){
		return '22222 Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam';
		}
	else if(nombre == 'bromelia_3'){
		return '3333 Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam';
		}

	else if(nombre == 'bromelia_4'){
		return '4444 Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam';
		}

	else if(nombre == 'orquidea_1'){
		return  '11111 Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam'
		}
	else if(nombre == 'orquidea_2'){
		return '22222 Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam';
		}
	else if(nombre == 'orquidea_3'){
		return '3333 Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam';
		}
		
	else if(nombre == 'orquidea_4'){
		return '4444 Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam';
		}
}













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
	//evento = event.target.id;


	let verificacion = HaHechoClick.classList.contains('links-producto')

	if (verificacion) {
		// Añadimos el elemento al array de elementos
		//ElementosClick.push(HaHechoClick);
		// Una prueba con salida en consola
		
		const parent = event.target.parentElement;

			console.log(event.target.id)

		imagen = parent.querySelector('.imagen')
		
		

		const cambiarImagen = document.querySelector('.imagen-producto')
		const seccionImg = document.createElement('img');
		seccionImg.classList.add('to-delete');
		cambiarImagen.appendChild(seccionImg);
		seccionImg.src = imagen.src;
		
		escribirDescripcion();
		
	} else {
		return;
	}
	
}


function deleteImg() {
	const deleteImagen = document.querySelectorAll('.to-delete');
	deleteImagen.forEach(element => element.remove());
	
}
/****************funciones para carga de texto**************/

function escribirDescripcion() {
	deleteText()
	const descripcion = document.querySelector('.nota-producto')
	descripcion.innerHTML = textos(event.target.id);
}



function deleteText() {
	const deleteText = document.querySelector('.nota-producto');
	deleteText.innerHTML = '';
	
}














/*


 function escribirDescripcion() {
	deleteText()
	const descripcion = document.querySelector('.nota-producto')
	let evento = event.target.id;
		function funcion() {
				if(evento == currentValue) {
							descripcion.innerHTML =	currentValue; 
						} else { return;}
		}



	textos.forEach(funcion);
}
 
*/
	 	
