<?php
session_start();
?>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />

<!--IMPORT ALL CSS HERE-------------->
<link rel="stylesheet" type="text/css" href="stylesheet/reset.css">
<link rel="stylesheet" type="text/css" href="stylesheet/style.css">
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
<?php
	if (isset($_POST['logout']))
		echo 'AHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAH';
?>
	<div id="contain1">
		<div id="leftcenter">
			<p>Whether it's to pass a course or to ace your finals, we can help.</p>
			<br>
			<p><a href="signup.php" class="classname">Get Started Now!</a></p>
		</div>
		<div id="rightcenter">
			<img src="images/math.png" height="300px"/>
		</div>
	</div>
</div>

<div id="bottom">
	<div id="contain2">
		<div class="container">
			<p><large>Gain Credibility</large></p>
			<br>
			<p>Help other students by guiding them through problems.</p>
			<p><img src="images/checkmark.png" style="float:left;height=200px;margin-left:50px"/></p>
		</div>
		<div class="container">
			<p><large>Learn More</large></p>
			<br>
			<p>Each problem has hints and facts that can help you through them</p>
			<p><img src="images/checkmark.png" style="float:left;height=200px;margin-left:50px"/></p>
		</div>
		<div class="container">
			<p><large>Ace exams</large></p>
			<br>
			<p>Get used to exam stress by trying our simulated exams!</p>
			<p><img src="images/checkmark.png" style="float:left;height=200px;margin-left:50px"/></p>
		</div>
	</div>
</div>

<div id="footer">
FOOTER
</div>
</body>
</html>