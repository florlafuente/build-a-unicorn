<?php

// Check for empty fields
if(empty($_POST['nombre'])      ||
   empty($_POST['email'])     ||
   empty($_POST['comentarios'])   ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
   echo "No arguments Provided!";
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

$headers = "From: noreply@unicornsenred.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";   
mail($to,$email_subject,$email_body,$headers);
return true;         
?>
