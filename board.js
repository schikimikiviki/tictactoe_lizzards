module.exports = {
	getEmptyBoard: function () {
		let emptyboard = {
			1: " ",
			2: " ",
			3: " ",
			4: " ",
			5: " ",
			6: " ",
			7: " ",
			8: " ",
			9: " ",
		};

		return emptyboard;
	},

	displayBoard: function (board) {
		board = console.log(`
         1     2     3

    A    ${board[0][0]}  |  ${board[0][1]}  |  ${board[0][2]}
    --------------------
    B    ${board[1][0]}  |  ${board[1][1]}  |  ${board[1][2]}
    --------------------
    C    ${board[2][0]}  |  ${board[2][1]}  |  ${board[2][2]}
  
    
    `);

		return board;
	},

	isBoardFull: function (board) {
		//console.log(board, typeof board);

		for (let i in board) {
			if (board[i].includes(`.`)) {
				return false;
			} else {
				return true;
			}
		}
	},

	getWinningPlayer: function (board) {
		var winCombinations = [
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
			[1, 4, 7],
			[2, 5, 8],
			[3, 6, 9],
			[1, 5, 9],
			[3, 5, 7],
		];

		let playerX = `X`;
		let playerO = `O`;
		let winningplayer;

		for (var i = 0; i < winCombinations.length; i++) {
			var markCountX = 0;
			var markCountO = 0;

			for (var j = 0; j < winCombinations[i].length; j++) {
				if (board[winCombinations[i][j]] === playerX) {
					markCountX++;

					if (markCountX === 3) {
						winningplayer = `X`;
					}
				} else if (board[winCombinations[i][j]] === playerO) {
					markCountO++;
					if (markCountO === 3) {
						winningplayer = `O`;
					}
				}
			}
		}
		console.log(winningplayer);
		return winningplayer;
	},
};

// run this function to test whether you have correctly implemented the other function
function checkBoards() {
	let board = module.exports.getEmptyBoard();
	console.log(board);

	board = [
		["X", "O", "."],
		["X", "O", "."],
		["O", "X", "."],
	];

	console.log(`Should give out:"

        1   2   3
    A   X | O | . 
       ---+---+---
    B   X | O | .
       ---+---+---
    C   0 | X | . 
       ---+---+---`);
	module.exports.displayBoard(board);

	let board_1 = [
		["X", "O", "."],
		["X", "O", "."],
		["X", "X", "O"],
	];
	console.log("Should return False");
	console.log(module.exports.isBoardFull(board_1));

	let board_2 = [
		[".", "O", "O"],
		[".", "O", "X"],
		[".", "X", "X"],
	];
	console.log("Should return False");
	console.log(module.exports.isBoardFull(board_2));

	let board_3 = [
		["O", "O", "X"],
		["O", "X", "O"],
		["O", "X", "X"],
	];
	console.log("Should return True");
	console.log(module.exports.isBoardFull(board_3));

	let board_4 = [
		["X", "O", "."],
		["X", "O", "."],
		["X", "X", "O"],
	];
	console.log("Should return X");
	console.log(module.exports.getWinningPlayer(board_4));

	let board_5 = [
		["X", "O", "O"],
		["X", "O", "."],
		["O", "X", "X"],
	];
	console.log("Should return O");
	console.log(module.exports.getWinningPlayer(board_5));

	let board_6 = [
		["O", "O", "."],
		["O", "X", "."],
		[".", "X", "."],
	];
	console.log("Should return None");
	console.log(module.exports.getWinningPlayer(board_6));
}

checkBoards();
