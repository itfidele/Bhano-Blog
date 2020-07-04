$(function () {

	$("#visits").sparkline([280,320,220,385,450,320,250,400,280,320,220,385,450,320], {
		type: 'bar',
		barWidth: 8,
		height: 60,
		width: 200,    
		barSpacing: 3,
		barColor: '#177bbb',
		negBarColor: '#ffffaa'
	});
	$('#comments').sparkline([320,250,400,380,280,320,220,385,450], {
		type: 'line',
		lineWidth: 3,
		fillColor: false,
		lineColor: '#E24B46',
		spotColor: '#e13f3d',
		minSpotColor: '#50B432',
		maxSpotColor: '#f7b53c',
		highlightSpotColor: '#',
		height: 60,
		width: 200,
		spotRadius: 6,
	});

	$("#posts").sparkline([380,420,320,300,385,680,320,250,290,400,450], {
		type: 'bar',
		barWidth: 8,
		height: 60,
		width: 200,    
		barSpacing: 5,
		barColor: '#177bbb',
		negBarColor: '#ffffaa'
	});

	$("#emails").sparkline([3,2,4,3,5,4,3,5,2,4,7,9,12,15,12,11,12,11], {
		type: 'line',
		width: '200',
		height: '70',
		lineColor: '#177bbb',
		fillColor: '#e5f3fc',
		lineWidth: 3,
		spotRadius: 6
	});

	$('#dataLine').sparkline([280,320,220,385,450,150,250,250,400,380], {
		type: 'line',
		lineWidth: 4,
		fillColor: false,
		lineColor: '#177bbb',
		spotColor: '#e13f3d',
		minSpotColor: '#50B432',
		maxSpotColor: '#f7b53c',
		highlightSpotColor: '#',
		height: 60,
		width: 200,
		spotRadius: 6,
	});

	$('#rowOne').sparkline([320,250,400,380,280,320,220,385,450], {
		type: 'line',
		lineWidth: 2,
		fillColor: false,
		lineColor: '#058DC7',
		spotColor: '#50B432',
		minSpotColor: '#f7b53c',
		maxSpotColor: '#F782AA',
		highlightSpotColor: '#',
		height: 20,
		width: 80,
		spotRadius: 3,
	});
	$('#rowTwo').sparkline([230,210,315,190,250,200,330,280,350], {
		type: 'line',
		lineWidth: 2,
		fillColor: false,
		lineColor: '#058DC7',
		spotColor: '#50B432',
		minSpotColor: '#f7b53c',
		maxSpotColor: '#F782AA',
		highlightSpotColor: '#',
		height: 20,
		width: 80,
		spotRadius: 3,
	});
	$('#rowThree').sparkline([280,320,220,385,450,320,250,400,280], {
		type: 'line',
		lineWidth: 2,
		fillColor: false,
		lineColor: '#058DC7',
		spotColor: '#50B432',
		minSpotColor: '#f7b53c',
		maxSpotColor: '#F782AA',
		highlightSpotColor: '#',
		height: 20,
		width: 80,
		spotRadius: 3,
	});

	$('#goog').sparkline([280,320,220,385,450,320,345,250,250,250,400,380], {
		type: 'line',
		lineWidth: 2,
		fillColor: false,
		lineColor: '#058DC7',
		spotColor: '#e13f3d',
		minSpotColor: '#50B432',
		maxSpotColor: '#f7b53c',
		highlightSpotColor: '#',
		height: 90,
		width: 300,
		spotRadius: 5,
	});

	$("#aapl").sparkline([280,320,220,385,450,320,345,250,250,250,400,380], {
		type: 'line',
		lineWidth: 2,
		fillColor: false,
		lineColor: '#058DC7',
		spotColor: '#e13f3d',
		minSpotColor: '#50B432',
		maxSpotColor: '#f7b53c',
		highlightSpotColor: '#',
		height: 90,
		width: 300,
		spotRadius: 5,
	});

	$("#nasdaq").sparkline([280,310,220,385,410,320,345,210,250,210,200,380], {
		type: 'line',
		lineWidth: 2,
		fillColor: false,
		lineColor: '#058DC7',
		spotColor: '#e13f3d',
		minSpotColor: '#50B432',
		maxSpotColor: '#f7b53c',
		highlightSpotColor: '#',
		height: 90,
		width: 300,
		spotRadius: 5,
	});

	$("#yahw").sparkline([240,320,220,335,490,310,345,250,280,250,360,310], {
		type: 'line',
		lineWidth: 2,
		fillColor: false,
		lineColor: '#058DC7',
		spotColor: '#e13f3d',
		minSpotColor: '#50B432',
		maxSpotColor: '#f7b53c',
		highlightSpotColor: '#',
		height: 90,
		width: 300,
		spotRadius: 5,
	});

	$("#sun").sparkline([280,220,220,185,350,220,345,250,250,250,300,490], {
		type: 'line',
		lineWidth: 2,
		fillColor: false,
		lineColor: '#058DC7',
		spotColor: '#e13f3d',
		minSpotColor: '#50B432',
		maxSpotColor: '#f7b53c',
		highlightSpotColor: '#',
		height: 90,
		width: 300,
		spotRadius: 5,
	});

});

// Flot Donut Charts
$(function(){
	// Donut 1
	$(function () {
		var data, chartOptions;
		data = [
			{ label: "", data: Math.floor (Math.random() * 100 + 130) }, 
			{ label: "", data: Math.floor (Math.random() * 100 + 520) }, 
		];
		chartOptions = {
			series: {
				pie: {
					show: true,  
					innerRadius: .85,
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
				hoverable: true,
				clickable: false,
				borderWidth: 0,
			},
			shadowSize: 0,
			colors: ["#E24B46", "#cccccc"],
		};
		var holder = $('#views');
		if (holder.length) {
			$.plot(holder, data, chartOptions );
		} 
	});

});

//Todo List
$( '.todo-list' ).on( 'click', 'li.list', function() {
	$(this).toggleClass('completed' );
});

// Databar
$(function () {
	$('.table-databar').databar();
});

//Scrollbar
$(function(){
	$('#scrollbar').tinyscrollbar();
});