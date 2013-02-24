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
}	

function renderTemplate()
{
	var renderedTemplate = currentTemplate;
	tokenData.each(function(token, val){
		var	expression = '\\['+ token + '\\].*\\[/' + token + '\\]';
		rx = RegExp(expression, 'igm');
		renderedTemplate = renderedTemplate.replace(rx, val);
	    $('#right').html(renderedTemplate);
		
		
	});
}