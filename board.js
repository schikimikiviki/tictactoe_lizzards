module.exports = {
	getEmptyBoard: function () {
		let emptyboard = [
			[".", ".", "."],
			[".", ".", "."],
			[".", ".", "."],
		];

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
		let player1 = `X`;
		let player2 = `O`;
		//let counter1 = 0;
		//let counter2 = 0;
		let winner;

		let winCombinations = [
			[board[0][0], board[0][1], board[0][2]],
			[board[1][0], board[1][1], board[1][2]],
			[board[2][0], board[2][1], board[2][2]],
			[board[0][0], board[1][0], board[2][0]],
			[board[0][1], board[1][1], board[2][1]],
			[board[0][2], board[1][2], board[2][2]],
			[board[0][0], board[1][1], board[2][2]],
			[board[0][2], board[1][1], board[2][0]],
		];

		for (let i = 0; i < winCombinations.length; i++) {
			if ((winCombinations[i] = [`X`, `X`, `X`])) {
				winner = player1;
			} else if ((winCombinations[i] = [`O`, `O`, `O`])) {
				winner = player2;
			} else {
				winner = `None`;
			}

			// for (let j = 0; j < winCombinations[i].length; j++) {
			// 	// if (board[winCombinations[i][j]] === player1) {
			// 	// 	winner = player1;
			// 	// 	//counter1++;
			// 	// 	console.log(winner);
			// 	// } else if (board[winCombinations[i][j]] === player2) {
			// 	// 	winner = player2;
			// 	// 	//counter2++;
			// 	// }
			// }
		}

		// if (counter1 > counter2) {
		// 	winner = player1;
		// }

		return winner;
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
