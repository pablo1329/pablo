
function modificarNumerosDeTrjetas()	{

	//Almacenamos los numeros en tarjetas
	let numerosEnTarjetas = document.getElementsByClassName('numeroDecimalEnTarjeta');
	
	//Almacenamos la cantidad de numeros de tarjeta.
	let cantidadDeNumerosEnTrjetas = numerosEnTarjetas.length;

	//Declaramos array para lamacenar los numeros de la tarjeta.
	let matrizDeNumeros = [];

	//Declaramos array para almacenar el 10% de cada valor de la matrizDeNumeros.
	let porcentajeDematrizDeNumeros = [];

	let numerosMostrados = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

	//Recorremos los numeros en las tarjetas.
	for (let i = 0; i < cantidadDeNumerosEnTrjetas; i++) {

		//Reemplazamos las comas por los puntos de cada numero y lo almacenamos en el array.
		matrizDeNumeros.push(numerosEnTarjetas[i].textContent.replace(',', '.'));

		//Convertimos cada elemento de la matrizDeNumeros en un valor decimal.
		matrizDeNumeros[i] = Number.parseFloat(	matrizDeNumeros[i]	);

		//Almacenamos el 10% de cada elemento en porcentajeDematrizDeNumeros.
		porcentajeDematrizDeNumeros[i] = (matrizDeNumeros[i] * 0.10);

		//Cada 300 milisegundos se sumara a cada numero de tarjeta el 10% hasta llegar a su valor final.
		let intervalo = setInterval( () => {

			//Si los numeros que se van a mostrar son menores a los numeros de tarjeta.
			if(numerosMostrados[i] < matrizDeNumeros[i]){

				//Se suma el 10% a cada elemento de la matriz.
				numerosMostrados[i] += porcentajeDematrizDeNumeros[i];

				//Se imprimen los numeros.
				numerosEnTarjetas[i].textContent = (numerosMostrados[i].toFixed(2)).replace('.', ',');

			} else {

				//Si cada elemento de la tarjeta es igual al valor inicial se sale del de la función.
				clearInterval(intervalo);

			}//fin else


		}, "170");//fin setInterval

		

	}//fin bucle for.


}//fin function incrementarNumerosDeTrjeta


function devolverAtributoDeObjeto(objeto, atributo) {

	switch(atributo)	{

		case 'regionNeaNoa':

			return objeto.regionNeaNoa;

		break;

		case 'todasLasProvincias':

			return objeto.todasLasProvincias;

		break;

		case 'VIM':

			return objeto.VIM;

		break;

		case 'VIA':

			return objeto.VIA;

		break;

		case 'color':

			return objeto.color;

		break;

		case 'colorDeBorde':

			return objeto.colorDeBorde;

		break;

		case 'idsDeProvincias':

			return objeto.idsDeProvincias;

		break;

		case 'nombreDeProvincias':

			return objeto.nombreDeLasProvincias;

		break;

		case 'imagenDePortada-src':

			return objeto.imagenDePortada.src;

		break;

		case 'imagenDePortada-alt':

			return objeto.imagenDePortada.alt;

		break;

	}//fin switch

}//fin function devolverAtributoDeObjeto


function devolverObjeto(objeto) {

	switch(objeto) {

		case 'CANASTA BASICA ALIMENTARIA':

			return canastaBasicaAlimentaria;

		break;

		case 'COEFICIENTE DE GINI':

			return coeficienteDeGini;

		break;

	}//fin siwtch

}//fin function devolverObjeto


function asignarDatosParaGraficar(año, mes, variacion, datosNumericos, nombresDeProvincias, coloresDeBarras, coloresDeBordesDeBarras) {

	//Almacenamos el titulo del grafico.
	let tituloDelGrafico = año + ' ' + mes + ' Variación ' + variacion;

	//Almacenamos el grafico.
	let grafico = document.getElementById('grafico');

	crearGrafico(grafico, 'bar', tituloDelGrafico, nombresDeProvincias, datosNumericos, coloresDeBarras, coloresDeBordesDeBarras);

}//fin function asignarDatosParaGraficar


