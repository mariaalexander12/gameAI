<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<html>
	<style>
		table{
		text-align:center; 
    vertical-align:middle;
		margin: 0 auto;
		font-size:25px
	}

	a {
		text-align:center; 
    vertical-align: middle;
		margin: 0 auto;
		display:block;
    margin: 0 auto;
	}
	h1 {
		text-align:center; 
    vertical-align:middle;
		margin: 0 auto;
		padding:40px;
	}
	.cell {
		width:100px;
		height:30px;
		border-left:3px solid #000;
    border-right:3px solid #000;
		border-top:3px solid #000;
    border-bottom:3px solid #000;
		font-size:25px
		text-align:center;
	}
	</style>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
		<title> Leader Board</title>
	</head>
	<h1> Top Players in TicTacToe</h1>
	<div id="leaderboardDiv" class="container text-center"> 
		<c:import var="data" url="./leaderboardInfo?amount=500"/>
		<c:out value="${data}" escapeXml="false"/>
	</div>
</html>
