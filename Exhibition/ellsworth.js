$(document).ready(function(){

	var scrollPos;

	// check when the user scrolls
	$(window).scroll(function(){ 
		scrollPos = $(window).scrollTop();
		
		console.log(scrollPos);

		if(scrollPos < 100) {
			$('body').removeClass('yellow');
		}
		
		if(scrollPos > 200) {
			$('body').addClass('yellow');
		}

		if(scrollPos < 300) {
			$('body').removeClass('red');
		}
		
		if(scrollPos > 400) {
			$('body').addClass('red');
		}
		if(scrollPos < 500) {
			$('body').removeClass('blue');
		}
		
		if(scrollPos > 600) {
			$('body').addClass('blue');
		}
		if(scrollPos < 700) {
			$('body').removeClass('green');
		}
		
		if(scrollPos > 800) {
			$('body').addClass('green');
		}
		if(scrollPos < 900) {
			$('body').removeClass('orange');
		}
		
		if(scrollPos > 1000) {
			$('body').addClass('orange');
		}
		if(scrollPos < 1100) {
			$('body').removeClass('black');
		}
		
		if(scrollPos > 1200) {
			$('body').addClass('black');
		}

		
	});


	$("#button").click(function() {
		$('body').toggleClass('show-kelly');
	});

	$("#button2").click(function() {
		$('body').toggleClass('show-kelly2');
	});
	$("#button3").click(function() {
		$('body').toggleClass('show-kelly3');
	});

	$(".artwork p").click(function() {
		$(this).next('img').toggleClass('show');
	});



});