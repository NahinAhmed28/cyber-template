/*
Template Name: CYBER - Responsive Bootstrap 5 Admin Template
Version: 1.0.0
Author: Sean Ngu
Website: http://www.seantheme.com/cyber/
*/

var randomNo = function() {
  return Math.floor(Math.random() * 60) + 30
};

var handleRenderChart = function() {
	
	Apex = {
		chart: {
			zoom: {
				allowMouseWheelZoom: false
			}
		},
		title: {
			style: {
				fontSize: '12px',
				fontWeight: app.font.bodyFontWeight,
				fontFamily: app.font.bodyFontFamily,
				color: app.color.bodyColor
			}
		},
		legend: {
			fontSize: '10px',
			fontFamily: app.font.bodyFontFamily,
			labels: { colors: app.color.bodyColor }
		},
		tooltip: {
			style: {
        fontSize: '10px',
        fontFamily: app.font.bodyFontFamily
      }
		},
		grid: { borderColor: app.color.borderColor },
		dataLabels: {
			style: {
				fontSize: '10px',
				fontFamily: app.font.bodyFontFamily,
				fontWeight: '500',
				colors: undefined
  		}
		},
		xaxis: {
			axisBorder: {
				show: true,
				color: app.color.borderColor,
				height: 1,
				width: '100%',
				offsetX: 0,
				offsetY: -1
			},
			axisTicks: {
				show: true,
				borderType: 'solid',
				color: app.color.borderColor,
				height: 6,
				offsetX: 0,
				offsetY: 0
			},
      labels: {
				style: {
					colors: app.color.bodyColor,
					fontSize: '10px',
					fontFamily: app.font.bodyFontFamily,
					fontWeight: app.font.bodyFontWeight,
					cssClass: 'apexcharts-xaxis-label',
				}
			}
		},
		yaxis: {
      labels: {
				style: {
					colors: app.color.bodyColor,
					fontSize: '10px',
					fontFamily: app.font.bodyFontFamily,
					fontWeight: app.font.bodyFontWeight,
					cssClass: 'apexcharts-xaxis-label',
				}
			}
		}
	};
	
	const generateData = (length = 100) => {
		const data = [];
		for (let i = 0; i < length; i++) {
			const value = Math.sin(i * 0.02) * 50 + Math.random() * 20 + 100;
			data.push(Number(value.toFixed(2))); 
		}
		return data;
	};
	
	const dataPoints = generateData(300);
	const dataPoints2 = generateData(300);
	const options = {
		chart: {
			height: 370,
			type: 'line',
			stacked: false,
			toolbar: {
				show: false
			},
			zoom: false
		},
		stroke: {
			width: [1, 1, 1],
			curve: 'smooth'
		},
		plotOptions: {
			bar: {
				columnWidth: '90%'
			}
		},
		grid: { 
			borderColor: app.color.borderColor,
			xaxis: {
				lines: {
					show: true
				}
			},
			yaxis: {
				lines: {
					show: true
				}
			} 
		},
		colors: ['rgba('+ app.color.themeRgb +', .5)', app.color.theme, 'rgba('+ app.color.themeRgb +', 1.25)'],
		series: [
			{
				name: 'ORDERS',
				type: 'column',
				data: dataPoints
			},
			{
				name: 'REVENUE',
				type: 'area',
				data: dataPoints2
			}
		],
		xaxis: {
			type: 'numeric',
			tickAmount: (app.isMobile) ? 10 : 25,
			axisBorder: {
				show: true,
				color: app.color.borderColor,
				height: 1,
				width: '100%',
				offsetX: 0,
				offsetY: -1
			},
			axisTicks: {
				show: true,
				borderType: 'solid',
				color: app.color.borderColor,
				height: 6,
				offsetX: 0,
				offsetY: 0
			},
			labels: {
				show: true,
				rotate: 0,
				style: {
					colors: app.color.bodyColor,
					fontSize: '10px',
					fontFamily: app.font.bodyFontFamily,
					fontWeight: app.font.bodyFontWeight,
					cssClass: 'apexcharts-xaxis-label',
				}
			}
		},
		yaxis: [
			{
				tickAmount: 10,
				labels: {
					formatter: val => `${val.toLocaleString()}`
				},
			},
			{
				opposite: true,
				labels: {
					formatter: val => `${val.toLocaleString()}`
				},
				tickAmount: 15
			}
		],
		tooltip: {
			shared: true,
			intersect: false,
			y: [
				{
					formatter: val => `${val} orders`
				},
				{
					formatter: val => `$${val.toLocaleString()}`
				},
				{
					formatter: val => `${val.toFixed(1)}%`
				}
			]
		},
		fill: {
			opacity: [7, 1, .5],
			type: ['none', 'gradient', 'solid'],
			gradient: {
				shade: 'light',
				type: 'vertical',
				shadeIntensity: 0.4,
				opacityFrom: 0.5,
				opacityTo: 0.1,
				stops: [0, 100]
			}
		},
		legend: {
			position: 'bottom',
			horizontalAlign: 'center',
			floating: false,
			fontSize: '10px',
			labels: { colors: '#fff' }
		}
	};

	const chart = new ApexCharts(document.querySelector("#chartMain"), options);
	chart.render();
};

