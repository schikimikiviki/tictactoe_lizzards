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
