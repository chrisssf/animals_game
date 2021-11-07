import React from 'react';
import Modal from 'react-modal'
import './AnimalDetailsModal.css'

import Animal from '../models/Animal'

interface Props {
    animal: Animal | null
    setSelectedAnimal :(animal :Animal | null ) => void
    animalDetailsModalIsOpen : boolean
    setAnimalDetailsModalIsOpen: (boolean :boolean) => void
    player?: any
    setPlayer?: (player :any) => void 
}

const AnimalDetailsModal = ({ animal, setSelectedAnimal, animalDetailsModalIsOpen, setAnimalDetailsModalIsOpen, player, setPlayer }:Props) => {

    const handleCloseModal = ():void => {
        setSelectedAnimal(null)
        setAnimalDetailsModalIsOpen(false)
    }
    
    const handleAdoptAnimal = (animal :Animal):void => {
        if(player && setPlayer){
            player.addAnimal(animal)
            setPlayer({...player})
        }
        setSelectedAnimal(null)
        handleCloseModal()
    }

    return(
        <Modal 
            className="animal-details-modal" 
            overlayClassName="animal-details-overlay" 
            isOpen={animalDetailsModalIsOpen} 
            appElement={document.getElementById("root")!}
        >
            {animal?.getName() && <div>
                <img alt={animal?.getType()} src={require('../assets/' + animal?.getName() + '.png').default}/>
                <p>{animal?.getName()} the {animal?.getType()}</p>
                <p>Favourite Food: {animal?.getFavouriteFood().getName()}</p>
                <p>Favourite Toy: {animal?.getFavouriteToy().getName()}</p>
                <p>Health: {animal?.getHealth()}</p>
                <p>Attack: {animal?.getAttack()}</p>
                {/* <p>{animal.()}</p>attacks = attacks */}
                <button onClick={() => handleAdoptAnimal(animal)}>ADOPT</button>
                <button onClick={() => handleCloseModal()}>BACK</button>
            </div>}
        </Modal>
    )
}

export default AnimalDetailsModal;