function devolverIntervaloDeDatos(datosNumericos) {

	//Almacenamos la cantidad de datos.
	let cantidadDeDatos = datosNumericos.length;

	//Declaramos array para almacenar los intervalos.
    let intervalos = [];

    //Declaramos variable para almacenar numero de intervalos.
    let numeroDeIntervalos =   Math.round( 1 + (3.322 * Math.log( cantidadDeDatos ) ) );

    //Almacenamos el valor mas grande de los datos numericos.
    let valorMaximo = Math.max.apply(null, datosNumericos);

    //Almacenamos el valor mas chico de los datos numericos.
    let valorMinimo = Math.min.apply(null, datosNumericos);

    //Almacenamos el rango.
    let rango = (valorMaximo - valorMinimo);

    //Almacenamos la amplitud.
    let amplitud = (rango/numeroDeIntervalos);

    //Almacenamos el inicio del intervalo a.
    let inicioDeIntervalo_a = valorMinimo;

    //Almacenamos el inicio del intervalo b.
    let inicioDeIntervalo_b = (valorMinimo + amplitud);

    //Declaramos array para almacenar los valores del intervalo a.
    let intervalo_a = [];

    //Declaramos array para almacenar los valores del intervalo b.
    let intervalo_b = [];

    //Incertamos el valor inicial en el intervalo a.
    intervalo_a.push(inicioDeIntervalo_a);

    //Incertamos el valor inicial en el intervalo b.
    intervalo_b.push(inicioDeIntervalo_b);

    //Sumamos la amplitud a cada intervalo y l oalmacenamos en su respectivo array.
    for (let i = 1; i < numeroDeIntervalos; i++) {

        inicioDeIntervalo_a += amplitud;

        inicioDeIntervalo_b += amplitud;

        intervalo_a.push(inicioDeIntervalo_a);

        intervalo_b.push(inicioDeIntervalo_b);

    }//fin bucle for.
    
    //Almacenamos los array de intervalos a y b en el array principal.
    intervalos[0] = intervalo_a;

    intervalos[1] = intervalo_b;

    return intervalos;

}//fin function devolverIntervaloDeDatos


function reestablecerColorDeMapa() {

	let cantidadDeIds = mapaDeArgentina.idsProvincias.length;

	for (let i = 0; i < cantidadDeIds; i++) {
		
		document.getElementById(mapaDeArgentina.idsProvincias[i]).style.fill = '#808080' ;

		document.getElementById(mapaDeArgentina.idsProvincias[i]).style.stroke = '#fff' ;
	}

}//fin function reestablecerColorDeMapa


function pintarMapa(coloresPorProvincias)	{
	
	let cantidadDeDatos = coloresPorProvincias.colores.length;
	
	reestablecerColorDeMapa();

	for (let i = 0; i < cantidadDeDatos; i++) {
		
		document.getElementById(coloresPorProvincias.idsDeProvincias[i]).style.fill = coloresPorProvincias.colores[i];

		document.getElementById(coloresPorProvincias.idsDeProvincias[i]).style.stroke = coloresPorProvincias.coloresDeBorde[i];

	}//fin bucle for

}//fin function pintarMapa


