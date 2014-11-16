$(document).ready(function(){

    var current_id = 0;
    $('body #sidebar #adder #add').click(function(){
        addDiv($('#sidebar'));
    })
    
    function addDiv(element)
    {
    	var val = $('#sidebar #input').val();
    	if (val!="")
    	{
    	$('#sidebar:last').append('<div class="trashable">'+val+'</div>');	
    	$('#sidebar').find('input:text').val('');
    	}
    }
});