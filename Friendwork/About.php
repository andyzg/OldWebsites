<?php
session_start();
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
		<p>Friendwork is a summer project I started in 2013. This idea was inspired to help students obtain a better grasp of the laws of physics.</p>
		<p>Known as one of the hardest courses in CEGEP, it often prevented people from completing their CEGEP Science DEC.<p>
		<p>By providing hundreds of practice problems online, students can easily improve their understanding of physics. It is proven that practice problems is one of the best ways to understand concepts.</p>
		<p>My goal is to conveniently help students achieve better grades and help them pursue their University path.</p>		
	</div>
</div>

<div id="bottom">
	<div id="contain2">
		
	</div>
</div>

<div id="footer">
FOOTER
</div>
</body>
</html>