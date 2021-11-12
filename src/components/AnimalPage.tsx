import React, { useState, useEffect } from 'react';
import './AnimalPage.css'
import ItemList from './ItemList';
import SeedData from '../SeedData';

import Animal from '../models/Animal';
import Player from '../models/Player';
import Item from '../models/Item';
import Toy from '../models/Toy'
import Food from '../models/Food'
import Activity from '../models/Activity';

interface Props {
    player :Player
    setPlayer :(player :Player) => void
    selectedAnimal :Animal | null
    setSelectedAnimal :(animal :Animal | null) => void
    selectedAnimalHasChanged :boolean 
    setSelectedAnimalHasChanged  :(boolean :boolean) => void
    playerHasChanged :boolean
    setPlayerHasChanged :(boolean :boolean) => void
    displayedPages :string[]
    setDisplayedPages :(pages :string[]) => void
    setAnimalDetailsModalIsOpen :(boolean :boolean) => void
}

const AnimalPage = ({
    player,
    setPlayer,
    selectedAnimal,
    setSelectedAnimal,
    selectedAnimalHasChanged,
    setSelectedAnimalHasChanged,
    playerHasChanged,
    setPlayerHasChanged,
    displayedPages,
    setDisplayedPages,
    setAnimalDetailsModalIsOpen,
} :Props) => {

    const [ task, setTask] = useState<string>("love")
    const [ items, setItems ] = useState<Item[]>(SeedData.activities)
    // const [ loveActivities, setLoveActivities ] = useState<Activity[]>(SeedData.activities)
    const [ currentRoom, setCurrentRoom] = useState<string>("bedroom")
    const [ toyAnimationClass, setToyAnimationClass ] = useState<string>("")
    const [ itemAnimationClass, setItemAnimationClass ] = useState<string>("")
    const [ buttonsDisabled, setButtonsDisabled ] = useState<boolean>(false)
    const [ animateAnimal, setAnimateAnimal ] = useState<string>("")

    useEffect(() => {
        if(currentRoom !== "bedroom") {
            setCurrentRoom("bedroom")
            setItems(SeedData.activities)
            setTask("love")
        }
    }, [displayedPages])

    // const handleGiveLove = () :void => {
    //     setItemAnimationClass("Heart")
    //     setTimeout(()=>{
    //         setItemAnimationClass("")
    //     }, 2000)
    //     selectedAnimal?.addLove(50)
    //     player.addLove(50)
    //     setPlayer(player)
    //     setPlayerHasChanged(!playerHasChanged)
    //     // setPlayer({...player})
    //     setSelectedAnimal(selectedAnimal)
    //     setSelectedAnimalHasChanged(!selectedAnimalHasChanged)
    // }

    const handleStartFeed = () :void => {
        setTask("feed")
        setItems(player.getFoods())
    }

    const handleStartPlay = () :void => {
        setTask("play")
        setItems(player.getToys())
    }

    const handleStartLove = () :void => {
        setTask("love")
        setItems(SeedData.activities)
    }

    const giveAnimalFood = (food :Food, itemIndex :number) :void => {
        selectedAnimal?.eat(food)
        player.removeFoodByIndex(itemIndex)
        // handleStartFeed()
        setItemAnimationClass(food.getName())
        setButtonsDisabled(true)
        setTimeout(()=>{
            setItemAnimationClass("")
            setButtonsDisabled(false)
        }, 3000)
        setPlayer(player)
        setPlayerHasChanged(!playerHasChanged)
        setSelectedAnimal(selectedAnimal)
        setSelectedAnimalHasChanged(!selectedAnimalHasChanged)
    }

    const giveAnimalToy = (toy :Toy, itemIndex :number) :void => {
        selectedAnimal?.play(toy)
        player.addLove(toy.getTotalLoveAdded())
        player.removeToyByIndex(itemIndex)
        // handleStartPlay()
        setToyAnimationClass(toy.getName())
        setAnimateAnimal("animal-visit-img-animation")
        setButtonsDisabled(true)
        setTimeout(()=>{
            setToyAnimationClass("")
            setButtonsDisabled(false)
            setAnimateAnimal("")
        }, 4000)
        setPlayer(player)
        setPlayerHasChanged(!playerHasChanged)
        setSelectedAnimal(selectedAnimal)
        setSelectedAnimalHasChanged(!selectedAnimalHasChanged)
    }

    const giveAnimalLove = (activity :Activity, itemIndex :number) :void => {
        if(activity.isOffCooldown()){
            selectedAnimal?.doActivity(activity)
            player.addLove(activity.getTotalLoveAdded())
            // handleStartLove()
            setItemAnimationClass("Heart")
            setButtonsDisabled(true)
            setTimeout(()=>{
                setItemAnimationClass("")
                setButtonsDisabled(false)
            }, 3000)
        } 
        setPlayer(player)
        setPlayerHasChanged(!playerHasChanged)
        setSelectedAnimal(selectedAnimal)
        setSelectedAnimalHasChanged(!selectedAnimalHasChanged)
    }



    // const giveAnimalItem = (item :Item, itemIndex :number) :void => {
    //     if(item instanceof Food) {
    //         selectedAnimal?.eat(item)
    //         player.removeFoodByIndex(itemIndex)
    //         // handleStartFeed()
    //         setItemAnimationClass(item.getName())
    //         setButtonsDisabled(true)
    //         setTimeout(()=>{
    //             setItemAnimationClass("")
    //             setButtonsDisabled(false)
    //         }, 2000)
    //     }
    //     if(item instanceof Toy) {
    //         selectedAnimal?.play(item)
    //         player.addLove(item.getTotalLoveAdded())
    //         player.removeToyByIndex(itemIndex)
    //         // handleStartPlay()
    //         setToyAnimationClass(item.getName())
    //         setButtonsDisabled(true)
    //         setTimeout(()=>{
    //             setToyAnimationClass("")
    //             setButtonsDisabled(false)
    //         }, 4000)
    //     }
    //     if(item instanceof Activity) {
    //         if(item.isOffCooldown()){
    //             selectedAnimal?.doActivity(item)
    //             player.addLove(item.getTotalLoveAdded())
    //             // handleStartLove()
    //             setItemAnimationClass("Heart")
    //             setButtonsDisabled(true)
    //             setTimeout(()=>{
    //                 setItemAnimationClass("")
    //                 setButtonsDisabled(false)
    //             }, 2000)
    //         } 
    //         // else {
    //         //     alert("Please wait " + Math.floor(item.getCooldownRemaining()) + " seconds" )
    //         //     console.log("WAIT", Math.floor(item.getCooldownRemaining()) + " seconds" )
    //         // }
    //     }
    //     setPlayer(player)
    //     setPlayerHasChanged(!playerHasChanged)
    //     setSelectedAnimal(selectedAnimal)
    //     setSelectedAnimalHasChanged(!selectedAnimalHasChanged)
    // }

    const handleClickRoom = (room :string) :void => {
        setCurrentRoom(room)
        if(room === "kitchen") handleStartFeed()
        if(room === "garden") handleStartPlay()
        if(room === "bedroom") handleStartLove()
    }

    return (
        <div>
            {displayedPages.includes("AnimalPage") && <>
                <h2>Animal Page</h2>
                {selectedAnimal && <div className="animal-visit-container">
                    <h3>{selectedAnimal?.getName()} <button onClick={()=> setAnimalDetailsModalIsOpen(true)}>More info</button></h3>
                    <div className="animal-visit-animal-info-container">
                        <p><b>Love Level:</b> {selectedAnimal.getLevel()}</p>
                        <p><b>Current Love Meter:</b> {selectedAnimal.getLoveMeter()} / {selectedAnimal.getLevel() * 100}</p>
                    </div>
                    <div className={"animal-visit-img-container " + "visit-" + currentRoom}>
                        <img className={"animal-visit-animal-img " + animateAnimal} alt={selectedAnimal?.getType()} src={require('../assets/' + selectedAnimal?.getName() + '.png').default}/>
                        {itemAnimationClass !== "" && <img className="animal-visit-item-img" alt="item" src={require('../assets/' + itemAnimationClass + '.png').default}/>}
                        {toyAnimationClass !== "" && <img className="animal-visit-toy-img" alt="toy" src={require('../assets/' + toyAnimationClass + '.png').default}/>}
                        {(itemAnimationClass !== "" || toyAnimationClass !== "") && <img className="animal-visit-happy-face" alt="toy" src={require('../assets/' + "happyface" + '.png').default}/>}
                        {(itemAnimationClass !== "" || toyAnimationClass !== "") && <img className="animal-visit-happy-hearts-left" alt="toy" src={require('../assets/' + "happyhearts" + '.png').default}/>}
                        {(itemAnimationClass !== "" || toyAnimationClass !== "") && <img className="animal-visit-happy-hearts-right" alt="toy" src={require('../assets/' + "happyhearts" + '.png').default}/>}
                    </div>
                    <button disabled={buttonsDisabled} onClick={()=>handleClickRoom("bedroom")}>Bedroom</button>
                    <button disabled={buttonsDisabled} onClick={()=>handleClickRoom("kitchen")}>Kitchen</button>
                    <button disabled={buttonsDisabled} onClick={()=>handleClickRoom("garden")}>Garden</button>
                    {task !== "love" && <p>Buy More Items <button onClick={() => setDisplayedPages(["Shop"])}>HERE</button></p>}
                    {task !== "" && <ItemList 
                        items={items}
                        player={player}
                        setPlayer={setPlayer}
                        task={task}
                        giveAnimalLove={giveAnimalLove}
                        giveAnimalFood={giveAnimalFood}
                        giveAnimalToy={giveAnimalToy}
                        playerHasChanged={playerHasChanged}
                        setPlayerHasChanged={setPlayerHasChanged}
                        buttonsDisabled={buttonsDisabled}
                    />}
                </div>}
            </>}
        </div>
    )
}

export default AnimalPage