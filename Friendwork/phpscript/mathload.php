<?php
session_start();
$_SESSION['message']='COMING SOON!';
header('Location:../message.php');
?>