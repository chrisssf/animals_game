import React, { useState, useEffect } from 'react';
import './AnimalPage.css'
import ItemList from './ItemList';

import Animal from '../models/Animal';
import Player from '../models/Player';
import Item from '../models/Item';
import Toy from '../models/Toy'
import Food from '../models/Food'
import Activity from '../models/Activity';

interface Props {
    player :Player
    setPlayer :(player :Player) => void
    animalToVisit :Animal | null
    setAnimalToVisit :(animal :Animal | null) => void
    animalToVisitHasChanged :boolean 
    setAnimalToVisitHasChanged  :(boolean :boolean) => void
    playerHasChanged :boolean
    setPlayerHasChanged :(boolean :boolean) => void
    displayedPages :string[]
    setDisplayedPages :(pages :string[]) => void
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
    displayedPages,
    setDisplayedPages,
} :Props) => {

    const [ activity, setActivity ] = useState<string>("")
    const [ items, setItems ] = useState<Item[]>([])
    const [ loveActivities, setLoveActivities ] = useState<Activity[]>([])
    const [ currentRoom, setCurrentRoom] = useState<string>("bedroom")
    const [ toyAnimationClass, setToyAnimationClass ] = useState<string>("")
    const [ itemAnimationClass, setItemAnimationClass ] = useState<string>("")
    const [ buttonsDisabled, setButtonsDisabled ] = useState<boolean>(false)

    const cuddle = new Activity("Cuddle", 50, 30)
    const pet = new Activity("Pet", 15, 5)
    const nap = new Activity("Nap With", 60, 60)
    const wash = new Activity("Wash", 30, 60)
    const talk = new Activity("Talk", 10, 2)

    useEffect(() => {
        let activities :Activity[] = []
        activities.push(talk)
        activities.push(pet)
        activities.push(cuddle)
        activities.push(nap)
        activities.push(wash)
        setLoveActivities(activities)
        setItems(activities)
        setActivity("love")
    }, [])

    // const handleGiveLove = () :void => {
    //     setItemAnimationClass("Heart")
    //     setTimeout(()=>{
    //         setItemAnimationClass("")
    //     }, 2000)
    //     animalToVisit?.addLove(50)
    //     player.addLove(50)
    //     setPlayer(player)
    //     setPlayerHasChanged(!playerHasChanged)
    //     // setPlayer({...player})
    //     setAnimalToVisit(animalToVisit)
    //     setAnimalToVisitHasChanged(!animalToVisitHasChanged)
    // }

    const handleClickFeed = () :void => {
        setActivity("feed")
        setItems(player.getFoods())
    }

    const handleClickPlay = () :void => {
        setActivity("play")
        setItems(player.getToys())
    }

    const handleClickLove = () :void => {
        setActivity("love")
        setItems(loveActivities)
    }

    const giveAnimalItem = (item :Item, itemIndex :number) :void => {
        if(item instanceof Food) {
            animalToVisit?.eat(item)
            player.removeFoodByIndex(itemIndex)
            handleClickFeed()
            setItemAnimationClass(item.getName())
            setButtonsDisabled(true)
            setTimeout(()=>{
                setItemAnimationClass("")
                setButtonsDisabled(false)
            }, 2000)
        }
        if(item instanceof Toy) {
            animalToVisit?.play(item)
            player.addLove(item.getTotalLoveAdded())
            player.removeToyByIndex(itemIndex)
            handleClickPlay()
            setToyAnimationClass(item.getName())
            setButtonsDisabled(true)
            setTimeout(()=>{
                setToyAnimationClass("")
                setButtonsDisabled(false)
            }, 4000)
        }
        if(item instanceof Activity) {
            if(item.isOffCooldown()){
                animalToVisit?.doActivity(item)
                player.addLove(item.getTotalLoveAdded())
                handleClickLove()
                setItemAnimationClass("Heart")
                setButtonsDisabled(true)
                setTimeout(()=>{
                    setItemAnimationClass("")
                    setButtonsDisabled(false)
                }, 2000)
            } 
            // else {
            //     alert("Please wait " + Math.floor(item.getCooldownRemaining()) + " seconds" )
            //     console.log("WAIT", Math.floor(item.getCooldownRemaining()) + " seconds" )
            // }
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
        if(room === "bedroom") handleClickLove()
    }

    return (
        <div>
            {displayedPages.includes("AnimalPage") && <>
                <h2>Animal Page</h2>
                {animalToVisit && <div className="animal-visit-container">
                    {/* <h3>{animalToVisit?.getName()} <button onClick={()=>}>More info</button></h3>!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1!!!!!!!!!!!!!!!!!!!!!! */}
                    <div className="animal-visit-animal-info-container">
                        <p><b>Love Level:</b> {animalToVisit.getLevel()}</p>
                        <p><b>Current Love Meter:</b> {animalToVisit.getLoveMeter()} / {animalToVisit.getLevel() * 100}</p>
                    </div>
                    <div className={"animal-visit-img-container " + "visit-" + currentRoom}>
                        <img className="animal-visit-animal-img" alt={animalToVisit?.getType()} src={require('../assets/' + animalToVisit?.getName() + '.png').default}/>
                        {itemAnimationClass !== "" && <img className="animal-visit-item-img" alt="item" src={require('../assets/' + itemAnimationClass + '.png').default}/>}
                        {toyAnimationClass !== "" && <img className="animal-visit-toy-img" alt="toy" src={require('../assets/' + toyAnimationClass + '.png').default}/>}
                    </div>
                    {/* <button onClick={() => handleGiveLove()}>Give Love</button>
                    <button onClick={() => handleClickFeed()}>Feed</button>
                    <button onClick={() => handleClickPlay()}>Play</button> */}
                    <button disabled={buttonsDisabled} onClick={()=>handleClickRoom("bedroom")}>Bedroom</button>
                    <button disabled={buttonsDisabled} onClick={()=>handleClickRoom("kitchen")}>Kitchen</button>
                    <button disabled={buttonsDisabled} onClick={()=>handleClickRoom("garden")}>Garden</button>
                    {activity !== "love" && <p>Buy More Items <button onClick={() => setDisplayedPages(["Shop"])}>HERE</button></p>}
                    {activity !== "" && <ItemList 
                        items={items}
                        player={player}
                        setPlayer={setPlayer}
                        activity={activity}
                        giveAnimalItem={giveAnimalItem}
                        playerHasChanged={playerHasChanged}
                        setPlayerHasChanged={setPlayerHasChanged}
                        buttonsDisabled={buttonsDisabled}
                    />}
                </div>}
            </>}
            {/* {selectedAnimal && <AnimalDetailsModal 
                animalDetailsModalIsOpen={animalDetailsModalIsOpen} 
                setAnimalDetailsModalIsOpen={setAnimalDetailsModalIsOpen}
                animal={selectedAnimal}
                setSelectedAnimal={setSelectedAnimal}
                animalToVisit={animalToVisit}
                setAnimalToVisit={setAnimalToVisit}
                displayedPages={displayedPages}
                setDisplayedPages={setDisplayedPages}
                handleVisitAnimal={handleVisitAnimal}
            />} */}
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

// interface Props {
//     animal :Animal | null
//     setSelectedAnimal :(animal :Animal | null ) => void
//     animalDetailsModalIsOpen :boolean
//     setAnimalDetailsModalIsOpen :(boolean :boolean) => void
//     player? :Player
//     setPlayer? :(player :Player) => void
//     animalsForAdoption? :Animal[] 
//     setAnimalsForAdoption? :(animals :Animal[]) => void
//     animalToVisit? :Animal | null
//     setAnimalToVisit? :(animal :Animal | null) => void
//     displayedPages :string[]
//     setDisplayedPages :(pages :string[]) => void
//     handleVisitAnimal? :(animal :Animal) => void
// }