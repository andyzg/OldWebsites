<?php
session_start();
ob_start();

$token = $_SESSION['token'] = md5(uniqid(mt_rand(),true));
?>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />

<!--IMPORT ALL CSS HERE-------------->
<link rel="stylesheet" type="text/css" href="stylesheet/reset.css">
<link rel="stylesheet" type="text/css" href="stylesheet/signup.css">
<link rel="stylesheet" type="text/css" href="stylesheet/button.css">
<link rel="stylesheet" type="text/css" href="stylesheet/links.css">
<!------------------------------------>


<!-- IMPORT ALL FONTS HERE ----------->


<!------------------------------------>


<!-- IMPORT ALL JQUERY HERE ---------->
<script language="javascript" type="text/javascript" src="http://code.jquery.com/jquery-1.9.1.js"></script>
<script language="javascript" type="text/javascript" src="jquery-ui-1.10.2.custom.min.js"></script>
<!--------------------------------------->


<!-- IMPORT ALL JAVASCRIPT CODE HERE---->

<!------------------------------------>

<title>Log in</title>
</head>

<body>

<div id="header">
	<div id="contain0">
		<div id="title">
		<a href="index.php">Friendwork</a>
		</div>
	</div>
</div>

<div id="center">
	<div id="box">
		<form action="<?=$_SERVER['PHP_SELF'];?>" method="post">
			<p>Log In here !</p>
			<hr>
			<p>Username:</p>
			<p><input type="text" name="userinput"></p>
			<br>
			<p>Password:</p>
			<p><input type="password" name="pwinput"></p>
			<br>
			<p><input type="submit" name="login" value="Login"/></p>
			<p><input type="hidden" name="token" value="<?=$token;?>"/></p>
		</form>
		<br><p><a href='signup.php'>Don't have an account ? Sign here here !</a></p>
<?php

if(isset($_POST['login']))
{
	include('phpscript/class.login.php');
	
	$login = new Login();
	
	if ($login->isLoggedIn())
	{
		if ($_SESSION['page']=='exam')
		{
			header('Location:exam.php');
		}
		else if ($_SESSION['page']=='learn')
		{
			header('Location:learn.php');
		}
		else
		{
			header('Location:index.php');
		}
	}
	else
		$login->showErrors();
}
?>
	</div>
</div>

<div id="footer">
</div>
</body>
</html>


