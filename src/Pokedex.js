import React, { useEffect } from 'react';
import Pokecard from './Pokecard.js';
import defaults from './defaultPoke.js';
import axios from 'axios';
import generateIds from './generateIds.js';


const Pokedex = ({ pokesInfo = defaults }) => {
  console.log(pokesInfo)
  return <div className="container">
    {pokesInfo.map((i) =>
      <Pokecard key={i.id} name={i.name} type={i.type} xp={i.base_experience} id={i.id} />)
    }
  </div>
};

export default Pokedex;