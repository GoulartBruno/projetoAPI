import React, { useContext } from "react";
import Header from "../components/header/header";
import { Box, ChakraProvider, Heading, Text, Flex } from "@chakra-ui/react";
import { PokemonContext } from "../context/pokemonContext";

import PokemonCard from "../components/PokemonCard/pokemonCard";

const Home = () => {
  const { pokemon, grass, fire, bug, normal, pokedex, water } =
    useContext(PokemonContext);

  const filteredPokelist = pokemon.filter((pokemonInList) => {
    return !pokedex.find((pokemonInPokedex) => {
      return pokemonInList.data.name === pokemonInPokedex.data.name;
    });
  });

  return (
    <ChakraProvider>
      <Header />
      <Heading color="white" bg="#5d5d5d" p="2rem" fontSize="4xl">
        Todos os Pokémons
      </Heading>
      <Flex justifyContent="center" gap="16px" wrap="wrap" bg="#5d5d5d">
        {filteredPokelist.map((pokemon) => {
          const { types, id } = pokemon.data;
          const pokemonCardBg = {
            grass: "#729F92",
            fire: "#EAAB7D",
            bug: "#76A866",
            normal: "#BF9762",
            water: "#71C3FF",
          }[types[0].type.name];
          return (
            <PokemonCard
              bg={pokemonCardBg}
              img={
                {
                  grass,
                  fire,
                  bug,
                  normal,
                  water,
                }[types[0].type.name]
              }
              key={id}
              pokemons={pokemon}
            />
          );
        })}
      </Flex>
    </ChakraProvider>
  );
};

export default Home;
