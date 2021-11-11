import React, { useState, useEffect } from 'react';
import './AnimalSelect.css'

import Player from '../models/Player';
import Animal from '../models/Animal';


interface Props {
    player :Player
    setPlayer :(player :Player) => void
    setSelectedAnimal :(animal :Animal) => void
    animalsForAdoption :Animal[]
    animalDetailsModalIsOpen :boolean
    setAnimalDetailsModalIsOpen :(boolean :boolean) => void
    displayedPages :string[]
    setDisplayedPages :(pages :string[]) => void
}

const AnimalSelect = ({
    player, 
    setPlayer,
    setSelectedAnimal,
    animalsForAdoption,
    animalDetailsModalIsOpen, 
    setAnimalDetailsModalIsOpen,
    displayedPages,
    setDisplayedPages
}:Props) => {

    const getNumberOfAdoptionsAvailable = () :number => {
        return player.getLevel() - player.getAnimals().length
    }

    const handleOpenDetailsModal = (animal :Animal) => {
        setSelectedAnimal(animal)
        setAnimalDetailsModalIsOpen(true)
    }

    const displayAnimals = () :JSX.Element => {
        let animalsToDisplay :JSX.Element[] = animalsForAdoption.map((animal, index) => {
            return (
                <div className="animal-select-animal" key={index}>
                    <img alt={animal.getType()} src={require('../assets/' + animal.getName() + '.png').default}/>
                    <p>{animal.getName()} the {animal.getType()}</p>
                    <p>Loves eating {animal.getFavouriteFood().getName()} and playing with a {animal.getFavouriteToy().getName()}</p>
                    <button onClick={() => handleOpenDetailsModal(animal)}>Adopt {animal.getName()}</button>
                </div>
            )
        })
        return (
            <div className="animal-select-animal-container">
                {animalsToDisplay}
            </div>
        )
    }

    return (
        <div>
            {displayedPages.includes("AnimalSelect") && <div>
                <h2>Animal Select</h2>
                <p>A new animal can be adopted every time your Player Level increases!</p>
                <p>You have {getNumberOfAdoptionsAvailable()} adoptions available</p>
                {displayAnimals()}
            </div>}
        </div>
    )
}

export default AnimalSelect