function obtenerArrayDeColoresParaCadaProvincia(nombreDeLasProvincias, idsDeProvincias, datosNumericos, colores, coloresDeBorde)	{

	//Almacenamos la escala de valores.
	let intervalos = devolverIntervaloDeDatos(datosNumericos);

	/*Por un lado tenemos el array "intervalos", el cual contiene dos array que contienen los valores
	 de cada intervalo, es decir, intervalos[0] e intervalos[1]. Cada uno tiene 9 elementos si la region es NEA/NOA
	 o 12 elementos si la region es Jurisdicciones del país. Por otro lado tenemos el array "tonosDeColores" que
	 contiene 9 codigo de colores en caso de que la region sea NEA/NOA o 12 en caso de que la region sea Jurisdicciones
	 del pais*/

	//Almacenamos la cantidad de datos numericos.
	let cantidadDeDatos = datosNumericos.length;

	//Almacenamos la cantidad de intervalos.
	let cantidadDeIntervalos = intervalos[0].length;

	let anteUltimoIntervalo = cantidadDeIntervalos - 1;

	let provinciasYColores = { 	colores: [],
								
								coloresDeBorde: [],

								idsDeProvincias: [],

								nombreDeTodasLasProvincias: [],

								datosNumericos: []
	};

	for (let i = 0; i < cantidadDeIntervalos; i++) {

		for (let j = 0; j < cantidadDeDatos; j++) {
			
			if( i < anteUltimoIntervalo) {

				if( datosNumericos[j] >= intervalos[0][i] && datosNumericos[j] < intervalos[1][i]) {

					provinciasYColores.colores.push( colores[i] );

					provinciasYColores.coloresDeBorde.push( coloresDeBorde[i] );

					provinciasYColores.idsDeProvincias.push( idsDeProvincias[j] );

					provinciasYColores.nombreDeTodasLasProvincias.push( nombreDeLasProvincias[j] );

					provinciasYColores.datosNumericos.push( datosNumericos[j] );

					
					//console.log(intervalos[0][i] + ' ' + intervalos[1][i] + ' ' + colores[i] + ' ' + datosNumericos[j] + ' ' + idsDeProvincias[j]);

				}

			} else {

				//if( datosNumericos[j] > intervalos[0][i] && datosNumericos[j] <= intervalos[1][i]) {
				if( datosNumericos[j] >= intervalos[0][i] ) {
					
					provinciasYColores.colores.push( colores[i] );

					provinciasYColores.coloresDeBorde.push( coloresDeBorde[i] );

					provinciasYColores.idsDeProvincias.push( idsDeProvincias[j] );

					provinciasYColores.nombreDeTodasLasProvincias.push( nombreDeLasProvincias[j] );

					provinciasYColores.datosNumericos.push( datosNumericos[j] );

					//console.log(intervalos[0][i] + ' ' + intervalos[1][i] + ' ' + colores[i] + ' ' + datosNumericos[j] + ' ' + idsDeProvincias[j]);

				}

			}

		}//fin bucle for j

	}//fin bucle for i

	return provinciasYColores ;
	
}//fin function asignarColoresAProvincias


function asignarDatosParaGraficoYMapa()	{

	//Almacenamos el contenido del legend del formulario que contendra el nombre de la "variableEconomica".
	let variableEconomica = document.getElementById('legendVariableEconomica').textContent;

	//Almacenamos la region selecionada en el formulario.
	let region = document.getElementById('regiones').value;

	//Almacenamos el año seleccionado en el formulario.
	let año = document.getElementById('año').value;

	//Almacenamos el mes seleccionado en el formulario
	let mes = document.getElementById('mes').value;

	//Almacenamos la variación seleccionada en el formulario (Mensual o Inter-anual);
	let variacion = document.getElementById('variacion').value;

	//Almacenamos el objeto que corresponde a la variable economica seleccionada en el formulario.
	let objeto = devolverObjeto(variableEconomica);

	//Almacenar los datos de la region seleccionada (NEA/NOA o Jurisdicciones del pais).
	let datosPorRegion = devolverAtributoDeObjeto(objeto, region);

	let datosNumericos = devolverAtributoDeObjeto(datosPorRegion, variacion);

	let colores = devolverAtributoDeObjeto(datosPorRegion, 'color');

	let coloresDeBorde = devolverAtributoDeObjeto(datosPorRegion, 'colorDeBorde');

	let idsDeProvincias = devolverAtributoDeObjeto(datosPorRegion, 'idsDeProvincias');

	let nombresDeProvincias = devolverAtributoDeObjeto(datosPorRegion, 'nombreDeProvincias');

	let coloresPorProvincias = obtenerArrayDeColoresParaCadaProvincia(nombresDeProvincias, idsDeProvincias, datosNumericos, colores, coloresDeBorde);

	asignarDatosParaGraficar(año, mes, variacion, coloresPorProvincias.datosNumericos, coloresPorProvincias.nombreDeTodasLasProvincias, coloresPorProvincias.colores, coloresPorProvincias.colorDeBordes);
	
	pintarMapa(coloresPorProvincias);

	modificarPortadaDeInforme(objeto);

}//fin function asignarDatosParaGraficoYMapa


function llamarFuncion(objeto) {

	//Llamamos a la función correspondiente en base al nombre de la función.
	switch (objeto.nombreDeFuncionALlamar) {

		case 'devolverAtributo':

			return objeto.elemento.getAttribute(objeto.atributoADevolver);

		break;

		case 'ocultarYMostrarElementos':

			ocultarYMostrarElementos(objeto.elementosAOcultar, objeto.elementoAMostrar);

		break;

		case 'asignarDatosParaGraficoYMapa':

			asignarDatosParaGraficoYMapa();

		break;

		case 'buscarDatosDelCenso':

		break;

	}//fin swith

}//fin function llamarFuncion


