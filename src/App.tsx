import React, { useState } from 'react';
import './App.css';

import StartPage from './components/StartPage';
import PlayerHomePage from './components/PlayerHomePage';
import AnimalSelect from './components/AnimalSelect';

function App() {

  // let testPlayer = new Player("test")
  // console.log("test", Object.keys(testPlayer))
  // console.log("typeof testPlayer", typeof testPlayer)

  const [ player, setPlayer ] = useState<any>(null)
  const [ animalDetailsModalIsOpen, setAnimalDetailsModalIsOpen ] = useState<boolean>(false)

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
        />
        <AnimalSelect 
          player={player} 
          setPlayer={setPlayer}
          animalDetailsModalIsOpen={animalDetailsModalIsOpen}
          setAnimalDetailsModalIsOpen={setAnimalDetailsModalIsOpen}
        />
      </header>
    </div>
  );
}

export default App;
