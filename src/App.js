import Pokecard from './Pokecard.js';
import Pokedex from './Pokedex.js';
import requestPokes from './requestPokes.js';
import axios from 'axios';
import defaults from './defaultPoke.js';
import './App.css';
import './Pokedex.css';
import './Pokecard.css';


//  const App = () => {
//   const pokes = requestPokes();
//   return <div>
//     <Pokedex pokes={pokes} />
//   </div>
// }

 function App(){
  return <div>
    <Pokedex pokes={defaults} />
  </div>
}



export default App;
