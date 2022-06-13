'use strict';

//Setting up Gamestate
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const setMessage = function (string) {
    document.querySelector(`.message`).textContent = string;
}


//Listen for guess click
document.querySelector(`.check`).addEventListener(`click`, function() {
    const guess = Number(document.querySelector(`.guess`).value);
//Guess click with score implemented
if (score > 1){
    //No input
    if(!guess){
        setMessage(`No number! 🛑`);
    
    //Winning
    } else if (guess === secretNumber){
        setMessage(`Correct Number 🎉!`);
        document.querySelector(`body`).style.backgroundColor = `#60b347`;
        document.querySelector(`.number`).style.width = `30rem`;
        document.querySelector(`.number`).textContent = secretNumber;
        if (score>highscore){
            highscore = score;
            document.querySelector(`.highscore`).textContent = highscore;
        }

    //Guess is wrong
    } else if (guess !== secretNumber){
        setMessage(guess > secretNumber ? `Too high! ☝` : `Too low 👇`); //Displays too high or low
        score --;
        document.querySelector(`.score`).textContent = score;
    }
    //Score = 0, losing.
} else {
    setMessage(`You lost the game!`);
    document.querySelector(`.score`).textContent = 0;
}
});


//Clicking again to reset
document.querySelector(`.again`).addEventListener(`click`, function(){
    setMessage(`Start guessing...`);
    secretNumber = (Math.trunc(Math.random()* 20)+1);
    document.querySelector(`.number`).textContent = `?`;
    document.querySelector(`.number`).style.width = `15rem`;
    document.querySelector(`body`).style.backgroundColor = '#222';
    score = 20;
    document.querySelector(`.score`).textContent = score;
    document.querySelector(`.guess`).value = ``;
});
