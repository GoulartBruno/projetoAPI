import React from "react";
import { useNavigate } from "react-router-dom";
import { goToDetails, goToPokedexPokedex } from "../routes/cordinator";
import Header from "../components/header/Header";
import { PokemonContext } from "../context/pokemonContext";
import { useContext } from "react";
import { ChakraProvider, Heading, Box, Text, Flex } from "@chakra-ui/react";
import PokemonCard from "../components/pokemonCard/pokemonCard";
import theme from "../theme/theme";

function Homepage() {
  const { pokemon } = useContext(PokemonContext);
  const navigate = useNavigate();
  console.log(pokemon);
  return (
    <ChakraProvider>
      <Header />
      <Heading color={"white"} bg={"#5d5d5d"} p={"2rem"} fontSize={"5xl"}>
        Todos os Pokémons
      </Heading>
      <Flex
        justifyContent="center"
        gap="16px"
        wrap="wrap"
        bg="#5d5d5d"
        theme={theme}>
        {pokemon.map((pokemon) => {
          return <PokemonCard key={pokemon.data.id} pokemon={pokemon} />;
        })}
      </Flex>
    </ChakraProvider>
  );
}

export default Homepage;
