var mistakes = [];

$(document).ready(function() {
	//Initializes empty array for validation
		

	 //Initialize Select Dropdown
    $('select').material_select();

    //Activates Burger Menu in Mobile Layout
  	$('.button-collapse').sideNav();


  	//Getting the color options from the json file
  	 $.getJSON("js/document.json", function (result) {
  	 	console.log(data."fur_color");


  	}); //Ends Get Json



    //Shows Alert Icon
   	$('#mail').on('focusout', function(){
   	if ($("#mail").hasClass('invalid')) {
   		$("#error").css('display', 'block');
   	}
   }); //Ends Show Alert

   	//Calls Validate Function When Button Gets Clicked
   	$('#boton').on('click', function(){
   		$('.message').css('display', 'none');
   		//Calls Validate Function
   		validate();
   		});


   		

});
//function validate content 
function validate() {
	var name = $('#name').val();
	var gender = $('#gender option:selected').val();
	var color = $('#fur-color option:selected').val();
	//Parses horn Value 
	var horn = parseInt($('#horn').val());
	var email = $('#mail').val();
	var checkbox = $('#terms').is(':checked');

	if (name.length == 0 || name == '') {
		mistakes ++;
	}

	if (email.length == 0 ||email == '' || !rightEmail(email)) {
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

	if (mistakes > 0) {
   		//Shows Fail Message
		$('#fail').css('display', 'block');
		$('#success').css('display', 'none');
		mistakes = [];
   		}else{
   			var datos = $('#myform').serialize();

   			//Shows Success Message
   			$('#success').css('display', 'block');
   			$('#fail').css('display', 'none');

   			//Resets Empty Form
   			$('#myform')[0].reset();
   			mistakes = [];
   		}
   		
}

//Checks if email is correct
function rightEmail(x) {
	expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if(expr.test(x)) {
		return true;
	}
	return false;
}