function establecerDisplayDeContenedoresPrincipales(elementoLiSeleccionado) {

	//Almacenamos el id del elemento li seleccionado.
	let idDelElementoLiSelecionado = elementoLiSeleccionado.getAttribute('id');

	//Almacenamos las llaves del objeto "contenedoresAsociadosPorId", las cuales corresponden al id de cada elemento li de la Navbar.
	let llavesDeContenedoresAsociadosPorId =  Object.keys(contenedoresAsociadosPorId);

	//Almacenamos la cantidad de llaves de contenedores.
	let CantidadDeLlavesDeContenedores =  llavesDeContenedoresAsociadosPorId.length;

	//Declaramos matriz para almacenar los displays.
	let matrizDeDisplays = [];

	//Recorremos los elementos de CantidadDeLlavesDeContenedores.
	for(let i = 0; i < CantidadDeLlavesDeContenedores; i++) {

		//Si el id del elemento seleccionado coincide con la llave del objeto llavesDeContenedoresAsociadosPorId
		if( llavesDeContenedoresAsociadosPorId[i] === idDelElementoLiSelecionado){

			//Se incerta el valor 'block' en la matriz.
			matrizDeDisplays.push('block');

		} else { //fin if( llavesDeContenedoresAsociadosPorId[i] === idDelElementoLiSelecionado)

			//De lo contrario, se incerta el valor 'none'.
			matrizDeDisplays.push('none');

		}//fin else if( llavesDeContenedoresAsociadosPorId[i] === idDelElementoLiSelecionado)

	}//fin bucle for

	return matrizDeDisplays;
	
}//fin function establecerDisplayDeContenedoresPrincipales


function devolverUrlDeImagen(variableEconomicaSeleccionada){

	switch(variableEconomicaSeleccionada){

		case 'CONSUMO DE COMBUSTIBLE NACIONAL':

			return urlDeImagenes.consumoDeCombustible ;

		break;

		case 'CONSUMO DE COMBUSTIBLE PROVINCIAL':

			return urlDeImagenes.consumoDeCombustible;

		break;

		default:

			return 'url("imagenes/bañado de la estrella.jpg")';

		break;

	}//fin switch

}//fin function devolverUrlDeImagen


