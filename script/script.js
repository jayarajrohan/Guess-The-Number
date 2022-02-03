function generateNumber() {
  return Math.floor(Math.random() * 20 + 1);
}

function checkClicked() {
  let userGuess = document.getElementById("number-guessed").value;
  document.getElementById("number-guessed").value = "";
  if (userGuess !== "") {
    userGuess = Number(userGuess);
    guess(userGuess);
  } else {
    document.getElementById("instruction").textContent =
      "Please enter a number";
  }
}

function guess(userGuess) {
  let score = Number(document.getElementById("score").textContent);
  if (userGuess === numberToBeGuessed) {
    document.getElementById("instruction").textContent = "Successful";
    let highScore = Number(document.getElementById("high-score").textContent);
    if (score > highScore) {
      document.getElementById("high-score").textContent = score;
    }
    successStyle();
  } else {
    score -= 1;
    document.getElementById("score").textContent = score;
    if (userGuess > numberToBeGuessed) {
      document.getElementById("instruction").textContent = "Too high";
    } else {
      document.getElementById("instruction").textContent = "Too low";
    }
  }
}

function successStyle() {
  document.getElementById("check").disabled = true;
  document.getElementById("check").style.cursor = "not-allowed";
  document.getElementById("box2").style.backgroundColor = "#1dbf38";
  document.getElementById("title").textContent = "You won!";
  document.getElementById("check").style.backgroundColor = "#1dbf38";
  document.getElementById("again").style.backgroundColor = "#1dbf38";
  document.getElementById("number-guessed").style.backgroundColor = "#1dbf38";
}

function playAgain() {
  numberToBeGuessed = generateNumber();
  document.getElementById("check").disabled = false;
  document.getElementById("check").style.cursor = "pointer";
  document.getElementById("score").textContent = "20";
  document.getElementById("instruction").textContent = "";
  document.getElementById("box2").style.backgroundColor = "rgb(168, 162, 162)";
  document.getElementById("title").textContent = "Guess The Number";
  document.getElementById("check").style.backgroundColor = "rgb(168, 162, 162)";
  document.getElementById("again").style.backgroundColor = "rgb(168, 162, 162)";
  document.getElementById("number-guessed").style.backgroundColor =
    "rgb(168, 162, 162)";
}

let numberToBeGuessed = generateNumber();
