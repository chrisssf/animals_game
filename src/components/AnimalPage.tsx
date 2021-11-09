import React, { useState } from 'react';
// import './AnimalPage.css'
import ItemList from './ItemList';

import Animal from '../models/Animal';
import Player from '../models/Player';
import Item from '../models/Item';
import Toy from '../models/Toy'
import Food from '../models/Food'

interface Props {
    player :Player
    setPlayer :(player :Player) => void
    animalToVisit :Animal | null
    setAnimalToVisit :(animal :Animal | null) => void
    animalToVisitHasChanged :boolean 
    setAnimalToVisitHasChanged  :(boolean :boolean) => void
    playerHasChanged :boolean
    setPlayerHasChanged :(boolean :boolean) => void
}

const AnimalPage = ({
    player,
    setPlayer,
    animalToVisit, 
    setAnimalToVisit, 
    animalToVisitHasChanged, 
    setAnimalToVisitHasChanged,
    playerHasChanged,
    setPlayerHasChanged,
} :Props) => {

    const [ activity, setActivity ] = useState<string>("")
    const [ items, setItems ] = useState<Toy[] | Food[]>([])

    const handleGiveLove = () :void => {
        animalToVisit?.addExp(50)
        player.addExp(50)
        setPlayer(player)
        setPlayerHasChanged(!playerHasChanged)
        // setPlayer({...player})
        setAnimalToVisit(animalToVisit)
        setAnimalToVisitHasChanged(!animalToVisitHasChanged)
    }

    const handleClickFeed = () :void => {
        setActivity("feed")
        setItems(player.getFoods())
    }

    const handleClickPlay = () :void => {
        setActivity("play")
        setItems(player.getToys())
    }

    const giveAnimalItem = (item :Item, itemIndex :number) :void => {
        if(item instanceof Food) {
            animalToVisit?.eat(item)
            player.removeFoodByIndex(itemIndex)
            handleClickFeed()
        }
        if(item instanceof Toy) {
            animalToVisit?.play(item)
            player.addExp(item.getTotalExpAdded())
            player.removeToyByIndex(itemIndex)
            handleClickPlay()
        }
        setPlayer(player)
        setPlayerHasChanged(!playerHasChanged)
        // setPlayer({...player})
        setAnimalToVisit(animalToVisit)
        setAnimalToVisitHasChanged(!animalToVisitHasChanged)
    }

    return (
        <div>
            <h2>Animal Page</h2>
            {animalToVisit && <div>
                <h3>{animalToVisit?.getName()}</h3>
                <p>Level: {animalToVisit.getLevel()}</p>
                <p>Current EXP: {animalToVisit.getCurrentExp()} / 100</p>
                <img alt={animalToVisit?.getType()} src={require('../assets/' + animalToVisit?.getName() + '.png').default}/>
                <button onClick={() => handleGiveLove()}>Give Love</button>
                <button onClick={() => handleClickFeed()}>Feed</button>
                <button onClick={() => handleClickPlay()}>Play</button>
            </div>}
            {activity !== "" && <ItemList 
                items={items}
                player={player}
                setPlayer={setPlayer}
                activity={activity}
                giveAnimalItem={giveAnimalItem}
                playerHasChanged={playerHasChanged}
                setPlayerHasChanged={setPlayerHasChanged}
            />}
        </div>
    )
}

export default AnimalPage