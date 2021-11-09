import React, { useState } from 'react';
import Player from '../models/Player';


interface Props {
    player :Player
    setPlayer: (player: Player) => void
}

const StartPage = ({player, setPlayer}: Props) => {

    const [ playerName, setPlayerName ] = useState<string>("")

    const handleStartGame = ():void => {
        if (playerName !== ""){
            const newPlayer = new Player(playerName)
            // const PlayerObject = {...newPlayer}
            setPlayer(newPlayer)
        }
    }

    return (
        <div>
            <h2>Start Page</h2>
            <input type="text" placeholder="Name" value={playerName} onChange={(event) => setPlayerName(event.target.value)}/>
            <button onClick={() => handleStartGame()}>Start Game</button>
        </div>)

}

export default StartPage
