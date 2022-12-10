const prompt = require("prompt-sync")();

let modeSelection = 0

function selectLevel() {
  modeSelection = prompt("Please select the wanted mode to play (1-4)" +
  "1. Human vs Human" +
                            "2. AI vs Human" +
                            "3. AI vs AI" +
                            "4. Unbeatable AI vs Human")

  if (modeSelection === "1") {
    modeSelection = 1
    return modeSelection
  } else if (modeSelection === "2") {
    modeSelection = 2
    return modeSelection
  } else if (modeSelection === "3") {
    modeSelection = 3
    return modeSelection
  } else if (modeSelection === "4") {
    modeSelection = 4
    return modeSelection
  } else if (modeSelection == "Quit" || modeSelection == "quit") {
    process.exit();
  } else {
    console.log("The selected mod didn't exists, please try it again.")
    modeSelection = prompt("Please select the wanted mode to play (1-4)" +
    "1. Human vs Human" +
                              "2. AI vs Human" +
                              "3. AI vs AI" +
                              "4. Unbeatable AI vs Human")
  }
}

selectLevel();
console.log(modeSelection)

let playerOne = ""
let playerTwo = ""

function startJourney() {
  if (modeSelection === 1 || modeSelection === 2 || modeSelection === 4) {
    console.log("You selected the Human vs Human mode, in this case, you should know which player will start. Let me know, what is the name of Player 1 with X")
    playerOne = prompt("What is your name, Player 1? You will be the X, not forget it!")
      if (prompt.length > 0) {
        console.log(`${playerOne} is our first player`)
        return playerOne
      } else {
        console.log("I didn't recognized what you tried to type in, please try it again")
        playerOne = prompt("What is your name, Player 1????")
      }
  }
}

startJourney();

function secondPlayerName() {
  playerTwo = prompt("What is your name, Player 2? You will be the O, not forget it!")
if (prompt.length > 0) {
      console.log(`${playerTwo} is our second player`)
      return playerTwo
    } else {
      console.log("I didn't recognized what you tried to type in, please try it again")
      playerTwo = prompt("What is your name, Player 2????")
    }
}

if (modeSelection === 1) {
secondPlayerName();
}

let startingPlayer = ""
let headOrTail = ""

function selection2() {
console.log(`We will decide the starting player with a coin toss, also ${playerOne} you should select: Head or Tail?`)
headOrTail = prompt("Head - 1 or Tail - 2?")
  if (prompt == "1") {
  console.log(`Your selection was ${headOrTail}`)
  return headOrTail
  } else if (prompt == "2") {
  console.log(`Your selection was ${headOrTail}`)
  return headOrTail
  }
}

selection2();

console.log(`Test: ${headOrTail}`)

let ergebnis = ""

function whoWillStart() {
var prob1 = Math.floor(Math.random() * 2) +1;
var prob2 = Math.floor(Math.random() * 2) +1;
if( prob1 === prob2) {
  ergebnis = "Tail"
  return ergebnis
  console.log('You Got TAIL');
} else {
  ergebnis = "Head"
  return ergebnis
  console.log('You Got HEAD');
}
}

whoWillStart();

console.log(`This is a control log to check score of toss ${ergebnis}`)

function checkScoreAndStarter() {
if (ergebnis == "Tail" && headOrTail == "2" || ergebnis == "Head" && headOrTail == "1") {
  startingPlayer = "X"
  return startingPlayer
} else {
  startingPlayer = "O"
  return startingPlayer
}
}

console.log(modeSelection)
if (modeSelection == "1") {
checkScoreAndStarter ();
}

console.log(startingPlayer)
console.log(`Player 1 with Symbol X is ${playerOne} and Player 2 with Symbol O is ${playerTwo} and Player ${startingPlayer} will start the game!`)

var defaultConfig = {
  player1:{
      title: playerOne,
      symbol: "X"
  },
  player2:{
      title: playerTwo,
      symbol: "O"
  }
};

function drawBoard(round, board){
    console.group(`Score after round ${round}`);
    console.log(" ");
    console.log("---1---2---3---")
    console.log("---------------")
    console.log('A ' + (board["A1"] || '. ') + " | " + (board["A2"] || ' . ') + " | " + (board["A3"] || ' . '));
    console.log("---------------");
    console.log('B ' + (board["B1"] || '. ') + " | " + (board["B2"] || ' . ') + " | " + (board["B3"] || ' . '));
    console.log("---------------");
    console.log('C ' + (board["C1"] || '. ') + " | " + (board["C2"] || ' . ') + " | " + (board["C3"] || ' . '));
    console.log(" ");
    console.groupEnd();
};

function solutions(board) {
  return false
      // horizontal
      || (board["C1"] && (board["C1"] == board["C2"] && board["C1"] == board["C3"]))
      || (board["B1"] && (board["B1"] == board["B2"] && board["B1"] == board["B3"]))
      || (board["A1"] && (board["A1"] == board["A2"] && board["A1"] == board["A3"]))
      // vertical
      || (board["C1"] && (board["C1"] == board["B1"] && board["C1"] == board["A1"]))
      || (board["C2"] && (board["C2"] == board["B2"] && board["C2"] == board["A2"]))
      || (board["C3"] && (board["C3"] == board["B3"] && board["C3"] == board["A3"]))
      // diagonal
      || (board["C1"] && (board["C1"] == board["B2"] && board["C1"] == board["A3"]))
      || (board["C3"] && (board["C3"] == board["B2"] && board["C3"] == board["A1"]));
};

function ttt(config){
  config = Object.assign(defaultConfig, config || {});
  let gameOn = true;
  let player1Move, round, computer, board, ask, currentPlayer, opponentPlayer;

  while (gameOn === true){
      // init new game
      round = 0
      if (startingPlayer == "X") {
        player1Move = true
      } else {
        player1Move = false
      }
      board = {
          "C1" : null,
          "C2" : null,
          "C3" : null,
          "B1" : null,
          "B2" : null,
          "B3" : null,
          "A1" : null,
          "A2" : null,
          "A3" : null
      };
      if (modeSelection == "2") {
        computer = true
      } else {
        computer = false
      }
      drawBoard(round++, board);
      // for loop for game logic
      for (var i = 0 ; i < 9; i++){
          if (solutions(board)){
              console.log(`%c${currentPlayer.title} )(${currentPlayer.symbol}) wins!`, 'font-size: x-large');
              gameOn = false;
              break;
           }

          currentPlayer = config.player1;
          opponentPlayer = config.player2;
          if(!player1Move)
              currentPlayer = config.player2;
              opponentPlayer = config.player1;

          ask = undefined;
          while(board[ask] !== null || ask === undefined){
              if(player1Move === false && computer === true){
                  ask = pc_move(board, currentPlayer.symbol, opponentPlayer.symbol);
              } else {
                  ask = prompt(`${currentPlayer.title} (${currentPlayer.symbol}) where would you like to go (A-C 1-3)? (type "exit" to leave)`);
                  if(ask == 'exit') {
                      gameOn = false;
                      break;
                  }
              }
          }
          if(gameOn == false) {
              break;
          }

          board[ask] = currentPlayer.symbol;
          player1Move = !player1Move;
          drawBoard(round++, board);
      }
      if(gameOn === true) {
          console.log("%cTie Game!", "font-size: x-large");
          gameOn = false;
      }
      if(ask !== 'exit' && prompt("Play again? (YES/no)") !== "no"){
          gameOn = true;
      }
  }
}

ttt();