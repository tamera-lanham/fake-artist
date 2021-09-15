import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect
} from "react-router-dom";
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
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/setup">Set game state</Link>
						</li>
						<li>
							<Link to="/play">Read game state</Link>
						</li>
					</ul>
				</nav>

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
			</div>
		</Router>
	);
}



function Play({ gameState }) {
	return (
		<div>
			<h2>Here is the game state:</h2>
			<pre>{JSON.stringify(gameState, null, 4)}</pre>
		</div>
	);
}