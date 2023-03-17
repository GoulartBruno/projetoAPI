import React, { useContext } from "react";
import Header from "../components/header/header";
import PokemonCard from "../components/PokemonCard/pokemonCard";
import { PokemonContext } from "../context/pokemonContext";
import theme from "../theme/theme";
import { Box, ChakraProvider, Heading, Text, Flex } from "@chakra-ui/react";

function Poke() {
  const { pokedex, grass, fire, bug, normal, water } =
    useContext(PokemonContext);

  const typeColors = {
    grass: "#729F92",
    fire: "#EAAB7D",
    bug: "#76A866",
    normal: "#BF9762",
    water: "#71C3FF",
  };

  const renderPokemonCard = (pokemon) => {
    const pokemonTypes = pokemon.data.types.map((type) => type.type.name);

    return (
      <PokemonCard
        bg={typeColors[pokemonTypes[0]]}
        img={getTypeImage(pokemonTypes[0])}
        key={pokemon.data.id}
        pokemons={pokemon}
      />
    );
  };

  const getTypeImage = (type) => {
    switch (type) {
      case "grass":
        return grass;
      case "fire":
        return fire;
      case "bug":
        return bug;
      case "normal":
        return normal;
      case "water":
        return water;
      default:
        return null;
    }
  };

  return (
    <ChakraProvider>
      <Header />
      <Heading color={"white"} bg={"#5d5d5d"} p={"2rem"} fontSize={"4xl"}>
        Detalhes
      </Heading>
      <Flex
        border="50px"
        borderColor="red"
        justifyContent="center"
        mb={"200px"}
        wrap="wrap"
        bg="#5d5d5d"
        theme={theme}
        alignItems={"center"}>
        {pokedex.map(renderPokemonCard)}
      </Flex>
    </ChakraProvider>
  );
}

export default Poke;
