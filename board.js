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
		const winningConditions = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];

		let roundWon = false;
		for (let i = 0; i <= 7; i++) {
			const winCondition = winningConditions[i];
			let a = gameState[winCondition[0]];
			let b = gameState[winCondition[1]];
			let c = gameState[winCondition[2]];
			if (a === "" || b === "" || c === "") {
				continue;
			}
			if (a === b && b === c) {
				roundWon = true;
				break;
			}

			/*
      Should return the player that wins based on the tic tac toe rules.
      If no player has won, than "None" is returned.
      */
		}
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
