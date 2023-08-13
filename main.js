const retrieveElements = (() => {

    const luke = document.getElementById('one');
    const vader = document.getElementById('two');
    const playerText = document.getElementById('player');
    const botText = document.getElementById('bot');
    const start = document.getElementById('start');
    const mainContainer = document.getElementById('mainContainer');
    const secondContainer = document.getElementById('secondContainer');
    const nameContainer = document.getElementById('nameContainer');
    const boardGrid = document.getElementById('boardGrid');
    const submit = document.getElementById('submit');
    const scoreboard = document.getElementById('scoreboard');
    const oneScore = document.getElementById('oneScore');
    const twoScore = document.getElementById('twoScore');
    const playerboard = document.getElementById('playerboard');
    const turnBox = document.getElementById('turn');
    const oneName = document.getElementById('oneName');
    const twoName = document.getElementById('twoName');
    const name1 = document.getElementById('name1');
    const name2 = document.getElementById('name2');
    const cell1 = document.getElementById('cell1');
    const cell2 = document.getElementById('cell2');
    const cell3 = document.getElementById('cell3');
    const cell4 = document.getElementById('cell4');
    const cell5 = document.getElementById('cell5');
    const cell6 = document.getElementById('cell6');
    const cell7 = document.getElementById('cell7');
    const cell8 = document.getElementById('cell8');
    const cell9 = document.getElementById('cell9');
    const cells = [cell1, cell2, cell3 , cell4, cell5, cell6, cell7, cell8, cell9];

    return {
        luke,
        vader,
        playerText,
        botText,
        start,
        mainContainer,
        secondContainer,
        nameContainer,
        boardGrid,
        submit,
        scoreboard,
        oneScore,
        twoScore,
        playerboard,
        turnBox,
        oneName,
        twoName,
        name1,
        name2,
        cell1,
        cell2,
        cell3,
        cell4,
        cell5,
        cell6,
        cell7,
        cell8,
        cell9,
        cells
    };
})();

const gameBoard = (function () {

    const board = [];

    let turn = 'one';
    let game = 'ongoing';
    let playerOneScore = 0;
    let playerTwoScore = 0;

    for (const cell of retrieveElements.cells) {
        cell.addEventListener('click', () => {

            if (cell.textContent === '') {
                if (turn === 'one') {
                    board.push('X');
                    cell.textContent = board[0];
                    retrieveElements.turnBox.textContent = retrieveElements.name2.value + "'s Turn";
                    retrieveElements.turnBox.style.backgroundColor = 'rgb(177, 44, 44)';
                    turn = 'two';
                } else {
                    board.push('O');
                    cell.textContent = board[1];
                    retrieveElements.turnBox.textContent = retrieveElements.name1.value + "'s Turn";
                    retrieveElements.turnBox.style.backgroundColor = 'rgb(58, 204, 119)';
                    turn = 'one';
                }
            }

            if (cell1.textContent === 'X' && cell2.textContent === 'X' && cell3.textContent === 'X') {
                reset('one');
            } else if (cell1.textContent === 'O' && cell2.textContent === 'O' && cell3.textContent === 'O') {
                reset('two');
            } else if (cell4.textContent === 'X' && cell5.textContent === 'X' && cell6.textContent === 'X') {
                reset('one');
            } else if (cell4.textContent === 'O' && cell5.textContent === 'O' && cell6.textContent === 'O') {
                reset('two');
            } else if (cell7.textContent === 'X' && cell8.textContent === 'X' && cell9.textContent === 'X') {
                reset('one'); 
            } else if (cell7.textContent === 'O' && cell8.textContent === 'O' && cell9.textContent === 'O') {
                reset('two');
            }else if (cell1.textContent === 'X' && cell4.textContent === 'X' && cell7.textContent === 'X') {
                reset('one');  
            } else if (cell1.textContent === 'O' && cell4.textContent === 'O' && cell7.textContent === 'O') {
                reset('two'); 
            }else if (cell2.textContent === 'X' && cell5.textContent === 'X' && cell8.textContent === 'X') {
                reset('one'); 
            } else if (cell2.textContent === 'O' && cell5.textContent === 'O' && cell8.textContent === 'O') {
                reset('two');
            }else if (cell3.textContent === 'X' && cell6.textContent === 'X' && cell9.textContent === 'X') {
                reset('one'); 
            } else if (cell3.textContent === 'O' && cell6.textContent === 'O' && cell9.textContent === 'O') {
                reset('two'); 
            }else if (cell1.textContent === 'X' && cell5.textContent === 'X' && cell9.textContent === 'X') {
                reset('one'); 
            } else if (cell1.textContent === 'O' && cell5.textContent === 'O' && cell9.textContent === 'O') {
                reset('two');  
            }else if (cell3.textContent === 'X' && cell5.textContent === 'X' && cell7.textContent === 'X') {
                reset('one'); 
            } else if (cell3.textContent === 'O' && cell5.textContent === 'O' && cell7.textContent === 'O') {
                reset('two');
            }
        });
    }

    return {
        game,
        playerOneScore,
        playerTwoScore
    }

})();

