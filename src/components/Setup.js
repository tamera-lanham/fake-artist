import React from "react";

const ToDoForm = ({ addTask }) => {

	const [userInput, setUserInput] = React.useState('');

	const handleChange = (e) => {
		setUserInput(e.currentTarget.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		addTask(userInput);
		setUserInput("");
	}
	return (
		<form onSubmit={handleSubmit}>
			<input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..." />
			<button>Submit</button>
		</form>
	);
};

function Player({ player }) {
	return (
		<div className="player">
			Player: {player.name}, color: {player.color}
		</div >
	);
}

function AddPlayerForm({ addPlayer }) {

	const [formContents, setFormContents] = React.useState("");

	const handleSubmit = e => {
		e.preventDefault();
		if (!formContents) return;
		addPlayer(formContents);
		setFormContents("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				className="input"
				value={formContents}
				onChange={e => setFormContents(e.target.value)}
			/>
		</form>
	);
}

function Setup({ gameState, setGameState }) {

	/*
	const newState = {
		players: [
				{ name: 'Patrick', color: 'red' },
				{ name: 'Miranda', color: 'blue' },
				{ name: 'Michael', color: 'green' },
				{ name: 'Tamera', color: 'yellow' }
			],
			fakerIndices: [3],
			category: 'Cowboy gear',
			word: 'Bullet'
	}
	*/

	/* Game setup params:
	- Number of players
	- Names of players
	- Colors
	- Number of fakers
	- Category

	Randomized:
	- Faker indices
	- Word
	*/

	const [newGameState, setNewGameState] = React.useState(gameState)

	function addPlayer(name) {
		let newGameStateCopy = { ...newGameState }
		newGameStateCopy.players = [...newGameStateCopy.players, { name: name, color: 'gray' }]
		setNewGameState(newGameStateCopy)
		setGameState(newGameStateCopy)
	}

	return (
		<div>
			<h2>Set up the game</h2>
			{newGameState.players.map((player, index) => <Player index={index} key={index} player={player} />)}

			<ToDoForm addTask={addPlayer} />

		</div>
	);
}

export default Setup;