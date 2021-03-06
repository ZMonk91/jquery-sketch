$(document).ready(function(){

	// CREATE GRID
	var px = 10;
	var py = 10;
	var pxy = px * py;  //Pixel X and Y area size
	var x = 120;
	var y = 120;        //Grid X and Y size

	$('#container').css({'width': x});
    $('#container').css({'height': y});
	for (i = 0; i<((x*y)/pxy); i++) {
		var board = document.createElement('div');
		board.className = 'grid';
		board.addId = 'color'
		$('.grid').css({'width': px})
		$('.grid').css({'height': py})
		document.getElementById('container').appendChild(board);
	};

	//Starting Color
	var choice = '#000';
	$('.grid').hover(function(){
    	$(this).click(function(){
            $(this).css('background-color', choice);
		});
	});

  	// HOVER AND CLICK FUNCTION //
  	    $('#color-picker').colorpicker().on('changeColor', function(ev){
        choice = ev.color.toHex();
        document.body.style.setProperty('--main-color', choice);
	});
  	// Canvas Size Button
	$("#size").change(function() {
    	var selected = $(this).val(); 		// Grabs value of selection
    	if (selected == 1){
    		var x = 16;
    		var y = 16;
    	}
    	else if (selected == 2) {
    		var x = 32;
    		var y = 32;
    	}
    	else if (selected == 3) {
    		var x = 64;
    		var y = 64;
    	}
    	else if (selected == 4) {
    		var x = 256;
    		var y = 192;
    	}
    	 else if (selected == 5) {
    		var x = 640;
    		var y = 360;
    	}                             // Establishes grid X and Y coords
    	$('#container').css({'width': x});
    	$('#container').css({'height': y});


	});

	// COLOR PICKER 

});