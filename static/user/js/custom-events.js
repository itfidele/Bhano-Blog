var $danger = "#D66061";
var $yellow = "#ffee00";


// Sparkline Graphs
$(function () {
	$('#projects').sparkline([320,250,400,380,280,320,220,385,450], {
		type: 'line',
		lineWidth: 3,
		fillColor: false,
		lineColor: '#058DC7',
		spotColor: '#e13f3d',
		minSpotColor: '#50B432',
		maxSpotColor: '#f7b53c',
		highlightSpotColor: '#',
		height: 60,
		width: 120,
		spotRadius: 6,
	});

	$("#downloads").sparkline([290,320,310,365,420,320,350,370,320], {
		type: 'bar',
		barWidth: 10,
		height: 60,
		width: 120,    
		barSpacing: 5,
		barColor: '#058DC7',
		negBarColor: '#ffffaa'
	});

	$("#total-applications").sparkline([212,257,284,315,365,383,358,371,329,295,321,392,316,423,477,495,419], {
		type: 'line',
		lineWidth: 3,
		fillColor: false,
		lineColor: '#058DC7',
		spotColor: '#e13f3d',
		minSpotColor: '#50B432',
		maxSpotColor: '#f7b53c',
		highlightSpotColor: '#',
		height: 40,
		width: 180,
		spotRadius: 5,
	});
});


// Flot Donut Chart
$(function () {
	var data, chartOptions;
	data = [
		{ label: "", data: Math.floor (Math.random() * 100 + 140) }, 
		{ label: "", data: Math.floor (Math.random() * 100 + 30) },
		{ label: "", data: Math.floor (Math.random() * 100 + 60) }, 
		{ label: "", data: Math.floor (Math.random() * 100 + 90) }, 
		{ label: "", data: Math.floor (Math.random() * 100 + 120) }, 
	];
	chartOptions = {        
		series: {
			pie: {
				show: true,  
				innerRadius: .8, 
				stroke: {
					width: 1,
				}
			}
		}, 
		shadowSize: 0,
		legend: {
			position: 'sw'
		},
		tooltip: true,

		tooltipOpts: {
			content: '%s: %y'
		},
		grid:{
			hoverable: false,
			clickable: false,
			borderWidth: 0,
		},
		shadowSize: 0,
		colors: ['#F782AA', '#0084B4', '#3FC5AC', '#FFD06B', '#CCCCCC'],
	};
	var holder = $('#advertising');
	if (holder.length) {
		$.plot(holder, data, chartOptions );
	}	
});