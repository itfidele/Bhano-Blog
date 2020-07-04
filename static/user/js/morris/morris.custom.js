// Morris Area as A Line Chart
Morris.Area({
	element: 'areaLineChart',
	behaveLikeLine: true,
	data: [
		{x: '2016 Q1', y: 3, z: 23},
		{x: '2016 Q2', y: 22, z: 31},
		{x: '2016 Q3', y: 2, z: 14},
		{x: '2016 Q4', y: 23, z: 43}
	],
	xkey: 'x',
	ykeys: ['y', 'z'],
	labels: ['Y', 'Z'],
	resize: true,
	pointFillColors:['#ffffff'],
	pointStrokeColors: ['black'],
});


// Morris Area Chart
Morris.Area({
	element: 'areaChart',
	data: [
		{x: '2015 Q4', y: 3, z: 7},
		{x: '2016 Q1', y: 3, z: 12},
		{x: '2016 Q2', y: 1, z: 5},
		{x: '2016 Q3', y: 2, z: 5},
		{x: '2016 Q4', y: 8, z: 2},
		{x: '2017 Q1', y: 4, z: 4}
	],
	xkey: 'x',
	ykeys: ['y', 'z'],
	labels: ['Y', 'Z'],
	resize: true,
	pointFillColors:['#ffffff'],
	pointStrokeColors: ['black'],
	lineColors:['#333333','#e84f4c'],	
});


// Morris Bar Colors
Morris.Bar({
	element: 'barColors',
	data: [
		{x: '2015 Q1', y: 0},
		{x: '2015 Q2', y: 1},
		{x: '2015 Q3', y: 2},
		{x: '2015 Q4', y: 3},
		{x: '2016 Q1', y: 4},
		{x: '2016 Q2', y: 5},
		{x: '2016 Q3', y: 6},
		{x: '2016 Q4', y: 7},
		{x: '2017 Q1', y: 8}
	],
	xkey: 'x',
	ykeys: ['y'],
	labels: ['Y'],
	resize: true,
	barColors: function (row, series, type) {
		if (type === 'bar') {
			var red = Math.ceil(255 * row.y / this.ymax);
			return 'rgb(' + red + ',0,0)';
		}
		else {
			return '#000';
		}
	}
});


// Morris Bar No Axis
Morris.Bar({
	element: 'barNoAxis',
	axes: false,
	data: [
		{x: '2016 Q1', y: 3, z: 2, a: 3},
		{x: '2016 Q2', y: 2, z: null, a: 1},
		{x: '2016 Q3', y: 0, z: 2, a: 4},
		{x: '2016 Q4', y: 2, z: 4, a: 3}
	],
	xkey: 'x',
	ykeys: ['y', 'z', 'a'],
	labels: ['Y', 'Z', 'A'],
	resize: true
});


// Morris Bar Chart
Morris.Bar({
	element: 'morrisBarChart',
	data: [
		{x: '2016 Q1', y: 2, z: 4, a: 2},
		{x: '2016 Q2', y: 5, z: 3, a: 1},
		{x: '2016 Q3', y: 2, z: 7, a: 4},
		{x: '2016 Q4', y: 5, z: 6, a: 3}
	],
	xkey: 'x',
	ykeys: ['y', 'z', 'a'],
	labels: ['Y', 'Z', 'A'],
	resize: true
});


// Morris Days
var day_data = [
	{"period": "2016-10-01", "licensed": 3213, "nexton": 887},
	{"period": "2016-09-30", "licensed": 3321, "nexton": 776},
	{"period": "2016-09-29", "licensed": 3671, "nexton": 884},
	{"period": "2016-09-20", "licensed": 3176, "nexton": 448},
	{"period": "2016-09-19", "licensed": 3376, "nexton": 565},
	{"period": "2016-09-18", "licensed": 3976, "nexton": 627},
	{"period": "2016-09-17", "licensed": 2239, "nexton": 660},
	{"period": "2016-09-16", "licensed": 3871, "nexton": 676},
	{"period": "2016-09-15", "licensed": 3659, "nexton": 656},
	{"period": "2016-09-10", "licensed": 3380, "nexton": 663}
];
Morris.Line({
	element: 'dayData',
	data: day_data,
	xkey: 'period',
	ykeys: ['licensed', 'nexton'],
	labels: ['Licensed', 'NEXTON'],
	resize: true,
	pointFillColors:['#ffffff'],
	pointStrokeColors: ['black'],
	lineColors:['#333333','#e84f4c'],
});


