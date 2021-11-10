import React, { useState } from 'react';
import './AnimalPage.css'
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
    const [ currentRoom, setCurrentRoom] = useState<string>("bedroom")
    const [ toyAnimationClass, setToyAnimationClass ] = useState<string>("")
    const [ itemAnimationClass, setItemAnimationClass ] = useState<string>("")

    const handleGiveLove = () :void => {
        setItemAnimationClass("Heart")
        setTimeout(()=>{
            setItemAnimationClass("")
        }, 2000)
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
            setItemAnimationClass(item.getName())
            setTimeout(()=>{
                setItemAnimationClass("")
            }, 2000)
        }
        if(item instanceof Toy) {
            animalToVisit?.play(item)
            player.addExp(item.getTotalExpAdded())
            player.removeToyByIndex(itemIndex)
            handleClickPlay()
            setToyAnimationClass(item.getName())
            setTimeout(()=>{
                setToyAnimationClass("")
            }, 4000)
        }
        setPlayer(player)
        setPlayerHasChanged(!playerHasChanged)
        // setPlayer({...player})
        setAnimalToVisit(animalToVisit)
        setAnimalToVisitHasChanged(!animalToVisitHasChanged)
    }

    const handleClickRoom = (room :string) :void => {
        setCurrentRoom(room)
        if(room === "kitchen") handleClickFeed()
        if(room === "garden") handleClickPlay()

    }

    return (
        <div>
            <h2>Animal Page</h2>
            {animalToVisit && <div className="animal-visit-container">
                <h3>{animalToVisit?.getName()}</h3>
                <div className="animal-visit-animal-info-container">
                    <p><b>Level:</b> {animalToVisit.getLevel()}</p>
                    <p><b>Current EXP:</b> {animalToVisit.getCurrentExp()} / {animalToVisit.getLevel() * 100}</p>
                </div>
                <div className={"animal-visit-img-container " + "visit-" + currentRoom}>
                    <img className="animal-visit-animal-img" alt={animalToVisit?.getType()} src={require('../assets/' + animalToVisit?.getName() + '.png').default}/>
                    {itemAnimationClass !== "" && <img className="animal-visit-item-img" alt="item" src={require('../assets/' + itemAnimationClass + '.png').default}/>}
                    {toyAnimationClass !== "" && <img className="animal-visit-toy-img" alt="toy" src={require('../assets/' + toyAnimationClass + '.png').default}/>}
                </div>
                {/* <button onClick={() => handleGiveLove()}>Give Love</button>
                <button onClick={() => handleClickFeed()}>Feed</button>
                <button onClick={() => handleClickPlay()}>Play</button> */}
                <button onClick={()=>handleClickRoom("bedroom")}>Bedroom</button>
                <button onClick={()=>handleClickRoom("kitchen")}>Kitchen</button>
                <button onClick={()=>handleClickRoom("garden")}>Garden</button>

                {activity !== "" && <ItemList 
                    items={items}
                    player={player}
                    setPlayer={setPlayer}
                    activity={activity}
                    giveAnimalItem={giveAnimalItem}
                    playerHasChanged={playerHasChanged}
                    setPlayerHasChanged={setPlayerHasChanged}
                />}
            </div>}
            {/* {activity !== "" && <ItemList 
                items={items}
                player={player}
                setPlayer={setPlayer}
                activity={activity}
                giveAnimalItem={giveAnimalItem}
                playerHasChanged={playerHasChanged}
                setPlayerHasChanged={setPlayerHasChanged}
            />} */}
        </div>
    )
}

export default AnimalPage