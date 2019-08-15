$(document).ready(function($){
	"use strict";
	//page loader
	$( window ).load(function() {
		$(".page-loader").fadeOut("slow");
	});
	// WOW Js Active
	new WOW().init();

	// Sticky Header Active
	$(window).on('scroll', function(){
		var scroll = $(window).scrollTop();
		if (scroll > 50) {
			$(".sticky-header").addClass('sticky');
		} 
		else {
			$(".sticky-header").removeClass('sticky');
		}
	});

	// Meanmenu Active
	$('#mobile-menu-active').meanmenu({
		meanScreenWidth: "767",
		meanMenuContainer: ".mobile-menu"

	});

	


	
	    
	  


	



}(jQuery));