$(document).ready(function(){
	for (i = 0; i<1152; i++) {
		var board = document.createElement('div');
		board.className = 'grid';
		document.getElementById('container').appendChild(board);
	};
	$('.grid').hover(function(){
		$(this).toggleClass('active');
	});
});