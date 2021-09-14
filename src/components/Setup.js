import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
//import Grid from '@material-ui/core/Grid'
//import Typography from '@material-ui/core/Typography';
//import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
	card: {
		width: 275,
		margin: 5,
		padding: 5
	}
});

function PlayerCard({ player }) {

	const classes = useStyles()

	return (
		<Card className={classes.card}>
			<CardContent>
				<Typography>Name: {player.name}</Typography>
			</CardContent>
		</Card >
	);
}

function AddPlayerForm({ addPlayer }) {
	const classes = useStyles()


	const [userInput, setUserInput] = React.useState('');

	const handleChange = (e) => {
		setUserInput(e.currentTarget.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		addPlayer(userInput);
		setUserInput("");
	}
	return (
		<Card className={classes.card}>
			<form onSubmit={handleSubmit}>
				<TextField value={userInput} onChange={handleChange} label="Name" variant="outlined" />
				<Button onClick={handleSubmit}>Submit</Button>
			</form>
		</Card>
	);
};


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

	/*Randomized:
	- Faker indices
	- Word
	*/

	/*
	Material components:
	- Cards for player list
		- Either card expansion or modal for player editing
	- Grid
	*/

	const [newGameState, setNewGameState] = React.useState(gameState)

	function addPlayer(name) {
		let newGameStateCopy = { ...newGameState }
		newGameStateCopy.players = [...newGameStateCopy.players, { name: name, color: 'gray' }]
		setNewGameState(newGameStateCopy) // This is essentially just to trigger the re-render of the Setup component
		setGameState(newGameStateCopy) // This actually sets the game state for the App component
	}

	return (
		<Container maxWidth="sm">
			<div>
				<h2>Set up the game</h2>
				{newGameState.players.map((player, index) => <PlayerCard index={index} key={index} player={player} />)}

				<AddPlayerForm addPlayer={addPlayer} />

			</div>
		</Container>
	);
}

export default Setup;