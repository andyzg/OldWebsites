<?php
// THIS PAGE ASKS FOR THE TYPE OF PROBLEM ( MATH OR PHYSICS )

session_start();
if (!$_SESSION['loggedin'])
{
	$_SESSION['page']='learn';
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
	<p>What type of problems would you like to solve?</p>
	<form method='post'>
	<div class="choice" type='button' name='math'>
	<a href="phpscript/mathload.php">Mathematics</a>
	</div>
	<div class="choice" name='physics'>
	<a href="Learn/physics-type.php">Physics</a>
	</div>
	<form>
</div>
<!-- BECAUSE IT DOESN'T WORK IN CSS FOR SOME REASON -->

<div id="footer">
FOOTER
</div>
</body>
</html>