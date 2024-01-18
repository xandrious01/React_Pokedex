const Pokecard = (props) => {
    const { name, type, xp, id } = props;
    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    return (
      <div className="pokecard">
        <h1 className="pokecard-header">{name}</h1>
        <img className="pokecard-img" src={imgUrl} alt='{name} sprite' />
        <p className="pokecard-data">Type: {type}</p>
        <p className="pokecard-data">EXP: {xp}</p>
        </div>
    );
  }

  export default Pokecard;