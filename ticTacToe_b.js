const prompt = require("prompt-sync")();

let modeSelection = 0

function selectLevel() {
  console.log("Mods included: \n 1. Human vs Human \n 2. AI vs Human \n 3. AI vs AI /coming soon \n 4. Unbeatable AI vs Human /coming soon")
  modeSelection = prompt("Please select the wanted mode to play (1-4)")

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
    selectLevel();
  }
}

selectLevel();

let playerOne = ""
let playerTwo = ""

function startJourney() {
  if (modeSelection === 1 || modeSelection === 2 || modeSelection === 4) {
    console.log("You selected the Human vs Human mode, in this case, we need 2 players. Let me know, what is the name of Player 1 with X")
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
  if (headOrTail == "1") {
  console.log(`Your selection was HEAD`)
  return headOrTail
  } else if (headOrTail == "2") {
  console.log(`Your selection was TAIL`)
  return headOrTail
  }
}

if (modeSelection == 1 || modeSelection == 2) {
selection2();
}

function exciteD() {
let answer = prompt("")
  if (answer == "yes") {
    console.log("Me too...")
  } else {
    console.log("Why not?")
    let answer2 = prompt("Describe your feelings, why aren't you excited as me?")
  }
}

function angrY() {
  let answer = prompt("")
    if (answer == "yes") {
      console.log("Me too...")
    } else {
      console.log("Why not?")
      let answer2 = prompt("Describe your feelings, why aren't you excited as me?")
    }
  }

  function funnyPart() {
  console.log(".")
  console.log("..")
  console.log("...")
  console.log("....")
  console.log(".....")
  console.log("Let me show you the result of the coin toss...")
  console.log(".....")
  console.log("....")
  console.log("...")
  console.log("..")
  console.log(".")
  console.log("Are you already excited? yes or no?")
  exciteD();
  console.log(".")
  console.log("..")
  console.log("...")
  console.log("....")
  console.log(".....")
  console.log("The result is...")
  console.log(".....")
  console.log("Wait...")
  console.log(".....")
  console.log("Loading")
  console.log("[      ]")
  console.log("[-     ]")
  console.log("[--    ]")
  console.log("[--    ]")
  console.log("[--    ]")
  console.log("[--    ]")
  console.log("Loading is taking little bit more time than usual, sorry for inconvenience. Are you angry?")
  angrY();
  console.log("Just kidding, I already know the result")
  console.log("[------]")
  console.log("Which is....")
  }
  funnyPart();

let ergebnis = ""

function whoWillStart() {
var prob1 = Math.floor(Math.random() * 2) +1;
var prob2 = Math.floor(Math.random() * 2) +1;
if( prob1 === prob2) {
  ergebnis = "Tail"
  console.log('Result: TAIL');
  return ergebnis
} else {
  ergebnis = "Head"
  console.log('Result: HEAD');
  return ergebnis
}
}

if (modeSelection === 1 || modeSelection == 2) {
whoWillStart();
}

function checkScoreAndStarter() {
if (ergebnis == "Tail" && headOrTail == "2" || ergebnis == "Head" && headOrTail == "1") {
  startingPlayer = "X"
  console.log(`You won!!!! You can start the game!`)
  return startingPlayer
} else {
  startingPlayer = "O"
  console.log(`You lost!!!! Loooooser, opponent will start the game. HAHAAHAHAHAHA!`)
  return startingPlayer
}
}

if (modeSelection == 1 || modeSelection == 2) {
checkScoreAndStarter ();
}

if (modeSelection == 1) {
console.log(startingPlayer)
console.log(`Player 1 with Symbol X is ${playerOne} and Player 2 with Symbol O is ${playerTwo} and Player ${startingPlayer} will start the game!`)
} else if (modeSelection == 2 || startingPlayer == "X") {
  console.log(`${playerOne} with X plays against AI (O), and ${startingPlayer} will start the game`)
} else if (modeSelection == 2 || startingPlayer == "O") {
  console.log(`${playerOne} with X plays against AI (O) and ${startingPlayer} will start the game`)
}

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
    console.log('A ' + (board["7"] || '. ') + " | " + (board["8"] || ' . ') + " | " + (board["9"] || ' . '));
    console.log("---------------");
    console.log('B ' + (board["4"] || '. ') + " | " + (board["5"] || ' . ') + " | " + (board["6"] || ' . '));
    console.log("---------------");
    console.log('C ' + (board["1"] || '. ') + " | " + (board["2"] || ' . ') + " | " + (board["3"] || ' . '));
    console.log(" ");
    console.groupEnd();
};

