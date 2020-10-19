$(document).ready(function(){
	
	$(".iconBar").click(function(){
		$(".slidenav").slideToggle();
	});
	$(".slideLink").click(function(){
		$(".slidenav").slideToggle();
	});
	
	$( window ).scroll(function() {
    $( "nav.main_nav" ).css({
		"box-shadow":"0px -4px 41px -30px black",
	});
});
	
	
	
	
});