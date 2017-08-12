<?php

class login
{
	private $id;
	private $username;
	private $password;
	private $passmd5;
	
	private $errors;
	private $access;
	private $login; // check if login is secured
	private $token;
	
	public function __construct()
	{
		$this->errors = array();
		$this->login = isset($_POST['login'])? 1 : 0;
		$this->access = 0;
		$this->token = $_POST['token'];
		
		$this->id = 0;
		$this->username = ($this->login) ? $this->filter($_POST['userinput']) : $_SESSION['userinput'];
		$this->password = ($this->login) ? $this->filter($_POST['pwinput']) : '';
		$this->passmd5 = ($this->login) ? md5($this->password) : $_SESSION['pwinput'];
	}
	
	public function isLoggedIn()
	{
		($this->login) ? $this->verifyPost() : $this->verifySession();
		
		return $this->access;
	}
	
	public function filter($var)
	{
		return preg_replace('/[^a-zA-Z0-9]/','',$var);
	}
	
	public function verifyPost()
	{
		try
		{
			if(!$this->isTokenValid()) // if isTokenValid==false, error
				throw new Exception('Invalid Form Submission');
				
			if (!$this->isDataValid())
				throw new Exception('Invalid Form Data');
			
			if (!$this->verifyDatabase())
				throw new Exception('Invalid Username/Password');
				
				
			$this ->access=1;
			$this->registerSession();
			header("Location:../index.php");
		}
		catch (Exception $e)
		{
			$this->errors[] = $e->getMessage();
		}
	}
	
	public function verifySession()
	{
		if($this->sessionExist() && $this->verifyDatabase())
			$this->access = 1;
	}
	
	public function verifyDatabase()
	{
		// DATABASE CONNECTION
		mysql_connect('localhost','root','') or die(mysql_error());
		mysql_select_db('test') or die(mysql_error());
		
		$data = mysql_query("SELECT username,password FROM acc WHERE username = '($this->username)' AND password = '($this->passmd5)'");
		
		if (mysql_num_rows($data))
		{
			list($this->id) = @array_values(mysql_fetch_assoc($data));
			return true;
		}
		else
		{
			return false;
		}
	}
	
	public function isDataValid()
	{
		return (preg_match('/^[a-z\d_]{2,20}$/i',$this->username) && preg_match('/^[a-z0-9A-Z_-]{6,40}$/',$this->password)) ? 1 : 0;
	}
	
	public function isTokenValid()
	{
		return (!isset($_SESSION['token']) || $this->token != $_SESSION['token']) ? 1 : 0;
	}
	
	public function registerSession()
	{
		$_SESSION['ID'] = $this->id;
		$_SESSION['username'] = $this->username;
		$_SESSION['password'] = $this->passmd5;
		$_SESSION['loggedin'] = true;
	}
	
	public function sessionExist()
	{
		return (isset($_SESSION['userinput']) && isset($_SESSION['pwinput'])) ? 0 : 1;
	}
	
	public function showErrors()
	{
		echo "<h3>Errors</h3>";
		
		foreach($this->errors as $key=>$value)
			echo $value."<br>";
	}
}

?>