<?php
session_start();

/*if (isset($_POST['register']))
{
	include('phpscript/class.register.php'); // Add the class to creat account
	
	$register = new Register();
	
	if ($register->process())
		echo'Success';
	else
		$register->show_errors();
}*/
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

<!--------------------------------------->


<!-- IMPORT ALL JAVASCRIPT CODE HERE---->
<script language="javascript" type="text/javascript" src="script/infobox.js"></script>
<!------------------------------------>

<title>Sign up!</title>
</head>

<body>

<div id="header">
	<div id="contain0" style="width:1200px">
		<div id="title">
		<a href="index.php">Friendwork</a>
		</div>
		<div id="login" style="padding-top:24px;margin-left:800px"><a href="login.php">Already a user?<b> Sign in!</b></a></div>
	</div>
</div>

<div id="center">
	<div id="box">
		<p>Join Friendwork Now.</p>
		<hr>
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
		<br>
<?php
if (isset($_POST['register']))
{
	include('phpscript/class.register.php'); // Add the class to creat account
	
	$register = new Register();
	
	if ($register->process())
		echo'Success';
	else
		$register->show_errors();
}
?>


	</div>
</div>

</body>
</html>


