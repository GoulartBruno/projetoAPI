import {
  ChakraProvider,
  Flex,
  Image,
  Text,
  Button,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { PokemonContext } from "../../context/pokemonContext";
import { useContext } from "react";
import wing from "../../assets/wing.png";
import { goToDetails } from "../../routes/cordinator";
import theme from "../../theme/theme";

function PokemonCard({ pokemon }) {
  const { addToPokedex } = useContext(PokemonContext);
  const navigate = useNavigate();
  return (
    <ChakraProvider theme={theme} resetCss>
      <Grid
        templateColumns="repeat(5, 1fr)"
        templateRows="repeat(6, 1fr)"
        w="28rem"
        h="12rem"
        borderRadius="0.5rem"
        p={"1rem"}
        // bg={bg}
        // key={index}
        m={"1rem"}
        color="white">
        <GridItem
          display={"flex"}
          flexDirection={"column"}
          h={"4rem"}
          rowSpan={2}
          colSpan={3}
          justifyContent={"center"}>
          <Text fontSize="2xl">#{pokemon.data.id}</Text>
          <Text textTransform="capitalize" as={"b"} fontSize={"25px"}>
            {pokemon.data.name}
          </Text>
        </GridItem>
        <GridItem rowSpan={4} colSpan={2} w={"16rem"}>
          <Image
            mt={"-3rem"}
            ml={"3rem"}
            h={"10rem"}
            w={"12rem"}
            zIndex={1}
            position={"absolute"}
            src={pokemon.data.sprites.other.dream_world.front_default}
            alt={pokemon.data.name}></Image>
          <Image
            mt={"-1rem"}
            rowSpan={4}
            colSpan={2}
            h={"13rem"}
            position={"relative"}
            src={wing}></Image>
        </GridItem>
        <GridItem rowSpan={2} colSpan={3}>
          <Flex border={"4px"} borderColor={"violet"} w={"12rem"}>
            {/* <img src={img} alt={types.type.name} />
            <img src={imgTwo} alt={types.type.name} /> */}
          </Flex>
        </GridItem>
        <GridItem rowSpan={2} colSpan={5} fontSize="2xl" h={"3rem"}>
          <Flex m={"3"} justifyContent={"space-between"} alignItems={"center"}>
            <Text as={"u"}>
              <a
                onClick={() => {
                  goToDetails(navigate, "details");
                }}>
                Detalhes
              </a>
            </Text>

            <Button w={"8rem"} bg={"white"} color={"black"}>
              <button onClick={() => addToPokedex(pokemon)}>Capturar!</button>
            </Button>
          </Flex>
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}

export default PokemonCard;
