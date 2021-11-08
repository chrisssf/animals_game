import React, { useState } from 'react';
import './App.css';

import StartPage from './components/StartPage';
import PlayerHomePage from './components/PlayerHomePage';
import AnimalSelect from './components/AnimalSelect';
import AnimalPage from './components/AnimalPage'
import ShopPage from './components/ShopPage';

import Animal from './models/Animal';

function App() {

  // let testPlayer = new Player("test")
  // console.log("test", Object.keys(testPlayer))
  // console.log("typeof testPlayer", typeof testPlayer)

  const [ player, setPlayer ] = useState<any>(null)
  const [ animalDetailsModalIsOpen, setAnimalDetailsModalIsOpen ] = useState<boolean>(false)
  const [ animalToVisit, setAnimalToVisit ] = useState<Animal | null>(null)
  const [ animalToVisitHasChanged, setAnimalToVisitHasChanged ] = useState<boolean>(false)

  return (
    <div className="App">
      <header className="App-header">
        <p>APP</p>
        <StartPage 
          player={player} 
          setPlayer={setPlayer}
        />
        <PlayerHomePage 
          player={player}
          animalDetailsModalIsOpen={animalDetailsModalIsOpen}
          setAnimalDetailsModalIsOpen={setAnimalDetailsModalIsOpen}
          animalToVisit={animalToVisit}
          setAnimalToVisit={setAnimalToVisit}
        />
        <AnimalSelect 
          player={player} 
          setPlayer={setPlayer}
          animalDetailsModalIsOpen={animalDetailsModalIsOpen}
          setAnimalDetailsModalIsOpen={setAnimalDetailsModalIsOpen}
        />
        <AnimalPage
          player={player}
          setPlayer={setPlayer}
          animalToVisit={animalToVisit}
          setAnimalToVisit={setAnimalToVisit}
          animalToVisitHasChanged={animalToVisitHasChanged}
          setAnimalToVisitHasChanged={setAnimalToVisitHasChanged}
        />
        <ShopPage 
          player={player} 
          setPlayer={setPlayer}
        />
      </header>
    </div>
  );
}

export default App;
