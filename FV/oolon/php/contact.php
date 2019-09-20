<?php
	$alias = $_POST['alias'];
	$email = $_POST['email'];
	$message = $_POST['message'];

	$to = "hola@oolon.mx";
	$subject = "Message from $alias";
	$mes_s = "Message: $message";
	$headers = "From: $email" . "\r\n";

	if (!empty($email)) {
		$send = mail($to,$subject,$mes_s,$headers);
		if($send) {echo 'OK';}
	} else {
		echo 'ERR';
	}

?>