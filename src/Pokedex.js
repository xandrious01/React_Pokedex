import Pokecard from './Pokecard.js';
import defaults from './defaultPoke.js';
import axios from 'axios';

// async function requestPokes(){
//     let pokesInfo = [];
//     let ids = generateIds();
//     for (let i of ids){
//         const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
//         const { id, base_experience, name } = response.data;
//         const type = response.data.types[0].type.name;
//         const pokeObj = { "id" : id,
//                     "name" : name,
//                     "type" : type,
//                     "base_experience" : base_experience
//                   }
//         pokes.push(pokeObj);
//     }
//     console.log(pokes)
//     return pokesInfo;
// }

// function generateIds(){
//     let ids = [];
//     let i = 0;
//     while (i < 8) {
//         const newId = Math.floor(Math.random()*800+1);
//         ids.push(newId);
//         i++;
//     }
//     console.log("hi")
//     return ids;
// }

const Pokedex = ({ pokes = defaults }) => {

  return <div>
    {pokes.map((i) =>
      <Pokecard key={i.id} name={i.name} type={i.type} xp={i.base_experience} id={i.id} />)
    }
  </div>
};

export default Pokedex;