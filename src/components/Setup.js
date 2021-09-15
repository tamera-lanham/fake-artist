import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';
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
			height: 30
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
	link: {
		padding: 8,
		display: 'flex'
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

	const colors = ["#AC6D5E", "#F79C8F", "#ED5842", "#F7AA64", "#FFD28A", "#BDC586", "#687C6F", "#56AFAC", "#365A79", "#74688E", "#B0B0B0"]

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
		if (categoryChoice === 'Random') {
			[category, word] = randomChoice(gameWords.list)
		}
		else {
			category = categoryChoice;
			[_, word] = randomChoice(gameWords.list.filter(([category, word]) => category === categoryChoice))
		}
		return [category, word]
	}

	function getFakerIndices(numFakers) {
		const fakerIndices = []
		const numPlayers = gameState.players.length

		if (numFakers === 'Random') {
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
		<div>
			<div className={classes.gridContainer}>
				<FormControl variant="outlined" key={0}>
					<InputLabel htmlFor="outlined-age-native-simple">Category</InputLabel>
					<Select label="Category"
						value={categoryChoice}
						onChange={e => setCategoryChoice(e.target.value)}
					>
						{categories.map((category, index) => <option value={category} key={index}>{category}</option>)}
					</Select>
				</FormControl>

				<FormControl variant="outlined" key={1}>
					<InputLabel htmlFor="outlined-age-native-simple">Number of fakers</InputLabel>
					<Select label="Number of fakers"
						value={numFakers}
						onChange={e => setNumFakers(e.target.value)}
					>
						{numFakerOptions.map((option, index) => <option value={option} key={index}>{option}</option>)}
					</Select>
				</FormControl>
			</div >
			<Link to="/play" className={classes.link}>
				<Button variant="contained" color="primary" onClick={updateGameState} className={classes.button}>Start game</Button>
			</Link>
		</div>
	)

}



function Setup({ gameState, setGameState }) {

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
		else if (index === Infinity) {
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
				Setup
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
