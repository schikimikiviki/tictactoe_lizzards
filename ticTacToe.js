const menu = require("./menu"); // use it e.g. like menu.get_menu_option()
const board = require("./board");
const coordinate = require("./coordinates");

const HUMAN_VS_HUMAN = 1;
const RANDOM_AI_VS_RANDOM_AI = 2;
const HUMAN_VS_RANDOM_AI = 3;
const HUMAN_VS_UNBEATABLE_AI = 4;

function main() {
  let gameMode = menu.getMenuOption();
  let gameBoard = board.getEmptyBoard();
  let isGameRunning = true;

  while (isGameRunning) {
    board.displayBoard(board);

    /* TODO

        in each new iteration of the while loop the program should 
        alternate the value of `currentPlayer` from `X` to `O`
        */
    let currentPlayer = "X";

/*if (playerMovesX.length === 0 && playerMovesO.length === 0 && option === "1") {
  console.log("Who'll start the game? Choose a number of 1-10. Those, who tipped it correctly or had the nearest tip, can start the game.")
  console.log("Who won? Who will start, X or O?")
      let startPlayer = prompt("Who has won the game? Type in who will start, X or O? Was it a draw? Than type D in!")
      if (startPlayer === "X" || startPlayer === "x") {
        console.log("O, do your first step.")
        currentPlayer === "X"
      } else if (startPlayer === "o" || startPlayer === "O") {
        console.log("O, do your first step.")
        currentPlayer === "O"
      } else if (startPlayer === "d" || startPlayer === "D") {
        startPlayer = prompt("Who has won the game? Type in who will start, X or O? Was it a draw? Than type D in!")
      }
    }

    /* TODO

        based on the value of the variables `game_mode` and `currentPlayer` 
        the programm should should choose betwen the functions
        get_random_ai_coordinates or get_umbeatable_ai_coordinates or get_human_coordinates
        */
    let humanCoord = coordinate.getPlayerMove(board, currentPlayer);

    gameBoard[humanCoord[0]][humanCoord[1]] = currentPlayer;

    /* TODO 

        based on the values of `winning_player` and `its_a_tie` the program
        should either stop displaying a winning/tie message 
        OR continue the while loop
        */
    let winningPlayer = board.getWinningPlayer(gameBoard);
    let itsATie = board.isBoardFull(gameBoard);
  }
}

main();
