const mapaDeFormosa = {	nombreDeDepartamentos: ['Ramon Lista', 'Bermejo', 'Matacos', 'Patiño', 'Pilagás', 'Pilcomayo', 'Pirané', 'Formosa', 'Mision Laishi'],

						idsDeDepartamentos: ['RamonLista', 'Bermejo', 'Matacos', 'Patino', 'Pilagas', 'Pilcomayo', 'Pirane', 'Formosa', 'MisionLaishi'] 

}//fin mapaDeFormosa

const mapaDeArgentina = {	nombreDeTodasLasProvincias: [	'Buenos Aires',
															'Catamarca',
															'Chaco',
															'Chubut',
															'Capital Federal',
															'Córdoba',
															'Corrientes',
															'Entre Ríos',
															'Formosa',
															'Jujuy',
															'La Pampa',
															'La Rioja',
															'Mendoza',
															'Misiones',
															'Neuquén',
															'Río Negro',
															'Salta',
															'San Juan',
															'San Luis',
															'Santa Cruz',
															'Santa Fe',
															'Santiago del Estero',
															'Tierra del Fuego',
															'Tucumán'],


							idsProvincias: [	'BuenosAires',
												'Catamarca',
												'Chaco',
												'Chubut',
												'CapitalFederal',
												'Cordoba',
												'Corrientes',
												'EntreRios',
												'Formosa',
												'Jujuy',
												'LaPampa',
												'LaRioja',
												'Mendoza',
												'Misiones',
												'Neuquen',
												'RioNegro',
												'Salta',
												'SanJuan',
												'SanLuis',
												'SantaCruz',
												'SantaFe',
												'SantiagoDelEstero',
												'TierraDelFuego',
												'Tucuman'],

							nombreDeRegionesNeaNoa: [	'Catamarca',
														'Corrientes',
														'Chaco', 
														'Jujuy',
														'La Rioja',
														'Misiones',
														'Salta',
														'Santiago del Estero',
														'Formosa',
														'Tucumán'],

							idsRegionNeaNoa: [	'Catamarca',
												'Corrientes',
												'Chaco', 
												'Jujuy',
												'LaRioja',
												'Misiones',
												'Salta',
												'SantiagoDelEstero',
												'Formosa',
												'Tucuman']	

}//fin mapaDeArgentina

const colores = {	tonosTurquesa: [	'#f3fffe',
                        				'#cff3f6',
                        				'#abe7ee',
                        				'#87dbe6',
                        				'#64cedf',
                        				'#1cb6cf',
                        				'#119eb4',
                        				'#0e8194',
                        				'#0b6473',
                        				'#084852',
                        				'#052b31',
                        				'#020e10'],

					tonosNaranja: [	'#fff3e9', 
                    				'#f8e0bf',
                    				'#f0ce94',
                    				'#e9bb6a',
                    				'#e2a940',
                    				'#db9615',
                    				'#c98400',
                    				'#ad7100',
                    				'#915f00',
                    				'#754c00',
                    				'#593a00',
                    				'#3d2700']

}//fin colores

const canastaBasicaAlimentaria = {	imagenDePortada: {	src: 'imagenes/Canasta-basica mini.jpg',	
														
														alt: 'PORTADA DE INFORME DE CANASTA BASICA ALIMENTARIA'
									}, 

									regionNeaNoa: {	nombreDeLasProvincias: mapaDeArgentina.nombreDeRegionesNeaNoa,

													idsDeProvincias: mapaDeArgentina.idsRegionNeaNoa,

													VIM: [	45.67, 
															22.33, 
															89.01, 
															88.99, 
															34.43, 
															78.87, 
															33.44, 
															21.43, 
															66.77, 
															32.45 ],

													VIA: [	87.65, 
															32.10, 
															76.54, 
															9.87, 
															7.65, 
															5.43, 
															2.10, 
															3.45, 
															10.98, 
															5.67 ],

													color: [	colores.tonosTurquesa[0],
									 							colores.tonosTurquesa[1],
									 							colores.tonosTurquesa[2],
									 							colores.tonosTurquesa[3],
									 							colores.tonosTurquesa[5],
									 							colores.tonosTurquesa[8],
									 							colores.tonosTurquesa[9],
									 							colores.tonosTurquesa[10],
									 							colores.tonosTurquesa[11] ],

													colorDeBorde:  [	colores.tonosTurquesa[11],
																		colores.tonosTurquesa[11],
																		colores.tonosTurquesa[11],
																		colores.tonosTurquesa[11],	
																		colores.tonosTurquesa[0],
																		colores.tonosTurquesa[0],
																		colores.tonosTurquesa[0],
																		colores.tonosTurquesa[0],
																		colores.tonosTurquesa[0] ]

									},

									todasLasProvincias: {	nombreDeLasProvincias: mapaDeArgentina.nombreDeTodasLasProvincias,

															idsDeProvincias: mapaDeArgentina.idsProvincias,

															VIM: [	12.34, 
																	45.67, 
																	89.01, 
																	23.45, 
																	67.89, 
																	10.11, 
																	22.33, 
																	44.55, 
																	66.77, 
																	88.99, 
																	12.21, 
																	34.43, 
																	56.65, 
																	78.87, 
																	90.12, 
																	11.22, 
																	33.44, 
																	55.66, 
																	77.88, 
																	99.00, 
																	14.32, 
																	21.43, 
																	78.56, 
																	32.45 ],

															VIA: [	98.76, 
																	87.65, 
																	76.54, 
																	65.43, 
																	54.32, 
																	43.21, 
																	32.10, 
																	21.09, 
																	10.98, 
																	9.87, 
																	8.76, 
																	7.65, 
																	6.54, 
																	5.43, 
																	4.32, 
																	3.21, 
																	2.10, 
																	1.09, 
																	0.98, 
																	1.23, 
																	2.34, 
																	3.45, 
																	4.56, 
																	5.67 ],

															color: colores.tonosTurquesa,

															colorDeBorde: [	colores.tonosTurquesa[11],
																			colores.tonosTurquesa[11],
																			colores.tonosTurquesa[11],
																			colores.tonosTurquesa[11],
																			colores.tonosTurquesa[11], 
																			colores.tonosTurquesa[0],
																			colores.tonosTurquesa[0],
																			colores.tonosTurquesa[0],
																			colores.tonosTurquesa[0],
																			colores.tonosTurquesa[0],
																			colores.tonosTurquesa[0] ]
									}

}//fin canastaBasicaAlimentaria

const coeficienteDeGini = {	imagenDePortada: {	src: 'imagenes/coeficiente de gini mini.jfif',	
														
												alt: 'PORTADA DE INFORME DE COEFICIENTE DE GINI'
							}, 

							regionNeaNoa: { nombreDeLasProvincias: mapaDeArgentina.nombreDeRegionesNeaNoa,

											idsDeProvincias: mapaDeArgentina.idsRegionNeaNoa,

											VIM: [	67.890,
													45.678,
													23.456,
													12.234,
													23.456,
													34.567,
													90.123,
													78.901,
													56.789,
													89.012],
				
											VIA: [	39.633,
													15.089,
													73.681,
													93.042,
													10.695,
													94.444,
													86.203,
													40.943,
													35.823,
													84.144],

											color: [	colores.tonosNaranja[0],
									 					colores.tonosNaranja[1],
									 					colores.tonosNaranja[2],
									 					colores.tonosNaranja[3],
									 					colores.tonosNaranja[6],
									 					colores.tonosNaranja[8],
									 					colores.tonosNaranja[9],
									 					colores.tonosNaranja[10],
									 					colores.tonosNaranja[11] ],

											colorDeBorde: [	colores.tonosNaranja[11],
															colores.tonosNaranja[11],
															colores.tonosNaranja[11],
															colores.tonosNaranja[11],	
															colores.tonosNaranja[0],
															colores.tonosNaranja[0],
															colores.tonosNaranja[0],
															colores.tonosNaranja[0],
															colores.tonosNaranja[0] ]
							},

							todasLasProvincias: { 	nombreDeLasProvincias: mapaDeArgentina.nombreDeTodasLasProvincias,

													idsDeProvincias: mapaDeArgentina.idsProvincias,

													VIM: [	12.345, 
															67.890, 
															23.456, 
															78.901, 
															34.567, 
															89.012, 
															45.678, 
															90.123, 
															56.789, 
															12.234, 
															67.890, 
															23.456, 
															78.901, 
															34.567, 
															89.012, 
															45.678, 
															90.123, 
															56.789, 
															12.345, 
															67.890, 
															23.456, 
															78.901, 
															34.567, 
															89.012 ],

												 	VIA: [	13.508, 
														39.633, 
														73.681, 
														88.414, 
														55.757, 
														37.233, 
														15.089, 
														54.705, 
														35.823, 
														93.042, 
														69.549, 
														10.695, 
														31.014, 
														94.444, 
														95.732, 
														81.305, 
														86.203, 
														63.102, 
														78.541, 
														34.084, 
														85.161, 
														40.943, 
														83.502, 
														84.144],

												 	color: colores.tonosNaranja,

												 	colorDeBorde: [	colores.tonosNaranja[11],
																	colores.tonosNaranja[11],
																	colores.tonosNaranja[11],
																	colores.tonosNaranja[11],
																	colores.tonosNaranja[11], 
												 					colores.tonosNaranja[0],
																	colores.tonosNaranja[0],
																	colores.tonosNaranja[0],
																	colores.tonosNaranja[0],
																	colores.tonosNaranja[0],
																	colores.tonosNaranja[0] ],

							} 

}//fin coeficienteDeGini