var handleRenderSparkline = function() {
	function generateRandomData(length = 10, max = 100) {
    return Array.from({ length }, () => Math.floor(Math.random() * max));
  }

  document.querySelectorAll('[data-generate="apexchart-sparkline"]').forEach((el, index) => {
    const data = generateRandomData();

    const options = {
      chart: {
        type: 'line',
        height: 20,
        sparkline: {
          enabled: true
        }
      },
      series: [{
        name: 'Sparkline ' + (index + 1),
        data: data
      }],
      stroke: {
        curve: 'smooth',
        width: 2
      },
      colors: [app.color.theme],
      tooltip: {
        enabled: true
      }
    };

    const chart = new ApexCharts(el, options);
    chart.render();
	});
};

var handleRenderMap = function() {
	$('#worldMap').vectorMap({
		map: 'world_mill',
		normalizeFunction: 'polynomial',
		hoverOpacity: 0.5,
		hoverColor: false,
		zoomOnScroll: false,
		series: {
			regions: [{
				normalizeFunction: 'polynomial'
			}]
		},
		focusOn: {
			x: 0.5,
			y: 0.5,
			scale: 2
		},
		markerStyle: {
			initial: {
				fill: app.color.theme,
				stroke: 'none',
				"stroke-width": 2,
			}
		},
		regionStyle: {
			initial: {
				fill: app.color.white,
				"fill-opacity": 0.25,
				stroke: 'none',
				"stroke-width": 0.4,
				"stroke-opacity": 1
			},
			hover: {
				"fill-opacity": 0.5
			}
		},
		backgroundColor: 'transparent',
		markers: [
			{latLng: [41.90, 12.45], name: 'Vatican City'},
			{latLng: [43.73, 7.41], name: 'Monaco'},
			{latLng: [-0.52, 166.93], name: 'Nauru'},
			{latLng: [-8.51, 179.21], name: 'Tuvalu'},
			{latLng: [43.93, 12.46], name: 'San Marino'},
			{latLng: [47.14, 9.52], name: 'Liechtenstein'},
			{latLng: [7.11, 171.06], name: 'Marshall Islands'},
			{latLng: [17.3, -62.73], name: 'Saint Kitts and Nevis'},
			{latLng: [3.2, 73.22], name: 'Maldives'},
			{latLng: [35.88, 14.5], name: 'Malta'},
			{latLng: [12.05, -61.75], name: 'Grenada'},
			{latLng: [13.16, -61.23], name: 'Saint Vincent and the Grenadines'},
			{latLng: [13.16, -59.55], name: 'Barbados'},
			{latLng: [17.11, -61.85], name: 'Antigua and Barbuda'},
			{latLng: [-4.61, 55.45], name: 'Seychelles'},
			{latLng: [7.35, 134.46], name: 'Palau'},
			{latLng: [42.5, 1.51], name: 'Andorra'},
			{latLng: [14.01, -60.98], name: 'Saint Lucia'},
			{latLng: [6.91, 158.18], name: 'Federated States of Micronesia'},
			{latLng: [1.3, 103.8], name: 'Singapore'},
			{latLng: [1.46, 173.03], name: 'Kiribati'},
			{latLng: [-21.13, -175.2], name: 'Tonga'},
			{latLng: [15.3, -61.38], name: 'Dominica'},
			{latLng: [-20.2, 57.5], name: 'Mauritius'},
			{latLng: [26.02, 50.55], name: 'Bahrain'},
			{latLng: [0.33, 6.73], name: 'São Tomé and Príncipe'}
		]
	});
}

var handleGetDate = function(minusDate) {
	var d = new Date();
			d = d.setDate(d.getDate() - minusDate);
	return d;
};


/* Controller
------------------------------------------------ */
$(document).ready(function() {
	handleRenderChart();
	handleRenderSparkline();
	handleRenderMap();
	
	document.addEventListener('theme-reload', function() {
		$('[data-render="apexchart"], #chartMain, #worldMap, [data-generate="apexchart-sparkline"]').empty();
		handleRenderChart();
		handleRenderSparkline();
		handleRenderMap();
	});
});