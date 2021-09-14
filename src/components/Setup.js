import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';

const useStyles = makeStyles({
	card: {
		width: 300,
		margin: 10,
		padding: 5
	},
	colorPicker: {
		display: 'flex',
		flexWrap: 'wrap',
		'& > *': {
			margin: 1,
			width: 30,
			height: 30,
			border: '3px solid white'
		}
	},

});

function ColorPicker({ setPlayerColor }) {
	const classes = useStyles();

	const colors = ['#404040', '#003049', '#D62828', '#F77F00', '#FCBF49', '#A1CDA8']


	return (
		<div className={classes.colorPicker}>
			{colors.map((color, index) =>
				<Paper
					className={classes.colorBlock}
					style={{ 'backgroundColor': color }}
					onClick={() => setPlayerColor(color)} />
			)}
		</div>
	);
}

function PlayerCard({ player, setPlayer }) {
	const classes = useStyles();

	const [playerColor, setPlayerColor_] = React.useState(player.color)
	function setPlayerColor(color) {
		setPlayerColor_(color) // Change the background of the card
		setPlayer({ ...player, color: color }) // Actually change the data in the app
	}

	const [expanded, setExpanded] = React.useState(false) // Not expanded by default
	const handleExpandClick = () => { setExpanded(!expanded) }


	return (
		<Card className={classes.card} style={{ 'backgroundColor': playerColor }}>
			<CardContent>
				<TextField defaultValue={player.name} label="Name" />
				<IconButton onClick={handleExpandClick}> <ExpandMoreIcon /> </IconButton>
				<IconButton onClick={() => setPlayer(null)}><Delete /></IconButton>
			</CardContent>



			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<ColorPicker setPlayerColor={setPlayerColor} />
			</Collapse>
		</Card >
	);
}

function NewPlayerCard({ setPlayer }) {
	const classes = useStyles();

	const defaultPlayer = { name: '', color: '#c0c0c0' }

	const [playerName, setPlayerName] = React.useState(defaultPlayer.name)
	const [playerColor, setPlayerColor] = React.useState(defaultPlayer.color)

	function handleSubmit(event) {
		event.preventDefault()
		setPlayer({ name: playerName, color: playerColor })
		setPlayerName(defaultPlayer.name)
		setPlayerColor(defaultPlayer.color)

	}

	return (
		<Card className={classes.card} style={{ 'backgroundColor': playerColor }}>
			<CardContent>
				<form onSubmit={handleSubmit} >
					<TextField label="New player name" value={playerName} onInput={e => setPlayerName(e.target.value)} />
				</form>

			</CardContent>
			<ColorPicker setPlayerColor={setPlayerColor} />
		</Card >
	);

}

function Setup({ gameState, setGameState }) {
	const startingGameState = {
		players: [
			{ name: 'Patrick', color: '#D62828' },
			{ name: 'Miranda', color: '#F77F00' },
			{ name: 'Michael', color: '#A1CDA8' },
			{ name: 'Tamera', color: '#FCBF49' }
		],
		fakerIndices: [3],
		category: 'Cowboy gear',
		word: 'Saddle'
	}

	const [newGameState, setNewGameState] = React.useState(startingGameState)

	function setGameStateWithReRender(newGameState) {
		let newGameStateCopy = { ...newGameState }

		setNewGameState(newGameStateCopy) // This is essentially just to trigger the re-render of the this component
		setGameState(newGameStateCopy) // This actually sets the game state for the App component

	}

	function setPlayer(newPlayer, index) {

		// If newPlayer is null, delete that player
		if (newPlayer == null) {
			newGameState.players.splice(index, 1)
		}
		// If index is Infinity, add a new player
		else if (index == Infinity) {
			newGameState.players.push(newPlayer)
		}
		// Otherwise replace the player at the given index
		else {
			newGameState.players[index] = newPlayer
		}
		console.log(newGameState.players)

		setGameStateWithReRender(newGameState)
	}



	return (
		<Container>
			{newGameState.players.map((player, index) =>
				<PlayerCard key={index} player={player} setPlayer={(newPlayer) => setPlayer(newPlayer, index)} />
			)}

			<NewPlayerCard setPlayer={(newPlayer) => setPlayer(newPlayer, Infinity)} />
		</Container>
	)
}

export default Setup;
