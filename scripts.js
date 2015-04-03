var colors = ["red", "orange", "yellow", "blue", "white", "gold"];
var bluecolors = ["blue", "navy"];

var redSquares = ["9", "28", "47", "48", "51", "66", "67", "72"];
var orangeSquares = ["68", "86", "87", "88", "89", "91", "92", "106", "112", "113", "126", "133", "146", "153"];
var goldSquares = ["107", "108", "109", "110", "111", "127", "131", "132", "147", "152", "167", "172"];
var yellowSquares = ["128", "129", "130", "148", "150", "151", "168", "171", "188", "189", "190", "191"];
var whiteSquares = ["149", "169", "170"];

/*$(".square").each(function() {
	var currentSquare = $(this);
	currentSquare.addClass("red");
	$( ".square" ).toggleClass(function() {
  		if ( $( this ).parent().is( ".bar" ) ) {
		    return "happy";
		  } else {
		    return "sad";
		  }
	});
});*/

var interval = null;

var container = $('<div class="square-holder" />');
var idnum = 0;
for(var a = 0; a<10; a++) {
	var row = $('<div class="square-row" />');
	for(var i = 1; i <= 20; i++) {
		idnum++;
	    $('<square />', {
	        id: idnum,
	    }).appendTo(row);
	}
	row.appendTo(container)	
}
$('#boxes-here').html(container);

$("square").each(function() {
	var random = Math.floor(Math.random() * (6));
	var color = colors[random];
	var currentSquare = $(this);
	currentSquare.addClass(color);
});

$("#start").click(function() {
	$("#buttons").hide();
	interval = setInterval(function () {iterate()}, 300);
});

$("#justcolours").click(function() {
	$("#buttons").hide();
	interval = setInterval(function () {iteratenonstop()}, 300);
});

$('#restart').click(function() {
    location.reload();
});

function iterate() {
	$("square").each(function() {
		if(!correct($(this))) 
		{
			swap($(this));
		}
	});
	if(checkCorrect()) {
		clearInterval(interval);
		$("square").each(function() {
			$(this).fadeOut(1000);
		});
		$("#background-content").show(1000);
	}
}

function iteratenonstop() {
	$("square").each(function() {
		swap($(this));
	});
}

function checkCorrect() {
	var flag = 0;
	$('square').each(function() {
		var thesquare = $(this);
		if(redSquares.indexOf(thesquare.attr('id')) > -1) {
			if(thesquare.hasClass("red")) {
			}
			else {
				flag++;
			}
		}
		else if(orangeSquares.indexOf(thesquare.attr('id')) > -1) {
			if(thesquare.hasClass("orange")) {
			}
			else {
				flag++;
			}
		}
		else if(goldSquares.indexOf(thesquare.attr('id')) > -1) {
			if(thesquare.hasClass("gold")) {
			}
			else {
				flag++;
			}
		}
		else if(yellowSquares.indexOf(thesquare.attr('id')) > -1) {
			if(thesquare.hasClass("yellow")) {
			}
			else {
				flag++;
			}
		}
		else if(whiteSquares.indexOf(thesquare.attr('id')) > -1) {
			if(thesquare.hasClass("white")) {
			}
			else {
				flag++;
			}
		}
		else {
			if(thesquare.hasClass("blue")) {
			}
			else {
				flag++;
			}
		}
	});

	if(flag>0) {
		return false;
	}
	else {
		return true;
	}
}

function correct(thesquare) {
	if(redSquares.indexOf(thesquare.attr('id')) > -1) {
		if(thesquare.hasClass("red")) {
			return true;
		}
		else {
			return false;
		}
	}
	else if(orangeSquares.indexOf(thesquare.attr('id')) > -1) {
		if(thesquare.hasClass("orange")) {
			return true;
		}
		else {
			return false;
		}
	}
	else if(goldSquares.indexOf(thesquare.attr('id')) > -1) {
		if(thesquare.hasClass("gold")) {
			return true;
		}
		else {
			return false;
		}
	}
	else if(yellowSquares.indexOf(thesquare.attr('id')) > -1) {
		if(thesquare.hasClass("yellow")) {
			return true;
		}
		else {
			return false;
		}
	}
	else if(whiteSquares.indexOf(thesquare.attr('id')) > -1) {
		if(thesquare.hasClass("white")) {
			return true;
		}
		else {
			return false;
		}
	}
	else {
		if(thesquare.hasClass("blue")||thesquare.hasClass("navy")) {
			return true;
		}
		else {
			return false;
		}
	}
	return false;
}

function swap(thesquare) {
	thesquare.toggleClass();
	var random = Math.floor(Math.random() * (6));
	var color = colors[random];
	thesquare.addClass(color);
}