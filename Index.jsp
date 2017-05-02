<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet"
			href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
			integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7"
			crossorigin="anonymous">

		<!-- Optional theme -->
		<link rel="stylesheet"
			href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css"
			integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r"
			crossorigin="anonymous">

		<!-- Latest compiled and minified JavaScript -->
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"
			integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS"
			crossorigin="anonymous">
		</script>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>

		<title>Welcome to TicTacToe</title>

	</head>
	<%@ taglib prefix="c"
						 uri="http://java.sun.com/jsp/jstl/core" %>
	<div class="container text-center">
		<h1>Welcome <c:out value="${userinfo.email}"/> </h1>
		<h3>Your Stats:</h3>
		<table class="table">
			<tr>
				<td>Won</td> <td>Lost </td>  <td>Ties</td>
			</tr>
			<tr>
				<td> <c:out value="${userinfo.numWins}"/>  </td>
				<td><c:out value="${userinfo.numLosses}"/> </td>
				<td><c:out value="${userinfo.numTies}"/> </td>
			</tr>
		</table>

		<a type="button" class="btn btn-info" href="./leaderboard.jsp">Leaderboard</a>
		<a type="button" class="btn btn-info" href="./TicTacToe.jsp">Play!</a>
	</div>
</html>