function detectarInteraccionConContenedor(elementoSeleccionado) {

	let contenedor = '';

	let flecha = '';

	switch (elementoSeleccionado) {

		case 'home':

			contenedor = document.getElementById(contenedoresAsociadosPorId['home']);

			let parrafosAModificar = contenedor.getElementsByClassName('elementosAMostrar');

			flecha = document.getElementById('flechaParrafosDiaMundialDeLaEstadistica');
			
			flecha.addEventListener('click', ()=>{

				modificarDisplayDeParrafos(flecha, parrafosAModificar);

				modificarFlecha(flecha);

			});

		break;

		case 'informes':

			contenedorListaDeVariablesEconomicas = document.getElementById('listaDeVariablesEconomicas');

			flecha = document.getElementById('flechaMostrarVariablesEconomicas');

			let filasOcultas = contenedorListaDeVariablesEconomicas.querySelectorAll('.elementoOculto');

			let botonMostrarVariablesEconomicas = document.getElementById('botonMostrarVariablesEconomicas');

			let botonMostrarPanelDeDatos = document.getElementById('botonMostrarPanelDeDatos');

			let contenedorFormularioVariablesEconomicas = document.getElementById('contenedorFormularioVariablesEconomicas');

			let contenedorDeMapaYGraficoDeVariablesEconomicas = document.getElementById('contenedorDeMapaYGraficoDeVariablesEconomicas');

			let contenedorCarruselInformesMensuales = document.getElementById('contenedorCarruselInformesMensuales');

			let tarjetasVariablesEconomicas = contenedorListaDeVariablesEconomicas.querySelectorAll('.tarjetaVariableEconomica');

			flecha.addEventListener('click', () => {

				if(flecha.classList.contains('mostrarFilas')) {

					modificarDisplayDeElementos(filasOcultas, ['','']);

				} else {

					modificarDisplayDeElementos(filasOcultas, ['none','none']);

				}

				modificarFlecha(flecha);

			});

			botonMostrarVariablesEconomicas.addEventListener('click', () => {

				contenedorListaDeVariablesEconomicas.style.display = '';

				contenedorFormularioVariablesEconomicas.style.display = 'none';

				contenedorDeMapaYGraficoDeVariablesEconomicas.style.display = 'none';

				contenedorCarruselInformesMensuales.style.display = 'none';

			});

			botonMostrarPanelDeDatos.addEventListener('click', () => {

				contenedorListaDeVariablesEconomicas.style.display = 'none';

				contenedorFormularioVariablesEconomicas.style.display = '';

				contenedorDeMapaYGraficoDeVariablesEconomicas.style.display = '';

				contenedorCarruselInformesMensuales.style.display = '';

			});

			for(let i = 0; i < tarjetasVariablesEconomicas.length; i++) {

				tarjetasVariablesEconomicas[i].addEventListener('click', () => {

					let variableEconomicaSeleccionada = tarjetasVariablesEconomicas[i].querySelector('h4').textContent;

					let tituloFormularioVariablesEconomicas = document.getElementById('tituloFormularioVariablesEconomicas');

					tituloFormularioVariablesEconomicas.textContent = variableEconomicaSeleccionada;

					let urlDeImagen = devolverUrlDeImagen(variableEconomicaSeleccionada);

					modificarImagenDeFondoDeContenedor(contenedorFormularioVariablesEconomicas, urlDeImagen);

					contenedorListaDeVariablesEconomicas.style.display = 'none';

					contenedorFormularioVariablesEconomicas.style.display = '';

					contenedorDeMapaYGraficoDeVariablesEconomicas.style.display = '';

					contenedorCarruselInformesMensuales.style.display = '';

				});

			}
			

		break;

		case 'censos':
			
			//Almacenamos el boton del formulario para buscar datos del censo.
			let botonBuscarDatosDelCenso = document.getElementById('buscarDatosDelCenso'); 

			//Detectamos click sobre el boton.
			botonBuscarDatosDelCenso.addEventListener('click', () => {

				//Almacenamos el año seleccionado
				let añoDelCenso = document.getElementById('añoDelCenso').value;

				//Almacenamos la categoria del censo.
				let categoriaDeDatosDeCenso = document.getElementById('categoriaDeDatosDeCenso').value;

				//Si la categoría seleccionada es total provincial.
				if(categoriaDeDatosDeCenso === 'totalProvincial')	{

					//Ocultamos el contenedor del mapa de formosa.
					modificarDisplayDeElementos([contenedorDeMapaDeFormosa], displayDeCensos[categoriaDeDatosDeCenso]);

					//Mostramos el contenedor de datos generales del censo.
					modificarDisplayDeElementos([contenedorCenso2001, contenedorCenso2010], displayDeCensos[añoDelCenso]);

				}	else if (categoriaDeDatosDeCenso === 'porDepartamento') { //fin if(categoriaDeDatosDeCenso === 'totalProvincial')

					let objetoCenso = [];

					//let llavesDeContenedoresDeDatosDeCenso = ['primerContenedor', 'segundoContenedor', 'tercerContenedor', 'cuartoContenedor', 'quintoContenedor', 'sextoContenedor', 'septimoContenedor'];

					//let CantidadDeLlavesDeContenedores = llavesDeContenedoresDeDatosDeCenso.length;

					let mapaDeFormosa = document.getElementById('mapaDeFormosa');

					//Almacenamos los datos del objeto en base al año seleccionado en el formulario.
					objetoCenso = censos['censo' + añoDelCenso];

					mapaDeFormosa.querySelector('.seleccionado').setAttribute('class', '') ;

					mapaDeFormosa.getElementById('Formosa').setAttribute('class', 'seleccionado') ;

					/*Si la categoria de censo seleccionada es por departamento, se ocultan los contenedores de datos generales y se muestra
					 el contenedor del mapa*/
					modificarDisplayDeElementos([contenedorDeMapaDeFormosa, contenedorCenso2001, contenedorCenso2010], displayDeCensos[categoriaDeDatosDeCenso]);
					
					//Recorremos los contenedores para obtener los datos relacionados al censo.
					for(let i = 0; i < CantidadDeLlavesDeContenedores; i++) {

						modificarRectaDeMapaDeCenso(objetoCenso[llavesDeContenedoresDeDatosDeCenso[i]]);

						modificarLineaDeMapaDeCenso(objetoCenso.Formosa[llavesDeContenedoresDeDatosDeCenso[i]]);

						modificarLinkDeMapaDeCenso(objetoCenso.Formosa[llavesDeContenedoresDeDatosDeCenso[i]]);

						modificarTextosDeMapaDeCenso(objetoCenso[llavesDeContenedoresDeDatosDeCenso[i]]);

					}//fin bucle for i

					//Almacenamos los departamentos de la provincia.
					let departamentos = mapaDeFormosa.querySelectorAll('path');

					//Recorremos cada departamento
					for(let i = 0; i < 9; i++) {

						//Detectamos las interacciones sobre cada departamento.
						departamentos[i].addEventListener('click', () => {

							//Obtenemos el id del departamento sobre el que se hace click.
							let objetoDepartamento	=	objetoCenso[departamentos[i].getAttribute('id')];

							//Se elimina la clase seleccionado del departamento anterior.
							mapaDeFormosa.querySelector('.seleccionado').setAttribute('class', '') ;

							//Se agrega la clase seleccionado sobre
							departamentos[i].setAttribute('class', 'seleccionado') ;

							for(let j = 0; j < 7; j++) {

								modificarLineaDeMapaDeCenso(objetoDepartamento[llavesDeContenedoresDeDatosDeCenso[j]] );

							}//fin bucle for j
				
						});

					}

				}//fin else if (categoriaDeDatosDeCenso === 'porDepartamento')
				
			});//fin botonBuscarDatosDelCenso.addEventListener

		break;

	}//fin switch

}//fin function detectarInteraccionConContenedor


