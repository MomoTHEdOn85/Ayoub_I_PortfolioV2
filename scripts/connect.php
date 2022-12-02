<?php

//Turn on errors reporting
ini_set('display_errors', 1); //dont want to leave these lines codes running on live server
error_reporting(E_ALL);
// comment them out if you done ur coding


//Setup Connection Creds
$user = "root";
$pass = "";
$url = "loacalhost";
$db = "db_portfolio";

$link = mysqli_connect($url, $user, $pass, $db); //Windows
//$link = mysqli_connect($url, $user, $pass, $db, "8888"); //Mac
// or 8889 for mac

//Check Connection
if(!$link){
  error_log('Connection error:' .mysqli_connect_error());

}
?>