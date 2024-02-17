import React, { useMemo, useState, useEffect } from 'react';
import axios from 'axios';
import usePromise from 'react-use-promise';
import generateIds from './generateIds.js';
import Pokedex from './Pokedex.js';
import defaults from './defaultPoke.js';
import './App.css';
import './Pokedex.css';
import './Pokecard.css';


const App = () => {
  let pokesInfo = [];
  useEffect(() => {
    async function fetchData() {
      const pokeIds = generateIds();
      console.log(pokeIdsgit )
      for (let i of pokeIds) {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const { id, base_experience, name } = response.data;
        const type = response.data.types[0].type.name;
        const pokeObj = {
          "id": id,
          "name": name,
          "type": type,
          "base_experience": base_experience
        };
        pokesInfo.push(pokeObj);
      }
      console.log(pokesInfo)
      return pokesInfo;
    }
    fetchData();
  }, []);
  return <div>
    <Pokedex pokes={pokesInfo} />
  </div>
}





export default App;
