const playButton = document.getElementById("play-button");
const scoreDisplay = document.getElementById("score");

let currentScore = 0;
playButton.addEventListener("click", function() {
  currentScore += 1;
  scoreDisplay.innerHTML = "Score: " + currentScore;
});