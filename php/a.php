<?php	
	$servername="localhost";
	$username="root";
	$password="mysql";
	$db="tecob230";
	$conn=mysqli_connect($servername,$username,$password,$db);
	if(!$conn)
	{
		echo("conn failed".mysqli_connect_error);
	}
	else
	{
		echo("ok");

	}
	$uname=$_POST["username"];
	$pass=$_POST["password"];
	$action=$_POST["action"];
	if($action=='insert')
	{
		$sql="insert into log values('".$uname."','".$pass."');";
		if($conn->query($sql)===TRUE)
		{
			echo ("inserted");
		}
		else
		{
			echo "\nnot done";
		}
	}
	else if($action=='delete')
	{
		$sql="Delete from log where username='".$uname."';";
		$conn->query($sql);
		echo $action;
	}
	else if($action=='select')
	{
		$sql="select * from log;";
		$result= $conn->query($sql);
		while($row=$result->fetch_array())
		{
			echo("<hr>username: ".$row["username"]."<br>password: ".$row["password"]."<br>");
		}
	}
	else if($action=='update')
	{
		$sql="update log set password='$pass' where username='$uname';";
		$conn->query($sql);
		echo $action;
	}
?>

