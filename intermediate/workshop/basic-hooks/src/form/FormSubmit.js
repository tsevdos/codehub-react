import { useState } from "react";

async function fetchPokemon(name) {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

const FormSubmit = () => {
  const [inputName, setInputName] = useState("");
  const [pokemon, setPokemon] = useState(null);

  const updateName = (e) => {
    setInputName(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const pokemonRes = await fetchPokemon(inputName);
    setPokemon(pokemonRes);
  };

  return (
    <div>
      <h2>Form events 04: Form submit (async)</h2>
      <form onSubmit={handleSearch}>
        <div>
          <label htmlFor="name">Pokemon search:</label>
          <input
            type="text"
            name="name"
            value={inputName}
            onChange={updateName}
          />
        </div>
        <button type="submit">Search!</button>
      </form>
      <hr />
      {pokemon && (
        <div>
          <img alt={pokemon.name} src={pokemon.sprites.front_default} />
          <h2>{pokemon.name}</h2>
          <p>Experience: {pokemon.base_experience}</p>
        </div>
      )}
    </div>
  );
};

export default FormSubmit;