// Displaying X Labels Diagonally (Bar Chart)
var day_data = [
	{"period": "2016-10-01", "licensed": 4, "nexton": 2},
	{"period": "2016-09-30", "licensed": 5, "nexton": 1},
	{"period": "2016-09-29", "licensed": 8, "nexton": 4},
	{"period": "2016-09-20", "licensed": 2, "nexton": 2},
	{"period": "2016-09-19", "licensed": 7, "nexton": 6},
	{"period": "2016-09-18", "licensed": 4, "nexton": 3},
	{"period": "2016-09-17", "licensed": 7, "nexton": 7},
	{"period": "2016-09-16", "licensed": 8, "nexton": 2},
	{"period": "2016-09-15", "licensed": 9, "nexton": 3},
	{"period": "2016-09-10", "licensed": 2, "nexton": 9}
];
Morris.Bar({
	element: 'xLabelsDiagonally',
	data: day_data,
	xkey: 'period',
	ykeys: ['licensed', 'nexton'],
	labels: ['Licensed', 'NEXTON'],
	xLabelAngle: 60,
	resize: true,
});


// Morris Donut
Morris.Donut({
	element: 'donutColors',
	data: [
		{value: 70, label: 'foo'},
		{value: 15, label: 'bar'},
		{value: 10, label: 'baz'},
		{value: 5, label: 'A really really long label'}
	],
	backgroundColor: '#ffffff',
	labelColor: '#666666',
	colors: [
		'#aed048',
		'#fee074',
		'#66c0dc',
		'#fa9255'
	],
	resize: true,
	formatter: function (x) { return x + "%"}
});


Morris.Donut({
	element: 'donutFormatter',
	data: [
		{value: 155, label: 'voo', formatted: 'at least 70%' },
		{value: 12, label: 'bar', formatted: 'approx. 15%' },
		{value: 10, label: 'baz', formatted: 'approx. 10%' },
		{value: 5, label: 'A really really long label', formatted: 'at most 5%' }
	],
	resize: true,
	formatter: function (x, data) { return data.formatted; }
});


// Morris Negative values
var neg_data = [
	{"period": "2017-02-12", "a": 100},
	{"period": "2017-01-03", "a": 75},
	{"period": "2016-08-08", "a": 50},
	{"period": "2016-05-10", "a": 25},
	{"period": "2016-03-14", "a": 0},
	{"period": "2016-01-10", "a": -25},
	{"period": "2005-12-10", "a": -50},
	{"period": "2005-10-07", "a": -75},
	{"period": "2005-09-25", "a": -100}
];
Morris.Line({
	element: 'negativeValues',
	data: neg_data,
	xkey: 'period',
	ykeys: ['a'],
	labels: ['Series A'],
	units: '%',
	resize: true,
	pointFillColors:['#ffffff'],
	pointStrokeColors: ['black'],
	lineColors:['#333333','#e84f4c'],
});


// Stacked Bar Chart
Morris.Bar({
	element: 'stackedBarChart',
	data: [
		{x: '2016 Q1', y: 3, z: 2, a: 3},
		{x: '2016 Q2', y: 2, z: null, a: 1},
		{x: '2016 Q3', y: 0, z: 2, a: 4},
		{x: '2016 Q4', y: 2, z: 4, a: 3}
	],
	xkey: 'x',
	ykeys: ['y', 'z', 'a'],
	labels: ['Y', 'Z', 'A'],
	stacked: true
});