//constants

//appstate variables

let board; 		//game board
let turn = 'X'; //starting move
let win = board[0] && board[0] === board[1] && board[0] === board[2] ? board[0] : null;

//cached element references

const squares = Array.from(document.querySelectorAll('#board div'));
const messages = document.querySelector('h2');

//event listners

document.getElementById('board').addEventListener('click', handleTurn);

//functions
function init() {
	board = [			//positions on the board
		'', '', '',
		'', '', '',
		'', '', '',
	];
	render();
};

function render() {		//iterate over board, add mark where necessary
	board.forEach(function(mark,index) {
		squares[index].textContent = mark;
	});
	messages.textContent = `It's ${turn}'s turn!`;
};

function handleTurn(event) {
	let idx = squares.findIndex(function(square) {
		return square === event.target;
	});

	board[idx] = turn;

	turn = turn === 'X' ? 'O' : 'X';

	render();
};

init();