$( document ).ready(function() {

	$("#on-trials").circliful({
		animationStep: 5,
		foregroundBorderWidth: 5,
		backgroundBorderWidth: 15,
		percent: 39,
		fontColor: '#000000',
		foregroundColor: '#ab7967',
		backgroundColor: '#e2e2e2',			
		icon: 'f206',
		iconColor: '#ab7967',
		iconPosition: 'middle',
		text: 'Trails',
		textBelow: true
	});

	$("#base-plan").circliful({
		animationStep: 5,
		foregroundBorderWidth: 5,
		backgroundBorderWidth: 15,
		percent: 52,
		fontColor: '#000000',
		foregroundColor: '#e77338',
		backgroundColor: '#e2e2e2',			
		icon: 'f21c',
		iconColor: '#e77338',
		iconPosition: 'middle',
		text: 'Base',
		textBelow: true
	});

	$("#premium-plan").circliful({
		animationStep: 5,
		foregroundBorderWidth: 5,
		backgroundBorderWidth: 15,
		percent: 71,
		fontColor: '#000000',
		foregroundColor: '#5e83bf',
		backgroundColor: '#e2e2e2',			
		icon: 'f1b9',
		iconColor: '#5e83bf',
		iconPosition: 'middle',
		text: 'Premium',
		textBelow: true
	});	
	
	$("#platinum-plan").circliful({
		animationStep: 5,
		foregroundBorderWidth: 5,
		backgroundBorderWidth: 15,
		percent: 96,
		fontColor: '#000000',
		foregroundColor: '#91c46b',
		backgroundColor: '#e2e2e2',			
		icon: 'f072',
		iconColor: '#91c46b',
		iconPosition: 'middle',
		text: 'Platinum',
		textBelow: true
	});
});