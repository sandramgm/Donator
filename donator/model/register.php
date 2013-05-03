<?php
$formSent = "no-submited";
if($_POST['formSubmit']) {
	$name = $_POST['name'];
	$email = $_POST['email'];
	$error = false;
	$error_msg = "";
	
	$sql_query="INSERT INTO donator_user (email, name) VALUES ('$email','$name')";
	
	if(!mysqli_query($db_connection, $sql_query)) {
		//die('Error: ' . mysqli_error($db_connection));
		$error = true;
		$error_msg = " Hemos tenido problemas para guardar tu registro, por favor intentalo más tarde o escríbenos a <a href='mailto:donator@donator.es'>donator@donator.es</a> ";
		$formSent = "error-msg";
	} else {
		$formSent = "submited";
		sendEmail($name, $email);	
	}
}

function sendEmail ($name, $email) {
	$for = 'donator@donator.es, sandramgm@yahoo.com';
	$title = 'Nuevo usuario registrado';
	$msg = 'Se ha registrado un nuevo usuario: ' . $name . " - " . $email;
	$headers = 'From: donator@donator.es' . "\r\n" .
	    'Reply-To: donator@donator.es' . "\r\n" .
	    'X-Mailer: PHP/' . phpversion();
	
	mail($for, $title, $msg, $headers);
}
