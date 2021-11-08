import React, { useState } from 'react';
// import './AnimalPage.css'
import ItemList from './ItemList';

import Animal from '../models/Animal';
import Item from '../models/Item';
import Toy from '../models/Toy'
import Food from '../models/Food'

interface Props {
    player :any
    setPlayer :(player :any) => void
    animalToVisit :Animal | null
    setAnimalToVisit :(animal :Animal | null) => void
    animalToVisitHasChanged :boolean 
    setAnimalToVisitHasChanged  :(boolean :boolean) => void
}

const AnimalPage = ({
    player,
    setPlayer,
    animalToVisit, 
    setAnimalToVisit, 
    animalToVisitHasChanged, 
    setAnimalToVisitHasChanged 
} :Props) => {

    const [ activity, setActivity ] = useState<string>("")
    const [ items, setItems ] = useState<Toy[] | Food[]>([])

    const handleGiveLove = () :void => {
        animalToVisit?.addExp(50)
        setAnimalToVisit(animalToVisit)
        setAnimalToVisitHasChanged(!animalToVisitHasChanged)
    }

    const handleFeed = () :void => {
        setActivity("feed")
        setItems(player.getFoods())
    }

    const handlePlay = () :void => {
        setActivity("play")
        setItems(player.getToys())
    }

    const giveAnimalItem = (item :Item) :void => {
        if(item instanceof Food) animalToVisit?.eat(item)
        if(item instanceof Toy) animalToVisit?.play(item)
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
                <button onClick={() => handleFeed()}>Feed</button>
                <button onClick={() => handlePlay()}>Play</button>
            </div>}
            {activity !== "" && <ItemList 
                items={items}
                player={player}
                setPlayer={setPlayer}
                activity={activity}
                giveAnimalItem={giveAnimalItem}
            />}
        </div>
    )
}

export default AnimalPage