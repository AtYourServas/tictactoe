const grid = []
//assign all sections in the board grid to an element in the grid array
for (let i = 0; i <= 8; i++) {
    grid[i] = document.getElementById('grid' + i)
}
const turnStatus = document.querySelector('.turn-status')
const winStatus = document.querySelector('.win-status')
//Boolean to keep track if the game is over
let gameComplete = false

let player1Turn = true

//call function to take turn based on where on the grid was clicked
document.querySelector('#gridBoard').addEventListener('click', (event) => {
    takeTurn(event.target.id)
})

//When the reset button is clicked, call function to reload page
document.querySelector('.reset').addEventListener('click', reloadPage)


function takeTurn(target) {
    //set space in grid to alter based on click event
    target = document.getElementById(target)

    //if someone has won or there was a tie, prompt the user to reset
    if (gameComplete) {
        alert('The game is over.  Please click reset to start a new game')
    }
    //check to see if the spot is already occupied and prompt to try again if so
    else if (target.classList.contains('player1') || target.classList.contains('player2')) {
        alert('This spot has been chosen.  Try another')
    }
    else {
        if (player1Turn == true) {
            //If it is player 1's turn, switch the grid to mark for player 1
            target.classList.add('player1')
            target.classList.remove('player2')
            //change to player 2's turn
            player1Turn = false
            turnStatus.innerText = 'Player 2\'s Turn'
        }
         else {
            //if it is player 2's turn, switch the grid to mark for player 2
            target.classList.add('player2')
            target.classList.remove('player1')
            //change to player 1's turn
            player1Turn = true
            turnStatus.innerText = 'Player 1\'s Turn'
        }

        checkForPlayer1Win()
        checkForPlayer2Win()
        checkForTie()
    }
}

function checkForPlayer1Win() {
    if (grid[0].classList.contains('player1') && grid[1].classList.contains('player1') && grid[2].classList.contains('player1') ||
    grid[3].classList.contains('player1') && grid[4].classList.contains('player1') && grid[5].classList.contains('player1') ||
    grid[6].classList.contains('player1') && grid[7].classList.contains('player1') && grid[8].classList.contains('player1') ||
    grid[0].classList.contains('player1') && grid[3].classList.contains('player1') && grid[6].classList.contains('player1') ||
    grid[1].classList.contains('player1') && grid[4].classList.contains('player1') && grid[7].classList.contains('player1') ||
    grid[2].classList.contains('player1') && grid[5].classList.contains('player1') && grid[8].classList.contains('player1') ||
    grid[0].classList.contains('player1') && grid[4].classList.contains('player1') && grid[8].classList.contains('player1') ||
    grid[2].classList.contains('player1') && grid[4].classList.contains('player1') && grid[6].classList.contains('player1')) {
        player1Wins()
    }
}

function checkForPlayer2Win() {
    if (grid[0].classList.contains('player2') && grid[1].classList.contains('player2') && grid[2].classList.contains('player2') ||
    grid[6].classList.contains('player2') && grid[7].classList.contains('player2') && grid[8].classList.contains('player2') ||
    grid[0].classList.contains('player2') && grid[3].classList.contains('player2') && grid[6].classList.contains('player2') ||
    grid[1].classList.contains('player2') && grid[4].classList.contains('player2') && grid[7].classList.contains('player2') ||
    grid[2].classList.contains('player2') && grid[5].classList.contains('player2') && grid[8].classList.contains('player2') ||
    grid[3].classList.contains('player2') && grid[4].classList.contains('player2') && grid[5].classList.contains('player2') ||
    grid[0].classList.contains('player2') && grid[4].classList.contains('player2') && grid[8].classList.contains('player2') ||
    grid[2].classList.contains('player2') && grid[4].classList.contains('player2') && grid[6].classList.contains('player2')) {
        player2Wins()
    }
}

function checkForTie() {
    let tie = 0
    //if each element of the grid is occupied by player1 or player2, add 1 to tie
   grid.forEach( elem => elem.classList.contains('player1') || elem.classList.contains('player2') ? tie += 1 : null)
   //if tie is equal to 9, all spaces are occupied so advise the user there is a tie 
   tie === 9 ? winStatus.innerText = 'It\'s a tie! Click reset to play again' : null;
}

//if player 1 wins, show status in DOM and change gameComplete boolean to true
function player1Wins () {
    winStatus.innerText = 'Player 1 Wins!'
    gameComplete = true;
}

//if player 2 wins, show status in DOM and change gameComplete boolean to true
function player2Wins () {
    winStatus.innerText = 'Player 2 Wins!'
    gameComplete = true;
}

//function to reset grid
function reloadPage(){
    window.location.reload();
 }