const censos = {	censo2001: {	

									primerContenedor: {	recta: {	id: 'censoPrimerRecta',
									 								x: '60', 
									 								y: '10', 
									 								ry: '20', 
									 								width: '270', 
									 								height: '65'	
									 					},//fin recta

														texto: {	nombreDeClase: 'censoPrimerTexto',

											 						primerLinea: {	x: '90', 
											 										y: '30', 
											 										contenido: 'Población de 14 años o más por'
											 						},//fin primerLinea

											 						segundaLinea: {	x: '85', 
											 										y: '47', 
											 										contenido: 'condición de actividad económica'
											 						},//fin segundaLinea

											 						terceraLinea: {	x: '125', 
											 										y: '64', 
											 										contenido: 'según sexo. Año 2001'
											 						},//fin terceraLinea

											 						cuartaLinea: {	x: '165', 
											 										y: '95', 
											 										contenido: 'Descargar'
											 						}//fin cuartaLinea

														}// fin texto

									},//fin primerContenedor
									
									segundoContenedor: {	recta: {	id: 'censoSegundaRecta',
									 									x: '400', 
									 									y: '10', 
									 									ry: '20', 
									 									width: '340', 
									 									height: '65'	
									 						},//fin recta
								
															texto: {	nombreDeClase: 'censoSegundoTexto',

											 							primerLinea: {	x: '440', 
											 											y: '30', 
											 											contenido: 'Población de 14 años o más, población'
											 							},//fin primerLinea

											 							segundaLinea: {	x: '430', 
											 											y: '47', 
											 											contenido: 'ocupada y población no económicamente'
											 							},//fin segundaLinea

											 							terceraLinea: {	x: '415', 
											 											y: '64', 
											 											contenido: 'activa según sexo y grupos de edad. Año 2001'
											 							},//fin terceraLinea

											 							cuartaLinea: {	x: '535', 
											 											y: '95', 
											 											contenido: 'Descargar'
											 							}//fin cuartaLinea

															}// fin texto

									},//fin segundoContenedor
        					
									tercerContenedor: {	recta: {	id: 'censoTerceraRecta',
									 								x: '210', 
									 								y: '120', 
									 								ry: '20', 
									 								width: '300', 
									 								height: '60'	
									 					},//fin recta

														texto: {	nombreDeClase: 'censoTercerTexto',

											 						primerLinea: {	x: '245', 
											 										y: '140', 
											 										contenido: 'Jefes de hogares por condición de'
											 						},//fin primerLinea

											 						segundaLinea: {	x: '250', 
											 										y: '157', 
											 										contenido: 'actividad económica según sexo.'
											 						},//fin segundaLinea

											 						terceraLinea: {	x: '330', 
											 										y: '174', 
											 										contenido: 'Año 2001'
											 						},//fin terceraLinea

											 						cuartaLinea: {	x: '325', 
											 										y: '200', 
											 										contenido: 'Descargar'
											 						}//fin cuartaLinea

														}// fin texto

									},//fin tercerContenedor
				
									cuartoContenedor: {	recta: {	id: 'censoCuartaRecta',
									 								x: '417', 
									 								y: '205', 
									 								ry: '20', 
									 								width: '330', 
									 								height: '65'	
									 					},//fin recta
										
														texto: {	nombreDeClase: 'censoCuartoTexto',

											 						primerLinea: {	x: '445', 
											 										y: '225', 
											 										contenido: 'Población de 14 años o más ocupada por '
											 						},//fin primerLinea

											 						segundaLinea: {	x: '435', 
											 										y: '242', 
											 										contenido: 'categoría ocupacional según sexo y máximo '
											 						},//fin segundaLinea

											 						terceraLinea: {	x: '447', 
											 										y: '259', 
											 										contenido: 'nivel de instrucción alcanzado. Año 2001'
											 						},//fin terceraLinea

											 						cuartaLinea: {	x: '550', 
											 										y: '290', 
											 										contenido: 'Descargar'
											 						}//fin cuartaLinea

														}// fin texto

									},//fin cuartoContenedor
								
									quintoContenedor: {	recta: {	id: 'censoQuintaRecta',
									 								x: '5', 
									 								y: '475', 
									 								ry: '20', 
									 								width: '310', 
									 								height: '65'	
									 					},//fin recta

														texto: {	nombreDeClase: 'censoQuintoTexto',

											 						primerLinea: {	x: '55', 
											 										y: '495', 
											 										contenido: 'Población de 14 años o más por'
											 						},//fin primerLinea

											 						segundaLinea: {	x: '25', 
											 										y: '512', 
											 										contenido: 'percepción de jubilación o pensión según'
											 						},//fin segundaLinea

											 						terceraLinea: {	x: '50', 
											 										y: '529', 
											 										contenido: 'sexo y grupos de edad. Año 2001'
											 						},//fin terceraLinea

											 						cuartaLinea: {	x: '130', 
											 										y: '560', 
											 										contenido: 'Descargar'
											 						}//fin cuartaLinea

														}// fin texto

									},//fin quintoContenedor
									
									departamentoBermejo: {	primerContenedor: {	linea: {	id: 'censoPrimerLinea', 
																							x1: '350', 
																							y1: '75', 
																							x2: '150', 
																							y2: '250'
																				},//fin linea
																	
																				link: {	id: 'censoPrimerLink', 
																						href: 'https://www.formosa.gob.ar/modulos/estadistica/templates/files/cuadros/cuadro10325.html'
																				}, //fin link
 	
															},//fin primerContenedor
																 
															segundoContenedor: {	linea: {	id: 'censoSegundaLinea', 
																								x1: '705', 
																								y1: '50', 
																								x2: '150', 
																								y2: '250'
																					},//fin linea
													
																					link: {	id: 'censoSegundoLink', 
																							href: 'https://www.formosa.gob.ar/modulos/estadistica/templates/files/cuadros/cuadro10326.html'
																					}, //fin link

															},//fin segundoContenedor
															
															tercerContenedor: {	linea: {	id: 'censoTerceraLinea', 
																							x1: '500', 
																							y1: '165', 
																							x2: '150', 
																							y2: '250'
																				},//fin linea
																		
																				link: {	id: 'censoTercerLink', 
																						href: 'https://www.formosa.gob.ar/modulos/estadistica/templates/files/cuadros/cuadro10327.html'
																				}, //fin link
																			
															},//fin tercerContenedor
															
															cuartoContenedor: {	linea: {	id: 'censoCuartaLinea', 
																							x1: '700', 
																							y1: '250', 
																							x2: '150', 
																							y2: '250'
																				},//fin linea
																		
																				link: {	id: 'censoCuartoLink', 
																						href: 'https://www.formosa.gob.ar/modulos/estadistica/templates/files/cuadros/cuadro10328.html'
																				}, //fin link
															
															},//fin cuartoContenedor
        											
															quintoContenedor: {	linea: {	id: 'censoQuintaLinea', 
																							x1: '300', 
																							y1: '515', 
																							x2: '150', 
																							y2: '250'
																				},//fin linea
																			
																				link: {	id: 'censoQuintoLink', 
																						href: 'https://www.formosa.gob.ar/modulos/estadistica/templates/files/cuadros/cuadro10329.html'
																				}, //fin link
														
															}//fin quintoContenedor

									}, //fin departamentoBermejo

									departamentoFormosa: {	primerContenedor: {	linea: {	id: 'censoPrimerLinea', 
																							x1: '310', 
																							y1: '75', 
																							x2: '630', 
																							y2: '550'
																				},//fin linea
								
																				link: {	id: 'censoPrimerLink', 
																						href: 'https://www.formosa.gob.ar/modulos/estadistica/templates/files/cuadros/cuadro10330.html'
																				}, //fin link

															},//fin primerContenedor

															segundoContenedor: {	linea: {	id: 'censoSegundaLinea', 
																								x1: '705', 
																								y1: '50', 
																								x2: '630', 
																								y2: '550'
																					},//fin linea
																		
																					link: {	id: 'censoSegundoLink', 
																							href: 'https://www.formosa.gob.ar/modulos/estadistica/templates/files/cuadros/cuadro10331.html'
																					}, //fin link

															},//fin segundoContenedor
        												
															tercerContenedor: {	linea: {	id: 'censoTerceraLinea', 
																							x1: '500', 
																							y1: '165', 
																							x2: '630', 
																							y2: '550'
																				},//fin linea
																		
																				link: {	id: 'censoTercerLink', 
																						href: 'https://www.formosa.gob.ar/modulos/estadistica/templates/files/cuadros/cuadro10332.html'
																				}, //fin link

															},//fin tercerContenedor

															cuartoContenedor: {	linea: {	id: 'censoCuartaLinea', 
																							x1: '700', 
																							y1: '250', 
																							x2: '630', 
																							y2: '550'
																				},//fin linea
																		
																				link: {	id: 'censoCuartoLink', 
																						href: 'https://www.formosa.gob.ar/modulos/estadistica/templates/files/cuadros/cuadro10333.html'
																				}, //fin link
																		
															},//fin cuartoContenedor

															quintoContenedor: {	linea: {	id: 'censoQuintaLinea', 
																							x1: '300', 
																							y1: '515', 
																							x2: '630', 
																							y2: '550'
																				},//fin linea
																	
																				link: {	id: 'censoQuintoLink', 
																						href: 'https://www.formosa.gob.ar/modulos/estadistica/templates/files/cuadros/cuadro10334.html'
																				}, //fin link
														
															}//fin quintoContenedor

									}, //fin departamentoFormosa
										
									departamentoLaishi: {	primerContenedor: {	linea: {	id: 'censoPrimerLinea', 
																							x1: '350', 
																							y1: '75', 
																							x2: '590', 
																							y2: '630'
																				},//fin linea
									
																				link: {	id: 'censoPrimerLink', 
																						href: 'https://www.formosa.gob.ar/modulos/estadistica/templates/files/cuadros/cuadro10335.html'
																				}, //fin link
	
															},//fin primerContenedor
													
															segundoContenedor: {	linea: {	id: 'censoSegundaLinea', 
																								x1: '705', 
																								y1: '50', 
																								x2: '590', 
																								y2: '630'
																					},//fin linea
												
																					link: {	id: 'censoSegundoLink', 
																							href: 'https://www.formosa.gob.ar/modulos/estadistica/templates/files/cuadros/cuadro10336.html'
																					}, //fin link
													
															},//fin segundoContenedor
        											
															tercerContenedor: {	linea: {	id: 'censoTerceraLinea', 
																							x1: '450', 
																							y1: '165', 
																							x2: '590', 
																							y2: '630'
																				},//fin linea
													
																				link: {	id: 'censoTercerLink', 
																						href: 'https://www.formosa.gob.ar/modulos/estadistica/templates/files/cuadros/cuadro10337.html'
																				}, //fin link

															},//fin tercerContenedor
        											
															cuartoContenedor: {	linea: {	id: 'censoCuartaLinea', 
																							x1: '700', 
																							y1: '250', 
																							x2: '590', 
																							y2: '630'
																				},//fin linea
													
																				link: {	id: 'censoCuartoLink', 
																						href: 'https://www.formosa.gob.ar/modulos/estadistica/templates/files/cuadros/cuadro10338.html'
																				}, //fin link
									
															},//fin cuartoContenedor
        											
															quintoContenedor: {	linea: {	id: 'censoQuintaLinea', 
																							x1: '300', 
																							y1: '515', 
																							x2: '590', 
																							y2: '630'
																				},//fin linea
									
																				link: {	id: 'censoQuintoLink', 
																						href: 'https://www.formosa.gob.ar/modulos/estadistica/templates/files/cuadros/cuadro10339.html'
																				}, //fin link

															},//fin quintoContenedor

									}, //fin departamentoLaishi
							
									departamentoMatacos: {	primerContenedor: {	linea: {	id: 'censoPrimerLinea', 
																							x1: '350', 
																							y1: '75', 
																							x2: '40', 
																							y2: '210'
																				},//fin linea
								
																				link: {	id: 'censoPrimerLink', 
																						href: 'https://www.formosa.gob.ar/modulos/estadistica/templates/files/cuadros/cuadro10340.html'
																				}, //fin link

															},//fin primerContenedor
										
															segundoContenedor: {	linea: {	id: 'censoSegundaLinea', 
																								x1: '705', 
																								y1: '50', 
																								x2: '40', 
																								y2: '210'
																					},//fin linea
																		
																					link: {	id: 'censoSegundoLink', 
																							href: 'https://www.formosa.gob.ar/modulos/estadistica/templates/files/cuadros/cuadro10341.html'
																					}, //fin link

															},//fin segundoContenedor
        											
															tercerContenedor: {	linea: {	id: 'censoTerceraLinea', 
																							x1: '450', 
																							y1: '165', 
																							x2: '40', 
																							y2: '210'
																				},//fin linea
																		
																				link: {	id: 'censoTercerLink', 
																						href: 'https://www.formosa.gob.ar/modulos/estadistica/templates/files/cuadros/cuadro10342.html'
																				}, //fin link

															},//fin tercerContenedor
										
															cuartoContenedor: {	linea: {	id: 'censoCuartaLinea', 
																							x1: '700', 
																							y1: '250', 
																							x2: '40', 
																							y2: '210'
																				},//fin linea
																		
																				link: {	id: 'censoCuartoLink', 
																						href: 'https://www.formosa.gob.ar/modulos/estadistica/templates/files/cuadros/cuadro10343.html'
																				}, //fin link
																		
															},//fin cuartoContenedor
												
															quintoContenedor: {	linea: {	id: 'censoQuintaLinea', 
																							x1: '300', 
																							y1: '515', 
																							x2: '40', 
																							y2: '210'
																				},//fin linea
																	
																				link: {	id: 'censoQuintoLink', 
																						href: 'https://www.formosa.gob.ar/modulos/estadistica/templates/files/cuadros/cuadro10344.html'
																				}, //fin link

															},//fin quintoContenedor

									}, //fin departamentoMatacos
									
									departamentoPatino: {	primerContenedor: {	linea: {	id: 'censoPrimerLinea', 
																							x1: '350', 
																							y1: '75', 
																							x2: '370', 
																							y2: '370'
																				},//fin linea
								
																				link: {	id: 'censoPrimerLink', 
																						href: 'https://www.formosa.gob.ar/modulos/estadistica/templates/files/cuadros/cuadro10345.html'
																				}, //fin link

															},//fin primerContenedor
											
															segundoContenedor: {	linea: {	id: 'censoSegundaLinea', 
																								x1: '705', 
																								y1: '50', 
																								x2: '370', 
																								y2: '370'
																					},//fin linea
																		
																					link: {	id: 'censoSegundoLink', 
																							href: 'https://www.formosa.gob.ar/modulos/estadistica/templates/files/cuadros/cuadro10346.html'
																					}, //fin link

															},//fin segundoContenedor
        										
															tercerContenedor: {	linea: {	id: 'censoTerceraLinea', 
																							x1: '450', 
																							y1: '165', 
																							x2: '370', 
																							y2: '370'
																				},//fin linea
																		
																				link: {	id: 'censoTercerLink', 
																						href: 'https://www.formosa.gob.ar/modulos/estadistica/templates/files/cuadros/cuadro10347.html'
																				}, //fin link

															},//fin tercerContenedor
										
															cuartoContenedor: {	linea: {	id: 'censoCuartaLinea', 
																							x1: '700', 
																							y1: '250', 
																							x2: '370', 
																							y2: '370'
																				},//fin linea
																		
																				link: {	id: 'censoCuartoLink', 
																						href: 'https://www.formosa.gob.ar/modulos/estadistica/templates/files/cuadros/cuadro10348.html'
																				}, //fin link

															},//fin cuartoContenedor
										
															quintoContenedor: {	linea: {	id: 'censoQuintaLinea', 
																							x1: '300', 
																							y1: '515', 
																							x2: '370', 
																							y2: '370'
																				},//fin linea
																	
																				link: {	id: 'censoQuintoLink', 
																						href: 'https://www.formosa.gob.ar/modulos/estadistica/templates/files/cuadros/cuadro10349.html'
																				}, //fin link
														
															}//fin quintoContenedor

									}, //fin departamentoPatino
									
									departamentoPilagas: {	primerContenedor: {	linea: {	id: 'censoPrimerLinea', 
																							x1: '350', 
																							y1: '75', 
																							x2: '580', 
																							y2: '420'
																				},//fin linea
								
																				link: {	id: 'censoPrimerLink', 
																						href: 'https://www.formosa.gob.ar/modulos/estadistica/templates/files/cuadros/cuadro10350.html'
																				}, //fin link

															},//fin primerContenedor
								
															segundoContenedor: {	linea: {	id: 'censoSegundaLinea', 
																								x1: '705', 
																								y1: '50', 
																								x2: '580', 
																								y2: '420'
																					},//fin linea
																		
																					link: {	id: 'censoSegundoLink', 
																							href: 'https://www.formosa.gob.ar/modulos/estadistica/templates/files/cuadros/cuadro10351.html'
																					}, //fin link
								
															},//fin segundoContenedor
        										
															tercerContenedor: {	linea: {	id: 'censoTerceraLinea', 
																							x1: '450', 
																							y1: '165', 
																							x2: '580', 
																							y2: '420'
																				},//fin linea
																		
																				link: {	id: 'censoTercerLink', 
																						href: 'https://www.formosa.gob.ar/modulos/estadistica/templates/files/cuadros/cuadro10352.html'
																				}, //fin link

															},//fin tercerContenedor
									
															cuartoContenedor: {	linea: {	id: 'censoCuartaLinea', 
																							x1: '700', 
																							y1: '250', 
																							x2: '580', 
																							y2: '420'
																				},//fin linea
																		
																				link: {	id: 'censoCuartoLink', 
																						href: 'https://www.formosa.gob.ar/modulos/estadistica/templates/files/cuadros/cuadro10353.html'
																				}, //fin link

															},//fin cuartoContenedor
											
															quintoContenedor: {	linea: {	id: 'censoQuintaLinea', 
																							x1: '300', 
																							y1: '515', 
																							x2: '580', 
																							y2: '420'
																				},//fin linea
																	
																				link: {	id: 'censoQuintoLink', 
																						href: 'https://www.formosa.gob.ar/modulos/estadistica/templates/files/cuadros/cuadro10354.html'
																				}, //fin link

															}//fin quintoContenedor

									}, //fin departamentoPilagas
								
									departamentoPilcomayo: {	primerContenedor: {	linea: {	id: 'censoPrimerLinea', 
																								x1: '350', 
																								y1: '75', 
																								x2: '680', 
																								y2: '460'
																					},//fin linea
								
																					link: {	id: 'censoPrimerLink', 
																							href: 'https://www.formosa.gob.ar/modulos/estadistica/templates/files/cuadros/cuadro10355.html'
																					}, //fin link

																},//fin primerContenedor
											
																segundoContenedor: {	linea: {	id: 'censoSegundaLinea', 
																									x1: '705', 
																									y1: '50', 
																									x2: '680', 
																									y2: '460'
																						},//fin linea
																		
																						link: {	id: 'censoSegundoLink', 
																								href: 'https://www.formosa.gob.ar/modulos/estadistica/templates/files/cuadros/cuadro10356.html'
																						}, //fin link

																},//fin segundoContenedor
        												
																tercerContenedor: {	linea: {	id: 'censoTerceraLinea', 
																								x1: '450', 
																								y1: '165', 
																								x2: '680', 
																								y2: '460'
																					},//fin linea
																		
																					link: {	id: 'censoTercerLink', 
																							href: 'https://www.formosa.gob.ar/estadisticas/censo2001'
																					}, //fin link

																},//fin tercerContenedor
												
																cuartoContenedor: {	linea: {	id: 'censoCuartaLinea', 
																								x1: '700', 
																								y1: '250', 
																								x2: '680', 
																								y2: '460'
																					},//fin linea
																		
																					link: {	id: 'censoCuartoLink', 
																							href: 'https://www.formosa.gob.ar/modulos/estadistica/templates/files/cuadros/cuadro10358.html'
																					}, //fin link

																},//fin cuartoContenedor
											
																quintoContenedor: {	linea: {	id: 'censoQuintaLinea', 
																								x1: '300', 
																								y1: '515', 
																								x2: '680', 
																								y2: '460'
																					},//fin linea
																	
																					link: {	id: 'censoQuintoLink', 
																							href: 'https://www.formosa.gob.ar/modulos/estadistica/templates/files/cuadros/cuadro10359.html'
																					}, //fin link

																}//fin quintoContenedor

									}, //fin departamentoPilcomayo
								
									departamentoPirane: {	primerContenedor: {	linea: {	id: 'censoPrimerLinea', 
																							x1: '350', 
																							y1: '75', 
																							x2: '500', 
																							y2: '510'
																				},//fin linea
								
																				link: {	id: 'censoPrimerLink', 
																						href: 'https://www.formosa.gob.ar/modulos/estadistica/templates/files/cuadros/cuadro10360.html'
																				}, //fin link

															},//fin primerContenedor
									
															segundoContenedor: {	linea: {	id: 'censoSegundaLinea', 
																								x1: '705', 
																								y1: '50', 
																								x2: '500', 
																								y2: '510'
																					},//fin linea
																		
																					link: {	id: 'censoSegundoLink', 
																							href: 'https://www.formosa.gob.ar/modulos/estadistica/templates/files/cuadros/cuadro10361.html'
																					}, //fin link
								
															},//fin segundoContenedor
        									
															tercerContenedor: {	linea: {	id: 'censoTerceraLinea', 
																							x1: '450', 
																							y1: '165', 
																							x2: '500', 
																							y2: '510'
																				},//fin linea
																		
																				link: {	id: 'censoTercerLink', 
																						href: 'https://www.formosa.gob.ar/modulos/estadistica/templates/files/cuadros/cuadro10362.html'
																				}, //fin link

															},//fin tercerContenedor
										
															cuartoContenedor: {	linea: {	id: 'censoCuartaLinea', 
																							x1: '700', 
																							y1: '250', 
																							x2: '500', 
																							y2: '510'
																				},//fin linea
																		
																				link: {	id: 'censoCuartoLink', 
																						href: 'https://www.formosa.gob.ar/modulos/estadistica/templates/files/cuadros/cuadro10363.html'
																				}, //fin link

															},//fin cuartoContenedor
									
															quintoContenedor: {	linea: {	id: 'censoQuintaLinea', 
																							x1: '300', 
																							y1: '515', 
																							x2: '500', 
																							y2: '510'
																				},//fin linea
																	
																				link: {	id: 'censoQuintoLink', 
																						href: 'https://www.formosa.gob.ar/modulos/estadistica/templates/files/cuadros/cuadro10364.html'
																				}, //fin link

															}//fin quintoContenedor

									}, //fin departamentoPirane
									
									departamentoRamonLista: {	primerContenedor: {	linea: {	id: 'censoPrimerLinea', 
																								x1: '60', 
																								y1: '50', 
																								x2: '30', 
																								y2: '120'
																					},//fin linea
								
																					link: {	id: 'censoPrimerLink', 
																							href: 'https://www.formosa.gob.ar/modulos/estadistica/templates/files/cuadros/cuadro10365.html'
																					}, //fin link

																},//fin primerContenedor
													
																segundoContenedor: {	linea: {	id: 'censoSegundaLinea', 
																									x1: '420', 
																									y1: '73', 
																									x2: '30', 
																									y2: '120'
																						},//fin linea
																		
																						link: {	id: 'censoSegundoLink', 
																								href: 'https://www.formosa.gob.ar/modulos/estadistica/templates/files/cuadros/cuadro10366.html'
																						}, //fin link

																},//fin segundoContenedor
        										
																tercerContenedor: {	linea: {	id: 'censoTerceraLinea', 
																								x1: '450', 
																								y1: '165', 
																								x2: '30', 
																								y2: '120'
																					},//fin linea
																		
																					link: {	id: 'censoTercerLink', 
																							href: 'https://www.formosa.gob.ar/modulos/estadistica/templates/files/cuadros/cuadro10367.html'
																					}, //fin link

																},//fin tercerContenedor
											
																cuartoContenedor: {	linea: {	id: 'censoCuartaLinea', 
																								x1: '430', 
																								y1: '250', 
																								x2: '30', 
																								y2: '120'
																					},//fin linea
																		
																					link: {	id: 'censoCuartoLink', 
																							href: 'https://www.formosa.gob.ar/modulos/estadistica/templates/files/cuadros/cuadro10368.html'
																					}, //fin link
																		
																},//fin cuartoContenedor
										
																quintoContenedor: {	linea: {	id: 'censoQuintaLinea', 
																								x1: '20', 
																								y1: '515', 
																								x2: '30', 
																								y2: '120'
																					},//fin linea
																	
																					link: {	id: 'censoQuintoLink', 
																							href: 'https://www.formosa.gob.ar/modulos/estadistica/templates/files/cuadros/cuadro10369.html'
																					}, //fin link

																}//fin quintoContenedor

									}, //fin departamentoRamonLista

					}, //fin censo2001
																				
					censo2010: {	primerContenedor: {	recta: {	id: 'censoPrimerRecta',
									 								x: '60', 
									 								y: '10', 
									 								ry: '20', 
									 								width: '330', 
									 								height: '65'	
									 					},//fin recta
									
														texto: {	nombreDeClase: 'censoPrimerTexto',

											 						primerLinea: {	x: '95', 
											 										y: '30', 
											 										contenido: 'Población de 3 años y más en viviendas '
											 						},//fin primerLinea

											 						segundaLinea: {	x: '80', 
											 										y: '47', 
											 										contenido: 'particulares por utilización de computadora,'
											 						},//fin segundaLinea

											 						terceraLinea: {	x: '130', 
											 										y: '64', 
											 										contenido: 'según sexo y edad. Año 2010'
											 						},//fin terceraLinea

											 						cuartaLinea: {	x: '190', 
											 										y: '95', 
											 										contenido: 'Descargar'
											 						}//fin cuartaLinea

														}// fin texto

									},//fin primerContenedor

									segundoContenedor: {	recta: {	id: 'censoSegundaRecta',
									 									x: '405', 
									 									y: '10', 
									 									ry: '20', 
									 									width: '330', 
									 									height: '65'	
									 						},//fin recta
								
															texto: {	nombreDeClase: 'censoSegundoTexto',

											 							primerLinea: {	x: '430', 
											 											y: '30', 
											 											contenido: 'Población total nacida en el extranjero por'
											 							},//fin primerLinea

											 							segundaLinea: {	x: '425', 
											 											y: '47', 
											 											contenido: 'lugar de nacimiento, según sexo y grupo de'
											 							},//fin segundaLinea

											 							terceraLinea: {	x: '520', 
											 											y: '64', 
											 											contenido: 'edad. Año 2010'
											 							},//fin terceraLinea

											 							cuartaLinea: {	x: '540', 
											 											y: '95', 
											 											contenido: 'Descargar'
											 							}//fin cuartaLinea

															}// fin texto

									},//fin segundoContenedor
        												
									tercerContenedor: {	recta: {	id: 'censoTerceraRecta',
									 								x: '210', 
									 								y: '120', 
									 								ry: '20', 
									 								width: '330', 
									 								height: '60'	
									 					},//fin recta

														texto: {	nombreDeClase: 'censoTercerTexto',

											 						primerLinea: {	x: '250', 
											 										y: '140', 
											 										contenido: 'Población total por país de nacimiento,'
											 						},//fin primerLinea

											 						segundaLinea: {	x: '290', 
											 										y: '157', 
											 										contenido: 'según sexo y grupo de edad.'
											 						},//fin segundaLinea

											 						terceraLinea: {	x: '355', 
											 										y: '174', 
											 										contenido: 'Año 2010'
											 						},//fin terceraLinea

											 						cuartaLinea: {	x: '350', 
											 										y: '200', 
											 										contenido: 'Descargar'
											 						}//fin cuartaLinea

														}// fin texto

									},//fin tercerContenedor

									cuartoContenedor: {	recta: {	id: 'censoCuartaRecta',
									 								x: '417', 
									 								y: '205', 
									 								ry: '20', 
									 								width: '330', 
									 								height: '65'	
									 					},//fin recta
																		
														texto: {	nombreDeClase: 'censoCuartoTexto',

											 						primerLinea: {	x: '460', 
											 										y: '225', 
											 										contenido: 'Población total por sexo e índice de'
											 						},//fin primerLinea

											 						segundaLinea: {	x: '435', 
											 										y: '242', 
											 										contenido: 'masculinidad, según edad en años simples y'
											 						},//fin segundaLinea

											 						terceraLinea: {	x: '450', 
											 										y: '259', 
											 										contenido: 'grupos quinquenales de edad. Año 2010'
											 						},//fin terceraLinea

											 						cuartaLinea: {	x: '555', 
											 										y: '290', 
											 										contenido: 'Descargar'
											 						}//fin cuartaLinea

														}// fin texto

									},//fin cuartoContenedor

									quintoContenedor: {	recta: {	id: 'censoQuintaRecta',
									 								x: '5', 
									 								y: '475', 
									 								ry: '20', 
									 								width: '310', 
									 								height: '65'	
									 					},//fin recta
														
														texto: {	nombreDeClase: 'censoQuintoTexto',

											 						primerLinea: {	x: '40', 
											 										y: '495', 
											 										contenido: 'Hogares por tipo de vivienda, según '
											 						},//fin primerLinea

											 						segundaLinea: {	x: '20', 
											 										y: '512', 
											 										contenido: 'Combustible utilizado principalmente para'
											 						},//fin segundaLinea

											 						terceraLinea: {	x: '110', 
											 										y: '529', 
											 										contenido: 'cocinar. Año 2010'
											 						},//fin terceraLinea

											 						cuartaLinea: {	x: '140', 
											 										y: '560', 
											 										contenido: 'Descargar'
											 						}//fin cuartaLinea

														}// fin texto

									},//fin quintoContenedor
															
									sextoContenedor: {	recta: {	id: 'censoSextaRecta',
									 								x: '15', 
									 								y: '595', 
									 								ry: '20', 
									 								width: '310', 
									 								height: '65'	
									 					},//fin recta
																
														texto: {	nombreDeClase: 'censoSextoTexto',

											 						primerLinea: {	x: '30', 
											 										y: '615', 
											 										contenido: 'Hogares por tipo de desagüe del inodoro,'
											 						},//fin primerLinea

											 						segundaLinea: {	x: '35', 
											 										y: '632', 
											 										contenido: 'Según provisión y procedencia del agua.'
											 						},//fin segundaLinea

											 						terceraLinea: {	x: '145', 
											 										y: '649', 
											 										contenido: 'Año 2010'
											 						},//fin terceraLinea

											 						cuartaLinea: {	x: '140', 
											 										y: '685', 
											 										contenido: 'Descargar'
											 						}//fin cuartaLinea

														}// fin texto

									},//fin sextoContenedor
															
									septimoContenedor: {	recta: {	id: 'censoSeptimaRecta',
									 									x: '310', 
									 									y: '695', 
									 									ry: '20', 
									 									width: '385', 
									 									height: '80'	
									 						},//fin recta
																	
																					
														
															texto: {	nombreDeClase: 'censoSeptimoTexto',

											 							primerLinea: {	x: '325', 
											 											y: '720', 
											 											contenido: 'Hogares por material predominante de los pisos de la'
											 							},//fin primerLinea

											 							segundaLinea: {	x: '325', 
											 											y: '737', 
											 											contenido: 'vivienda, según material predominante de la cubierta '
											 							},//fin segundaLinea

											 							terceraLinea: {	x: '325', 
											 											y: '754', 
											 											contenido: 'exterior del techo y presencia de cielorraso. Año 2010'
											 							},//fin terceraLinea

											 							cuartaLinea: {	x: '475', 
											 											y: '795', 
											 											contenido: 'Descargar'
											 							}//fin cuartaLinea

														}// fin texto

									},//fin septimoContenedor

									departamentoBermejo: {	primerContenedor: {	linea: {	id: 'censoPrimerLinea', 
																							x1: '350', 
																							y1: '75', 
																							x2: '150', 
																							y2: '250'
																				},//fin linea
																	
																				link: {	id: 'censoPrimerLink', 
																						href: 'https://archivos.formosa.gob.ar/media/uploads/documentos/documento_434.pdf'
																				}, //fin link
 	
															},//fin primerContenedor
																 
															segundoContenedor: {	linea: {	id: 'censoSegundaLinea', 
																								x1: '705', 
																								y1: '50', 
																								x2: '150', 
																								y2: '250'
																					},//fin linea
													
																					link: {	id: 'censoSegundoLink', 
																							href: 'https://archivos.formosa.gob.ar/media/uploads/documentos/documento_433.pdf'
																					}, //fin link

															},//fin segundoContenedor
															
															tercerContenedor: {	linea: {	id: 'censoTerceraLinea', 
																							x1: '500', 
																							y1: '165', 
																							x2: '150', 
																							y2: '250'
																				},//fin linea
																		
																				link: {	id: 'censoTercerLink', 
																						href: 'https://archivos.formosa.gob.ar/media/uploads/documentos/documento_432.pdf'
																				}, //fin link
																			
															},//fin tercerContenedor
															
															cuartoContenedor: {	linea: {	id: 'censoCuartaLinea', 
																							x1: '700', 
																							y1: '250', 
																							x2: '150', 
																							y2: '250'
																				},//fin linea
																		
																				link: {	id: 'censoCuartoLink', 
																						href: 'https://archivos.formosa.gob.ar/media/uploads/documentos/documento_431.pdf'
																				}, //fin link
															
															},//fin cuartoContenedor
        											
															quintoContenedor: {	linea: {	id: 'censoQuintaLinea', 
																							x1: '300', 
																							y1: '515', 
																							x2: '150', 
																							y2: '250'
																				},//fin linea
																			
																				link: {	id: 'censoQuintoLink', 
																						href: 'https://archivos.formosa.gob.ar/media/uploads/documentos/documento_430.pdf'
																				}, //fin link
														
															},//fin quintoContenedor
        									
															sextoContenedor: {	linea: {	id: 'censoSextaLinea', 
																							x1: '320', 
																							y1: '620', 
																							x2: '150', 
																							y2: '250'
																				},//fin linea
																	
																				link: {	id: 'censoSextoLink', 
																						href: 'https://archivos.formosa.gob.ar/media/uploads/documentos/documento_429.pdf'
																				}, //fin link

															},//fin sextoContenedor
	
															septimoContenedor: {	linea: {	id: 'censoSeptimaLinea', 
																								x1: '440', 
																								y1: '740', 
																								x2: '150', 
																								y2: '250'
																					},//fin linea
													
																					link: {	id: 'censoSeptimoLink', 
																							href: 'https://archivos.formosa.gob.ar/media/uploads/documentos/documento_428.pdf'
																					}, //fin link

															}//fin septimoContenedor

									}, //fin departamentoBermejo

									departamentoFormosa: {	primerContenedor: {	linea: {	id: 'censoPrimerLinea', 
																							x1: '350', 
																							y1: '75', 
																							x2: '630', 
																							y2: '550'
																				},//fin linea
								
																				link: {	id: 'censoPrimerLink', 
																						href: 'https://archivos.formosa.gob.ar/media/uploads/documentos/documento_434.pdf'
																				}, //fin link

															},//fin primerContenedor

															segundoContenedor: {	linea: {	id: 'censoSegundaLinea', 
																								x1: '705', 
																								y1: '50', 
																								x2: '630', 
																								y2: '550'
																					},//fin linea
																		
																					link: {	id: 'censoSegundoLink', 
																							href: 'https://archivos.formosa.gob.ar/media/uploads/documentos/documento_440.pdf'
																					}, //fin link

															},//fin segundoContenedor
        												
															tercerContenedor: {	linea: {	id: 'censoTerceraLinea', 
																							x1: '500', 
																							y1: '165', 
																							x2: '630', 
																							y2: '550'
																				},//fin linea
																		
																				link: {	id: 'censoTercerLink', 
																						href: 'https://archivos.formosa.gob.ar/media/uploads/documentos/documento_439.pdf'
																				}, //fin link

															},//fin tercerContenedor

															cuartoContenedor: {	linea: {	id: 'censoCuartaLinea', 
																							x1: '700', 
																							y1: '250', 
																							x2: '630', 
																							y2: '550'
																				},//fin linea
																		
																				link: {	id: 'censoCuartoLink', 
																						href: 'https://archivos.formosa.gob.ar/media/uploads/documentos/documento_438.pdf'
																				}, //fin link
																		
															},//fin cuartoContenedor

															quintoContenedor: {	linea: {	id: 'censoQuintaLinea', 
																							x1: '300', 
																							y1: '515', 
																							x2: '630', 
																							y2: '550'
																				},//fin linea
																	
																				link: {	id: 'censoQuintoLink', 
																						href: 'https://archivos.formosa.gob.ar/media/uploads/documentos/documento_437.pdf'
																				}, //fin link
														
															},//fin quintoContenedor
															
															sextoContenedor: {	linea: {	id: 'censoSextaLinea', 
																							x1: '300', 
																							y1: '620', 
																							x2: '630', 
																							y2: '550'
																				},//fin linea
															
																				link: {	id: 'censoSextoLink', 
																						href: 'https://archivos.formosa.gob.ar/media/uploads/documentos/documento_436.pdf'
																				}, //fin link
																
															},//fin sextoContenedor
															
															septimoContenedor: {	linea: {	id: 'censoSeptimaLinea', 
																								x1: '340', 
																								y1: '740', 
																								x2: '630', 
																								y2: '550'
																					},//fin linea
														
																					link: {	id: 'censoSeptimoLink', 
																							href: 'https://archivos.formosa.gob.ar/media/uploads/documentos/documento_435.pdf'
																					}, //fin link
														
															}//fin septimoContenedor

									}, //fin departamentoFormosa
										
									departamentoLaishi: {	primerContenedor: {	linea: {	id: 'censoPrimerLinea', 
																							x1: '350', 
																							y1: '75', 
																							x2: '590', 
																							y2: '630'
																				},//fin linea
									
																				link: {	id: 'censoPrimerLink', 
																						href: 'https://archivos.formosa.gob.ar/media/uploads/documentos/documento_447.pdf'
																				}, //fin link
	
															},//fin primerContenedor
													
															segundoContenedor: {	linea: {	id: 'censoSegundaLinea', 
																								x1: '705', 
																								y1: '50', 
																								x2: '590', 
																								y2: '630'
																					},//fin linea
												
																					link: {	id: 'censoSegundoLink', 
																							href: 'https://archivos.formosa.gob.ar/media/uploads/documentos/documento_447.pdf'
																					}, //fin link
													
															},//fin segundoContenedor
        											
															tercerContenedor: {	linea: {	id: 'censoTerceraLinea', 
																							x1: '450', 
																							y1: '165', 
																							x2: '590', 
																							y2: '630'
																				},//fin linea
													
																				link: {	id: 'censoTercerLink', 
																						href: 'https://archivos.formosa.gob.ar/media/uploads/documentos/documento_446.pdf'
																				}, //fin link

															},//fin tercerContenedor
        											
															cuartoContenedor: {	linea: {	id: 'censoCuartaLinea', 
																							x1: '700', 
																							y1: '250', 
																							x2: '590', 
																							y2: '630'
																				},//fin linea
													
																				link: {	id: 'censoCuartoLink', 
																						href: 'https://archivos.formosa.gob.ar/media/uploads/documentos/documento_445.pdf'
																				}, //fin link
									
															},//fin cuartoContenedor
        											
															quintoContenedor: {	linea: {	id: 'censoQuintaLinea', 
																							x1: '300', 
																							y1: '515', 
																							x2: '590', 
																							y2: '630'
																				},//fin linea
									
																				link: {	id: 'censoQuintoLink', 
																						href: 'https://archivos.formosa.gob.ar/media/uploads/documentos/documento_444.pdf'
																				}, //fin link

															},//fin quintoContenedor
															
															sextoContenedor: {	linea: {	id: 'censoSextaLinea', 
																							x1: '320', 
																							y1: '620', 
																							x2: '590', 
																							y2: '630'
																				},//fin linea
							
																				link: {	id: 'censoSextoLink', 
																						href: 'https://archivos.formosa.gob.ar/media/uploads/documentos/documento_443.pdf'
																				}, //fin link

															},//fin sextoContenedor
       													
															septimoContenedor: {	linea: {	id: 'censoSeptimaLinea', 
																								x1: '440', 
																								y1: '740', 
																								x2: '590', 
																								y2: '630'
																					},//fin linea
														
																					link: {	id: 'censoSeptimoLink', 
																							href: 'https://archivos.formosa.gob.ar/media/uploads/documentos/documento_442.pdf'
																					}, //fin link

															}//fin septimoContenedor

									}, //fin departamentoLaishi
							
									departamentoMatacos: {	primerContenedor: {	linea: {	id: 'censoPrimerLinea', 
																							x1: '350', 
																							y1: '75', 
																							x2: '40', 
																							y2: '210'
																				},//fin linea
								
																				link: {	id: 'censoPrimerLink', 
																						href: 'https://archivos.formosa.gob.ar/media/uploads/documentos/documento_455.pdf'
																				}, //fin link

															},//fin primerContenedor
										
															segundoContenedor: {	linea: {	id: 'censoSegundaLinea', 
																								x1: '705', 
																								y1: '50', 
																								x2: '40', 
																								y2: '210'
																					},//fin linea
																		
																					link: {	id: 'censoSegundoLink', 
																							href: 'https://archivos.formosa.gob.ar/media/uploads/documentos/documento_454.pdf'
																					}, //fin link

															},//fin segundoContenedor
        											
															tercerContenedor: {	linea: {	id: 'censoTerceraLinea', 
																							x1: '450', 
																							y1: '165', 
																							x2: '40', 
																							y2: '210'
																				},//fin linea
																		
																				link: {	id: 'censoTercerLink', 
																						href: 'https://archivos.formosa.gob.ar/media/uploads/documentos/documento_453.pdf'
																				}, //fin link

															},//fin tercerContenedor
										
															cuartoContenedor: {	linea: {	id: 'censoCuartaLinea', 
																							x1: '700', 
																							y1: '250', 
																							x2: '40', 
																							y2: '210'
																				},//fin linea
																		
																				link: {	id: 'censoCuartoLink', 
																						href: 'https://archivos.formosa.gob.ar/media/uploads/documentos/documento_452.pdf'
																				}, //fin link
																		
															},//fin cuartoContenedor
												
															quintoContenedor: {	linea: {	id: 'censoQuintaLinea', 
																							x1: '300', 
																							y1: '515', 
																							x2: '40', 
																							y2: '210'
																				},//fin linea
																	
																				link: {	id: 'censoQuintoLink', 
																						href: 'https://archivos.formosa.gob.ar/media/uploads/documentos/documento_451.pdf'
																				}, //fin link

															},//fin quintoContenedor
												
															sextoContenedor: {	linea: {	id: 'censoSextaLinea', 
																							x1: '320', 
																							y1: '620', 
																							x2: '40', 
																							y2: '210'
																				},//fin linea
															
																				link: {	id: 'censoSextoLink', 
																						href: 'https://archivos.formosa.gob.ar/media/uploads/documentos/documento_450.pdf'
																				}, //fin link
																
															},//fin sextoContenedor
												
															septimoContenedor: {	linea: {	id: 'censoSeptimaLinea', 
																								x1: '440', 
																								y1: '740', 
																								x2: '40', 
																								y2: '210'
																					},//fin linea
														
																					link: {	id: 'censoSeptimoLink', 
																							href: 'https://archivos.formosa.gob.ar/media/uploads/documentos/documento_449.pdf'
																					}, //fin link

															}//fin septimoContenedor

									}, //fin departamentoMatacos
									
									departamentoPatino: {	primerContenedor: {	linea: {	id: 'censoPrimerLinea', 
																							x1: '350', 
																							y1: '75', 
																							x2: '370', 
																							y2: '370'
																				},//fin linea
								
																				link: {	id: 'censoPrimerLink', 
																						href: 'https://archivos.formosa.gob.ar/media/uploads/documentos/documento_462.pdf'
																				}, //fin link

															},//fin primerContenedor
											
															segundoContenedor: {	linea: {	id: 'censoSegundaLinea', 
																								x1: '705', 
																								y1: '50', 
																								x2: '370', 
																								y2: '370'
																					},//fin linea
																		
																					link: {	id: 'censoSegundoLink', 
																							href: 'https://archivos.formosa.gob.ar/media/uploads/documentos/documento_461.pdf'
																					}, //fin link

															},//fin segundoContenedor
        										
															tercerContenedor: {	linea: {	id: 'censoTerceraLinea', 
																							x1: '450', 
																							y1: '165', 
																							x2: '370', 
																							y2: '370'
																				},//fin linea
																		
																				link: {	id: 'censoTercerLink', 
																						href: 'https://archivos.formosa.gob.ar/media/uploads/documentos/documento_460.pdf'
																				}, //fin link

															},//fin tercerContenedor
										
															cuartoContenedor: {	linea: {	id: 'censoCuartaLinea', 
																							x1: '700', 
																							y1: '250', 
																							x2: '370', 
																							y2: '370'
																				},//fin linea
																		
																				link: {	id: 'censoCuartoLink', 
																						href: 'https://archivos.formosa.gob.ar/media/uploads/documentos/documento_459.pdf'
																				}, //fin link

															},//fin cuartoContenedor
										
															quintoContenedor: {	linea: {	id: 'censoQuintaLinea', 
																							x1: '300', 
																							y1: '515', 
																							x2: '370', 
																							y2: '370'
																				},//fin linea
																	
																				link: {	id: 'censoQuintoLink', 
																						href: 'https://archivos.formosa.gob.ar/media/uploads/documentos/documento_458.pdf'
																				}, //fin link
														
															},//fin quintoContenedor
										
															sextoContenedor: {	linea: {	id: 'censoSextaLinea', 
																							x1: '320', 
																							y1: '620', 
																							x2: '370', 
																							y2: '370'
																				},//fin linea
															
																				link: {	id: 'censoSextoLink', 
																						href: 'https://archivos.formosa.gob.ar/media/uploads/documentos/documento_457.pdf'
																				}, //fin link

															},//fin sextoContenedor
												
															septimoContenedor: {	linea: {	id: 'censoSeptimaLinea', 
																								x1: '440', 
																								y1: '740', 
																								x2: '370', 
																								y2: '370'
																					},//fin linea
														
																					link: {	id: 'censoSeptimoLink', 
																							href: 'https://archivos.formosa.gob.ar/media/uploads/documentos/documento_456.pdf'
																					}, //fin link
														
															}//fin septimoContenedor

									}, //fin departamentoPatino
									
									departamentoPilagas: {	primerContenedor: {	linea: {	id: 'censoPrimerLinea', 
																							x1: '350', 
																							y1: '75', 
																							x2: '580', 
																							y2: '420'
																				},//fin linea
								
																				link: {	id: 'censoPrimerLink', 
																						href: 'https://archivos.formosa.gob.ar/media/uploads/documentos/documento_469.pdf'
																				}, //fin link

															},//fin primerContenedor
								
															segundoContenedor: {	linea: {	id: 'censoSegundaLinea', 
																								x1: '705', 
																								y1: '50', 
																								x2: '580', 
																								y2: '420'
																					},//fin linea
																		
																					link: {	id: 'censoSegundoLink', 
																							href: 'https://archivos.formosa.gob.ar/media/uploads/documentos/documento_468.pdf'
																					}, //fin link
								
															},//fin segundoContenedor
        										
															tercerContenedor: {	linea: {	id: 'censoTerceraLinea', 
																							x1: '450', 
																							y1: '165', 
																							x2: '580', 
																							y2: '420'
																				},//fin linea
																		
																				link: {	id: 'censoTercerLink', 
																						href: 'https://archivos.formosa.gob.ar/media/uploads/documentos/documento_467.pdf'
																				}, //fin link

															},//fin tercerContenedor
									
															cuartoContenedor: {	linea: {	id: 'censoCuartaLinea', 
																							x1: '700', 
																							y1: '250', 
																							x2: '580', 
																							y2: '420'
																				},//fin linea
																		
																				link: {	id: 'censoCuartoLink', 
																						href: 'https://archivos.formosa.gob.ar/media/uploads/documentos/documento_466.pdf'
																				}, //fin link

															},//fin cuartoContenedor
											
															quintoContenedor: {	linea: {	id: 'censoQuintaLinea', 
																							x1: '300', 
																							y1: '515', 
																							x2: '580', 
																							y2: '420'
																				},//fin linea
																	
																				link: {	id: 'censoQuintoLink', 
																						href: 'https://archivos.formosa.gob.ar/media/uploads/documentos/documento_465.pdf'
																				}, //fin link

															},//fin quintoContenedor
												
															sextoContenedor: {	linea: {	id: 'censoSextaLinea', 
																							x1: '320', 
																							y1: '620', 
																							x2: '580', 
																							y2: '420'
																				},//fin linea
															
																				link: {	id: 'censoSextoLink', 
																						href: 'https://archivos.formosa.gob.ar/media/uploads/documentos/documento_464.pdf'
																				}, //fin link
																
															},//fin sextoContenedor
												
															septimoContenedor: {	linea: {	id: 'censoSeptimaLinea', 
																								x1: '440', 
																								y1: '740', 
																								x2: '580', 
																								y2: '420'
																					},//fin linea
														
																					link: {	id: 'censoSeptimoLink', 
																							href: 'https://archivos.formosa.gob.ar/media/uploads/documentos/documento_463.pdf'
																					}, //fin link

															}//fin septimoContenedor

									}, //fin departamentoPilagas
								
									departamentoPilcomayo: {	primerContenedor: {	linea: {	id: 'censoPrimerLinea', 
																								x1: '350', 
																								y1: '75', 
																								x2: '680', 
																								y2: '460'
																					},//fin linea
								
																					link: {	id: 'censoPrimerLink', 
																							href: 'https://archivos.formosa.gob.ar/media/uploads/documentos/documento_476.pdf'
																					}, //fin link

																},//fin primerContenedor
											
																segundoContenedor: {	linea: {	id: 'censoSegundaLinea', 
																									x1: '705', 
																									y1: '50', 
																									x2: '680', 
																									y2: '460'
																						},//fin linea
																		
																						link: {	id: 'censoSegundoLink', 
																								href: 'https://archivos.formosa.gob.ar/media/uploads/documentos/documento_475.pdf'
																						}, //fin link

																},//fin segundoContenedor
        												
																tercerContenedor: {	linea: {	id: 'censoTerceraLinea', 
																								x1: '450', 
																								y1: '165', 
																								x2: '680', 
																								y2: '460'
																					},//fin linea
																		
																					link: {	id: 'censoTercerLink', 
																							href: 'https://archivos.formosa.gob.ar/media/uploads/documentos/documento_474.pdf'
																					}, //fin link

																},//fin tercerContenedor
												
																cuartoContenedor: {	linea: {	id: 'censoCuartaLinea', 
																								x1: '700', 
																								y1: '250', 
																								x2: '680', 
																								y2: '460'
																					},//fin linea
																		
																					link: {	id: 'censoCuartoLink', 
																							href: 'https://archivos.formosa.gob.ar/media/uploads/documentos/documento_473.pdf'
																					}, //fin link

																},//fin cuartoContenedor
											
																quintoContenedor: {	linea: {	id: 'censoQuintaLinea', 
																								x1: '300', 
																								y1: '515', 
																								x2: '680', 
																								y2: '460'
																					},//fin linea
																	
																					link: {	id: 'censoQuintoLink', 
																							href: 'https://archivos.formosa.gob.ar/media/uploads/documentos/documento_472.pdf'
																					}, //fin link

																},//fin quintoContenedor
											
																sextoContenedor: {	linea: {	id: 'censoSextaLinea', 
																								x1: '320', 
																								y1: '620', 
																								x2: '680', 
																								y2: '460'
																					},//fin linea
															
																					link: {	id: 'censoSextoLink', 
																							href: 'https://archivos.formosa.gob.ar/media/uploads/documentos/documento_471.pdf'
																					}, //fin link
																
																},//fin sextoContenedor
													
																septimoContenedor: {	linea: {	id: 'censoSeptimaLinea', 
																									x1: '440', 
																									y1: '740', 
																									x2: '680', 
																									y2: '460'
																						},//fin linea
														
																						link: {	id: 'censoSeptimoLink', 
																								href: 'https://archivos.formosa.gob.ar/media/uploads/documentos/documento_470.pdf'
																						}, //fin link

																}//fin septimoContenedor

									}, //fin departamentoPilcomayo
								
									departamentoPirane: {	primerContenedor: {	linea: {	id: 'censoPrimerLinea', 
																							x1: '350', 
																							y1: '75', 
																							x2: '500', 
																							y2: '510'
																				},//fin linea
								
																				link: {	id: 'censoPrimerLink', 
																						href: 'https://archivos.formosa.gob.ar/media/uploads/documentos/documento_483.pdf'
																				}, //fin link

															},//fin primerContenedor
									
															segundoContenedor: {	linea: {	id: 'censoSegundaLinea', 
																								x1: '705', 
																								y1: '50', 
																								x2: '500', 
																								y2: '510'
																					},//fin linea
																		
																					link: {	id: 'censoSegundoLink', 
																							href: 'https://archivos.formosa.gob.ar/media/uploads/documentos/documento_482.pdf'
																					}, //fin link
								
															},//fin segundoContenedor
        									
															tercerContenedor: {	linea: {	id: 'censoTerceraLinea', 
																							x1: '450', 
																							y1: '165', 
																							x2: '500', 
																							y2: '510'
																				},//fin linea
																		
																				link: {	id: 'censoTercerLink', 
																						href: 'https://archivos.formosa.gob.ar/media/uploads/documentos/documento_481.pdf'
																				}, //fin link

															},//fin tercerContenedor
										
															cuartoContenedor: {	linea: {	id: 'censoCuartaLinea', 
																							x1: '700', 
																							y1: '250', 
																							x2: '500', 
																							y2: '510'
																				},//fin linea
																		
																				link: {	id: 'censoCuartoLink', 
																						href: 'https://archivos.formosa.gob.ar/media/uploads/documentos/documento_480.pdf'
																				}, //fin link

															},//fin cuartoContenedor
									
															quintoContenedor: {	linea: {	id: 'censoQuintaLinea', 
																							x1: '300', 
																							y1: '515', 
																							x2: '500', 
																							y2: '510'
																				},//fin linea
																	
																				link: {	id: 'censoQuintoLink', 
																						href: 'https://archivos.formosa.gob.ar/media/uploads/documentos/documento_479.pdf'
																				}, //fin link

															},//fin quintoContenedor
												
															sextoContenedor: {	linea: {	id: 'censoSextaLinea', 
																							x1: '320', 
																							y1: '620', 
																							x2: '500', 
																							y2: '510'
																				},//fin linea
															
																				link: {	id: 'censoSextoLink', 
																						href: 'https://archivos.formosa.gob.ar/media/uploads/documentos/documento_478.pdf'
																				}, //fin link

															},//fin sextoContenedor
											
															septimoContenedor: {	linea: {	id: 'censoSeptimaLinea', 
																								x1: '440', 
																								y1: '740', 
																								x2: '500', 
																								y2: '510'
																					},//fin linea
														
																					link: {	id: 'censoSeptimoLink', 
																							href: 'https://archivos.formosa.gob.ar/media/uploads/documentos/documento_477.pdf'
																					}, //fin link

															}//fin septimoContenedor

									}, //fin departamentoPirane
									
									departamentoRamonLista: {	primerContenedor: {	linea: {	id: 'censoPrimerLinea', 
																								x1: '60', 
																								y1: '50', 
																								x2: '30', 
																								y2: '120'
																					},//fin linea
								
																					link: {	id: 'censoPrimerLink', 
																							href: ''
																					}, //fin link

																},//fin primerContenedor
													
																segundoContenedor: {	linea: {	id: 'censoSegundaLinea', 
																									x1: '420', 
																									y1: '73', 
																									x2: '30', 
																									y2: '120'
																						},//fin linea
																		
																						link: {	id: 'censoSegundoLink', 
																								href: ''
																						}, //fin link

																},//fin segundoContenedor
        										
																tercerContenedor: {	linea: {	id: 'censoTerceraLinea', 
																								x1: '450', 
																								y1: '165', 
																								x2: '30', 
																								y2: '120'
																					},//fin linea
																		
																					link: {	id: 'censoTercerLink', 
																							href: ''
																					}, //fin link

																},//fin tercerContenedor
											
																cuartoContenedor: {	linea: {	id: 'censoCuartaLinea', 
																								x1: '430', 
																								y1: '250', 
																								x2: '30', 
																								y2: '120'
																					},//fin linea
																		
																					link: {	id: 'censoCuartoLink', 
																							href: ''
																					}, //fin link
																		
																},//fin cuartoContenedor
										
																quintoContenedor: {	linea: {	id: 'censoQuintaLinea', 
																								x1: '20', 
																								y1: '515', 
																								x2: '30', 
																								y2: '120'
																					},//fin linea
																	
																					link: {	id: 'censoQuintoLink', 
																							href: ''
																					}, //fin link

																},//fin quintoContenedor
											
																sextoContenedor: {	linea: {	id: 'censoSextaLinea', 
																								x1: '100', 
																								y1: '620', 
																								x2: '30', 
																								y2: '120'
																					},//fin linea
															
																					link: {	id: 'censoSextoLink', 
																							href: ''
																					}, //fin link

																},//fin sextoContenedor
												
																septimoContenedor: {	linea: {	id: 'censoSeptimaLinea', 
																									x1: '530', 
																									y1: '740', 
																									x2: '30', 
																									y2: '120'
																						},//fin linea
														
																						link: {	id: 'censoSeptimoLink', 
																								href: ''
																						}, //fin link

																}//fin septimoContenedor

									}, //fin departamentoRamonLista

					}//fin censo2010

}//fin censos

const contenedoresAsociadosPorId = {	home: 'contenedorHome',
										somos: 'contenedorSomos',
										informes: 'contenedorInformes',
										censos: 'contenedorCenso'

}


