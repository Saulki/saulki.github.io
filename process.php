<?php

    // sumbission data
    $ipaddress = $_SERVER['REMOTE_ADDR'];
    $date = date('d/m/Y');
    $time = date('H:i:s');

    $to = "saulius.kirklys@gmail.com"; 
    $from = $_POST['email']; 
    $name = $_POST['name']; 
    $message = $_POST['message'];

    $subject = 'Saulki.com contact form';

    $headers = "From: $from\r\n";
    $headers .= "Reply-To: $from\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

    $body = "<p>You have recieved a new message from the enquiries form on your website.</p>
                  <p><strong>Name: </strong> {$name} </p>
                  <p><strong>Email Address: </strong> {$from} </p>
                  <p><strong>Message:</strong></p>
                  <hr /><p>{$message}</p><hr />
                  <p>This message was sent from the IP Address: {$ipaddress} on {$date} at {$time}</p>";

    $send = mail($to, $subject, $body, $headers);

?>