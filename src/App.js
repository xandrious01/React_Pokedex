import React, { useEffect } from 'react';
import generateIds from './generateIds.js';
import requestPokes from './requestPokesInfo.js';
import Pokedex from './Pokedex.js';
import defaults from './defaultPoke.js';
import './App.css';
import './Pokedex.css';
import './Pokecard.css';


const App = () => {
  const randomIds = generateIds();
  const pokesInfo = requestPokes(randomIds);
  return <div>
    <Pokedex pokes={defaults} />
  </div>
}





export default App;
