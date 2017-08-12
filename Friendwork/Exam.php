<?php
session_start();
if (!$_SESSION['loggedin'])
{
	$_SESSION['page']='exam';
	header('Location:login.php');
}
?>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />

<!--IMPORT ALL CSS HERE-------------->
<link rel="stylesheet" type="text/css" href="stylesheet/reset.css">
<link rel="stylesheet" type="text/css" href="stylesheet/box.css">
<link rel="stylesheet" type="text/css" href="stylesheet/button.css">
<link rel="stylesheet" type="text/css" href="stylesheet/links.css">
<link rel="stylesheet" type="text/css" href="stylesheet/tabs.css">
<!------------------------------------>


<!-- IMPORT ALL FONTS HERE ----------->

<!------------------------------------>


<!-- IMPORT ALL JQUERY HERE ---------->
<script language="javascript" type="text/javascript" src="http://code.jquery.com/jquery-1.9.1.js"></script>
<!--------------------------------------->


<!-- IMPORT ALL JAVASCRIPT CODE HERE---->

<!------------------------------------>

<title>Friendwork</title>
</head>

<body>

<div id="header">
	<div id="contain0">
		<div id="title">
		<a href="index.php">Friendwork</a>
		</div>
		<ul>
			<li><a href="learn.php">Learn</a></li>
			<li><a href="exam.php">Exam</a></li>
			<li><a href="about.php">About</a></li>
		</ul>
		<?php		
		if (isset($_SESSION['username']) && isset($_SESSION['password']) && $_SESSION['loggedin'])
			echo "<div id='login' style='padding-top:14px'>
			<form method='post'>
				<a href=''>Profile</a>
				<br>
				<a href='phpscript/logout.php'>Log Out</a>
			</form>
			</div>";
		else
			echo "<div id='login'><a href='login.php'>Already a user?<b> Sign in!</b></a></div>";
		?>
	</div>
</div>

<div id="center">
	<div id="contain1">
	Which exam would you like to simulate ?
	<form method='post'>
	<div class="choice" name='math'>
	Mathematics
	</div>
	<div class="choice" name='physics'>
	Physics
	</div>
	<form>
	</div>
</div>

<!-- BECAUSE IT DOESN'T WORK IN CSS FOR SOME REASON -->
<style media="screen" type="text/css">
body #center form .choice a:link
{
	text-decoration:none;
	color:#202020;
}
body #center form .choice a:active
{
	text-decoration:none;
	color:#202020;
}
body #center form .choice a:visited
{
	text-decoration:none;
	color:#202020;
}

body #center form .choice a:hover
{
	text-decoration:none;
	color:#F6F6E8;
}
</style>

<div id="footer">
FOOTER
</div>
</body>
</html>