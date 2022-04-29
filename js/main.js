const grid = []
//assign all sections in the bingo grid to an element in the grid array
for (let i = 0; i <= 8; i++) {
    grid[i] = document.getElementById('grid' + i)
}

let player1Turn = true

grid[0].addEventListener('click', takeTurn)


function takeTurn() {
  if (player1Turn == true) {
        grid[0].classList.add('player1')
        grid[0].classList.remove('player2')
        player1Turn = false
        
    }
     else {
        grid[0].classList.add('player2')
        grid[0].classList.remove('player1')
        player1Turn = true
    }
}

//function to reset grid
function reloadPage(){
    window.location.reload();
 }