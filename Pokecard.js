function Pokecard({ name, id, type, base_experience }) {

    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    return (
        <li style={{ backgroundColor: "lightgray" }}>
            <h2 style={{ color: "blue" }}><b>{name}</b> </h2>
            {
                <img src="url"></img>
            }
            {
                <p>Type: {type}</p>
            }
            {
                <p>EXP: {base_experience}</p>
            }

        </li>
    );
}