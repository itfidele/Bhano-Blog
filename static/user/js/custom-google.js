var $red = "#e77338";
var $pink = "#F782AA";
var $brown = "#ab7967";
var $blue = "#6e91cb";
var $green = "#91c46b";
var $yellow = "#FFD06B";


//Google Visualization 
google.load("visualization", "1", {
	packages: ["corechart"]
});

$(document).ready(function () {
	drawChart1();
	drawChart2();
	drawChart3();
	drawChart4();
	drawRegionsMap();
	drawTable();
	candlestick();
	bubbleChart();
	histograomChart();
	materialChart();
	chartLines();
})

function drawChart1() {
	var data = google.visualization.arrayToDataTable([
		['Year', 'Male'],
		['2005', 210],
		['2006', 280],
		['2007', 1250],
		['2008', 1890],
		['2009', 2120],
		['2010', 3270],
		['2011', 2950],
		['2012', 1800]
		]);

	var options = {
		vAxis: {maxValue: 10, gridlines: {count: 5, color: '#eeeeee',}},
		width: 'auto',
		pointSize: 9,
		lineWidth: 2,
		backgroundColor: 'transparent',
		colors: [$red, $blue, $green, $yellow],
		tooltip: {
			textStyle: {
				color: '#666666',
				fontSize: 11
			},
			showColorCode: true
		},
		legend: {
			textStyle: {
				color: 'black',
				fontSize: 12
			}
		},
		chartArea: {
			left: 40,
			top: 10,
			height: "80%"
		}
	};

	var chart = new google.visualization.AreaChart(document.getElementById('area_chart'));
	chart.draw(data, options);
}

function drawChart2() {
	var data = google.visualization.arrayToDataTable([
		['Year', 'Visits'],
		['2008', 1276],
		['2009', 2174],
		['2010', 3367],
		['2011', 1149],
		['2012', 2689],
		['2012', 4521],
		['2013', 4478],
		['2012', 6652],
	]);

	var options = {
		width: 'auto',
		backgroundColor: 'transparent',
		colors: [$blue, $red, $green, $yellow],
		tooltip: {
			textStyle: {
				color: '#666666',
				fontSize: 11
			},
			showColorCode: true
		},
		legend: {
			textStyle: {
				color: 'black',
				fontSize: 12
			}
		},
		chartArea: {
			left: 100,
			top: 10
		},
		focusTarget: 'category',
		hAxis: {
			textStyle: {
				color: 'black',
				fontSize: 12
			}
		},
		vAxis: {
			textStyle: {
				color: 'black',
				fontSize: 12
			},
			maxValue: 10, gridlines: {count: 5, color: '#eeeeee',}
		},
		pointSize: 8,
		chartArea: {
			left: 60,
			top: 10,
			height: '80%'
		},
		lineWidth: 2,
	};

	var chart = new google.visualization.LineChart(document.getElementById('line_chart'));
	chart.draw(data, options);
}

function drawChart3() {
	var data = google.visualization.arrayToDataTable([
		['Year',  'Orders', 'Sales', 'Income', 'Expenses'],
		['2007', 300, 800, 900, 300],
		['2008', 1170, 860, 1220, 564],
		['2009', 260, 1120, 2870, 2340],
		['2010', 1030, 540, 3430, 1200],
		['2011', 200, 700, 1700, 770],
		['2012', 1170, 2160, 3920, 800],
		['2013', 2170, 1160, 2820, 500] ]);

	var options = {
		vAxis: {maxValue: 10, gridlines: {count: 5, color: '#eeeeee',}},
		width: 'auto',
		backgroundColor: 'transparent',
		colors: [$red, $blue, $green, $yellow],
		tooltip: {
			textStyle: {
				color: '#666666',
				fontSize: 11
			},
			showColorCode: true
		},
		legend: {
			textStyle: {
				color: 'black',
				fontSize: 12
			}
		},
		chartArea: {
			left: 60,
			top: 10,
			height: '80%'
		},
	};

	var chart = new google.visualization.ColumnChart(document.getElementById('column_chart'));
	chart.draw(data, options);
}

