
﻿<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<link rel="shortcut icon" href="../img/index/icon.png" type="image/png">
<title> Game</title>
	<style>
	body {
	    background: url(../img/index/bg.png); /* Цвет фона и путь к файлу */
	}
	table{	 border: 4px solid green;
		 border-style:dashed;
	         padding: 10px;
	    text-align:center;
	    margin: auto;
			margin-top: 20%;
	}
	</style>
</head>
<body>
	<table>
		<tr><th>
	<form name = "login" action = "php/check.php" method = "post">	Вкажіть ваше ім'я<br>
		<input type="text" name="firstname" id="firstname">
		<br><br>Пароль<br>
		<input type = "password" name = "password" id = "password">

		<br><br>
		<input type="submit" name="done"> <button id="menu"><a href="../index.html">Меню</a></button>
	</form>
		</th></tr>
	</table>
<h1>hi <?=$_COOKIE['name']?></h1>
</body>
</html>
