const luke = document.getElementById('one');
const vader = document.getElementById('two');
const playerText = document.getElementById('player');
const botText = document.getElementById('bot');
const start = document.getElementById('start');
const mainContainer = document.getElementById('mainContainer');

const gameBoard = (function () {

    const board = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'];

})();

const playerFactory = (name, number) => {

    let playerOne = 'Player One';
    let playerTwo = 'Player Two';

    number === 1 ? playerOne = name : playerTwo = name;
}

luke.addEventListener('click', () => {
    luke.style.border = '5px solid lightgreen';
    vader.style.border = '5px solid white';
});

vader.addEventListener('click', () => {
    vader.style.border = '5px solid lightgreen';
    luke.style.border = '5px solid white';
});

start.addEventListener('click', () => {
    mainContainer.style.display = 'none';
    const ticBoard = document.createElement('img');
    const boardContainer = document.createElement('div');
    boardContainer.id = 'boardContainer';
    ticBoard.src = 'images/tic-tac.png';
    ticBoard.id = 'ticBoard';
    document.body.appendChild(boardContainer);
    boardContainer.appendChild(ticBoard);
});

