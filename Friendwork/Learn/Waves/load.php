<?php
// THIS FILE PROCESSES AND RETRIEVES A WAVES PROBLEM

session_start();
$type = $_GET['type'];
$dif = $_GET['dif'];

$user = 'root';
$pw = '';
$db = 'test';

mysql_connect("localhost","$user","$pw") or die(mysql_error());
mysql_select_db("$db") or die(mysql_error());
		
?>