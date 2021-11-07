import React, { useState } from 'react';
import './AnimalSelect.css'

import AnimalDetailsModal from './AnimalDetailsModal';

import Animal from '../models/Animal';
import Snake from '../models/Snake';
import Bear from '../models/Bear';
import Tiger from '../models/Tiger';
import Food from '../models/Food';
import Toy from '../models/Toy';
import Attack from '../models/Attack';

interface Props {
    player :any
    setPlayer :(player :any) => void
    animalDetailsModalIsOpen :boolean
    setAnimalDetailsModalIsOpen :(boolean :boolean) => void
}

const AnimalSelect = ({player, setPlayer, animalDetailsModalIsOpen, setAnimalDetailsModalIsOpen}:Props) => {

    let mouse = new Food("Mouse", "Meat", 20, 1)
    let blueberries = new Food("Blueberries", "Berry", 5, 1)
    let salmon = new Food("Salmon", "Fish", 8, 1)
    let burger = new Food("Burger", "Meat", 10, 1)

    let teddy = new Toy("Teddy", "Cuddly Toy", 7, 1)
    let football = new Toy("Football", "Ball", 15, 1)
    let rubberDuck = new Toy("Rubber Duck", "Chew Toy", 10, 1)

    let bite = new Attack("Bite", "Speed", 15, "Poision", 20)
    let claw = new Attack("Claw", "Power", 25, "Bleeding", 10)
    let pounce = new Attack("Pounce", "Stealth", 10, "Incapacitate", 30)


    let steve = new Snake("Steve", "Snake", 50, 10, mouse, teddy, [bite])
    let bob = new Bear("Bob", "Bear", 50, 10, salmon, football, [claw])
    let tina = new Tiger("Tina", "Tiger", 50, 10, burger, rubberDuck, [pounce])
    // console.log(steve);
    let animals :Animal[] = []
    animals.push(steve)
    animals.push(bob)
    animals.push(tina)
    // console.log(animals)

    const [ selectedAnimal, setSelectedAnimal ] = useState<Animal | null>(null)

    const handleOpenDetailsModal = (animal :Animal) => {
        setSelectedAnimal(animal)
        setAnimalDetailsModalIsOpen(true)
    }

    const displayAnimals = () :JSX.Element => {
        let animalsToDisplay :JSX.Element[] = animals.map((animal, index) => {
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
            <h2>Animal Select</h2>
            {displayAnimals()}
            <p>Name: {steve.getName()}</p>
            <p>Favorite Food: {steve.getFavouriteFood().getName()}</p>

            <AnimalDetailsModal 
                animalDetailsModalIsOpen={animalDetailsModalIsOpen} 
                setAnimalDetailsModalIsOpen={setAnimalDetailsModalIsOpen}
                animal={selectedAnimal}
                setSelectedAnimal={setSelectedAnimal}
                player={player}
                setPlayer={setPlayer}
            />
        </div>
    )
}

export default AnimalSelect