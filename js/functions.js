var mistakes = [];

$(document).ready(function() {
	//Initializes empty array for validation
		

	 //Initialize Select Dropdown
    $('select').material_select();

    //Activates Burger Menu in Mobile Layout
  	$('.button-collapse').sideNav();

    //Shows Alert Icon
   	$('#mail').on('focusout', function(){
   	if ($("#mail").hasClass('invalid')) {
   		$("#error").css('display', 'block');
   	}
   }); //Ends Show Alert

   	//Calls Validate Function When Button Gets Clicked
   	$('#boton').on('click', function(){
   		$('.message').css('display', 'none');
   		validate();
   		if (mistakes > 0) {
		$('#fail').css('display', 'block');
		mistakes = [];
   		}else{
   			var datos = $('#myform').serialize();
   			$('#success').css('display', 'block');
   			mistakes = [];
   		}
   		});


   		

});
//function validate content 
function validate() {
	var name = $('#name').val();
	var gender = $('#gender option:selected').val();
	var color = $('#fur-color option:selected').val();
	var horn = parseInt($('#horn').val());
	var email = $('#mail').val();
	var checkbox = $('#terms').is(':checked');

	if (name.length == 0 || name == '') {
		mistakes ++;
	}

	if (email.length == 0 ||email == '') {
		mistakes ++;
	}

	if (gender == 0) {
		mistakes ++;
	}

	if (color == 0) {
		mistakes ++;

	}

	if (horn == 0) {
		mistakes ++;
	}

	if (!checkbox) {
		mistakes ++;
	}
}






