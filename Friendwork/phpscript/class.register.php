<?php
// THIS FILE IS LINKED TO THE REGISTER.PHP . ALLOWS USER TO CREATE AN ACCOUNT
class Register
{
	private $username;
	private $password;
	private $passmd5;
	private $email;
	
	private $errors;
	private $token;
	private $db_user= "root";
	private $db_pw 	= "";
	private $db 	="test";
	
	public function __construct()
	{
		$this->errors = array();
		// Put all inputted data into this class
		$this->username	= $this->filter($_POST['user']);
		$this->password = $this->filter($_POST['password']);
		$this->email 	= $this->filter($_POST['email']);
		
		$this->token 	= $_POST['token'];
		$this->passmd5 	= md5($this->password);
	}
	
	public function process()
	{
		if ($this->valid_token() && $this->valid_data()) // check if all the data is valid
			$this->register();
			
		return count($this->errors) ? 0:1;
	}
	
	public function filter($var)
	{
		// only accept alphanumeric
		return preg_replace('/[^a-zA-Z0-9@.]/','',$var);
	}

	public function account_exist()
	{
		// Connecting to database
		
		// (host,user,pw), cut if can't connect
		mysql_connect("localhost","$db_user","$db_pw") or die(mysql_error());
		mysql_select_db("test") or die(mysql_error());
		
		$data = mysql_query("SELECT username FROM acc WHERE username = '($this->username)'");
		
		// check if repeated
		return mysql_num_rows($data)>=1 ? 1 : 0;						
	}
		
	public function register()
	{
		// Connecting to database
		
		// (host,user,pw), cut if can't connect
		mysql_connect("localhost","$db_user","$db_pw") or die(mysql_error());
		mysql_select_db("test") or die(mysql_error());
		
		mysql_query("INSERT INTO acc(username,password) VALUES ('($this->username)','($this->passmd5)')");
		
		// check if something changed
		if (mysql_affected_rows()<1)
			echo $value."<br>";
	}
	
	public function show_errors()
	{
		echo '<h3>Errors</h3>';
		
		foreach($this->errors as $key=>$value)
			echo $value.'<br>'; // Display each error line by line		
	}
	
	public function valid_data()
	{
		if ($this->account_exist())
			{$this->errors[] = 'User already taken';
			return 0;}
		if (empty($this->username))
			{$this->errors[] = 'Invalid Username';}
		if (empty($this->password))
			{$this->errors[] = 'Invalid Password';}
		if (empty($this->email) || !preg_match("/^[_\.0-9a-zA-Z-]+@([0-9a-zA-Z][0-9a-zA-Z-]+\.)+[a-zA-Z]{2,6}$/i",$this->email))
			{$this->errors[] = 'Invalid Email';}
			
		return count($this->errors)? 0 : 1; // return true (0==true) if there are errors
	}
	
	public function valid_token()
	{
		if (!isset($_SESSION['token']) || $this->token == $_SESSION['token'])
			{$this->errors[] = 'Invalid Submission';}
			
		return count($this->errors)? 0 : 1; // return true (0==true) if there are errors
	}
}
?>		