$(document).ready(function () {
	// Modal Window
	$('.modal-large').modal('show');

	// Tooltips
	$('.btn').tooltip('hide');

	// Dropdown
	$('.dropdown-toggle').dropdown();
	
	// Popovers
	$('.btn').popover('hide');

	// Loading Stage Button
	$('#loading-btn')
	.click(function () {
		var btn = $(this)
		btn.button('loading')
		setTimeout(function () {
			btn.button('reset');
		}, 3000);
	});

	$('#myTab a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
	})

	$('#myCollapsible').collapse({
  	toggle: false
	});
		
});