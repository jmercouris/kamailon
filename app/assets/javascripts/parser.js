var currentTemplate;
var tokenData = new Hashtable();
function loadTemplate(url) {
	$('#TemplateLoader').load(url,function(responseText){
		currentTemplate = responseText;
		var rmTokenPreview = new RegExp('\\[.*?\\]','igm');
	    $('#right').html(currentTemplate.replace(rmTokenPreview,''));
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
		var rmTokenPreview = new RegExp('\\[.*?\\]','igm');
	    $('#right').html(renderedTemplate.replace(rmTokenPreview,''));
		
		
	});
}

