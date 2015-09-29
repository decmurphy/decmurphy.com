<?php

	$errors = '';
	$myemail = "murphd37@tcd.ie";

	if(empty($_POST['name'])  || empty($_POST['email']) || empty($_POST['message']))
	{
	    $errors .= "\n Error: all fields are required";
	}

	$name = $_POST['name'];
	$email_address = $_POST['email'];
	$subject = $_POST['subject'];
	$message = $_POST['message'];

	if (!preg_match("/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", $email_address))
	{
	    $errors .= "\n Error: Invalid email address";
	}

	if( empty($errors))
	{
		$to = $myemail;
		$email_subject = $subject;
		$email_body = "From: $name ($email_address)\r\n\n";
		$email_body .= "___________________________________________________\r\n\n";
		$email_body .= "$message\r\n\n";
		$headers = "From: webmaster@decmurphy.com\r\n";
		$headers .= "ReplyTo: $email_address\r\n";
		mail($to,$email_subject,$email_body,$headers);
		//redirect to the 'thank you' page
		header("Location: ../contact-form-thankyou.html");
	}

?>
