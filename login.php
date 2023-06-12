<?php 

$username = $_REQUEST["username"];
$password = $_REQUEST["password"];

?>

<form action="login.php" method="get">
  <label for="usernameInput">Username:</label>
  <input type="username" name="username" id="usernameInput">
  <label for="passwordInput">Password:</label>
  <input type="password" name="password" id="passwordInput">
  <input type="submit" value="Login">
</form>