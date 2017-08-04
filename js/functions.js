//Initializes empty array for validation
var mistakes = [];

$(document).ready(function() {

  //Activates Burger Menu in Mobile Layout
    $('.button-collapse').sideNav();

  //Begins object
  var json = {
    "fur_color": [
    {
      "label": "Blue",
      "value": "blu"
    },
    {
      "label": "Pink",
      "value": "pin"
    },
    {
      "label": "Purple",
      "value": "pur"
    },
    {
      "label": "Orange",
      "value": "ora"
    },
    {
      "label": "Lime",
      "value": "lim"
    },
    {
      "label": "Black",
      "value": "bla"
    },
    {
      "label": "White",
      "value": "whi"
    }
    ]
    } //Ends Object


    //Populates dinamically fur color select
    $.each(json.fur_color, function (i) {
    var label = json.fur_color[i].label;
    var value = json.fur_color[i].value;
    var option = '<option value="'+value+'">'+label+'</option>';
    $('#fur-color').append(option);
   });//End Fur color Select
    

      /* *** This gets the json information OK but dooesn't append 
        $.getJSON("js/document.json", function(result){
        var info = result.fur_color;
        for (i = 0; i < info.length; i++){
          var label = info[i].label;
          var value = info[i].value;
          var option = '<option value="'+value+'">'+label+'</option>';
          $('#fur-color').append(option);

        }//End For Loop
    });//Ends getJSON */

  //Initialize Select Dropdown
  $('select').material_select();

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

});//Ends Document Ready


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
        //Resets Empty Form

       $.ajax({
                url: "php/send_unicorn.php",
                type: "post",
                data: datos,
                success: function (response) {
                    // you will get response from your php page (what you echo or print)   
                  if(response){
                      
                      console.log("todo ok"); 
                      $('#success').css('display', 'block');
                      $('#fail').css('display', 'none');
                      $('#myform')[0].reset();
                     
                    }else{  
                      $('#fail').css('display', 'block');
                      $('#success').css('display', 'none');
                  }
              }           
            });

        mistakes = [];
    }
       //Ends Ajax    
} //Ends Validar

//Checks if email is correct
function rightEmail(x) {
  expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if(expr.test(x)) {
    return true;
  }
  return false;
}

