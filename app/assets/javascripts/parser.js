var currentTemplate;
var tokenData = new Hashtable();
function loadTemplate(url) {
	$('#TemplateLoader').load(url,function(responseText){
		currentTemplate = responseText;
		$('#right').html(currentTemplate);
	});	
}
function parseTemplate(inputValue, inputToken)
{
	tokenData.put(inputToken, inputValue);
	renderTemplate();
	/*
	var	expression = '\\['+ inputToken + '\\].*\\[/' + inputToken + '\\]';
	rx = RegExp(expression, 'igm');
    $('#right').html($('#right').html().replace(rx,inputValue));
	*/
}	

function renderTemplate()
{
	tokenData.each(function(token, val){
		var	expression = '\\['+ token + '\\].*\\[/' + token + '\\]';
		rx = RegExp(expression, 'igm');
	    $('#right').html(currentTemplate.replace(rx, val));
		
		
	});
}