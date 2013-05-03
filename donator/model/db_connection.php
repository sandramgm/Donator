<?php
/*$db_connection = mysql_connect("localhost","qpt351","cvDona2013");

if(!$db_connection) die("Error connecting to MySQL database.");

mysql_select_db("qpt351" ,$db_connection);*/


//$mysqli = new mysqli("localhost", "qpt351", "cvDona2013", "qpt351");
$db_connection = mysqli_connect("localhost","qpt351","cvDona2013","qpt351");
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
