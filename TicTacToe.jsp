<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet"
			href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
			integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7"
			crossorigin="anonymous">
		<title> Tic Tac Toe!</title>
	</head>
	<style>
	table{
		text-align:center; 
    vertical-align:middle;
		margin: 0 auto;
		font-size:75px
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
		height: 100px;
		border-left:3px solid #000;
    border-right:3px solid #000;
		border-top:3px solid #000;
    border-bottom:3px solid #000;
		font-size:75px
		text-align:center;
	}
	.centeredBlock {
		text-align:center;
    display: block;  
    margin-right: auto;  
    margin-left: auto;  
  }
	.GameInstr {
		font-size:50px
		text-align:center;
		display: block;  
    margin-right: auto;  
    margin-left: auto;
		width:800px;
		margin:0 auto;
	}
	</style>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
	<script type="text/javascript" src="./js/TicTacToe.js"></script>
	<body>
		<div id="leaderboardDiv" class="container text-center">
			<div class="container-fluid" style="width:800px; margin:0 auto;">
				<h1> Tic Tac Toe </h1>
				<h2 id="GameInstr"> </h2>
			</div>
			<table>
				<tr>
					<td id="00" class="cell"> </td>
					<td id="01" class="cell">	</td>
					<td id="02" class="cell"> </td>
				</tr>
				<tr>
					<td id="10" class="cell"> </td>
					<td id="11" class="cell"> </td>
					<td id="12" class="cell"> </td>
				</tr>
				<tr>
					<td id="20" class="cell"> </td>
					<td id="21" class="cell"> </td>
					<td id="22" class="cell"> </td>
				</tr>
			</table>

			<br>
			
			<button id="playAgain" class="btn btn-lg btn-success"
				onclick="restartGame();" role="button">
				Play Again!
			</button>
		</div>
	</body>
</html>
