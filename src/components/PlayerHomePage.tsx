import React, { useState } from 'react';
import './PlayerHomePage.css'

import Player from '../models/Player';
import Animal from '../models/Animal'
import AnimalDetailsModal from './AnimalDetailsModal'


interface Props {
    player :Player
    animalDetailsModalIsOpen :boolean
    setAnimalDetailsModalIsOpen :(boolean :boolean) => void
    animalToVisit :Animal | null
    setAnimalToVisit :(animal :Animal | null) => void
    displayedPages :string[]
    setDisplayedPages :(pages :string[]) => void
}

const PlayerHomePage = ({
    player, 
    animalDetailsModalIsOpen, 
    setAnimalDetailsModalIsOpen, 
    animalToVisit, 
    setAnimalToVisit,
    displayedPages,
    setDisplayedPages,
}: Props) =>{
    // will have some player details and list of current animals
    // every level / (few levels?) player can get new animal added to their collection

    const [ selectedAnimal, setSelectedAnimal ] = useState<Animal | null>(null)

    const handleClickMyAnimals = () :void => {
        setDisplayedPages(["MyAnimals"])
    }
    const handleClickMyItems = () :void => {
        setDisplayedPages(["Shop", "MyItems"])

    }
    const handleClickShop = () :void => {
        setDisplayedPages(["Shop"])

    }
    const handleClickAdoptAnimal = () :void => {
        setDisplayedPages(["AnimalSelect"])
    }

    const displayHelpMessage = () :JSX.Element => {
        const adoptButton :JSX.Element = <button onClick={() => setDisplayedPages(["AnimalSelect"])}>HERE!</button>
        if (player.getAnimals().length === 0) {
            return <p>Adopt an Animal {adoptButton}</p>
        } else if (getNumberOfAdoptionsAvailable() > 0) {
            let s :string = ""
            getNumberOfAdoptionsAvailable() > 1 ? s = "s" : s = ""
            return <p>You can currently adopt {getNumberOfAdoptionsAvailable()} Animal{s}, click {adoptButton} to adopt!</p>
        } else {
            return <p>Increase Player Level to adopt more Animals</p>
        }
    }

    const displayPlayerAnimals = () :JSX.Element=> {
        const playerAnimals :Animal[] = player.getAnimals()
        const playerAnimalsDisplay = playerAnimals.map((animal, index) => {
            return (
                <div key={index}>
                    <p onClick={() => handleClickAnimal(animal)} >{animal.getName()}</p>
                    <img onClick={() => handleClickAnimal(animal)} alt={animal.getType()} src={require('../assets/' + animal.getName() + '.png').default}/>
                    <button onClick={() => handleVisitAnimal(animal)}>VISIT</button>
                </div>
            )
        })
        return (
            <div className="player-home-animal-container">
                {playerAnimalsDisplay}
            </div>
        )
    }

    const handleClickAnimal = (animal :Animal) :void => {
        setSelectedAnimal(animal)
        setAnimalDetailsModalIsOpen(true)
    }

    const handleVisitAnimal = (animal :Animal) :void => {
        setAnimalToVisit(animal)
        setDisplayedPages(["AnimalPage"])
        // handleCloseModal()
        setSelectedAnimal(null)
        setAnimalDetailsModalIsOpen(false)
    }

    const getNumberOfAdoptionsAvailable = () :number => {
        return player.getLevel() - player.getAnimals().length
    }

    return (
        <div>
            <button onClick={() => handleClickMyAnimals()}>My Animals ({player.getAnimals().length})</button>
            <button onClick={() => handleClickMyItems()}>My Items</button>
            <button onClick={() => handleClickShop()}>Shop</button>
            <button onClick={() => handleClickAdoptAnimal()}>Adopt Animal ({getNumberOfAdoptionsAvailable()})</button>
            <div className="player-info-container">
                <h2>Player Info</h2>
                <div className="player-info-information">
                    <p><b>Player Name:</b> {player.getName()}</p>
                    <p><b>Player Love Level:</b> {player.getLevel()}</p>
                    <p><b>Player Love Meter:</b> {player.getLoveMeter()} / {player.getLevel() * 100}</p>
                </div>
            </div>
            {displayedPages.includes("MyAnimals") && <div>
                <h2>My Animals</h2>
                {displayHelpMessage()}
                {displayPlayerAnimals()}
            </div>}
            {selectedAnimal && <AnimalDetailsModal 
                animalDetailsModalIsOpen={animalDetailsModalIsOpen} 
                setAnimalDetailsModalIsOpen={setAnimalDetailsModalIsOpen}
                animal={selectedAnimal}
                setSelectedAnimal={setSelectedAnimal}
                animalToVisit={animalToVisit}
                setAnimalToVisit={setAnimalToVisit}
                displayedPages={displayedPages}
                setDisplayedPages={setDisplayedPages}
                handleVisitAnimal={handleVisitAnimal}
            />}
        </div>)

}

export default PlayerHomePage
