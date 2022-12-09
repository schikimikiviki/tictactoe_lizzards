const prompt = require("prompt-sync")();

function drawBoard(round, board) {
	console.group(`Score after round ${round}`);
	console.log(" ");
	console.log("---1---2---3---");
	console.log("---------------");
	console.log(
		"A " +
			(board["A1"] || ". ") +
			" | " +
			(board["A2"] || " . ") +
			" | " +
			(board["A3"] || " . ")
	);
	console.log("---------------");
	console.log(
		"B " +
			(board["B1"] || ". ") +
			" | " +
			(board["B2"] || " . ") +
			" | " +
			(board["B3"] || " . ")
	);
	console.log("---------------");
	console.log(
		"C " +
			(board["C1"] || ". ") +
			" | " +
			(board["C2"] || " . ") +
			" | " +
			(board["C3"] || " . ")
	);
	console.log(" ");
	//console.groupEnd();
}

function solutions(board) {
	return (
		false ||
		// horizontal
		(board["C1"] && board["C1"] == board["C2"] && board["C1"] == board["C3"]) ||
		(board["B1"] && board["B1"] == board["B2"] && board["B1"] == board["B3"]) ||
		(board["A1"] && board["A1"] == board["A2"] && board["A1"] == board["A3"]) ||
		// vertical
		(board["C1"] && board["C1"] == board["B1"] && board["C1"] == board["A1"]) ||
		(board["C2"] && board["C2"] == board["B2"] && board["C2"] == board["A2"]) ||
		(board["C3"] && board["C3"] == board["B3"] && board["C3"] == board["A3"]) ||
		// diagonal
		(board["C1"] && board["C1"] == board["B2"] && board["C1"] == board["A3"]) ||
		(board["C3"] && board["C3"] == board["B2"] && board["C3"] == board["A1"])
	);
}

function pc_move(board, playerSymbol, opponentSymbol) {
	let testBoard;
	// try to finish, then try to block opponent
	const player = [playerSymbol, opponentSymbol];
	for (let p = 0; p < 2; p++) {
		for (let i = 1; i < 10; i++) {
			if (board[i.toString()] !== null) {
				continue;
			}
			testBoard = Object.assign({}, board);
			testBoard[i.toString()] = player[p];
			if (solutions(testBoard)) {
				return i.toString();
			}
		}
	}

	// guess any other free field
	let guess = undefined;
	while (guess === undefined || board[guess] !== null) {
		guess = Math.floor(Math.random() * 10 + 1).toString();
	}
	return guess;
}

var defaultConfig = {
	player1: {
		title: "Player 1",
		symbol: "X",
	},
	player2: {
		title: "Player 2",
		symbol: "O",
	},
};
console.log("Want to play a game?;)");

function main(config) {
	config = Object.assign(defaultConfig, config || {});
	let gameOn = true;
	let player1Move, round, computer, board, ask, currentPlayer, opponentPlayer;

	console.log("WELCOME TO Tic Tac Toe");
	console.log(`${config.player1.title}: ${config.player1.symbol}`);
	console.log(`${config.player2.title}: ${config.player2.symbol}`);

	while (gameOn === true) {
		// init new game
		round = 0;
		player1Move = true;
		board = {
			C1: null,
			C2: null,
			C3: null,
			B1: null,
			B2: null,
			B3: null,
			A1: null,
			A2: null,
			A3: null,
		};
		computer =
			prompt("Do you want to play with another person? (yes/NO)") !== "yes";
		drawBoard(round++, board);
		// for loop for game logic
		for (var i = 0; i < 9; i++) {
			if (solutions(board)) {
				console.log(
					`%c${currentPlayer.title} )(${currentPlayer.symbol}) wins!`
				);
				gameOn = false;
				break;
			}

			currentPlayer = config.player1;
			opponentPlayer = config.player2;
			if (!player1Move) currentPlayer = config.player2;
			opponentPlayer = config.player1;

			ask = undefined;
			while (board[ask] !== null || ask === undefined) {
				if (player1Move === false && computer === true) {
					ask = pc_move(board, currentPlayer.symbol, opponentPlayer.symbol);
				} else {
					ask = prompt(
						`${currentPlayer.title} (${currentPlayer.symbol}) where would you like to go (A-C 1-3)? (type "exit" to leave)`
					);
					if (ask == "exit") {
						gameOn = false;
						break;
					}
				}
			}
			if (gameOn == false) {
				break;
			}

			board[ask] = currentPlayer.symbol;
			player1Move = !player1Move;
			drawBoard(round++, board);
		}
		if (gameOn === true) {
			console.log("Tie Game!");
			gameOn = false;
		}
		if (ask !== "exit" && prompt("Play again? (YES/no)") !== "no") {
			gameOn = true;
		}
	}
}

main();
