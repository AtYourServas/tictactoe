
const turnStatus = document.querySelector('.turn-status')
const winStatus = document.querySelector('.win-status')
let player1Color = 'red'
let player2Color = 'blue'

function TicTacToe () {
    const grid = []
    //assign all sections in the board grid to an element in the grid array
    for (let i = 0; i <= 8; i++) {
         grid[i] = document.getElementById('grid' + i)
    }

    //Boolean to keep track if the game is over
    this.gameComplete = false

    //Boolean to keep track of who's turn it is
    this.player1Turn = true

    //Method for taking turns
    this.takeTurn = function (target) {
        //set space in grid to alter based on click event
        target = document.getElementById(target)
    
        //if someone has won or there was a tie, prompt the user to reset
        if (this.gameComplete) {
            alert('The game is over.  Please click reset to start a new game')
        }
        //check to see if the spot is already occupied and prompt to try again if so
        else if (target.classList.contains('player1') || target.classList.contains('player2')) {
            alert('This spot has been chosen.  Try another')
        }
        else {
            if (this.player1Turn == true) {
                //If it is player 1's turn, switch the grid to mark for player 1
                target.classList.add('player1')
                target.classList.add(player1Color)
                //change to player 2's turn
                this.player1Turn = false
                turnStatus.innerText = 'Player 2\'s Turn'
            }
             else {
                //if it is player 2's turn, switch the grid to mark for player 2
                target.classList.add('player2')
                target.classList.add(player2Color)
                //change to player 1's turn
                this.player1Turn = true
                turnStatus.innerText = 'Player 1\'s Turn'
            }
    
            this.checkForPlayer1Win()
            this.checkForPlayer2Win()
            this.checkForTie()
        }
    }

    //Method to check if Player 1 wins
    this.checkForPlayer1Win = function() {
        if (grid[0].classList.contains('player1') && grid[1].classList.contains('player1') && grid[2].classList.contains('player1') ||
        grid[3].classList.contains('player1') && grid[4].classList.contains('player1') && grid[5].classList.contains('player1') ||
        grid[6].classList.contains('player1') && grid[7].classList.contains('player1') && grid[8].classList.contains('player1') ||
        grid[0].classList.contains('player1') && grid[3].classList.contains('player1') && grid[6].classList.contains('player1') ||
        grid[1].classList.contains('player1') && grid[4].classList.contains('player1') && grid[7].classList.contains('player1') ||
        grid[2].classList.contains('player1') && grid[5].classList.contains('player1') && grid[8].classList.contains('player1') ||
        grid[0].classList.contains('player1') && grid[4].classList.contains('player1') && grid[8].classList.contains('player1') ||
        grid[2].classList.contains('player1') && grid[4].classList.contains('player1') && grid[6].classList.contains('player1')) {
            this.player1Wins()
        }
    }

    //Method to check if Player 2 wins
    this.checkForPlayer2Win = function() {
        if (grid[0].classList.contains('player2') && grid[1].classList.contains('player2') && grid[2].classList.contains('player2') ||
        grid[6].classList.contains('player2') && grid[7].classList.contains('player2') && grid[8].classList.contains('player2') ||
        grid[0].classList.contains('player2') && grid[3].classList.contains('player2') && grid[6].classList.contains('player2') ||
        grid[1].classList.contains('player2') && grid[4].classList.contains('player2') && grid[7].classList.contains('player2') ||
        grid[2].classList.contains('player2') && grid[5].classList.contains('player2') && grid[8].classList.contains('player2') ||
        grid[3].classList.contains('player2') && grid[4].classList.contains('player2') && grid[5].classList.contains('player2') ||
        grid[0].classList.contains('player2') && grid[4].classList.contains('player2') && grid[8].classList.contains('player2') ||
        grid[2].classList.contains('player2') && grid[4].classList.contains('player2') && grid[6].classList.contains('player2')) {
            this.player2Wins()
        }

    
    }
    
    //Method to check for a tie
    this.checkForTie = function() {
        let tie = 0
        //if each element of the grid is occupied by player1 or player2, add 1 to tie
       grid.forEach( elem => elem.classList.contains('player1') || elem.classList.contains('player2') ? tie += 1 : null)
       //if tie is equal to 9, all spaces are occupied so advise the user there is a tie 
       tie === 9 ? winStatus.innerText = 'It\'s a tie! Click reset to play again' : null;
    }

    //if player 1 wins, show status in DOM and change gameComplete boolean to true
    this.player1Wins = function () {
    winStatus.innerText = 'Player 1 Wins!'
    this.gameComplete = true;
    }

    //if player 2 wins, show status in DOM and change gameComplete boolean to true
    this.player2Wins = function() {
        winStatus.innerText = 'Player 2 Wins!'
        this.gameComplete = true;
    }
}


let game = new TicTacToe

//call function to take turn based on where on the grid was clicked
document.querySelector('#gridBoard').addEventListener('click', (event) => {
    game.takeTurn(event.target.id)
})

//When the reset button is clicked, call function to reload page
document.querySelector('.reset').addEventListener('click', reloadPage)

//function to reset grid
function reloadPage(){
    window.location.reload();
 }




 //Change Player Settings

 document.querySelector('.settings-container').addEventListener('click', (event) => {
    changeColor(event.target.id)
 })

 function changeColor(target) {
     //color list
     const colorList = ['red', 'orange', 'yellow', 'green', 'blue']
     //determine if clicked player1 or player2
     let user = target[target.length-1]
     //determine color clicked on
     let color = target.slice(0, -1)

     //identify all spaces currently occupied by player1
    let player1Occ = document.querySelectorAll('.player1')
     //identify all spaces currently occupied by player2
     let player2Occ = document.querySelectorAll('.player2')

     if (target !== '') {
        if (user == 1) {
            //change all future spaces selected by player 1
            player1Color = color
            //change all currently occupied spaces of player1
            player1Occ.forEach( elem => {
                elem.classList.remove(...colorList)
                elem.classList.add(color)})

        }
        else if (user == 2) {
            //change all future spaces selected by player 2
            player2Color = color
            //change all current spaces selected by player 2
            player2Occ.forEach( elem => {
                elem.classList.remove(...colorList)
                elem.classList.add(color)})
            
        }
     }
     //if user clicks on something other than a color, do nothing
     else {
        
     }
 }