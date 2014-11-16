$(document).ready(function()
{
		$("body #inputbar").hide();
		$("body #rscore").hide();
		$("body #space").hide();
		$("body #gradelist").hide();
		
	$("body #header #home").click(function()
	{
	if (!$("body #description").is(":visible"))
	{
		$("body #description").slideToggle('slow');
		$("body #inputbar").toggle('slow').delay(600);
		$("body #rscore").toggle('slow').delay(600);
		$("body #space").toggle('slow').delay(600);
		$("body #gradelist").toggle('slow').delay(600);
		$("body .university").toggle('slow').delay(600);
	}
	else
	{

		$("body #inputbar").toggle('slow');
		$("body #rscore").toggle('slow');
		$("body #space").toggle('slow');
		$("body #gradelist").toggle('slow');
		$("body #description").slideToggle('slow').delay(600);
	}
	}
	);
});