import React, { useState } from 'react';
import './App.css';

import StartPage from './components/StartPage';
import PlayerHomePage from './components/PlayerHomePage';
import AnimalSelect from './components/AnimalSelect';
import AnimalPage from './components/AnimalPage'
import ShopPage from './components/ShopPage';
import AnimalDetailsModal from './components/AnimalDetailsModal';
import allAnimals from './SeedData'

import Animal from './models/Animal';
import Player from './models/Player';

function App() {

  const placeholder = new Player("")
  const [ player, setPlayer ] = useState<Player>(placeholder)
  const [ playerHasChanged, setPlayerHasChanged ] = useState<boolean>(false)
  const [ animalDetailsModalIsOpen, setAnimalDetailsModalIsOpen ] = useState<boolean>(false)
  const [ selectedAnimal, setSelectedAnimal ] = useState<Animal | null>(null)
  const [ selectedAnimalHasChanged, setSelectedAnimalHasChanged ] = useState<boolean>(false)
  const [ displayedPages, setDisplayedPages ] = useState<string[]>([])
  const [ animalsForAdoption, setAnimalsForAdoption ] = useState<Animal[]>(allAnimals.allAnimals)

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
          selectedAnimal={selectedAnimal}
          setSelectedAnimal={setSelectedAnimal}
          displayedPages={displayedPages}
          setDisplayedPages={setDisplayedPages}
        />}
        <AnimalSelect 
          player={player} 
          setPlayer={setPlayer}
          setSelectedAnimal={setSelectedAnimal}
          animalsForAdoption={animalsForAdoption}
          animalDetailsModalIsOpen={animalDetailsModalIsOpen}
          setAnimalDetailsModalIsOpen={setAnimalDetailsModalIsOpen}
          displayedPages={displayedPages}
          setDisplayedPages={setDisplayedPages}
        />
        <AnimalPage
          player={player}
          setPlayer={setPlayer}
          selectedAnimal={selectedAnimal}
          setSelectedAnimal={setSelectedAnimal}
          selectedAnimalHasChanged={selectedAnimalHasChanged}
          setSelectedAnimalHasChanged={setSelectedAnimalHasChanged}
          playerHasChanged={playerHasChanged}
          setPlayerHasChanged={setPlayerHasChanged}
          displayedPages={displayedPages}
          setDisplayedPages={setDisplayedPages}
        />
        {displayedPages.includes("Shop") && <ShopPage 
          player={player} 
          setPlayer={setPlayer}
          playerHasChanged={playerHasChanged}
          setPlayerHasChanged={setPlayerHasChanged}
          displayedPages={displayedPages}
          setDisplayedPages={setDisplayedPages}
        />}
        <AnimalDetailsModal 
          animal={selectedAnimal}
          setSelectedAnimal={setSelectedAnimal}
          animalDetailsModalIsOpen={animalDetailsModalIsOpen}
          setAnimalDetailsModalIsOpen={setAnimalDetailsModalIsOpen}
          player={player}
          setPlayer={setPlayer}
          displayedPages={displayedPages}
          setDisplayedPages={setDisplayedPages}
          animalsForAdoption={animalsForAdoption}
          setAnimalsForAdoption={setAnimalsForAdoption}
        />
      </header>
    </div>
  );
}

export default App;
