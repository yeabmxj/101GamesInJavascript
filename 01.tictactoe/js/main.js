//constants

//appstate variables

let board; 		//game board
let turn = 'X';

//cached element references

const squares = Array.from(document.querySelectorAll('#board div'));

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
};

function handleTurn(event) {
	let idx = squares.findIndex(function(square) {
		return square === event.target;
	});

	board[idx] = turn;
	console.log(board);

	render();
};

init();