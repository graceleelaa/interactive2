$(document).ready(function(){
	
	$('#button-3').click(function() {
		$(this).animate({
			opacity: 0.2,
			// marginLeft: '0.3in',
			// marginRight: '0.3in',
			fontSize: '100px',
			borderWidth: '10px'
		}, 500 );
	});
	
	$('#button-4').click(function() {
		$(this).animate({
			opacity: 0
		}, 1000 );
	});


    $('#button-21').ready(function(){
    $("a").toggle(
        function(){$("a").css({"color": "red"});},
        function(){$("a").css({"color": "blue"});},
        function(){$("a").css({"color": "green"});
});
});



});
