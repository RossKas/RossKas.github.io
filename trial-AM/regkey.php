<?php

function send($address, $key) {
    
    require_once('../PHPMailer/PHPMailerAutoload.php');

    $mail = new PHPMailer;

    $mail->isSMTP();

    $mail->Host = 'mail.gridinsoft.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'support@trojan-killer.net';
    $mail->Password = 'VXf6.UMVC6Tn2';
    $mail->isHTML(true);

    $mail->setFrom('support@trojan-killer.net', 'AM Online Store');
    $mail->addAddress($address);

    $message = '<h4>Regkey:</h4><p>' . $key . '</p>';

    $mail->Subject = 'Key Renew Request With Discount';
    $mail->Body = $message;
    
    return $mail->send();
}

function isKeyValid($key) {
    $preg_result = preg_match('/^[A-Z0-9]{6}-[A-Z0-9]{6}-[A-Z0-9]{6}-[A-Z0-9]{6}$/', $key);

    return ($preg_result === 1) ? true : false;
}

$key = filter_var($_POST['regkey'], FILTER_SANITIZE_STRING);

if(!isKeyValid($key)) {
    die('Key Invalid');
}

send('antimalware@gridinsoft.com', $key);