function solutions(board) {
  return false
      // horizontal
      || (board["1"] && (board["1"] == board["2"] && board["1"] == board["3"]))
      || (board["4"] && (board["4"] == board["5"] && board["4"] == board["6"]))
      || (board["7"] && (board["7"] == board["8"] && board["7"] == board["9"]))
      // vertical
      || (board["1"] && (board["1"] == board["4"] && board["1"] == board["7"]))
      || (board["2"] && (board["2"] == board["5"] && board["2"] == board["8"]))
      || (board["3"] && (board["3"] == board["6"] && board["3"] == board["9"]))
      // diagonal
      || (board["1"] && (board["1"] == board["5"] && board["1"] == board["9"]))
      || (board["3"] && (board["3"] == board["5"] && board["3"] == board["7"]));
};

function pc_move(board, playerSymbol, opponentSymbol){
  let testBoard;
  // try to finish, then try to block opponent
  const player = [playerSymbol, opponentSymbol];
  for (var p = 0 ; p < 2; p++){
      for (var i = 1 ; i < 10; i++){
          if(board[i.toString()] !== null){
              continue;
          }
          testBoard = Object.assign({}, board);
          testBoard[i.toString()] = player[p];
          if(solutions(testBoard)){
              return i.toString();
          }
      }
  }

  // guess any other free field
  let guess = undefined;
  while(guess === undefined || board[guess] !== null){
      guess = Math.floor(Math.random() * 10 + 1).toString();
  }
  return guess;
}

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
          "1" : null,
          "2" : null,
          "3" : null,
          "4" : null,
          "5" : null,
          "6" : null,
          "7" : null,
          "8" : null,
          "9" : null
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
                  ask = prompt(`${currentPlayer.title} (${currentPlayer.symbol}) where would you like to go A-C1-3? (as example: A1) (type "exit" to leave)`);
                  if (ask === "C1") {
                    console.log(`AI selected: C1`)
                    ask = "1"
                  } else if (ask === "C2") {
                    console.log(`AI selected: C2`)
                    ask = "2"
                  } else if (ask === "C3") {
                    console.log(`AI selected: C3`)
                    ask = "3"
                  } else if (ask === "B1") {
                    console.log(`AI selected: B1`)
                    ask = "4"
                  } else if (ask === "B2") {
                    console.log(`AI selected: B2`)
                    ask = "5"
                  } else if (ask === "B3") {
                    console.log(`AI selected: B3`)
                    ask = "6"
                  } else if (ask === "A1") {
                    console.log(`AI selected: A1`)
                    ask = "7"
                  } else if (ask === "A2") {
                    console.log(`AI selected: A2`)
                    ask = "8"
                  } else if (ask === "A3") {
                    console.log(`AI selected: A3`)
                    ask = "9"
                  } else if(ask == 'exit') {
                      gameOn = false;
                      break;
                  }
              }
          }
          if(gameOn == false) {
              break;
          }

          console.log(ask)
          board[ask] = currentPlayer.symbol;
          player1Move = !player1Move;
          drawBoard(round++, board);
      }
      if(gameOn === true) {
          console.log("%cTie Game!", "font-size: x-large");
          gameOn = false;
      }
      if(ask !== 'exit' && prompt("Play again? (YES/no)") !== "no"){
          selectLevel();
      }
  }
}

ttt();