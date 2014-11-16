$(document).ready(function()
{
// getter
var containment = $( ".trashable" ).draggable( "option", "containment" );
 
// setter
$( ".trashable" ).draggable( "option", "containment", "parent" );
});