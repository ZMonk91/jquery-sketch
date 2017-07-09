$(document).ready(function(){
	// CREATE GRID
	for (i = 0; i<1152; i++) {
		var board = document.createElement('div');
		board.className = 'grid';
		document.getElementById('container').appendChild(board);
	};
	// END CREATE GRID

	// HOVER AND CLICK FUNCTION //
	$('.grid').hover(function(){
		$(this).toggleClass('active');
		$(this).click(function(){
			$(this).addClass('changed');
		});
	});
	// END HOVER AND CLICK FUNCTION

	// COLOR PICKER 
	$('#colorpicker').farbtastic('#color');
	// END COLOR PICKER
});