$(document).ready(function(){
   $('.replacer_button').click(function(){
	   var input_id = $(this).attr('related_input');
	   parseTemplate($('#' + input_id).val(), input_id);
	   
/*	   //make current field faded
	   $($(this).parent()).fadeTo(400,0.2,'swing');
	     
	   //make next one availble
	   $('#' + (parseInt($(this).parent().attr('id'))+1)).fadeTo(400,1,'swing');
*/	   
   });
   
   $('.field-div').mouseenter(function(){
	   $(this).fadeTo(200,1,'swing');
	   
	   
   });
   
   $('.field-div').mouseleave(function(){
	   $(this).fadeTo(100,0.2,'swing');
   });
   
   /*
	$('#arrow-current-token').jqFloat({
		width: 100,
		height: 100,
		speed: 1000
	});
	//$('#arrow-current-token').jqFloat('play');
   */
});