function drawChart4() {
	var data = google.visualization.arrayToDataTable([
		['Technologies', 'Hours per Day'],
		['HTML5', 8],
		['CSS3', 8],
		['Sass', 7],
		['jQuery', 6],
		['Javascript', 6],
		['Photoshop', 8],
		]);

	var options = {
		width: 'auto',
		backgroundColor: 'transparent',
		colors: [$brown, $red, $blue, $pink, $green, $yellow],
		tooltip: {
			textStyle: {
				color: '#666666',
				fontSize: 11
			},
			showColorCode: true
		},
		legend: {
			position: 'left',
			textStyle: {
				color: 'black',
				fontSize: 12
			}
		},
		chartArea: {
			left: 0,
			top: 10,
			width: "100%",
			height: "100%"
		}
	};

	var chart = new google.visualization.PieChart(document.getElementById('pie_chart'));
	chart.draw(data, options);
}

//Geo Charts
google.load('visualization', '1', {'packages': ['geochart']});
google.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
	var data = google.visualization.arrayToDataTable([
		['Country', 'Popularity'],
		['Germany', 200],
		['IN', 900],
		['United States', 300],
		['Brazil', 400],
		['Canada', 500],
		['France', 600],
		['RU', 700]
		]);

	var options = {
		width: 'auto',
		backgroundColor: 'transparent',
		colors: [$yellow, $brown, $red, $blue, $pink, $green],
	};

	var chart = new google.visualization.GeoChart(document.getElementById('geo_chart'));
	chart.draw(data, options);
};

//Table Charts
google.load('visualization', '1', {packages:['table']});
google.setOnLoadCallback(drawTable);
function drawTable() {
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Name');
	data.addColumn('number', 'Salary');
	data.addColumn('boolean', 'Full Time Employee');
	data.addRows([
		['Williams',  {v: 10000, f: '$12,000'}, true],
		['Rosy',   {v: 18000, f: '$19,000'},  false],
		['John', {v: 12500, f: '$32,500'}, false],
		['Prinu',   {v: 28000, f: '$21,000'}, true],
		['Maxwell',  {v: 10000, f: '$14,000'}, true]
		]);

	var table = new google.visualization.Table(document.getElementById('table_chart'));
	table.draw(data, {showRowNumber: true});
}

//Candlestick Chart
function candlestick() {
	var data = google.visualization.arrayToDataTable([
		['Mon', 20, 28, 38, 45],
		['Tue', 31, 38, 55, 66],
		['Wed', 50, 55, 77, 80],
		['Thu', 77, 47, 56, 50],
		['Fri', 68, 66, 22, 15],
		['Sat', 23, 31, 12, 35]
		// Treat first row as data as well.
		], true);

	var options = {
		vAxis: {maxValue: 10, gridlines: {count: 5, color: '#eeeeee',}},
		legend: 'none',
		width: 'auto',
		backgroundColor: 'transparent',
		colors: [$red, $blue, $green, $yellow],
	};

	var chart = new google.visualization.CandlestickChart(document.getElementById('candlestick_chart'));
	chart.draw(data, options);
}

// google.setOnLoadCallback(drawVisualization);

//Bubble Chart
google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(bubbleChart);
function bubbleChart() {
	var data = google.visualization.arrayToDataTable([
		['ID', 'Life Expectancy', 'Fertility Rate', 'Region',     'Population'],
		['CAN',    80.66,              1.67,      'North America',  33739900],
		['DEU',    79.84,              1.36,      'Europe',         81902307],
		['DNK',    78.6,               1.84,      'Europe',         5523095],
		['SL',     72.73,              2.78,      'South Asia',    109716203],
		['GBR',    80.05,              2,         'Europe',         61801570],
		['IRN',    72.49,              1.7,       'Middle East',    73137148],
		['IRQ',    68.09,              4.77,      'Middle East',    31090763],
		['ISR',    81.55,              2.96,      'Middle East',    7485600],
		['RUS',    68.6,               1.54,      'Europe',         141850000],
		['USA',    78.09,              2.05,      'North America',  307007000]
		]);

	var options = {
		title: 'Correlation between life expectancy, fertility rate and population of some world countries (2012)',
		hAxis: {title: 'Life Expectancy', maxValue: 10, gridlines: {count: 5, color: '#eeeeee',}},
		vAxis: {title: 'Fertility Rate', maxValue: 10, gridlines: {count: 5, color: '#eeeeee',}},
		backgroundColor: 'transparent',
		colors: [$red, $blue, $green, $yellow],
		fontSize: 11,
		bubble: {textStyle: {fontSize: 11}}
	};

	var chart = new google.visualization.BubbleChart(document.getElementById('bubble_chart'));
	chart.draw(data, options);
}

