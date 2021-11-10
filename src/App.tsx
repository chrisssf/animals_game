import React, { useState } from 'react';
import './App.css';

import StartPage from './components/StartPage';
import PlayerHomePage from './components/PlayerHomePage';
import AnimalSelect from './components/AnimalSelect';
import AnimalPage from './components/AnimalPage'
import ShopPage from './components/ShopPage';

import Animal from './models/Animal';
import Player from './models/Player';

function App() {

  // let testPlayer = new Player("test")
  // console.log("test", Object.keys(testPlayer))
  // console.log("typeof testPlayer", typeof testPlayer)
  const placeholder = new Player("")
  const [ player, setPlayer ] = useState<Player>(placeholder)
  const [ playerHasChanged, setPlayerHasChanged ] = useState<boolean>(false)
  const [ animalDetailsModalIsOpen, setAnimalDetailsModalIsOpen ] = useState<boolean>(false)
  const [ animalToVisit, setAnimalToVisit ] = useState<Animal | null>(null)
  const [ animalToVisitHasChanged, setAnimalToVisitHasChanged ] = useState<boolean>(false)
  const [ displayedPages, setDisplayedPages ] = useState<string[]>([])

  return (
    <div className="App">
      <header className="App-header">
        <h2>Adopt'emAll</h2>
        {player.getName() === "" && <StartPage 
          player={player} 
          setPlayer={setPlayer}
          setDisplayedPages={setDisplayedPages}
        />}
        {player.getName() !== "" && <PlayerHomePage 
          player={player}
          animalDetailsModalIsOpen={animalDetailsModalIsOpen}
          setAnimalDetailsModalIsOpen={setAnimalDetailsModalIsOpen}
          animalToVisit={animalToVisit}
          setAnimalToVisit={setAnimalToVisit}
          displayedPages={displayedPages}
          setDisplayedPages={setDisplayedPages}
        />}
        <AnimalSelect 
          player={player} 
          setPlayer={setPlayer}
          animalDetailsModalIsOpen={animalDetailsModalIsOpen}
          setAnimalDetailsModalIsOpen={setAnimalDetailsModalIsOpen}
          displayedPages={displayedPages}
          setDisplayedPages={setDisplayedPages}
        /> {/* } */}
        {displayedPages.includes("AnimalPage") && <AnimalPage
          player={player}
          setPlayer={setPlayer}
          animalToVisit={animalToVisit}
          setAnimalToVisit={setAnimalToVisit}
          animalToVisitHasChanged={animalToVisitHasChanged}
          setAnimalToVisitHasChanged={setAnimalToVisitHasChanged}
          playerHasChanged={playerHasChanged}
          setPlayerHasChanged={setPlayerHasChanged}
        />}
        {displayedPages.includes("Shop") && <ShopPage 
          player={player} 
          setPlayer={setPlayer}
          playerHasChanged={playerHasChanged}
          setPlayerHasChanged={setPlayerHasChanged}
          displayedPages={displayedPages}
          setDisplayedPages={setDisplayedPages}
        />}
      </header>
    </div>
  );
}

export default App;
