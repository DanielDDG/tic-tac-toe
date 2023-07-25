const gameBoard = (function () {

    const board = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'];

})();

const playerFactory = (name, number) => {

    let playerOne = 'Player One';
    let playerTwo = 'Player Two';

    number === 1 ? playerOne = name : playerTwo = name;
}

