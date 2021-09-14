function Setup({ setGameState }) {

    const newState = {
        players: ['Patrick', 'Miranda', 'Michael', 'Tamera'],
        colors: ['red', 'green', 'blue', 'yellow'],
        fakerIndices: [3],
        category: 'Cowboy gear',
        word: 'Bullet'
    }

    return (
        <div>
            <h2>Set up the game</h2>
            <div onClick={() => setGameState(newState)}>Click to set it</div>
        </div>
    );
}

export default Setup;