// Histogram
function histograomChart(){
	google.load("visualization", "1", {packages:["corechart"]});
	google.setOnLoadCallback(histogram_chart);
	function histogram_chart() {
		var data = google.visualization.arrayToDataTable([
			['Dinosaur', 'Length'],
			['Acrocanthosaurus (top-spined lizard)', 12.2],
			['Albertosaurus (Alberta lizard)', 9.1],
			['Allosaurus (other lizard)', 12.2],
			['Apatosaurus (deceptive lizard)', 22.9],
			['Archaeopteryx (ancient wing)', 0.9],
			['Argentinosaurus (Argentina lizard)', 36.6],
			['Baryonyx (heavy claws)', 9.1],
			['Brachiosaurus (arm lizard)', 30.5],
			['Ceratosaurus (horned lizard)', 6.1],
			['Coelophysis (hollow form)', 2.7],
			['Compsognathus (elegant jaw)', 0.9],
			['Deinonychus (terrible claw)', 2.7],
			['Diplodocus (double beam)', 27.1],
			['Dromicelomimus (emu mimic)', 3.4],
			['Gallimimus (fowl mimic)', 5.5],
			['Mamenchisaurus (Mamenchi lizard)', 21.0],
			['Megalosaurus (big lizard)', 7.9],
			['Microvenator (small hunter)', 1.2],
			['Ornithomimus (bird mimic)', 4.6],
			['Oviraptor (egg robber)', 1.5],
			['Plateosaurus (flat lizard)', 7.9],
			['Sauronithoides (narrow-clawed lizard)', 2.0],
			['Seismosaurus (tremor lizard)', 45.7],
			['Spinosaurus (spiny lizard)', 12.2],
			['Supersaurus (super lizard)', 30.5],
			['Tyrannosaurus (tyrant lizard)', 15.2],
			['Ultrasaurus (ultra lizard)', 30.5],
			['Velociraptor (swift robber)', 1.8]]);

		var options = {
			vAxis: {maxValue: 10, gridlines: {count: 5, color: '#eeeeee',}},
			title: 'Lengths of dinosaurs, in meters',
			backgroundColor: 'transparent',
			legend: { position: 'none' },

			colors: [$red, $blue, $green, $yellow],
		};

		var chart = new google.visualization.Histogram(document.getElementById('histogram_chart'));
		chart.draw(data, options);
	}
}

// Material Line Charts
google.load('visualization', '1', {packages: ['corechart']});
google.setOnLoadCallback(materialChart);