function obtenerContenedoresPrincipales(idsDeContenedoresPrincipales) {

	let contenedoresPrincipales = [];

	//Almacenamos la cantidad de elementos a recorrer.
	let cantidadDeElementos = idsDeContenedoresPrincipales.length;

	//Recorremos cada elemento html.
	for (let i = 0; i < cantidadDeElementos; i++) {

		//Aplicamos el display a cada elemento html.
		contenedoresPrincipales.push(document.getElementById(idsDeContenedoresPrincipales[i]));

	}//fin bucle for

	return contenedoresPrincipales;

}//fin function obtenerContenedoresPrincipales


function detectarInteraccionConBarraDeInicio(elementos) {

	//Almacenamos la cantidad de elementos.
	let cantidadDeElementos = elementos.length;

	//Declaramos matriz para almacenar el valor de display asignado a cada elemento.
	let matrizDisplayDeContenedoresPrincipales = [];

	//Almacenamos el id de los contenedores principales.
	let idsDeContenedoresPrincipales = Object.values(contenedoresAsociadosPorId);

	//Recorremos los elementops con un bucle.
	for (let i = 0; i < cantidadDeElementos; i++) {

		//Detectamos click sobre el elemento li específico.
		elementos[i].addEventListener('click', () => {
			
			let contenedoresPrincipales = obtenerContenedoresPrincipales(idsDeContenedoresPrincipales);

			//Llamamos a la función para asignar el display a cada uno de los contenedores principales.
			matrizDisplayDeContenedoresPrincipales = establecerDisplayDeContenedoresPrincipales(elementos[i]);
			
			//Llamamos a la función para modificar el display de cada elemento.
			modificarDisplayDeElementos(contenedoresPrincipales, matrizDisplayDeContenedoresPrincipales);

			detectarInteraccionConContenedor(elementos[i].getAttribute('id'));

		}); //fin elementos[i].addEventListener

	}//fin bucle for

}//fin function llamarFuncionConEvento


addEventListener("DOMContentLoaded", () => {

	//Almacenamos los elementos li de la barra de navegación principal.
	let itemsDeBarraDeInicio = document.getElementById('barraDeInicio').querySelectorAll('li');

	//Llamamos a la función para detectar la interaccion con la NavBar y mostrar el contenedor correspondiente.
	detectarInteraccionConBarraDeInicio(itemsDeBarraDeInicio);

	//Cuando se termina de cargar el DOM, se ejecuta la función que modifica los numeros de la tarjeta.
	modificarNumerosDeTrjetas();

});//fin addEventListener


