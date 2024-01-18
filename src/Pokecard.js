const Pokecard = (props) => {
    const { name, type, xp, id } = props;
    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    return (
      <div className="pokecard">
        <h1>{name}</h1>
        <img className="pokecard-img" src={imgUrl} alt='{name} sprite' />
        <p>Type: {type}</p>
        <p>EXP: {xp}</p>
        </div>
    );
  }

  export default Pokecard;