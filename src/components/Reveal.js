import React from "react";
import { Switch, Route, Redirect, Link, useParams, useRouteMatch, useLocation } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
	gridContainer: {
		display: 'flex',
		gap: 10,
		marginBottom: 10,
		'& > *': {
			flexGrow: 1
		}
	},
	button: {
		display: 'block',
		marginBottom: 10,
		width: '100%'
	},
	link: {
		textDecoration: 'none',
	},
	revealCard: {
		marginBottom: 10
	}
})

function Faker({ player, index }) {

	function renderPlayerName(enteredName) {
		if (!enteredName.trim()) {
			return "Player " + (index + 1)
		}
		return enteredName
	}

	const playerName = renderPlayerName(player.name)

	return (
		<div>Name: {playerName}</div>
	)
}

function RevealCard({ gameState, revealed }) {
	const classes = useStyles()

	function renderPlayerName(enteredName, index) {
		if (!enteredName.trim()) {
			return "player " + (index + 1)
		}
		return enteredName
	}

	const fakerNames = gameState.fakerIndices.map(
		fakerIndex => renderPlayerName(gameState.players[fakerIndex].name, fakerIndex)
	).join(', ')

	if (!revealed) {
		return (
			<Card></Card>
		)
	}

	return (
		<Card className={classes.revealCard} style={{ backgroundColor: '#eee' }}>
			<CardContent>
				<Typography variant="h6" align='center'>
					Word: <b>{gameState.word}</b>
				</Typography>

				<Typography variant="h6" align='center'>Fakers: {fakerNames}</Typography>
			</CardContent>
		</Card>
	)

}

function Reveal({ gameState }) {

	const [revealed, setRevealed] = React.useState(false)

	const classes = useStyles()
	return (

		<Container maxWidth="md">
			<Typography variant="h2" align='center'>
				Go draw!
			</Typography>
			<Typography variant="h6" align='center'>
				And come back here when you're ready for the reveal
			</Typography>
			<Link to='/reveal' className={classes.link}>
				<Button variant="outlined" className={classes.button} onClick={() => setRevealed(!revealed)}>
					See the results
				</Button>
			</Link>
			<RevealCard gameState={gameState} revealed={revealed} />
			<Link to="/setup" className={classes.link}>
				<Button color="primary" variant="contained" className={classes.button}>Play again</Button>
			</Link>

		</Container>
	)
}
export default Reveal
