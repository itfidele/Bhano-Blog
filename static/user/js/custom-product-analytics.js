// Flot Donut Chart
var $border_color = "#e1e8ed";
var $grid_color = "#e1e8ed";
var $default_black = "#666";

// Donut Chart
$(function () {

	var data, chartOptions;
	
	data = [
		{ label: "Return Visitors", data: Math.floor (Math.random() * 100 + 350) }, 
		{ label: "New Visitors", data: Math.floor (Math.random() * 100 + 190) }, 
	];

	chartOptions = {        
		series: {
			pie: {
				show: true,  
				innerRadius: .4, 
				stroke: {
					width: 0,
				}
			}
		}, 
		shadowSize: 0,
		legend: {
			show: false,
		},
		
		tooltip: true,

		tooltipOpts: {
			content: '%s: %y'
		},
		
		grid:{
      hoverable: true,
      clickable: false,
      borderWidth: 1,
			tickColor: $border_color,
      borderColor: $grid_color,
    },
    shadowSize: 0,
		colors: ['#3fc5ac', '#058DC7', '#999999', '#CCCCCC'],
	};

	var holder = $('#returnNewVisitors');

	if (holder.length) {
		$.plot(holder, data, chartOptions );
	}	
});


// Area Session
$(function () {
		
	var d1, data, chartOptions;

	var d1 = [[1262304000000, 6], [1264982400000, 3057], [1267401600000, 20434], [1270080000000, 31982], [1272672000000, 26602], [1275350400000, 27826], [1277942400000, 24302], [1280620800000, 24237], [1283299200000, 21004], [1285891200000, 12144], [1288569600000, 10577], [1291161600000, 10295]];

	data = [{ 
		label: "Sessions", 
		data: d1
	}];

	chartOptions = {
		xaxis: {
			min: (new Date(2009, 12, 1)).getTime(),
			max: (new Date(2010, 11, 2)).getTime(),
			mode: "time",
			tickSize: [1, "month"],
			monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			tickLength: 0
		},
		yaxis: {

		},
		series: {
			lines: {
				show: true, 
				fill: true,
				fill: 0.1,
				lineWidth: 3
			},
			points: {
				show: true,
				radius: 5,
				fill: true,
				fillColor: "#ffffff",
				lineWidth: 3,
			}
		},
		grid:{
			hoverable: true,
			clickable: false,
			borderWidth: 0,
			tickColor: "#eee",
			borderColor: "#ccc",
		},
		legend: {
			show: true,
			position: 'nw'
		},
		tooltip: true,
		tooltipOpts: {
			content: '%s: %y'
		},
		shadowSize: 0,
		colors: ['#058DC7', '#666666', '#333333', '#CCCCCC'],
	};

	var holder = $('#area-chart');

	if (holder.length) {
		$.plot(holder, data, chartOptions);
	}
});

// Vertical Chart
$(function () {

	var d1, d2, data, chartOptions;

	d1 = [
		[1325376000000, 1200], [1328054400000, 700], [1330560000000, 1000], [1333238400000, 600],
		[1335830400000, 350]
	];

	d2 = [
		[1325376000000, 800], [1328054400000, 1200], [1330560000000, 600], [1333238400000, 250],
		[1335830400000, 300]
	];

	data = [{
		label: 'Mobile',
		data: d1
	},{
		label: 'Desktop',
		data: d2
	}];

	chartOptions = {
		xaxis: {
			min: (new Date(2011, 11, 15)).getTime(),
			max: (new Date(2012, 04, 18)).getTime(),
			mode: "time",
			tickSize: [2, "month"],
			monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			tickLength: 0
		},
		grid:{
      hoverable: true,
      clickable: false,
      borderWidth: 1,
			tickColor: $border_color,
      borderColor: $grid_color,
    },
		bars: {
			show: true,
			barWidth: 24*24*60*60*300,
			fill: true,
			lineWidth: 1,
			order: true,
			lineWidth: 0,
			fillColor: { colors: [ { opacity: 1 }, { opacity: 1 } ] }
		},
		shadowSize: 0,
		tooltip: true,
		tooltipOpts: {
			content: '%s: %y'
		},
		colors: ['#E24B46', '#e1e8ed'],
	}

	var holder = $('#mob-desktop');

	if (holder.length) {
		$.plot(holder, data, chartOptions );
	}

});

// Horizontal bar JS
$('.horz-bar').horizBarChart({
	selector: '.bar',
	speed: 1000
});

// SparkLine Bar
$(function () {

  $('#sale_today').sparkline([2,3,4,5,7,5,4,3,3,2,1,1,2,3], {
    height: '24',
    type: 'bar',
    barSpacing: 3,
    barWidth: 6,
    barColor: '#058DC7',
    tooltipPrefix: 'time: '
  });
  $('#sale_today').sparkline([1,1,2,3,4,9,9,11,11,13,13,13,10,1], {
    composite: true,
    height: '30',
    fillColor:false,
    lineColor: '#f7b53c',
    tooltipPrefix: 'Users Online: '
  });
});