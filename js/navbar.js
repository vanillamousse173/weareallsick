// JavaScript Document
$(document).ready(function(){
	$(window).resize(function(){
		// location.reload();
	});

	var pn = $("body").data("pagenum");
	$("nav li>a").eq(pn).addClass("ch_bg");
	
	// document.querySelectorAll('nav li > a')[pn].classList.add('ch_bg');

	// switch (pn){
		
	// 	case 0:
	// 	get_con('js/list.json');
	// 	break;
		
	// 	case 1:
	// 	get_con('js/list1.json');			
	// 	break;

	// 	case 2:
	// 	get_con('js/list2.json');			
	// 	break;

	// 	case 3:
	// 	get_con('js/list3.json');			
	// 	break;
				
	// };

	$(".menu").click(function(){
		$("nav").slideToggle();
		$("header:after").slideUp();
	});

	// function get_con(file_name){
	// 	$.getJSON(file_name, function(data){
	// 		$("section").empty();

	// 		$.each(data, function(index, en){
	// 			var html = '<div class="col-m-6 col-3">';
	// 			html += '<a href="' + en['meme'] + '">';
	// 			html += '<div class="box">';
	// 			html += '<div class="imgbox2">';
	// 			html += '<img src="' + en['pic'] + '">';
	// 			html += '</div>';
	// 			html += '<h3>' + en['title'] + '</h3>';
	// 			html += '</div>';
	// 			html += '</a>';
	// 			html += '</div>'

	// 			$("section").append(html);

	// 		});
	// 	});
	// 	return false;
	// }

});