$(document).ready(function() {
	


    $('select').material_select();
    console.log('Hola');
    
   var email = $('#email').val();

   if (email.length == 0 ){

   	$('#error').css('visibility', 'visible');
   }
   console.log('chau');
    

 });


