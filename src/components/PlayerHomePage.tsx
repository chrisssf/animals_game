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
}

const PlayerHomePage = ({player, animalDetailsModalIsOpen, setAnimalDetailsModalIsOpen, animalToVisit, setAnimalToVisit}: Props) =>{
    // will have some player details and list of current animals
    // every level / (few levels?) player can get new animal added to their collection

  const [ selectedAnimal, setSelectedAnimal ] = useState<Animal | null>(null)

    const displayPlayerAnimals = () :JSX.Element=> {
        const playerAnimals :Animal[] = player.getAnimals()
        const playerAnimalsDisplay = playerAnimals.map((animal, index) => {
            return (
                <div onClick={() => handleClickAnimal(animal)} key={index}>
                    <p>{animal.getName()}</p>
                    <img alt={animal.getType()} src={require('../assets/' + animal.getName() + '.png').default}/>
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


    return (
        <div>
            {/* {console.log("player", player)} */}
            <div>
                <h2>Player Info</h2>

                {/* <p>Name: {(player !== null) ? player.getName() : null}</p>
                <p>Level: {(player !== null) ? player.getLevel() : null}</p>
                <p>EXP: {(player !== null) ? player.getCurrentExp() : null} / 100</p> */}

                <p>Player Name: {player.getName()}</p>
                <p>Player Level: {player.getLevel()}</p>
                <p>Player EXP: {player.getCurrentExp()} / 100</p>
                {displayPlayerAnimals()}
            </div>
            {selectedAnimal && <AnimalDetailsModal 
                animalDetailsModalIsOpen={animalDetailsModalIsOpen} 
                setAnimalDetailsModalIsOpen={setAnimalDetailsModalIsOpen}
                animal={selectedAnimal}
                setSelectedAnimal={setSelectedAnimal}
                animalToVisit={animalToVisit}
                setAnimalToVisit={setAnimalToVisit}
            />}
        </div>)

}

export default PlayerHomePage
