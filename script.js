let playerOne = document.querySelector('#player1');
let playerTwo = document.querySelector('#player2');
let result = document.querySelector('#result');

let button = document.querySelector('#role').addEventListener('click', function generateRandomNum() {
    let playerOneScore = Math.floor(Math.random() * 6) + 1;
    let playerTwoScore = Math.floor(Math.random() * 6) + 1;

    playerOne.innerText = playerOneScore; 
    playerTwo.innerText = playerTwoScore; 
    
    if (playerOneScore > playerTwoScore) {
        result.innerText = "Player 1 wins! 🎉";
    } else if (playerTwoScore > playerOneScore) {
        result.innerText = "Player 2 wins! 🎉";
    }else{
        result.innerText = "It's a tie! 😐";
    }

});

