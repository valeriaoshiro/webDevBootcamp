var button1 = document.querySelector('#button1');
var button2 = document.querySelector('#button2');
var reset = document.querySelector('#reset');
var displayScore1 = document.querySelector('#displayScore1');
var displayScore2 = document.querySelector('#displayScore2');
var numInput = document.querySelector('input');
var displayWinScore = document.querySelector('#winNumber');
var score1 = 0;
var score2 = 0;
var winScore = 5;
var gameOver = false;

button1.addEventListener("click", function(){
	score1++;
	if(score1 >= winScore && !gameOver){
		displayScore1.textContent = score1;
		displayScore1.classList.add("winner");
		gameOver = true;
	}else if(!gameOver){
		displayScore1.textContent = score1;
	}
});

button2.addEventListener("click", function(){
	score2++;
	if(score2 >= winScore && !gameOver){
		displayScore2.textContent = score2;
		displayScore2.classList.add("winner");
		gameOver = true;
	}else if(!gameOver){
		displayScore2.textContent = score2;
	}
});

reset.addEventListener("click", function(){
	displayScore1.textContent = 0;
	displayScore2.textContent = 0;
	displayScore1.classList.remove("winner");
	displayScore2.classList.remove("winner");
	score1 = 0;
	score2 = 0;
	gameOver = false;
	numInput.value = null;
	winScore = 5;
	displayWinScore.textContent = winScore;
});

numInput.addEventListener("change", function(){
	winScore = Number(this.value);
	displayWinScore.textContent = winScore;
});