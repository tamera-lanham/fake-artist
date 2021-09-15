import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import NativeSelect from '@material-ui/core/NativeSelect';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ExpandMoreIcon from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';
import CheckCircleIconRounded from '@material-ui/icons/CheckCircle';
import gameWords from '../data/words.json'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
	card: {
		margin: 10,
		padding: 5
	},
	colorPicker: {
		display: 'flex',
		flexWrap: 'wrap',
		'& > *': {
			margin: 1,
			marginRight: 5,
			width: 30,
			height: 30,
		}
	},
	icon: {
		float: 'right'
	},
	gridContainer: {
		display: 'flex',

		'& > *': {
			flexGrow: 1,
			margin: 10
		}
	},
	button: {
		width: '100%',
		height: '100%',
	}
});
function NewPlayerCard({ setPlayer }) {
	const classes = useStyles();

	const defaultPlayer = { name: '', color: '#eee' }

	const [playerName, setPlayerName] = React.useState(defaultPlayer.name)
	const [playerColor, setPlayerColor] = React.useState(defaultPlayer.color)

	function handleSubmit(event) {
		event.preventDefault()
		setPlayer({ name: playerName, color: playerColor })
		setPlayerName(defaultPlayer.name)
		setPlayerColor(defaultPlayer.color)

	}

	function handleSubmitColorPicker(color) {
		setPlayer({ name: playerName, color: color })
		setPlayerName(defaultPlayer.name)
		setPlayerColor(defaultPlayer.color)
	}

	return (
		<Card className={classes.card} style={{ 'backgroundColor': playerColor }}>
			<form onSubmit={handleSubmit} >
				<CardContent>
					<TextField label="New player name" value={playerName} onInput={e => setPlayerName(e.target.value)} />
				</CardContent>
				<CardContent>
					<ColorPicker onColorChoice={handleSubmitColorPicker} />
				</CardContent>
			</form>


		</Card >
	);

}

function PlayerCard({ player, setPlayer }) {
	const classes = useStyles();

	const [playerColor, setPlayerColor_] = React.useState(player.color)
	function setPlayerColor(color) {
		setPlayerColor_(color) // Change the background of the card
		setPlayer({ ...player, color: color }) // Actually change the data in the app
	}

	const [playerName, setPlayerName] = React.useState(player.name)

	const [expanded, setExpanded] = React.useState(false) // Not expanded by default
	const handleExpandClick = () => { setExpanded(!expanded) }

	function handleSubmit(event) {
		event.preventDefault()
		setPlayer({ name: playerName, color: playerColor })
	}

	return (
		<Card className={classes.card} style={{ 'backgroundColor': playerColor }}>
			<CardContent>
				<form onSubmit={handleSubmit}>
					<TextField
						defaultValue={player.name}
						label="Name"
						onInput={e => setPlayerName(e.target.value)}
						onBlur={handleSubmit} />

					<IconButton onClick={() => setPlayer(null)} className={classes.icon}><Delete /></IconButton>
					<IconButton onClick={handleExpandClick} className={classes.icon}><ExpandMoreIcon /></IconButton>

				</form>
			</CardContent>



			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent>
					<ColorPicker onColorChoice={setPlayerColor} />
				</CardContent>
			</Collapse>
		</Card >
	);
}

function ColorPicker({ onColorChoice }) {
	const classes = useStyles();

	const colors = ['#404040', '#003049', '#D62828', '#F77F00', '#FCBF49', '#A1CDA8']


	return (
		<div className={classes.colorPicker}>
			{colors.map((color, index) =>
				<Button
					className={classes.colorBlock}
					style={{ 'backgroundColor': color }}
					onClick={() => onColorChoice(color)}
					key={index} />
			)}
		</div>
	);
}


function OtherOptions({ gameState, setGameState }) {
	/* Needs to have:
	- Category
	- Number of fakers
	*/
	const classes = useStyles();

	function randomChoice(array) { return array[Math.floor(Math.random() * array.length)]; }

	function getCategoryAndWord(categoryChoice) {
		let category, word, _
		if (categoryChoice == 'Random') {
			[category, word] = randomChoice(gameWords.list)
		}
		else {
			category = categoryChoice;
			[_, word] = randomChoice(gameWords.list.filter(([category, word]) => category == categoryChoice))
		}
		return [category, word]
	}

	function getFakerIndices(numFakers) {
		const fakerIndices = []
		const numPlayers = gameState.players.length

		if (numFakers == 'Random') {
			numFakers = Math.floor(Math.random() * numPlayers)
		}
		numFakers = Math.min(numFakers, numPlayers)

		while (fakerIndices.length < numFakers) {
			let index = Math.floor(Math.random() * numPlayers)
			if (!fakerIndices.includes(index)) { fakerIndices.push(index) }
		}

		return fakerIndices

	}

	const categories = ['Random', ...gameWords.categories]

	const numFakerOptions = [...Array(Math.max(1, gameState.players.length)).keys()].map(i => i + 1)
	numFakerOptions.push('Random')

	const [categoryChoice, setCategoryChoice] = React.useState('Random')
	const [numFakers, setNumFakers] = React.useState(1)

	function updateGameState() {
		const [category, word] = getCategoryAndWord(categoryChoice)
		const fakerIndices = getFakerIndices(numFakers)
		setGameState({ ...gameState, category, word, fakerIndices })
	}

	return (
		<div className={classes.gridContainer}>
			<FormControl variant="outlined">
				<InputLabel htmlFor="outlined-age-native-simple">Category</InputLabel>
				<Select label="Category"
					value={categoryChoice}
					onChange={e => setCategoryChoice(e.target.value)}
				>
					{categories.map(category => <option value={category}>{category}</option>)}
				</Select>
			</FormControl>

			<FormControl variant="outlined" >
				<InputLabel htmlFor="outlined-age-native-simple">Number of fakers</InputLabel>
				<Select label="Number of fakers"
					value={numFakers}
					onChange={e => setNumFakers(e.target.value)}
				>
					{numFakerOptions.map(option => <option value={option}>{option}</option>)}
				</Select>
			</FormControl>

			<Link to="/play">
				<Button variant="contained" color="primary" onClick={updateGameState} className={classes.button}>Start game</Button>
			</Link>
		</div >
	)

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

	const [newGameState, setNewGameState] = React.useState(gameState)

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

		setGameStateWithReRender(newGameState)
	}


	return (
		<Container maxWidth="md" >

			<Typography variant="h5" gutterBottom>
				Game setup
			</Typography>

			{newGameState.players.map((player, index) =>
				< PlayerCard
					key={index + player.name + player.color} // Make it as unique as possible so delete isn't buggy
					player={player}
					setPlayer={(newPlayer) => setPlayer(newPlayer, index)} />
			)}

			<NewPlayerCard setPlayer={(newPlayer) => setPlayer(newPlayer, Infinity)} />

			<OtherOptions gameState={newGameState} setGameState={setGameStateWithReRender} />

		</Container>
	)
}

export default Setup;
