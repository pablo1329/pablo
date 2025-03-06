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



function modificarImagenDeFondoDeContenedor(contenedorFormularioVariablesEconomicas, urlDeImagen) {

	contenedorFormularioVariablesEconomicas.style.backgroundImage = urlDeImagen;

}//fin function modificarImagenDeFondoDeContenedor


function modificarRectaDeMapaDeCenso(objetoCenso)	{

	let recta = document.getElementById(objetoCenso.recta.id);

	recta.setAttribute('x', objetoCenso.recta.x);

	recta.setAttribute('y', objetoCenso.recta.y);

	recta.setAttribute('ry', objetoCenso.recta.ry);

	recta.setAttribute('width', objetoCenso.recta.width);

	recta.setAttribute('height', objetoCenso.recta.height);

}//fin function modificarRectaDeMapaDeCenso


function modificarLineaDeMapaDeCenso(objetoCenso)	{

	let linea = document.getElementById(objetoCenso.linea.id); 

	linea.setAttribute('x1', objetoCenso.linea.x1);

	linea.setAttribute('y1', objetoCenso.linea.y1);

	linea.setAttribute('x2', objetoCenso.linea.x2);

	linea.setAttribute('y2', objetoCenso.linea.y2);

}//fin function modificarLineaDeMapaDeCenso


function modificarLinkDeMapaDeCenso(objetoCenso) {

	let link = document.getElementById(objetoCenso.link.id); 

	link.setAttribute('href', objetoCenso.link.href);

}//fin function modificarLinkDeMapaDeCensoDeMapaDeCenso


function modificarTextosDeMapaDeCenso(objetoCenso) {

	let texto = document.getElementsByClassName(objetoCenso.texto.nombreDeClase);
	console.log(texto);
	let cantidadDeElementosDeTexto = texto.length;

	let llavesDeLineas = ['primerLinea', 'segundaLinea', 'terceraLinea', 'cuartaLinea'];

	for(let j = 0; j < cantidadDeElementosDeTexto; j++) {
								
		texto[j].setAttribute('x', objetoCenso.texto.lineas[llavesDeLineas[j]].x) ;

		texto[j].setAttribute('y', objetoCenso.texto.lineas[llavesDeLineas[j]].y) ;

		texto[j].textContent = objetoCenso.texto.lineas[llavesDeLineas[j]].contenido;
								
	}//fin bucle for j

}//fin function modificarTextosDeMapaDeCenso


