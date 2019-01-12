// JavaScript Document
$(document).ready(function(){
	$(window).resize(function(){
		location.reload();
	});

	$(".menu").click(function(){
		$("nav").slideToggle();
		$("header:after").slideUp();
	});

});