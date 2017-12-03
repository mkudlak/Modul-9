/*
var newGameBtn = document.getElementById('js-newGameButton');

newGameBtn.addEventListener('click', newGame);

//Wybór gracza

var pickRock = document.getElementById('js-playerPick_rock'),
    pickPaper = document.getElementById('js-playerPick_paper'),
    pickScissors = document.getElementById('js-playerPick_scissors');

pickRock.addEventListener('click', function() { playerPick('rock') });
pickPaper.addEventListener('click', function() { playerPick('paper') });
pickScissors.addEventListener('click', function() {playerPick('scissors') });

//Wartości początkowe

var gameState = 'notStarted',  //started // ended
    player = {
        name: '',
        score: 0
    },
    computer = {
        score: 0
    };

//Wyświetlanie elementów gry

var newGameElem = document.getElementById('js-newGameElement'),
    pickElem = document.getElementById('js-playerPickElement'),
    resultsElem = document.getElementById('js-resultsTableElement');

function setGameElements() {
    switch(gameState) {
        case 'started':
            newGameElem.style.display = 'none';
            pickElem.style.display = 'block';
            resultsElem.style.display = 'block';
            break;
        case 'ended':
            newGameBtn.innerText = 'Jeszcze raz';
            playerPickElem.innerText = 'Player selection';
            computerPickElem.innerText = 'Computer selection';
            playerResultElem.innerText = 'Player Score';
            computerResultElem.innerText = 'Computer Score';
        case 'notStarted':
        default:
            newGameElem.style.display = 'block';
            pickElem.style.display = 'none';
            resultsElem.style.display = 'none';
         
    }
    
}
setGameElements();

//Rozpoczęcie gry

var playerPointsElem = document.getElementById('js-playerPoints'),
    playerNameElem = document.getElementById('js-playerName'),
    computerPointsElem = document.getElementById('js-computerPoints');

function newGame() {
    player.name = prompt('Please enter your name', 'Your name');
    if (player.name) {
        player.score = computer.score = 0;
        gameState = 'started';
        setGameElements();

        playerNameElem.innerHTML = player.name;
        setGamePoints();
    }
    
}

//Losowanie wyboru komputera

function getComputerPick() {
    var possiblePicks = ['rock', 'paper', 'scissors'];
    return possiblePicks[Math.floor(Math.random()*3)];
}

var playerPickElem = document.getElementById('js-playerPick'),
    computerPickElem = document.getElementById('js-computerPick'),
    playerResultElem = document.getElementById('js-playerResult'),
    computerResultElem = document.getElementById('js-computerResult');

//Logika gry i przyznawania punktów

function checkRoundWinner(playerPick, computerPick) {
    playerResultElem.innerHTML = computerResultElem.innerHTML = '';

    var winnerIs = 'player';

    if (playerPick == computerPick) {
        winnerIs = 'none'; // remis
    } else if (
        (computerPick == 'rock' &&  playerPick == 'scissors') ||
        (computerPick == 'scissors' &&  playerPick == 'paper') ||
        (computerPick == 'paper' &&  playerPick == 'rock')) {

        winnerIs = 'computer';
    }

    if (winnerIs == 'player') {
        playerResultElem.innerHTML = "Win!";
        player.score++;
    } else if (winnerIs == 'computer') {
        computerResultElem.innerHTML = "Win!";
        computer.score++;
    } else {
        playerResultElem.innerHTML = computerResultElem.innerHTML = "Draw!";

    }
    setGamePoints();
    endGame();
}

function playerPick(playerPick) {
    var computerPick = getComputerPick();
    
    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;
    
    checkRoundWinner(playerPick, computerPick);
}


//Aktualizacja wyniku

function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}

//Zakończenie rozgrywki

function endGame() {
    if (player.score == 10) {
        alert(player.name +' is the winner!');
        gameState = 'ended'
    setGameElements();
    } else if (computer.score == 10) {
        alert('Computer is the winner!');
        gameState = 'ended'
    setGameElements();
    }
}
*/











var newGameBtn = document.getElementById('js-newGameButton');

newGameBtn.addEventListener('click', newGame);

