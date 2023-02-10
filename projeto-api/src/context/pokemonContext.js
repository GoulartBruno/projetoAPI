import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
  const [pokemon, setPokemon] = useState([]);
  const [pokedex, setPokedex] = useState([]);

  const getPokemon = () => {
    let pokemonPoint = [];
    for (let i = 1; i < 22; i++) {
      pokemonPoint.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    axios
      .all(pokemonPoint.map((element) => axios.get(element)))
      .then((res) => setPokemon(res))
      .catch((erro) => console.log(erro));
  };
  useEffect(() => {
    getPokemon();
  }, []);
  function addToPokedex(pokemon) {
    const isAlreadyOnPokedex = pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex.id === pokemon.id
    );

    if (!isAlreadyOnPokedex) {
      const newPokedex = [...pokedex, pokemon];
      setPokedex(newPokedex);
    }
  }

  function removeFromPokedex(pokemon) {
    const newPokedex = pokedex.filter(
      (pokemonInPokedex) => pokemonInPokedex.id !== pokemon.id
    );

    setPokedex(newPokedex);
  }

  return (
    <PokemonContext.Provider
      value={{
        pokemon,
        setPokemon,
        pokedex,
        setPokedex,
        addToPokedex,
        removeFromPokedex,
      }}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
