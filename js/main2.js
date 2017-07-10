function drawGrid (height, width){
		$('.container').empty();
		for (i=0; i < height; i++){
   			$('<div>').addClass('square-line').appendTo(".container");
   		};
    
    	var squareWidth = 800/width;
    	for (j=0; j < width; j++){
    		$('<div>').addClass('square').css("width",squareWidth).css("height",squareWidth).appendTo(".square-line");	
		};

	}


$(document).ready(function(){
// Initial Grid DRAWING

	var height = 64;
	var width = 64;

	drawGrid (height,width);


	//Starting Color
	var choice = '#000';
	function hovering (){
	$('.square').hover(function(){
    	$(this).click(function(){
            $(this).css('background-color', choice);
		});
	});
}

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
    	drawGrid (x, y);


	});

	// COLOR PICKER 

});