var pickRock = document.getElementById('js-playerPick_rock'),
pickPaper = document.getElementById('js-playerPick_paper'),
pickScissors = document.getElementById('js-playerPick_scissors');

pickRock.addEventListener('click', function() { playerPick('ROCK') });
pickPaper.addEventListener('click', function() { playerPick('PAPER') });
pickScissors.addEventListener('click', function() { playerPick('SCISSORS') });


var gameState = 'notStarted',  //started // ended
player = {
    name: '',
    score: 0
},
computer = {
    score: 0
};


var newGameElem = document.getElementById('js-newGameElement'),
pickElem = document.getElementById('js-playerPickElement'),
resultsElem = document.getElementById('js-resultsTableElement');


function setGameElements() {
  switch(gameState) {
    case 'started':
        newGameElem.style.display = 'none';
        pickElem.style.display = 'block';
        resultsElem.style.display = 'block';
      break;
    case 'ended':
        newGameBtn.innerText = 'Try one more time';
    case 'notStarted':
    default:
        newGameElem.style.display = 'block';
        pickElem.style.display = 'none';
        resultsElem.style.display = 'none';
  }
}
setGameElements();

var playerPointsElem = document.getElementById('js-playerPoints'),
playerNameElem = document.getElementById('js-playerName'),
computerPointsElem = document.getElementById('js-computerPoints');


function newGame() {
  player.name = prompt('Please enter your name', 'imię gracza');
  if (player.name) {
    player.score = computer.score = 0;
    gameState = 'started';
    setGameElements();

    playerNameElem.innerHTML = player.name;
    setGamePoints(); 
  }

}

function playerPick(playerPick) {
  console.log(playerPick);
}


var x = Math.random();
Math.floor(Math.random()*3)

function getComputerPick() {
  var possiblePicks = ['ROCK', 'PAPER', 'SCISSORS'];
  return possiblePicks[Math.floor(Math.random()*3)];
}

var playerPickElem = document.getElementById('js-playerPick'),
computerPickElem = document.getElementById('js-computerPick'),
playerResultElem = document.getElementById('js-playerResult'),
computerResultElem = document.getElementById('js-computerResult');

function playerPick(playerPick) {
  var computerPick = getComputerPick();

  playerPickElem.innerHTML = playerPick;
  computerPickElem.innerHTML = computerPick;
}

function checkRoundWinner(playerPick, computerPick) {
  playerResultElem.innerHTML = computerResultElem.innerHTML = '';

  var winnerIs = 'player';

    if (playerPick == computerPick) {
        winnerIs = 'noone'; // remis
    } else if (
        (computerPick == 'ROCK' &&  playerPick == 'SCISSORS') ||
        (computerPick == 'SCISSORS' &&  playerPick == 'PAPER') ||
        (computerPick == 'PAPER' &&  playerPick == 'ROCK')) {

        winnerIs = 'computer';
    }

    if (winnerIs == 'player') {
        playerResultElem.style.color='green';
        playerResultElem.innerHTML = 'WIN!';
        player.score ++;
    } else if (winnerIs == 'computer') {
        computerResultElem.style.color='red';
        computerResultElem.innerHTML = 'WIN!';
        computer.score++;
    } else {
      playerResultElem.innerHTML = computerResultElem.innerHTML = "Goalless draw!";
    }
    setGamePoints(); //zapomnialas tego dodac przez co sie wynik nie aktualizowal
    winnerOfTheGame();
}

function playerPick(playerPick) {
  var computerPick = getComputerPick();

  playerPickElem.innerHTML = playerPick;
  computerPickElem.innerHTML = computerPick;

  checkRoundWinner(playerPick, computerPick);
}

function setGamePoints() {
  playerPointsElem.innerHTML = player.score;
  computerPointsElem.innerHTML = computer.score;
}



function winnerOfTheGame () {
  if (player.score == 10) {
    alert("YOU WON!!! " + player.name);
    gameState = 'ended'
  } else if (computer.score == 10) {
    alert("GAME OVER!!");
    gameState = 'ended'

  }
  setGameElements();
}



console.log(setGamePoints);

console.log(playerPointsElem);
console.log(playerPointsElem.innerHTML);
console.log(player.score);
console.log(player.score++);

