function Pokecard({ name, id, type, base_experience }) {

    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    return (
        <div className="pokecard">
            <h2 className="title"><b>{name}</b> </h2>
            {
                <img src={url} alt="pokemon image" />
            }
            {
                <p>Type: {type}</p>
            }
            {
                <p>EXP: {base_experience}</p>
            }

        </div>
    );
}

// style={{ backgroundColor: 'lightgray' }}
// style={{ color: 'blue' }}