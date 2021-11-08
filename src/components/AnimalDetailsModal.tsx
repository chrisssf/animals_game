import React, { useState } from 'react';
import Modal from 'react-modal'
import './AnimalDetailsModal.css'

import Animal from '../models/Animal'

interface Props {
    animal :Animal | null
    setSelectedAnimal :(animal :Animal | null ) => void
    animalDetailsModalIsOpen :boolean
    setAnimalDetailsModalIsOpen :(boolean :boolean) => void
    player? :any
    setPlayer? :(player :any) => void
    animalsForAdoption? :Animal[] 
    setAnimalsForAdoption? :(animals :Animal[]) => void
    animalToVisit? :Animal | null
    setAnimalToVisit? :(animal :Animal | null) => void
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
    animalToVisit,
    setAnimalToVisit
}:Props) => {

    const [ talk, setTalk ] = useState<boolean>(false)

    const handleCloseModal = () :void => {
        setSelectedAnimal(null)
        setAnimalDetailsModalIsOpen(false)
    }
    
    const handleAdoptAnimal = (animal :Animal) :void => {
        if(player && setPlayer && animalsForAdoption && setAnimalsForAdoption){
            let remainingAnimals :Animal[] = animalsForAdoption.filter(animalforAdoption => animalforAdoption.getName() !== animal.getName()) 
            setAnimalsForAdoption(remainingAnimals)
            player.addAnimal(animal)
            setPlayer({...player})
        }
        setSelectedAnimal(null)
        handleCloseModal()
    }

    const handleVisitAnimal = (animal :Animal) :void => {
        if(setAnimalToVisit) setAnimalToVisit(animal)  
        handleCloseModal()
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

    const handleTalk = () :void => {
        setTalk(true)
        setTimeout(() => {
            setTalk(false)
        }, 1000)
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
                {animalsForAdoption && <button onClick={() => handleAdoptAnimal(animal)}>ADOPT</button>}
                {!animalsForAdoption && <button onClick={() => handleVisitAnimal(animal)}>VISIT</button>}
                <button onClick={() => handleCloseModal()}>BACK</button>
                {talk && speechBubble()}
            </div>}
        </Modal>
    )
}

export default AnimalDetailsModal;