$(document).ready(function()
{
	$('input[name=name]').mouseover(function()
	{
		$('#name').append('&nbsp;Enter your full name');
	});
	
	$('input[name=name]').mouseleave(function()
	{
		$('#name').empty();
	});
	
		$('input[name=email]').mouseover(function()
	{
		$('#email').append('&nbsp;Enter your email address');
	});
	
	$('input[name=email]').mouseleave(function()
	{
		$('#email').empty();
	});
	
		$('input[name=password]').mouseover(function()
	{
		$('#pw').append('&nbsp;Enter your password (6-32 char)');
	});
	
	$('input[name=password]').mouseleave(function()
	{
		$('#pw').empty();
	});
	
		$('input[name=user]').mouseover(function()
	{
		$('#user').append('&nbsp;Enter your username (A-Z,a-z,0-9)');
	});
	
	$('input[name=user]').mouseleave(function()
	{
		$('#user').empty();
	});
});