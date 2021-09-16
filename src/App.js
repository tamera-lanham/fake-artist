import React from "react";
import {
	HashRouter as Router,
	Switch,
	Route,
	Redirect
} from "react-router-dom";
import Setup from './components/Setup'
import Play from './components/Play'
import Reveal from './components/Reveal'
import ScrollToTop from './components/ScrollToTop'


export default function App() {

	const [gameState, setGameState] = React.useState({
		players: [],
		fakerIndices: [],
		category: '',
		word: ''
	})


	return (
		<Router>
			<ScrollToTop />
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
				<Route path="/reveal">
					<Reveal gameState={gameState} />
				</Route>
			</Switch>
		</Router>
	);
}



