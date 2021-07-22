<?php
$name = $name_POST['name'];
$VISITOR_email = $_POST['email'];
$subject = $_POST['place'];
$message = $_POST['message'];

$email_from ='khushboonayak131299@gmail.com';


$email_subject ='New message ';

$email_body ="user name:$name \n".
              " user email:$VISITOR_email \n".
             " user place:$subject \n".
             " user message:$message \n";

$to ='nayakkhushboo1312@gmail.com';
$headers = "from $email_from \r\n";
$headers .="reply-to: $$VISITOR_email \r\n";

mail($to,$email_subject,$email_body,$header);
header("location:contact.html");




?>