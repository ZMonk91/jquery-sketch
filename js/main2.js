$(document).ready(function(){
// Generate a grid
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
// Color while hovering
		var choice = '#000';
		var isDown = false;
		$(document).mousedown(function(){
			isDown = true;
		})
		.mouseup(function(){
			isDown = false;
		});

		function hovering (){
	$('.square').hover(function(){
    	if (isDown){
            $(this).css('background-color', choice);
    	}
    	$(this).click(function(){
    		$(this).css('background-color', choice);
    	})
		});
	};


// Initial Grid DRAWING
	var height = 64;
	var width = 64;
	drawGrid (height,width);
	hovering();
    $('Canvas').css({'width': height});
    $('Canvas').css({'height': width});



  	// Color selection  
  	    $('#color-picker').colorpicker().on('changeColor', function(ev){
        choice = ev.color.toHex();
        document.body.style.setProperty('--main-color', choice);
	});



  	// Canvas Size Button
	$("#size").change(function() {
    	var selected = $(this).val(); 		// Grabs value of selection
    	if (selected == 1){
    		var width = 16;
    		var height = 16;
    	}
    	else if (selected == 2) {
    		var width = 32;
    		var height = 32;
    	}
    	else if (selected == 3) {
    		var width = 64;
    		var height = 64;
    	}
    	else if (selected == 4) {
    		var width = 128;
    		var height = 128;
    	}
    	 else if (selected == 5) {
    		var width = 256;
    		var height = 256;
    	}                            
    	 // Establishes grid X and Y coords
    	drawGrid(width,height);
    	hovering();
    	$('Canvas').css({'width': width});
    	$('Canvas').css({'height': height});
	});
		//Canvas attempt

	function grabCanvas() {$('#thehtml').html2canvas({
    onrendered : function(canvas) {
    var img = canvas.toDataURL();
    // img now contains an IMG URL, you can do various things with it, but most simply:
        $('<img>',{src:img}).appendTo($('body'));
            }
        });
	};

	// buttons
	$('#save').click(function(){
		alert('Feature coming soon. For now take a screenshot.');
	});

	$('#restart').click(function(){
		drawGrid(width,height)
		hovering()
	});
});