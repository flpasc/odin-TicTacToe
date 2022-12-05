const Gameboard = (() => {
	const gameArea = document.getElementById("game-board");
	let _board = [];

	const render = () => {
		console.log("rendering..");
		_board.forEach((field) => {
			const newField = document.createElement("div");
			newField.classList = "field";
			newField.textContent = field.status;
			newField.addEventListener("click", field.set);
			gameArea.appendChild(newField);
		});
	};

	const init = () => {
		console.log("initializing..");
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

const Field = (index) => {
	let status = "";

	const set = () => {
		if (status != "") {
			console.log("occupied cell" + status);
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
	};
};

const Player = (name, symbol) => {
	let points = 0;

	const addPoint = () => points++;
	return {
		name,
		symbol,
		points,
	};
};

const Game = () => {
	let players = [];
	let gamemode = undefined;

	const getGamemode = () => gamemode;
	const setGamemode = (mode) => (gamemode = mode);

	Gameboard.init();

	if (gamemode === undefined) {
		const _popup = document.getElementById("popup-mode");
		const _monkey = document.getElementById("btn-monkey");
		const _human = document.getElementById("btn-KI");
		const setMode = (mode) => (gamemode = mode);

		_popup.style.display = "flex";
		_monkey.addEventListener("click", () => {
			setGamemode("monkey");
			_popup.style.display = "none";
			console.log(gamemode);
		});
		_human.addEventListener("click", () => {
			setGamemode("computer");
			_popup.style.display = "none";
			console.log(gamemode);
		});
	}

	if (players.length === 0) {
	}

	return {
		gamemode,
		getGamemode,
		setGamemode,
	};
};

const TicTacToe = Game();
