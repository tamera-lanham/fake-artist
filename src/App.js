import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect
} from "react-router-dom";
import Container from '@material-ui/core/Container';

import Setup from './components/Setup'

export default function App() {

	const [gameState, setGameState] = React.useState({
		players: [],
		fakerIndices: [],
		category: '',
		word: ''
	})


	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Redirect to="/setup" />
				</Route>
				<Route path="/setup">
					<Setup gameState={gameState} setGameState={setGameState} />
				</Route>
				<Route path="/play">
					<Play gameState={gameState} />
				</Route>
			</Switch>
		</Router>
	);
}



function Play({ gameState }) {
	return (
		<Container maxWidth="md">
			<h2>This is the game state:</h2>
			<pre>{JSON.stringify(gameState, null, 4)}</pre>

			<br />
			<Link to="/setup">Return to setup</Link>
		</Container>
	);
}