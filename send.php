<?php

date_default_timezone_set("America/Bogota");

$name = $_POST['name'];
$mail = $_POST['email'];
$text = $_POST['text']; 

$to = 'dvid_90_20@hotmail.com, dvid9020@gmail.com';
$subject = 'contact from davidcarrero.co';

// Always set content-type when sending HTML email
//$headers = "MIME-Version: 1.0" . "\r\n";
//$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers = 'From: ' . $mail . "\r\n";


//Message
$mensaje = "This message was sended by: " . $name . " \r\n"; 
$mensaje .= "e-mail address: " . $mail . " \r\n";  
$mensaje .= "Message: " . $text . " \r\n"; 
$mensaje .= "Mail shipping date: " . date('d/m/Y', time()); 


mail($to, $subject, utf8_decode($mensaje), $headers); 

echo "Tus datos fueron enviados correctamente <b>".$_POST['name']."</b>";
?>
