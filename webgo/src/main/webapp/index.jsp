<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<title>Joseph在线围棋练习</title>
		<link rel="shortcut icon" href="images/chinchilla.ico">
		<link rel="stylesheet" href="css/buttons.css">
		<link rel="stylesheet" href="css/themes/sunny/jquery.ui.all.css">
		<script type="text/javascript" src="js/jquery/jquery-1.8.0.js"></script>
		<script type="text/javascript" src="js/joe/goboard.js"></script>
		<script type="text/javascript" src="js/joe/maingui.js"></script>
	</head>
	<body>
		<header>			
			<a href="#" data-icon="★" class="button pink serif skew">首页</a>		
			<a href="#" data-icon="✿" class="button green oval" onclick="showBoard(80,80,800,800);">死活题</a>
			<a href="#" data-icon="✰" class="button orange shield xl">对局</a>
			<a href="#" data-icon="♛" class="button brackets drop">棋谱</a>
			<a href="#" data-icon="☂" class="button blue">返回</a>			
		</header>
		
        <nav>  
            <!-- ... -->  
        </nav>  
      
        <div class="main">  
            <canvas id="goboard" width="1000" height="900"></canvas>  
        </div>  
      
        <footer>  
            <!-- ... -->  
        </footer>  
		
	</body>
</html>