function crearGrafico(canvas, tipoDeGrafico, tituloDelGrafico, etiquetas, datosNumericos, colores, coloresDeBordesDeBarras)  {

  if(Chart.getChart(canvas)) {
    Chart.getChart(canvas)?.destroy();
  }

  const configuracionDeDatosDeGrafico = {
    labels: etiquetas,
    datasets: [{
      label: tituloDelGrafico,
      data: datosNumericos,
      backgroundColor: colores,
      borderColor: coloresDeBordesDeBarras,
      hoverOffset: 4,
      borderRadius: 5 // Redondea los bordes de las barras
    }]
  };

  const plugin = {
    id: 'customChartAreaBackgroundColor',
    beforeDraw: (chart) => {
      const { ctx, chartArea: { left, top, width, height } } = chart;
      ctx.save();
      ctx.fillStyle = '#f2f2f2'; // Color de fondo del área del gráfico
      ctx.fillRect(left, top, width, height);
      ctx.restore();
    }
  };

  new Chart(canvas, {
    type: tipoDeGrafico,
    data: configuracionDeDatosDeGrafico,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        datalabels: {
          color: '#00000', // Color del texto de los datos
          anchor: 'end', // Posición del texto en la barra (por fuera)
          align: 'top', // Alineación del texto por encima de la barra
          offset: -5, // Desplaza los números hacia arriba para separarlos de la barra
          formatter: (value) => value, // Formato del dato a mostrar
          font: {
            weight: 'bold',
            size: 10
          }
        }
      }
    },
    plugins: [plugin, ChartDataLabels]
  });
}



