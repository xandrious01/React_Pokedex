import axios from 'axios';

const requestPokes = async(randomIds) => {
    let pokesInfo = [];
    for (let i of randomIds){
        let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const { id, base_experience, name } = response.data;
        const type = response.data.types[0].type.name;
        const pokeObj = { "id" : id,
                    "name" : name,
                    "type" : type,
                    "base_experience" : base_experience
                  };
        pokesInfo.push(pokeObj);
    }
    console.log(pokesInfo);
    return pokesInfo;
};

export default requestPokes;