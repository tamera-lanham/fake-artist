import React from "react";
import { Switch, Route, Redirect, Link, useParams, useRouteMatch, useLocation } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Stack from '@mui/material/Stack'

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
		border: '1px solid rgba(255, 255, 255, .4)',
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
		<Container maxWidth="md" style={{ backgroundColor: player.color }}>
			<div style={{ height: '100vh', padding: 20 }}>
				<Typography align="center" variant="h5" >
					Pass the phone to
				</Typography>
				<Typography align="center" variant="h2" gutterBottom={true} style={{ marginBottom: 50 }}>
					{playerName}
				</Typography>
				<Stack spacing={2}>
					<Typography variant="h6" align='center'>Category: <b>{gameState.category}</b></Typography>
					<WordReveal gameState={gameState} otherProps={{ index, playerName }} />
					<PlayerPagePassButton gameState={gameState} playerNum={playerNum} />
				</Stack>
			</div>
		</Container >


	)

}

function WordReveal({ gameState, otherProps }) {
	const [mouseDown, setMouseDown] = React.useState(false)
	return (
		<div
			onMouseDown={() => setMouseDown(true)}
			onMouseUp={() => setMouseDown(false)}
			onMouseOut={() => setMouseDown(false)}
			onTouchStart={() => setMouseDown(true)}
			onTouchEnd={() => setMouseDown(false)}
			onTouchCancel={() => setMouseDown(false)}
		>
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
			<Card variant="outlined" className={classes.wordRevealCard}>
				<CardContent>
					<Typography variant="h6" align='center'>
						Hold to see the word (for {playerName}'s eyes only!)
					</Typography>
				</CardContent>
			</Card>
		)
	} else if (playerIsFaker) {
		return (
			<Card variant="outlined" className={classes.wordRevealCard}>
				<CardContent>
					<Typography variant="h6" align='center'>
						<b>You're a faker!</b>
					</Typography>
				</CardContent>
			</Card>
		)
	} else {
		return (
			<Card variant="outlined" className={classes.wordRevealCard}>
				<CardContent>
					<Typography variant="h6" align='center'>
						The word is <b>{gameState.word}</b>
					</Typography>
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
			<Link to='/reveal'>
				<Button variant="contained" color="primary" className={classes.nextButton}>
					Done
				</Button>
			</Link >
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

	let { path, url } = useRouteMatch();
	const { pathname } = useLocation();

	if (gameState.players.length == 0) {
		return (<Redirect to="/setup" />)
	}

	return (
		<Switch>
			<Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} /> {/* This is kind of a kludge */}
			<Route exact path={path}>
				<DisplayGameState gameState={gameState} />
			</Route>

			<Route path={`${path}/:playerNum`}>
				<PlayerPage gameState={gameState} />
			</Route>
		</Switch>

	);
}


export default Play