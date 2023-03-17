import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/header/header";
import { Progress } from "@chakra-ui/react";
import {
  ChakraProvider,
  Heading,
  Text,
  Flex,
  Grid,
  Image,
  GridItem,
  Box,
  Stack,
} from "@chakra-ui/react";
import { PokemonContext } from "../context/pokemonContext";
import { AddModal } from "../components/modal/Modal";

function Details() {
  const [isLoading, setIsLoading] = useState(true);
  const pathParams = useParams();
  const [details, setDetails] = useState({});
  const { wings } = useContext(PokemonContext);

  const getPokedex = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pathParams.idPokemon}/`
      );

      setDetails(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPokedex();
  }, []);

  return (
    <ChakraProvider resetCSS>
      <Header />
      <Heading color={"white"} bg={"#5d5d5d"} p={"2rem"} fontSize={"4xl"}>
        Detalhes
      </Heading>
      <AddModal />
      {!isLoading ? (
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          bg={"#5d5d5d"}
          color={"white"}
          p={"3.1rem"}>
          <Flex
            justifyContent={"center"}
            borderRadius={"2rem"}
            color={"white"}
            w={"84rem"}
            bg={"#ECECEC"}>
            <Grid
              justifyContent={"center"}
              alignItems={"center"}
              templateColumns="repeat(2, 1fr)"
              templateRows="repeat(2, 1fr)">
              <GridItem>
                <Image
                  m={"1rem"}
                  w={"16rem"}
                  bg={"white"}
                  src={details.sprites["back_default"]}
                  alt={details.name}></Image>
              </GridItem>
              <GridItem
                bg={"white"}
                color={"black"}
                m={"2rem"}
                borderRadius={"0.4rem"}
                p={"2rem"}
                rowSpan={2}
                colSpan={1}
                h={"30rem"}
                w={"30vh"}>
                <Heading fontSize="2xl">Base stats</Heading>
                {details.stats.map((stats) => {
                  let color = "";
                  if (stats["base_stat"] > 50) {
                    color = "yellow";
                  } else {
                    color = "orange";
                  }
                  return (
                    <>
                      <Flex key={stats.stat.name}>
                        <Text>{stats.stat.name}</Text>
                        <Text>{stats.base_stat}</Text>
                      </Flex>
                      <Progress
                        colorScheme={color}
                        size="sm"
                        value={stats.base_stat}
                      />
                      <hr />
                    </>
                  );
                })}
                <Text fontWeight={"bold"}>
                  {" "}
                  Total:
                  {details.stats.reduce((acc, value) => {
                    return acc + value["base_stat"];
                  }, 0)}
                </Text>
              </GridItem>
              <GridItem rowSpan={2} colSpan={1}>
                <Image
                  m={"1rem"}
                  w={"16rem"}
                  bg={"white"}
                  src={details.sprites["front_default"]}
                  alt={details.name}></Image>
              </GridItem>
            </Grid>
            <Grid
              templateColumns="repeat(2, 1fr)"
              templateRows="repeat(2, 1fr)"
              backgroundImage="url(`../assets/wings.png`)">
              <GridItem color={"black"} p={"1rem"}>
                <Heading>#{details.id}</Heading>
                <Heading textTransform="capitalize">{details.name}</Heading>
              </GridItem>
              <GridItem p={"1rem"}>
                <Image
                  mt={"-6rem"}
                  src={details.sprites.other.dream_world.front_default}
                  alt={details.name}
                />
              </GridItem>
              <GridItem
                bg={"white"}
                borderRadius={"1rem"}
                color={"black"}
                m={"1rem"}
                p={"1rem"}
                w={"16rem"}>
                <Heading p={"1rem"} fontSize="2xl">
                  Moves:
                </Heading>
                {details.moves
                  .slice(1, 5)
                  .map((item) => item.move.name)
                  .map((move) => (
                    <>
                      <Box
                        borderStyle="dashed"
                        borderColor="#d2cfce"
                        borderWidth="medium"
                        borderRadius={"0.4rem"}
                        p={"0.4rem"}
                        m={"1rem"}
                        bg={"#ECECEC"}
                        key={move}>
                        {move}
                      </Box>
                    </>
                  ))}
              </GridItem>
            </Grid>
          </Flex>
        </Flex>
      ) : (
        <p>Carregando</p>
      )}
    </ChakraProvider>
  );
}

export default Details;
