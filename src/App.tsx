import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import StartPage from './components/StartPage';
import PlayerHomePage from './components/PlayerHomePage';
import AnimalSelect from './components/AnimalSelect';
import Player from './models/Player';

function App() {

  const [ player, setPlayer ] = useState<Player | null>(null)

  return (
    <div className="App">
      <header className="App-header">
        <p>APP</p>
        <StartPage player={player} setPlayer={setPlayer}/>
        <PlayerHomePage player={player}/>
        <AnimalSelect />
      </header>
    </div>
  );
}

export default App;
