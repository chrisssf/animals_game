import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Player from '../models/Player';


interface Props {
    player: Player | null
}

const PlayerHomePage = ({player}: Props) =>{
    // will have some player details and list of current animals
    // every level / (few levels?) player can get new animal added to their collection

    return (
        <div>
            <h2>Player Home Page</h2>
            {console.log("player", player)}
            {player !== null && <div>
                {/* <p>Name: {(player !== null) ? player.getName() : null}</p>
                <p>Level: {(player !== null) ? player.getLevel() : null}</p>
                <p>EXP: {(player !== null) ? player.getCurrentExp() : null} / 100</p> */}

                <p>Name: {player.getName()}</p>
                <p>Level: {player.getLevel()}</p>
                <p>EXP: {player.getCurrentExp()} / 100</p>
            </div>}
        </div>)

}

export default PlayerHomePage