function materialChart() {

  var data = new google.visualization.DataTable();
  data.addColumn('number', 'X');
  data.addColumn('number', 'Sales');
  data.addColumn('number', 'Expenses');

  data.addRows([
    [0, 0, 0],   [1, 10, 5],  [2, 23, 15],
    [3, 17, 9],  [4, 18, 10],  [5, 9, 5],
    [6, 11, 3],  [7, 27, 19],  [8, 33, 25],
    [9, 40, 32],  [10, 32, 24], [11, 35, 27],
    [12, 30, 22], [13, 40, 32], [14, 42, 34],
    [15, 47, 39], [16, 44, 36], [17, 48, 40],
    [18, 52, 44], [19, 54, 46], [20, 42, 34],
    [21, 55, 47], [22, 56, 48], [23, 57, 49],
    [24, 60, 52], [25, 50, 42], [26, 52, 44],
    [27, 51, 43], [28, 49, 41], [29, 53, 45],
    [30, 55, 47], [31, 60, 52], [32, 61, 53],
    [33, 59, 51], [34, 62, 54], [35, 65, 57],
    [36, 62, 54], [37, 58, 50], [38, 55, 47],
    [39, 61, 53], [40, 64, 56], [41, 65, 57],
    [42, 63, 55], [43, 66, 58], [44, 67, 59],
    [45, 69, 61], [46, 69, 61], [47, 70, 62],
    [48, 72, 64], [49, 68, 60], [50, 66, 58],
    [51, 65, 57], [52, 67, 59], [53, 70, 62],
    [54, 71, 63], [55, 72, 64], [56, 73, 65],
    [57, 75, 67], [58, 70, 62], [59, 68, 60],
    [60, 64, 56], [61, 60, 52], [62, 65, 57],
    [63, 67, 59], [64, 68, 60], [65, 69, 61],
    [66, 70, 62], [67, 72, 64], [68, 75, 67],
    [69, 80, 72]
  ]);

  var options = {
  	title: 'Correlation between life expectancy, fertility rate and population of some world countries (2012)',
		hAxis: {title: 'Life Expectancy', maxValue: 10, gridlines: {count: 6, color: '#eeeeee',}},
		vAxis: {title: 'Fertility Rate', maxValue: 10, gridlines: {count: 10, color: '#eeeeee',}},
		colors: [$red, $blue, $green, $yellow],
		width: 'auto',
		backgroundColor: 'transparent',
		tooltip: {
			textStyle: {
				color: '#666666',
				fontSize: 11
			},
			showColorCode: true
		},
		chart: {
      title: 'Box Office Earnings in First Two Weeks of Opening',
      subtitle: 'in millions of dollars (USD)'
    },
		legend: {
			position: 'left',
			textStyle: {
				color: 'black',
				fontSize: 12
			}
		},
		chartArea: {
			left: 0,
			top: 10,
			width: "100%",
			height: "100%"
		}
	};
  var chart = new google.visualization.LineChart(document.getElementById('linechart_material'));
  chart.draw(data, options);
}
  

//Chart Lines
google.load("visualization", "1", {packages:["corechart"]});
	google.setOnLoadCallback(chartLines);
	function chartLines() {
	  var data = new google.visualization.DataTable();
	  data.addColumn('number', 'x');
	  data.addColumn('number', 'values');
	  data.addColumn({id:'i0', type:'number', role:'interval'});
	  data.addColumn({id:'i1', type:'number', role:'interval'});
	  data.addColumn({id:'i2', type:'number', role:'interval'});
	  data.addColumn({id:'i2', type:'number', role:'interval'});
	  data.addColumn({id:'i2', type:'number', role:'interval'});
	  data.addColumn({id:'i2', type:'number', role:'interval'});

	  data.addRows([
	      [1, 100, 90, 110, 85, 96, 104, 120],
	      [2, 120, 95, 130, 90, 113, 124, 140],
	      [3, 130, 105, 140, 100, 117, 133, 139],
	      [4, 90, 85, 95, 85, 88, 92, 95],
	      [5, 70, 74, 63, 67, 69, 70, 72],
	      [6, 30, 39, 22, 21, 28, 34, 40],
	      [7, 80, 77, 83, 70, 77, 85, 90],
	      [8, 100, 90, 110, 85, 95, 102, 110]]);

	  // The intervals data as narrow lines (useful for showing raw source data)
	  var options_lines = {
			title:'Area, default',
			curveType:'function',
			backgroundColor: 'transparent',
			series: [{'color': '#F1CA3A'}],
			intervals: { 'style':'area' },
			legend: 'none',
	  };

	  var chart_lines = new google.visualization.LineChart(document.getElementById('chart_lines'));
	  chart_lines.draw(data, options_lines);
	}

$(window).on('resize',function(){location.reload();});
