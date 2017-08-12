<?php
// THIS PAGE ASKS FOR THE TYPE OF WAVES PROBLEM

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
<link rel="stylesheet" type="text/css" href="../../stylesheet/reset.css">
<link rel="stylesheet" type="text/css" href="../../stylesheet/box.css">
<link rel="stylesheet" type="text/css" href="../../stylesheet/button.css">
<link rel="stylesheet" type="text/css" href="../../stylesheet/links.css">
<link rel="stylesheet" type="text/css" href="../../stylesheet/tabs.css">
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
		<a href="../../index.php">Friendwork</a>
		</div>
		<ul>
			<li><a href="../../learn.php">Learn</a></li>
			<li><a href="../../exam.php">Exam</a></li>
			<li><a href="../../about.php">About</a></li>
		</ul>
		<?php		
		if (isset($_SESSION['username']) && isset($_SESSION['password']) && $_SESSION['loggedin'])
			echo "<div id='login' style='padding-top:14px'>
			<form method='post'>
				<a href=''>Profile</a>
				<br>
				<a href='../../phpscript/logout.php'>Log Out</a>
			</form>
			</div>";
		else
			echo "<div id='login'><a href='../../login.php'>Already a user?<b> Sign in!</b></a></div>";
		?>
	</div>
</div>

<div id="center">
	<p>What type of physics problems would you like to solve?</p>
	<form method='post'>
	<div class="type" type='button' name='math'>
	<a href="difficulty.php?type=shm">Simple Harmonic Motion</a>
	</div>
	<div class="type" name='physics'>
	<a href="difficulty.php?type=waves">Waves</a>
	</div>
	<div class="type" name='physics'>
	<a href="difficulty.php?type=superposition">Superposition</a>
	</div>
	<div class="type" type='button' name='math'>
	<a href="difficulty.php?type=interference">Interference</a>
	</div>
	<div class="type" type='button' name='math'>
	<a href="difficulty.php?type=optics">Optics</a>
	</div>
	<div class="type" type='button' name='math'>
	<a href="difficulty.php?type=quantum">Quantum Physics</a>
	</div>
	<div class="type" type='button' name='math'>
	<a href="difficulty.php?type=relativity">Special Relativity</a>
	</div>
	<div class="type" type='button' name='math'>
	<a href="difficulty.php?type=nuclear">Nuclear</a>
	</div>
	<p>Or search by problem ID</p>
	<input type="text" name="id" style="padding:10px 5px 10px 5px;font-size:20px">
	<input type="button" value="Search" style="height:40px;width:60px;font-size:20px">
	</form>
</div>

<div id="footer">
FOOTER
</div>
</body>
</html>