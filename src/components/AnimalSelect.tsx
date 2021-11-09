import React, { useState, useEffect } from 'react';
import './AnimalSelect.css'

import AnimalDetailsModal from './AnimalDetailsModal';

import Player from '../models/Player';
import Animal from '../models/Animal';
import Snake from '../models/Snake';
import Bear from '../models/Bear';
import Tiger from '../models/Tiger';
import Food from '../models/Food';
import Toy from '../models/Toy';
import Attack from '../models/Attack';

interface Props {
    player :Player
    setPlayer :(player :Player) => void
    animalDetailsModalIsOpen :boolean
    setAnimalDetailsModalIsOpen :(boolean :boolean) => void
}

const AnimalSelect = ({player, setPlayer, animalDetailsModalIsOpen, setAnimalDetailsModalIsOpen}:Props) => {

    let mouse = new Food("Mouse", "Meat", 20, 1, 10)
    let blueberries = new Food("Blueberries", "Berry", 5, 1, 2)
    let salmon = new Food("Salmon", "Fish", 8, 2, 5)
    let burger = new Food("Burger", "Meat", 10, 1, 10)
    let burger2 = new Food("Burger", "Meat", 10, 2, 10)

    let teddy = new Toy("Teddy", "Cuddly Toy", 7, 1, 3)
    let football = new Toy("Football", "Ball", 15, 1, 10)
    let rubberDuck = new Toy("Rubber Duck", "Chew Toy", 10, 1, 5)

    let bite = new Attack("Bite", "Speed", 15, "Poision", 20)
    let claw = new Attack("Claw", "Power", 25, "Bleeding", 10)
    let pounce = new Attack("Pounce", "Stealth", 10, "Incapacitate", 30)


    let steve = new Snake("Steve", "Snake", 50, 10, mouse, teddy, [bite])
    let bob = new Bear("Bob", "Bear", 50, 10, salmon, football, [claw])
    let tina = new Tiger("Tina", "Tiger", 50, 10, burger, rubberDuck, [pounce])
    // console.log(steve);
    // let animals :Animal[] = []
    // animals.push(steve)
    // animals.push(bob)
    // animals.push(tina)
    // console.log(animals)

    const [ selectedAnimal, setSelectedAnimal ] = useState<Animal | null>(null)
    const [ animalsForAdoption , setAnimalsForAdoption ] = useState<Animal[]>([])

    useEffect(() =>{
        animalsForAdoption.push(steve)
        animalsForAdoption.push(bob)
        animalsForAdoption.push(tina)
        setAnimalsForAdoption([...animalsForAdoption])
    }, [])

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
            <h2>Animal Select</h2>
            <p>A new animal can be adopted every time your Player Level increases!</p>
            {player && <p>You have {getNumberOfAdoptionsAvailable()} adoptions available</p>}  {/* !!!!!!!!!!! */}
            {displayAnimals()}
            {/* <p>Name: {steve.getName()}</p>
            <p>Favorite Food: {steve.getFavouriteFood().getName()}</p> */}

            <AnimalDetailsModal 
                animalDetailsModalIsOpen={animalDetailsModalIsOpen} 
                setAnimalDetailsModalIsOpen={setAnimalDetailsModalIsOpen}
                animal={selectedAnimal}
                setSelectedAnimal={setSelectedAnimal}
                player={player}
                setPlayer={setPlayer}
                animalsForAdoption={animalsForAdoption} 
                setAnimalsForAdoption={setAnimalsForAdoption}
            />
        </div>
    )
}

export default AnimalSelect