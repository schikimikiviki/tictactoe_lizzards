const prompt = require("prompt-sync")();

module.exports = {
  getPlayerMove: function (board, current_player) {
        let abc = prompt("Select a coordinate, it begins with a letter: A, B or C")
        let move = "";
        let playerMoves = [""];
        let playerMovesO = [""];
        let playerMovesX = [""];
        if (abc === 'a' || abc === 'A' || abc === 'b' || abc === 'B' || abc === 'c' || abc === 'C') {
          console.log("Your selection is: ", abc)
          move = move + abc
          // debugging move selection
          console.log(move)
        } else if (abc === 'quit' || abc === 'Q' || abc === 'q') {
          console.log("Good bye, see you later!")
          process.exit();
        } else {
          console.log("Your selection was incorrect, try it again")
          abc = prompt("Select a coordinate, it begins with a letter: A, B, or C")
        }

        let numeroCoordinate = prompt("Select the second part of your coordinate: 1, 2 or 3")
        if (numeroCoordinate === "1" || numeroCoordinate === "2" || numeroCoordinate === "3") {
          console.log("Your selection was: ", numeroCoordinate)
          move = move + numeroCoordinate
          // debugging move selection
          console.log(move)
        } else if (abc === 'quit' || abc === 'Q' || abc === 'q') {
          console.log("Good bye, see you later!")
          process.exit();
        } else {
          console.log("Your selection was incorrect, try it again")
          numeroCoordinate = prompt("Select the second part of your coordinate: 1, 2 or 3")
        }

        playerMoves = playerMoves.push(move)
        return playerMoves
        // debugging playermoves
        console.log(playerMoves)
    /*
        Should return the read coordinates for the tic tac toe board from the terminal.
        The coordinates should be in the format  letter, number where the letter is 
        A, B or C and the number 1, 2 or 3.
        If the user enters an invalid coordinate (like Z0 or 1A, A11, sadfdsaf) 
        than a warning message should appear and the coordinates reading process repeated.
        If the user enters a coordinate that is already taken on the board.
        than a warning message should appear and the coordinates reading process repeated.
        If the user enters the word "quit" in any format of capitalized letters the program
        should stop.
        */
  },

  getRandomAiCoordinates: function (board, current_player) {
    /*
        Should return a tuple of 2 numbers. 
        Each number should be between 0-2.
        The chosen number should be only a free coordinate from the board.
        If the board is full (all spots taken by either X or O) than "None"
        should be returned.
        */
  },

  getUnbeatableAiCoordinates: function (board, current_player) {
    /*
        Should return an array of 2 numbers. 
        Each number should be between 0-2.
        The chosen number should be only a free coordinate from the board.
        The chosen coordinate should always stop the other player from winning or
        maximize the current player's chances to win.
        If the board is full (all spots taken by either X or O) than "None"
        should be returned.
        */
  },
};

// run this function to test whether you have correctly implemented the other functions
function checkCoordinates() {
  board_1 = [
    ["X", "X", "."],
    ["X", ".", "."],
    ["X", "X", "."],
  ];
  console.log(
    "It should console.log the coordinates selected by the human player"
  );
  coordinates = getPlayerMove(board_1, "X");
  console.log(coordinates);

  board_2 = [
    ["O", "O", "."],
    ["X", "O", "."],
    ["X", "X", "O"],
  ];
  console.log("The console.loged coordinate should be only (0,2) or (1,2)");
  console.log(getRandomAiCoordinates(board_2));
  console.log("The console.loged coordinate should be only (0,2) or (1,2)");
  console.log(getRandomAiCoordinates(board_2));
  console.log("The console.loged coordinate should be only (0,2) or (1,2)");
  console.log(getRandomAiCoordinates(board_2));

  board_3 = [
    ["O", "X", "X"],
    ["X", "O", "X"],
    ["X", "O", "X"],
  ];
  console.log("The console.loged coordinate should be None");
  console.log(getRandomAiCoordinates(board_3));

  board_4 = [
    [".", "O", "."],
    ["X", "O", "."],
    ["X", "X", "O"],
  ];
  console.log("The console.loged coordinate should always be (0, 0)");
  console.log(getUnbeatableAiCoordinates(board_4, "X"));

  board_5 = [
    ["X", "O", "."],
    ["X", ".", "."],
    ["O", "O", "X"],
  ];
  console.log("The console.loged coordinate should always be (1, 1)");
  console.log(getUnbeatableAiCoordinates(board_5, "O"));

  board_6 = [
    ["O", "O", "."],
    ["O", "X", "."],
    [".", "X", "."],
  ];
  console.log("The console.loged coordinate should either (0, 2) or (2, 0)");
  console.log(getUnbeatableAiCoordinates(board_6));
}
