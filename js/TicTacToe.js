var X = 1;
var O = 2;
var empty = 0;

function convert(val){
		switch(val){
		case X: return "X";
		case O: return "O";
		default:return "_";
		}
}

function revConvert(val){
		switch(val){
		case "X": return X;
		case "O": return O;
		default:  return empty;
		}
}


/**
 * The User is always X and the computer is always O
*/
var TicTacToe = {
		board: [
				[empty, empty, empty],
				[empty, empty, empty],
				[empty, empty, empty]
		],
		availableSpots: [0,1,2,3,4,5,6,7,8],
		setX: function (row, col) {
				this.board[row][col] = X;
				var spot = (row * 3) + col;
				this.availableSpots = this.availableSpots.filter(function(e ){ return e != spot; });
		},
		setO: function (row, col) {
				this.board[row][col] = O;
				var spot = (row * 3) + col;
				this.availableSpots = this.availableSpots.filter(function(e ){ return e != spot; });
		},
		isOver: function () {
				return this.getWinner() != empty;
		},
		printBoard: function () {
				var boardString = '_____________';
				for (var i = 0; i < this.board.length; i++) {
						boardString += '\n|';
						for (var j = 0; j < this.board[i].length; j++) {
								if (this.board[i][j] == X)
										boardString += ' X |';
								else if (this.board[i][j] == O) {
										boardString += ' O |';
								} else {
										boardString += ' _ |';
								}
						}
				}
				console.log(boardString + '\n_____________');
		},
		flattenBoard: function () {
				return [].concat.apply([], this.board);
		},
		convertTable: function() {
				return this.board.map(function (e){
						e.map(convert);
				});
		},
		get: function (row, col){
				return this.board[row][col];
		},

		// returns the winner who won in board, returns empty if non did
		getWinner: function() {
				for (var i = 0; i < 3; i++) {
			
						// check rows
						if (this.get(i,0) == this.get(i,1) &&
								this.get(i,0) == this.get(i,2) &&
								this.get(i,0) != empty)
						{
								return this.get(i,0);
						}

						// check columns
            if ((this.get(0,i) == this.get(1,i) &&
                 this.get(0,i) == this.get(2,i) &&
                 this.get(0,i) != empty))
						{
                return this.get(0,i);
            }
				}

				// Check diagonals
        if ((this.get(0,0) == this.get(1,1) && this.get(0,0) == this.get(2,2)) ||
            (this.get(0,2) == this.get(1,1) && this.get(0,2) == this.get(2,0)) &&
						this.get(1,1) != empty)
				{
            return this.get(1,1);
				}

				return empty;
		},
		AIMove: function() {
				SetInstr("Computer's Turn");
				try {
						var r = Math.random();

						var move = Math.floor(r * this.availableSpots.length);
						move = this.availableSpots[move];

						var row = Math.floor(move / 3);
						var col = move % 3;

						// console.log(possiblespots, move, row, col);
						this.setO(row, col);
						SetInstr("Your turn");
						return [row, col];
				} catch(e){
						alert(e, row, col, this.availableSpots, this.board);
				}
		},
		Reset: function(){
				for(var i = 0; i < this.board.length; i++) {
						for(var j = 0; j < this.board[i].length; j++) {
								this.board[i][j] = empty;
						}
				}
				this.availableSpots = [0,1,2,3,4,5,6,7,8];
		},
		isFull: function() {
				for(var i = 0; i < this.board.length; i++) {
						for(var j = 0; j < this.board[i].length; j++) {
								if(this.board[i][j] == empty)
										return false;
						}
				}
				return true;
		}
};



// converts the table in TicTacToe.html to a javascript 2d array
function convertTableToBoard(){
		var newboard = [];
		$("table tr").each(function() {
				var arrayOfThisRow = [];
				var tableData = $(this).find('td');
				if (tableData.length > 0)
				{
						tableData.each(function() {
								arrayOfThisRow.push(revConvert($(this).text().trim()));
						});
						newboard.push(arrayOfThisRow);
				}
		});
		return newboard;
}


function enableBoard() {
		$( "table tr td" ).click(function() {
				var id = $(this).attr("id");

				var row = Number(id.charAt(0));
				var col = Number(id.charAt(1));

				//				alert(TicTacToe.get(row, col));
				if(TicTacToe.get(row, col) == empty)
				{

						$(this).append("X");
						TicTacToe.setX(row, col);

						if(TicTacToe.isOver())
						{
								EndGame("You Win");
								SendResult("WIN");

						} else if(!TicTacToe.isFull())
						{
								var move = TicTacToe.AIMove();
								var identifier = "td#" + move[0].toString() + move[1].toString();
								$(identifier).append("O");

								if(TicTacToe.isOver())
								{
										EndGame("You Lose");
										SendResult("LOSS");
								}
						}
				}
				if(TicTacToe.isFull() && TicTacToe.getWinner() == empty){
						EndGame("TIE");
						SendResult("TIE");
				}
		});
}

function SendResult(message){
		$.ajax({
				url:"/sendscore?result="+message,
				type:"POST",
				success: function(data){
						SetInstr("Score Submitted!");
				},
				error: function(jqXHR, textStatus, errorThrown){
            alert(jqXHR.status);
				}
		}).fail(function(){
				alert("couldn't submit score to our database");
		});
}

function SetInstr(message) {
		$('#GameInstr').empty();
		$('#GameInstr').append(message);
}

function EndGame(message){
		alert(message);
		SetInstr(message);
//		$('table tr td').click(false);
		$("#playAgain").prop('disabled', false);
}

// disable the button (will be reactivated when the first game is over)
$(document).ready(function() {
		$("#playAgain").prop('disabled', true);
});


// restart game, to be called when play again is pressed
function restartGame(){
		//remove stuff from html baord
		$("table tr").remove();

		// reset the board object.
		TicTacToe.Reset();

		// turn off the button again
		$("#playAgain").prop('disabled', true);
		window.location.reload();
}



// the initial countdown
var seconds_left = 5;
var interval = setInterval(function (){
		SetInstr(seconds_left);
		if(seconds_left <= 0)
		{
				SetInstr("PLAY!");
				clearInterval(interval);
				try {
						if(Math.floor(Math.random() * 2) === 0)
						{
								SetInstr("Computer Starts");
								var move = TicTacToe.AIMove();
								var identifier = "td#" + move[0].toString() + move[1].toString();
								$(identifier).append("O");
						} else
						{
								SetInstr("You Start");
						}
				} catch(e){
						alert(e);
				}
				enableBoard();
		}
		seconds_left -= 1;
}, 1000);
