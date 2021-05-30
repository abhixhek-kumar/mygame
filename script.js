'use strict'

let secretNumber =  Math.trunc((Math.random()*20)+1);
console.log(secretNumber);
let score = 20;

document.querySelector(".guess").addEventListener("click", function() {
    const guess = Number(document.querySelector('.input2').value);
    //console.log(typeof value, value);
    if (!guess) {
        document.querySelector('.message').textContent = 'No Number';
    }
    else if(guess === secretNumber) {
        document.querySelector(".secret-number").style.fontSize = '1.2rem';
        document.querySelector('.message').textContent = '🎉 Correct Number';
        document.querySelector('.secret-number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#14ec00'
        document.querySelector(".high-score").textContent = score;
        document.querySelector(".message").style.fontSize = '39px'

    }
    else if(guess < secretNumber) {
        document.querySelector('.message').textContent = '📉 Too low Try Again';
        score--;
        document.querySelector('.score').textContent = score;
        document.querySelector(".score").style.backgroundColor = '#e60000';
        
        if(score < 1) {
            document.querySelector(".score").textContent = 0;
            document.querySelector(".message").textContent = "💥 You lost the Game";
            document.querySelector("body").style.backgroundColor = '#e60000';
            document.querySelector(".secret-number").textContent = secretNumber;

        }


    }
    else if(guess > secretNumber) {
        document.querySelector('.message').textContent = '📈 Too High Try Again';
        score--;
        document.querySelector('.score').textContent = score;
        document.querySelector(".score").style.backgroundColor = '#e60000';
        document.querySelector(".message").style.fontSize = '1.3rem'
        /*document.querySelector(".message").style.fontWeight = '900'*/
        

        if(score < 1) {
            document.querySelector(".score").textContent = 0;
            document.querySelector(".message").textContent = "💥 You lost the Game";
            document.querySelector("body").style.backgroundColor = '#e60000';
            document.querySelector(".secret-number").textContent = secretNumber;
            


        }

    }

});



document.querySelector(".again1").addEventListener("click", function(){
    score = 20;
    secretNumber =  Math.trunc((Math.random()*20)+1);
    document.querySelector(".message").textContent = 'Start Guessing...';
    document.querySelector('.input2').value = "";
    document.querySelector(".score").textContent = score;
    document.querySelector("body").style.backgroundColor = '#685e5e';
    document.querySelector(".score").style.backgroundColor = '#ffffff00';
    document.querySelector(".secret-number").textContent = "?";
    document.querySelector(".message").style.fontSize = '1.7rem';
    document.querySelector(".message").style.fontWeight = '900';
    document.querySelector(".secret-number").style.fontSize = '1.6rem';


})