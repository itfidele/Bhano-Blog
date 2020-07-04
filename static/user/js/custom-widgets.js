// Rating
$(function() {
	$.fn.raty.defaults.path = 'img';
	$('#rate1').raty({ score: 1 });
	$('#rate4').raty({ score: 4 });
	$('#rate3').raty({ score: 3 });
	$('#rate5').raty({ score: 5 });
});

// SparkLine Bar
$(function () {
	$('#sale_weekly').sparkline([3,4,5,6,3,4,3,4,5,3,3,2,1,1,1], {
		height: '24',
		type: 'bar',
		barSpacing: 3,
		barWidth: 6,
		barColor: '#3fc5ac',
		tooltipPrefix: 'Users: '
	});
	$('#sale_weekly').sparkline([3,3,4,5,5,5,4,4,4,3,2,1,1,1,1,1], {
		composite: true,
		height: '30',
		fillColor:false,
		lineColor: '#058DC7',
		tooltipPrefix: 'Sale Online: '
	});

	$('#sale_today').sparkline([2,3,4,5,7,5,4,3,3,2,1,1,2,3], {
		height: '24',
		type: 'bar',
		barSpacing: 3,
		barWidth: 6,
		barColor: '#058DC7',
		tooltipPrefix: 'Users: '
	});
	$('#sale_today').sparkline([1,1,2,3,4,9,9,11,11,13,13,13,10,1], {
		composite: true,
		height: '30',
		fillColor:false,
		lineColor: '#f7b53c',
		tooltipPrefix: 'Sale Online: '
	});
});

$(function () {
	$('#scrollDemo1').scrollbox({
	});

	$('#twtterFeeds').scrollbox({
		direction: 'h',
		switchItems: 1,
  	distance: 150
	});
});




