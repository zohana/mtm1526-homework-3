// JavaScript Document

$(document).ready(function () {
	
	var $prop = $('#property');
	var $col= $('#color');
		
	$("form").on("submit", function (ev) {
		ev.preventDefault();
	
		if($col.val()){
			
			$('#ball').css($prop.val(), $col.val());
			
		}

$('#hide').on('click', function (ev) {
    $('#ball').toggle(500);
  });
});
		
});



