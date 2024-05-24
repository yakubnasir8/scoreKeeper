const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const resetBtn = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let gameOver = false;
// let reset = 0;

btn1.addEventListener('click', function() {
    if(!gameOver) {
        p1Score +=1;
    }
    if(p1Score === winningScore) {
        gameOver = true;
        p1Display.classList.add('winner');
        p2Display.classList.add('loser');
    }
    p1Display.textContent = p1Score;
})
btn2.addEventListener('click', function() {
    if(!gameOver) {
        p2Score +=1;
    }
    if(p2Score === winningScore) {
        gameOver = true;
        p2Display.classList.add('winner');
        p1Display.classList.add('loser');
    }
    p2Display.textContent = p2Score;
})

winningScoreSelect.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    reset();
})

resetBtn.addEventListener('click', reset)

function reset() {
    gameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('winner', 'loser')
    p2Display.classList.remove('winner', 'loser')
}


    
