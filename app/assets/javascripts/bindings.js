$(document).ready(function(){
   $('.replacer_button').click(function(){
	   var input_id = $(this).attr('related_input');
	   parseTemplate($('#' + input_id).val(), input_id);
	   
	   //make current field faded
	   $($(this).parent()).fadeTo(400,0.2,'swing');
	     
	   //make next one availble
	   $('#' + (parseInt($(this).parent().attr('id'))+1)).fadeTo(400,1,'swing');
	   
   }); 
});

