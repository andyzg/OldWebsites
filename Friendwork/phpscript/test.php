<?php
session_start();

if (isset($_POST['register']))
{
	include('class.register.php'); // Add the class to creat account
	
	$register = new Register();
	
	if ($register->process())
		echo'Success';
	else
		$register->show_errors();
}
$token = $_SESSION['token'] = md5(uniqid(mt_rand(),true));
?>		
		
<form name="form" method="post" action="<?=$_SERVER['PHP_SELF'];?>">
	<p>Full Name</p>
	<p><input type="text" name="name" size="30"><span id="name"></span></p>
	<br>
	<p>Email Address</p>
	<p><input type="text" name="email" size="30"><span id="email"></span></p>
	<br>
	<p>Choose a password</p>
	<p><input type="password" name="password" size="30"><span id="pw"></span></p>
	<br>
	<p>Choose a username</p>
	<p><input type="text" name="user" size="30"><span id="user"></span></p>
	<br>
	<input type="hidden" name="token" value="<?=$token;?>"/>
	<p><input type="submit" name="register" value="Sign up!"/></p>
</form>