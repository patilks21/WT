<?php
$servername="localhost";
$Username1="root";
$Password1="mysql";
$dbname="db";
$conn=new mysqli($servername,$Username1,$Password1,$dbname);
if($conn->connect_error)
{
	echo("failed".$conn->connect_error);
}

$sql="select * from student";

$result = $conn->query($sql); 

while ($row = $result->fetch_assoc()) {
    $data[] = array("Username"=>$row['username'],"Password"=>$row['password']);
}

echo json_encode($data);
?>



/*$input = $_POST["action"];
$name = $_POST["username"];
$pwd = $_POST["password"];

if($input=="Insert")
{
$sql="insert into new1 values('$name','$pwd')";
if($conn->query($sql))
{
echo("Inserted successfully");
}
else
{
echo("failed".$conn->connect_error);
}
}

else if($input=="Delete")
{
$sql="delete from new1 where username='$name'";
if($conn->query($sql))
{
echo("deleted successfully");
}
else
{
echo("failed".$conn->connect_error);
}
}

else if($input=="Update")
{
$sql="update new1 set password='$pwd' where username='$name'";
if($conn->query($sql))
{
echo("updated successfully");
}
else
{
echo("failed".$conn->connect_error);
}
}*/

//else if($input=="Select")
//{

