import React from 'react';
import Animal from '../models/Animal';
// import './AnimalPage.css'

interface Props {
    animalToVisit :Animal | null
    setAnimalToVisit :(animal :Animal | null) => void
    animalToVisitHasChanged :boolean 
    setAnimalToVisitHasChanged  :(boolean :boolean) => void
}

const AnimalPage = ({animalToVisit, setAnimalToVisit, animalToVisitHasChanged, setAnimalToVisitHasChanged } :Props) => {

    const handleGiveLove = () :void => {
        animalToVisit?.addExp(50)
        setAnimalToVisit(animalToVisit)
        setAnimalToVisitHasChanged(!animalToVisitHasChanged)
    }

    const handleFeed = () :void => {

    }

    const handlePlay = () :void => {

    }

    return (
        <div>
            <h2>Animal Page</h2>
            {animalToVisit && <div>
                <h3>{animalToVisit?.getName()}</h3>
                <p>Level: {animalToVisit.getLevel()}</p>
                <p>Current EXP: {animalToVisit.getCurrentExp()} / 100</p>
                <img alt={animalToVisit?.getType()} src={require('../assets/' + animalToVisit?.getName() + '.png').default}/>
                <button onClick={() => handleGiveLove()}>Give Love</button>
                <button onClick={() => handleFeed()}>Feed</button>
                <button onClick={() => handlePlay()}>Play</button>
            </div>}
        </div>
    )
}

export default AnimalPage