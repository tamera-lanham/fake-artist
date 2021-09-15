import React from "react";
import { Switch, Route, Redirect, Link, useParams, useRouteMatch, useLocation } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { textAlign } from '@material-ui/system';
import { classes } from "istanbul-lib-coverage";

const useStyles = makeStyles({
	gridContainer: {
		display: 'flex',
		gap: 10,
		marginBottom: 10,
		'& > *': {
			flexGrow: 1
		}
	},
	categoryCard: {
		padding: 10,
		marginTop: 10,
		backgroundColor: "rgba(255, 255, 255, 0)",
		flex: "0 0 40%"
	},
	wordRevealCard: {
		padding: 10,
		marginTop: 10,
		backgroundColor: "rgba(255, 255, 255, .4)"
	},
	nextButton: {
		width: '100%',
	}
})


function PlayerPage({ gameState }) {

	function renderPlayerName(enteredName) {
		if (!enteredName.trim()) {
			return "player " + (index + 1)
		}
		return enteredName
	}

	let playerNum = parseInt(useParams().playerNum);
	const index = playerNum - 1

	const player = gameState.players[index]
	const playerName = renderPlayerName(player.name)

	const classes = useStyles()
	return (
		<Container maxWidth="md">
			<div style={{ backgroundColor: player.color, height: '100vh', padding: 20 }}>
				<Typography variant="h2" gutterBottom={true} style={{ marginBottom: 50 }}>
					Pass the phone to {playerName} 📲
				</Typography>
				<Typography variant="h5" gutterBottom={true}>
					Did you get it, {playerName}? Good.
				</Typography>
				<div className={classes.gridContainer}>
					<Card className={classes.categoryCard}>
						<CardContent>Category: <b>{gameState.category}</b></CardContent>
					</Card>
					<WordReveal gameState={gameState} otherProps={{ index, playerName }} />
				</div>
				<PlayerPagePassButton gameState={gameState} playerNum={playerNum} />
			</div>
		</Container>
	)

}

function WordReveal({ gameState, otherProps }) {
	const [mouseDown, setMouseDown] = React.useState(false)
	return (
		<div onMouseDown={() => setMouseDown(true)} onMouseUp={() => setMouseDown(false)}>
			<WordRevealInner gameState={gameState} otherProps={otherProps} mouseDown={mouseDown} />
		</div>
	)
}

function WordRevealInner({ gameState, otherProps, mouseDown }) {
	const classes = useStyles()
	const { index, playerName } = otherProps
	const player = gameState.players[index]

	const playerIsFaker = gameState.fakerIndices.includes(index)

	if (!mouseDown) {
		return (
			<Card className={classes.wordRevealCard}>
				<CardContent>
					Hold to see the word
				</CardContent>
			</Card>
		)
	} else if (playerIsFaker) {
		return (
			<Card className={classes.wordRevealCard}>
				<CardContent>
					<b>You're a faker!</b>
				</CardContent>
			</Card>
		)
	} else {
		return (
			<Card className={classes.wordRevealCard}>
				<CardContent>
					The word is <b>{gameState.word}</b>
				</CardContent>
			</Card>
		)
	}
}

function PlayerPagePassButton({ gameState, playerNum }) {
	const numPlayers = gameState.players.length

	const classes = useStyles()
	if (playerNum < numPlayers) {
		return (
			<Link to={`./${playerNum + 1}`}>
				<Button variant="contained" className={classes.nextButton}>
					Next player
				</Button>
			</Link>
		)
	}
	else {
		return (
			<Link to={`.`}>
				<Button variant="contained" color="primary" className={classes.nextButton}>
					Done
				</Button>
			</Link>
		)
	}
}

function DisplayGameState({ gameState }) {
	let { path, url } = useRouteMatch();

	return (
		<Container maxWidth="md">
			<h2>This is the game state:</h2>
			<pre>{JSON.stringify(gameState, null, 4)}</pre>

			<br />
			<Link to="/setup">Return to setup</Link><br />
		</Container>
	)
}

function Play({ gameState }) {

	/*
	
	For each player, 1 page saying:
	- Pass the phone to $player!
	- For $player's eyes only: click and hold to see the word
	- Button saying "Got it", which loads the next page
	- Unobtrusive "restart game" link somewhere?
	
	At the end, big reveal page?
	
	Edge situations:
	- No players
	- 1 player
	- Players have no names
	
	*/
	let { path, url } = useRouteMatch();
	const { pathname } = useLocation();
	return (
		<div>
			<Switch>
				<Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} /> {/* This is kind of a kludge */}
				<Route exact path={path}>
					<DisplayGameState gameState={gameState} />
				</Route>

				<Route path={`${path}/:playerNum`}>
					<PlayerPage gameState={gameState} />
				</Route>
			</Switch>
		</div>
	);
}

export default Play