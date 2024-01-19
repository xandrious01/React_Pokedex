import Pokecard from './Pokecard.js';
import defaults from './defaultPoke.js';
import axios from 'axios';


const Pokedex = ({ pokes = defaults }) => {

  return <div className="container">
    {pokes.map((i) =>
      <Pokecard key={i.id} name={i.name} type={i.type} xp={i.base_experience} id={i.id} />)
    }
  </div>
};

export default Pokedex;