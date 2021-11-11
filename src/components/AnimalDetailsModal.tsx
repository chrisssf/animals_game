import React, { useState } from 'react';
import Modal from 'react-modal'
import './AnimalDetailsModal.css'

import Animal from '../models/Animal'
import Player from '../models/Player'

interface Props {
    animal :Animal | null
    setSelectedAnimal :(animal :Animal | null ) => void
    animalDetailsModalIsOpen :boolean
    setAnimalDetailsModalIsOpen :(boolean :boolean) => void
    player :Player
    setPlayer :(player :Player) => void
    animalsForAdoption :Animal[] 
    setAnimalsForAdoption :(animals :Animal[]) => void
    displayedPages :string[]
    setDisplayedPages :(pages :string[]) => void
}

const AnimalDetailsModal = ({ 
    animal, 
    setSelectedAnimal, 
    animalDetailsModalIsOpen, 
    setAnimalDetailsModalIsOpen, 
    player, 
    setPlayer,
    animalsForAdoption,
    setAnimalsForAdoption,
    displayedPages,
    setDisplayedPages,
}:Props) => {

    const [ talk, setTalk ] = useState<boolean>(false)

    const handleCloseModal = () :void => {
        setSelectedAnimal(null)
        setAnimalDetailsModalIsOpen(false)
    }
    
    const handleAdoptAnimal = (animal :Animal) :void => {

        let remainingAnimals :Animal[] = animalsForAdoption.filter(animalforAdoption => animalforAdoption.getName() !== animal.getName()) 
        setAnimalsForAdoption(remainingAnimals)
        player.addAnimal(animal)
        player.addFood(animal.getFavouriteFood())
        player.addToy(animal.getFavouriteToy())
        setPlayer(player)

        setSelectedAnimal(null)
        setDisplayedPages(["MyAnimals"])
        handleCloseModal()
    }

    const handleVisitAnimal = (animal :Animal) :void => {
        setSelectedAnimal(animal)
        setDisplayedPages(["AnimalPage"])
        setAnimalDetailsModalIsOpen(false)
    }

    const speechBubble = () :JSX.Element => {
        let text :string = animal?.talk()!
        let image :JSX.Element = <img alt={text} src={require('../assets/talkBubble.png').default}/>
        return (
            <div className="animal-details-speech-container">
                <p>{text}</p>
                {image}
            </div>
        )
    }

    const disableAdoptButton = () :boolean => {
        return player.getLevel() <= player.getAnimals().length
    }

    const handleTalk = () :void => {
        setTalk(true)
        setTimeout(() => {
            setTalk(false)
        }, 1000)
    }

    const checkAnimalIsAdopted = () :boolean => {
        let animalIsAdopted = false
        player.getAnimals().forEach(adoptedAnimal => {
            if(adoptedAnimal.getName() === animal?.getName()) animalIsAdopted = true
        })
        return animalIsAdopted
    }

    return(
        <Modal 
            className="animal-details-modal" 
            overlayClassName="animal-details-overlay" 
            isOpen={animalDetailsModalIsOpen} 
            appElement={document.getElementById("root")!}
        >
            {animal?.getName() && <div className="animal-details-modal-container">
                <img alt={animal?.getType()} src={require('../assets/' + animal?.getName() + '.png').default}/>
                <p>{animal?.getName()} the {animal?.getType()} <button onClick={() => handleTalk()}>Talk</button></p>
                <p>Favourite Food: {animal?.getFavouriteFood().getName()}</p>
                <p>Favourite Toy: {animal?.getFavouriteToy().getName()}</p>
                <p>Health: {animal?.getHealth()}</p>
                <p>Attack: {animal?.getAttack()}</p>
                {/* <p>{animal.()}</p>attacks = attacks */}
                {!checkAnimalIsAdopted() && <button disabled={disableAdoptButton()} onClick={() => handleAdoptAnimal(animal)}>ADOPT</button>}
                {checkAnimalIsAdopted() && <button onClick={() => handleVisitAnimal(animal)}>VISIT</button>}
                <button onClick={() => handleCloseModal()}>BACK</button>
                {talk && speechBubble()}
            </div>}
        </Modal>
    )
}

export default AnimalDetailsModal;