function reset(winner) {

    if (winner === 'one') {
        if (gameBoard.playerOneScore < 2) {
            gameBoard.playerOneScore++;
            retrieveElements.oneScore.textContent = gameBoard.playerOneScore;
            for (let i = 0; i < 9; i++) {
                retrieveElements.cells[i].textContent = '';
            }
        } else {
            gameBoard.playerOneScore++;
            retrieveElements.oneScore.textContent = gameBoard.playerOneScore;
            setTimeout(function() {
                alert('Player one wins! Game over.');
            }, 1000);
            setTimeout(function() {
                mainContainer.style.display = 'block';
                secondContainer.style.display = 'none';
            }, 2000);
            setTimeout(function() {
                for (let i = 0; i < 9; i++) {
                    retrieveElements.cells[i].textContent = '';
                }
                gameBoard.playerOneScore = 0;
                gameBoard.playerTwoScore = 0;
                retrieveElements.oneScore.textContent = gameBoard.playerOneScore;
                retrieveElements.twoScore.textContent = gameBoard.playerTwoScore;
            }, 2001);
        }
    }

    if (winner === 'two') {
        if (gameBoard.playerTwoScore < 2) {
            gameBoard.playerTwoScore++;
            retrieveElements.twoScore.textContent = gameBoard.playerTwoScore;
            for (let i = 0; i < 9; i++) {
                retrieveElements.cells[i].textContent = '';
            }
        } else {
            gameBoard.playerTwoScore++;
            retrieveElements.twoScore.textContent = gameBoard.playerTwoScore;
            setTimeout(function() {
                alert('Player one wins! Game over.');
            }, 1000);
            setTimeout(function() {
                mainContainer.style.display = 'block';
                secondContainer.style.display = 'none';
            }, 2000);
            setTimeout(function() {
                for (let i = 0; i < 9; i++) {
                    retrieveElements.cells[i].textContent = '';
                }
                gameBoard.playerOneScore = 0;
                gameBoard.playerTwoScore = 0;
                retrieveElements.oneScore.textContent = gameBoard.playerOneScore;
                retrieveElements.twoScore.textContent = gameBoard.playerTwoScore;
            }, 2001);
        }
    } 
}

function playerFactory(name, number) {

    number === 1 ? playerOne = name : playerTwo = name;

    return {
        name: name,
        number: number,
    };
}

const eventListeners = (() => {

    retrieveElements.luke.addEventListener('click', () => {
        luke.style.border = '5px solid lightgreen';
        vader.style.border = '5px solid white';
    });
    
    retrieveElements.vader.addEventListener('click', () => {
        vader.style.border = '5px solid lightgreen';
        luke.style.border = '5px solid white';
    });
    
    retrieveElements.start.addEventListener('click', () => {
        mainContainer.style.display = 'none';
        nameContainer.style.display = 'flex';
    });
    
    window.addEventListener('DOMContentLoaded', () => {
        mainContainer.style.display = 'none';
        secondContainer.style.display = 'none';
        console.log('Loaded!')

        retrieveElements.oneName.textContent = 'Daniel';
        retrieveElements.twoName.textContent = 'Michael';
    });
    
    retrieveElements.submit.addEventListener('click', () => {
        nameContainer.style.display = 'none';
        secondContainer.style.display = 'flex';
        game = 'ongoing';

        playerFactory(retrieveElements.name1.value, 1);
        playerFactory(retrieveElements.name2.value, 2);

        retrieveElements.oneName.textContent = retrieveElements.name1.value;
        retrieveElements.twoName.textContent = retrieveElements.name2.value;
    
        for (let i = 0; i < 9; i++) {
            retrieveElements.cells[i].textContent = '';
        }
    });
})();