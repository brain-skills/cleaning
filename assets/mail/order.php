<?php
$yourname = $_POST['yourname'];
$yourphone = $_POST['yourphone'];
$cleanservice = $_POST['cleanservice'];

$subject = "Заявка на «Bakalov Cleaning»";

$to = "bakalovcleaning@yandex.ru";
$namefrom = "Bakalov Cleaning";

$headers = "From: $namefrom <order@bakalovcleaning.ru>" . PHP_EOL;
$headers .= "Reply-To: $to" . PHP_EOL;

$headers .= "MIME-Version: 1.0" . PHP_EOL;
$headers .= "Content-type: text/html; charset=utf-8" . PHP_EOL;

$message = "<p><strong>Имя:</strong> $yourname</p>
\n<p><strong>Телефон:</strong> $yourphone</p>
\n<p><strong>Тип услуги:</strong> $cleanservice</p>";

mail($to, $subject, $message, $headers);