function modificarDisplayDeElementos(elementosAModificar, valoresDeDisplay) {

	//Almacenamos la cantidad de elementos a recorrer.
	let cantidadDeElementos = elementosAModificar.length;

	//Recorremos cada elemento html.
	for (let i = 0; i < cantidadDeElementos; i++) {

		//Aplicamos el display a cada elemento html.
		elementosAModificar[i].style.display = valoresDeDisplay[i];

	}//fin bucle for

}//fin function modificarDisplayDeContenedoresPrincipales


function modificarFlecha(flecha) {

	//Almacenamos las clases dentro del elemento flecha.
	let clasesDentroDeLaFlecha = Object.values(flecha.classList);

	//Si la clase 'mostrarParrafos' está incluida dentro de la lista de clases de la flecha.
	if(clasesDentroDeLaFlecha.includes('mostrarFilas')) {

		//Se remplaza la clase 'mostrarParrafos' por la clase 'ocultarParrafos'
		flecha.classList.replace('mostrarFilas', 'ocultarFilas');

		//Se aplica el estilo transform = 'rotate(180deg)', para que la flechqa apunte hacia arriba.
		flecha.style.transform = 'rotate(180deg)';

	} else { //fin if(clasesDentroDeLaFlecha.includes('mostrarParrafos'))

		/*Si la clase 'ocultarParrafos' es está incluida dentro de la lista de clases de la flecha,
		se reemplaza la clase 'ocultarParrafos' por la clase 'mostrarParrafos'*/
		flecha.classList.replace('ocultarFilas', 'mostrarFilas');

		//Se aplica el estilo transform = 'rotate(0deg)' para devolver la flecha a su estado inicial.
		flecha.style.transform = 'rotate(0deg)';

	}//fin else if(clasesDentroDeLaFlecha.includes('mostrarParrafos'))

}//fin function modificarFlecha


function devolverMatrizDeDisplay(elementos, display) {

	let matrizDisplay = [];

	let cantidadDeElementos = elementos.length;

	for (let i = 0; i < cantidadDeElementos; i++) {

		matrizDisplay.push(display);

	}//fin bucle for

	return matrizDisplay;

}//fin function devolverMatrizDeDisplay


function modificarDisplayDeParrafos(flecha, parrafosAModificar) {

	let matrizDisplay = [];

	//Almacenamos las clases dentro del elemento flecha.
	let clasesDentroDeLaFlecha = Object.values(flecha.classList);
	
	//Si la clase 'mostrarParrafos' está incluida dentro de la lista de clases de la flecha.
	if(clasesDentroDeLaFlecha.includes('mostrarFilas')) {

		matrizDisplay = devolverMatrizDeDisplay(parrafosAModificar, 'block');

	} else { //fin if(clasesDentroDeLaFlecha.includes('mostrarParrafos'))

		matrizDisplay = devolverMatrizDeDisplay(parrafosAModificar, 'none');

	}//fin else if(clasesDentroDeLaFlecha.includes('mostrarParrafos'))

	modificarDisplayDeElementos(parrafosAModificar, matrizDisplay);

}//fin function modificarDisplayDeParrafos