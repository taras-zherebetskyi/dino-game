<?php
  $login = filter_var(trim($_POST['firstname']),
  FILTER_SANITIZE_STRING);
  $pass = filter_var(trim($_POST['password']),
  FILTER_SANITIZE_STRING);

  $pass = md5($pass."chyuw7y");

  //require "conect.php";
$mysql = new mysqli('mysql.zzz.com.ua','toros1m','GtA12#rc','toros_m');
  $result = $mysql->query("SELECT * FROM 'users' WHERE 'login' = '$login'
    AND 'password' = '$pass'");
    $user = $result->fetch_assoc();
  //$user = $result->fetch_assoc();
  if (count($user)==0) {
    echo("Такий користувач не знайдений");
    exit();
  }

  setcookie('user', $user['name'], time() + 3600, "/");
  setcookie('gToros', $user['gTorosRun'], time() + 3600, "/");
  setcookie('gSnake', $user['gSnake'], time() + 3600, "/");
  setcookie('gBird', $user['gBird'], time() + 3600, "/");

  $mysql->close();
  header('Location: /');
  exit();
?>
