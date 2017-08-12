<?php
// THE TEMPLATE FOR A PHYSICS PROBLEM

session_start();
?>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />

<!--IMPORT ALL CSS HERE-------------->
<link rel="stylesheet" type="text/css" href="../stylesheet/reset.css">
<link rel="stylesheet" type="text/css" href="../stylesheet/box.css">
<link rel="stylesheet" type="text/css" href="../stylesheet/button.css">
<link rel="stylesheet" type="text/css" href="../stylesheet/links.css">
<link rel="stylesheet" type="text/css" href="../stylesheet/tabs.css">
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
		<a href="../index.php">Friendwork</a>
		</div>
		<ul>
			<li><a href="../learn.php">Learn</a></li>
			<li><a href="../exam.php">Exam</a></li>
			<li><a href="../about.php">About</a></li>
		</ul>
		<?php		
		if (isset($_SESSION['username']) && isset($_SESSION['password']) && $_SESSION['loggedin'])
			echo "<div id='login' style='padding-top:14px'>
			<form method='post'>
				<a href=''>Profile</a>
				<br>
				<a href='../phpscript/logout.php'>Log Out</a>
			</form>
			</div>";
		else
			echo "<div id='login'><a href='../login.php'>Already a user?<b> Sign in!</b></a></div>";
		?>
	</div>
</div>

<div id="center">
	<div id="contain1">
		<form action="<?=$_SERVER['PHP_SELF'];?>" method="post">
		Problem ID #:<!-- INSERT ID OF PROBLEM-->
		<br>
		<!-- INSERT PHYSICS PROBLEM -->
		At a track meet at Hayward Field, a runner does one quarter-mile lap in 1.25 minutes. Assuming she starts and stops at the same point:<br>What was her average speed during this lap?
		<!-- END OF PHYSICS PROBLEM -->
		<br><br>
		<input type="text" name="answer" style="padding:10px 10px 10px 10px;font-size:20px">
		<!-- INSERT UNITS -->
		
		</form>
		
	</div>
</div>

<div id="footer">
FOOTER
</div>
</body>
</html>