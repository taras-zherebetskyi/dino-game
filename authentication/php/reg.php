<?php
  $login = filter_var(trim($_POST['firstname']),
  FILTER_SANITIZE_STRING);
  $pass = filter_var(trim($_POST['password1']),
  FILTER_SANITIZE_STRING);
  $pass2 = filter_var(trim($_POST['password2']),
  FILTER_SANITIZE_STRING);

  $mysql = new mysqli('mysql.zzz.com.ua','toros1m','GtA12#rc','toros_m');
  $loginOld = $mysql->query("SELECT 'name' FROM 'users' WHERE 'login' = '$login'");

  if($login == $loginOld){
    echo "Такий користувач уже існує";
    exit();
  }else if(mb_strlen($login) < 1 || mb_strlen($login) > 90){
    echo "Логін повинен містити більше 5 символів";
    exit();
  }else if (mb_strlen($pass) <= 3 || mb_strlen($pass) >= 10) {
    echo "Пароль повинен містити від 3 до 10 символів";
    exit();
  }else if ($pass != $pass2) {
    echo "Паролі не співпадають";
    exit();
  }

  $pass = md5($pass."chyuw7y");


  $mysql->query("INSERT INTO 'users' ('name', 'password', 'gTorosRun', 'gSnake', 'gBird')
   VALUES('$login', '$pass', '0', '0', '0')");

   $mysql->close();
   header('Location: /');
   exit();
 ?>
