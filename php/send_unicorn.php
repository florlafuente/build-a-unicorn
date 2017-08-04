<?php

// Check for empty fields
if(empty($_POST['nombre'])      ||
   empty($_POST['email'])     ||
   empty($_POST['gender'])     ||
   empty($_POST['horn'])     ||
   empty($_POST['fur-color'])     ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
   return true;
   return false;
   }

   
$name = strip_tags(htmlspecialchars($_POST['name']));
$gender = strip_tags(htmlspecialchars($_POST['gender']));
$fur = strip_tags(htmlspecialchars($_POST['fur-color']));
$email = strip_tags(htmlspecialchars($_POST['email']));
$horn = strip_tags(htmlspecialchars($_POST['horn']));

   
// Create the email and send the message
$to = 'lafuente.florencia@gmail.com'; // Add the adress wich will receive the message
$email_subject = "Hurry up, we need an unicorn!";
$email_body = "Hello, dear Unicorn Maker\n\n"."Someone needs an unicorn and a very beautiful one! Here are the details: \n\nUnicorn's name: $name\n\nUnicorn's gender: $ngender\n\nUnicorn's fur-color: $fur\n\nUnicorn's horn length: $horn\n\n"."Don't forget to contact the client:$email"
$headers = "From: noreply@unicornsenred.com\n"; // This is the email address the generated message will be from.
$headers .= "Reply-To: $email_address";   
mail($to,$email_subject,$email_body,$headers);
return true;         
?>
