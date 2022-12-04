const Gameboard = (() => {
	const gameArea = document.getElementById("game-board");
	let _board = [];

	const render = () => {
		_board.forEach((field) => {
			const newField = document.createElement("div");
			newField.classList = "field";
			newField.textContent = field.getStatus();
			newField.addEventListener("click", field.set);
			gameArea.appendChild(newField);
		});
	};

	const init = () => {
		for (i = 0; i < 9; i++) {
			let newField = Field(i);
			_board.push(newField);
		}
		render();
	};

	const reset = () => {
		console.log("reseting..");
		gameArea.innerHTML = "";
	};

	return {
		init,
		render,
		reset,
	};
})();

const Field = (fieldIndex) => {
	const index = fieldIndex;
	let status = "";

	const getStatus = () => status;
	const set = () => {
		if (status != "") {
			console.log("occupied cell");
			console.log(status);
		} else if (status === "") {
			console.log("empty cell");
			status = player.symbol();
			Gameboard.reset();
			Gameboard.render();
		}
	};
	return {
		index,
		set,
		status,
		getStatus,
	};
};

const Player = (userName, userSymbol) => {
	const name = () => userName;
	const symbol = () => userSymbol;
	return {
		name,
		symbol,
	};
};

const game = () => {
	let _currentPlayer = undefined;

	const start = () => {
		Gameboard.init();
		const gameMode = () => {};
		const chooseName = (name) => {};
	};
	const getCurrentPlayer = () => _currentPlayer;
};

const player1 = Player("flo", "O");
const player2 = Player("bot", "X");

player = player1;

Gameboard.init();
