$(document).ready(function(){
    $('#ahome').click(function(){
    if ($('#home').is(":visible"))
{
	$('#contain').delay(400).slideDown('slow');
	$('.toggle').toggleClass('uptoggle');
} 
else if($('#contain').is(":hidden"))
{
}
else
{ 
$('#contain').delay(400).slideUp('slow');
$('.toggle').toggleClass('uptoggle');
}
$('#home').slideToggle('normal');
$('#team').delay(400).slideUp('normal');
$('#rule').delay(400).slideUp('normal');
$('#gallery').delay(400).slideUp('normal');

    });
    
        $('#ateam').click(function(){
if ($('#team').is(":visible"))
{
	$('#contain').delay(400).slideDown('slow');
	$('.toggle').toggleClass('uptoggle');
} 
else if($('#contain').is(":hidden"))
{
}
else
{
$('#contain').delay(400).slideUp('slow');
$('.toggle').toggleClass('uptoggle');
}
$('#team').slideToggle('normal');
$('#home').delay(400).slideUp('normal');
$('#rule').delay(400).slideUp('normal');
$('#gallery').delay(400).slideUp('normal');
    });
    
        $('#arule').click(function(){
if ($('#rule').is(":visible"))
{
	$('#contain').delay(400).slideDown('slow');
	$('.toggle').toggleClass('uptoggle');
} 
else if($('#contain').is(":hidden"))
{
}
else
{
$('#contain').delay(400).slideUp('slow');
$('.toggle').toggleClass('uptoggle');
}
$('#rule').slideToggle('normal');
$('#team').delay(400).slideUp('normal');
$('#home').delay(400).slideUp('normal');
$('#gallery').delay(400).slideUp('normal');

    });
    
        $('#agallery').click(function(){
if ($('#gallery').is(":visible"))
{
	$('#contain').delay(400).slideDown('slow');	
	$('.toggle').toggleClass('uptoggle');
} 
else if($('#contain').is(":hidden"))
{
}
else
{
$('#contain').delay(400).slideUp('slow');
$('.toggle').toggleClass('uptoggle');
}
$('#gallery').slideToggle('normal');
$('#team').delay(400).slideUp('normal');
$('#rule').delay(400).slideUp('normal');
$('#home').delay(400).slideUp('normal');

    });
    
		$('.toggle').click(function(){
$('.toggle').toggleClass('uptoggle');
$('#contain').slideToggle('slow');
$('#gallery').slideUp('slow');
$('#team').slideUp('slow');
$('#rule').slideUp('slow');
$('#home').slideUp('slow');
});
});