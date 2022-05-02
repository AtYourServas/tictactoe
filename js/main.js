const grid = []
//assign all sections in the board grid to an element in the grid array
for (let i = 0; i <= 8; i++) {
    grid[i] = document.getElementById('grid' + i)
}

let player1Turn = true

document.querySelector('#gridBoard').addEventListener('click', (event) => {
    console.log(event.target.id)
    
    takeTurn(event.target.id)
})


function takeTurn(target) {

    target = document.getElementById(target)

    if (target.classList.contains('player1') || target.classList.contains('player2')) {
        alert('This spot has been chosen.  Try another')
    }
    else {
        if (player1Turn == true) {
            target.classList.add('player1')
            target.classList.remove('player2')
            player1Turn = false
            
        }
         else {
            target.classList.add('player2')
            target.classList.remove('player1')
            player1Turn = true
        }
        checkForPlayer1Win()
        checkForPlayer2Win()
    }
}

function checkForPlayer1Win() {
    if (grid[0].classList.contains('player1') && grid[1].classList.contains('player1') && grid[2].classList.contains('player1')) {
        alert('Player 1 Wins')
    }
    else if (grid[3].classList.contains('player1') && grid[4].classList.contains('player1') && grid[5].classList.contains('player1')) {
        alert('Player 1 Wins')
    }
    else if (grid[6].classList.contains('player1') && grid[7].classList.contains('player1') && grid[8].classList.contains('player1')) {
        alert('Player 1 Wins')
    }
    else if (grid[0].classList.contains('player1') && grid[3].classList.contains('player1') && grid[6].classList.contains('player1')) {
        alert('Player 1 Wins')
    }
    else if (grid[1].classList.contains('player1') && grid[4].classList.contains('player1') && grid[7].classList.contains('player1')) {
        alert('Player 1 Wins')
    }
    else if (grid[2].classList.contains('player1') && grid[5].classList.contains('player1') && grid[8].classList.contains('player1')) {
        alert('Player 1 Wins')
    }
    else if (grid[0].classList.contains('player1') && grid[4].classList.contains('player1') && grid[8].classList.contains('player1')) {
        alert('Player 1 Wins')
    }
    else if (grid[2].classList.contains('player1') && grid[4].classList.contains('player1') && grid[6].classList.contains('player1')) {
        alert('Player 1 Wins')
    }
}

function checkForPlayer2Win() {
    if (grid[0].classList.contains('player2') && grid[1].classList.contains('player2') && grid[2].classList.contains('player2')) {
        alert('Player 2 Wins')
    }
    else if (grid[3].classList.contains('player2') && grid[4].classList.contains('player2') && grid[5].classList.contains('player2')) {
        alert('Player 2 Wins')
    }
    else if (grid[6].classList.contains('player2') && grid[7].classList.contains('player2') && grid[8].classList.contains('player2')) {
        alert('Player 2 Wins')
    }
    else if (grid[0].classList.contains('player2') && grid[3].classList.contains('player2') && grid[6].classList.contains('player2')) {
        alert('Player 2 Wins')
    }
    else if (grid[1].classList.contains('player2') && grid[4].classList.contains('player2') && grid[7].classList.contains('player2')) {
        alert('Player 2 Wins')
    }
    else if (grid[2].classList.contains('player2') && grid[5].classList.contains('player2') && grid[8].classList.contains('player2')) {
        alert('Player 2 Wins')
    }
    else if (grid[0].classList.contains('player2') && grid[4].classList.contains('player2') && grid[8].classList.contains('player2')) {
        alert('Player 2 Wins')
    }
    else if (grid[2].classList.contains('player2') && grid[4].classList.contains('player2') && grid[6].classList.contains('player2')) {
        alert('Player 2 Wins')
    }
}


//function to reset grid
function reloadPage(){
    window.location.reload();
 }