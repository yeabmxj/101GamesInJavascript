//constants

const winningCombos = [
	[0,1,2],
	[3,4,5],
	[6,7,8],
	[0,3,6],
	[1,4,7],
	[2,5,8],
	[2,4,6],
];

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

function getWinner() {
	let winner = null;
	winningCombos.forEach(function(combo,index){
	if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) {			
		winner = board[combo[0]];
	}
	});
	return winner ? winner : board.includes('') ? null : 'T';
};

function handleTurn(event) {
	let idx = squares.findIndex(function(square) {
		return square === event.target;
	});

	board[idx] = turn;

	turn = turn === 'X' ? 'O' : 'X';
	win = getWinner();
	render();
};

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
	messages.textContent = win ? `${win} wins the game` : `It's ${turn}'s turn!`;	
};

init();