$(document).ready(function() {
$('.box').mouseover(function(){
$(this).animate({ paddingTop:'+=30px' }, "normal", 'easeInExpo').css({ opacity: 1 }, 400);
});
$('.box').mouseleave(function(){
$(this).animate({ paddingTop:'-=30px' }, "normal", 'easeInExpo').css({ opacity: 0.5 }, 400);
});
$('.map').maphilight({
fillColor: '989898'
});
$('#gallerybutton').click(function()
{
$("#gallery").animate({width:'toggle'},450,'easeOutCubic');
});
$('#regbutton').click(function()
{
$("#register").slideToggle('slow','easeOutCubic');
});
$('#teambutton').click(function()
{
$("#team").slideToggle('slow','easeOutCubic');
});
$(document).click(function()
{
$('.welcome').addClass('amazingrace');
});
});