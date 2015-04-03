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
	$("#start").hide();
	window.setInterval(function () {iterate()}, 300)
});

function iterate() {
	$("square").each(function() {
		if(!correct($(this))) 
		{
			swap($(this));
		}
	});
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

$(window).scroll(function() {
  	$("body").addClass("light");
	$("#hidden").addClass("red");
});

$("#section3").click(function() {
	$('html, body').animate({
        scrollTop:$('#section4').offset().top
    }, 500);
});

$(".center-button").click(function() {
	$(".center-button").addClass("active");
	$(".left-button").removeClass("active");
	$(".right-button").removeClass("active");
	$("#screenshot1").hide();
	$("#screenshot2").show();
	$("#screenshot3").hide();
});

$(".left-button").click(function() {
	$(".center-button").removeClass("active");
	$(".left-button").addClass("active");
	$(".right-button").removeClass("active");
	$("#screenshot1").show();
	$("#screenshot2").hide();
	$("#screenshot3").hide();
});

$(".right-button").click(function() {
	$(".center-button").removeClass("active");
	$(".left-button").removeClass("active");
	$(".right-button").addClass("active");
	$("#screenshot1").hide();
	$("#screenshot2").hide();
	$("#screenshot3").show();
});

$("#beta-interest").submit(function(event) {
	$("#beta-full, #beta-full *, #pop-up-overlay").show(500);
	event.preventDefault(); 
	$("#full-email").val($("#interest-email").val());
});

$("#pop-up-overlay").click(function() {
	$("#beta-full, #pop-up-overlay").hide(500);
});

$("#beta-full").submit(function(event) {
	event.preventDefault(); 
	Parse.initialize("VZnzhx2yDi4XARcEY8FrT7cYzJPRdG9UJNwA4Xef", "z8ULgqRkygDY5uUvClqZhay5FOnwXrdBnnanK3xg");
	var betaUser = Parse.Object.extend("BetaInterest");
	var betaUser = new betaUser();
	betaUser.set({
		"name": $("input[name='name']").val(),
		"email": $("input[name='email']").val(),
		"event": $("input[name='event']").val(),
		"date": $("input[name='date']").val(),
		"website": $("input[name='site']").val(),
		"hackers": $("input[name='hackers']").val(),
	});
	betaUser.save().then(function(object) {
	  alert("Thank you for your interest! The HackSignal team will be in touch soon.");
	});
	$("#beta-full, #pop-up-overlay").hide(500);
});