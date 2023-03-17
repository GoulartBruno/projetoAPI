import { Flex, Button, Image } from "@chakra-ui/react";
import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { PokemonContext } from "../../context/pokemonContext";
import { goToPokedex, goHome } from "../../routes/cordinator";
import image from "../../assets/image.png";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const { details, pokedex } = useContext(PokemonContext);

  const renderHeaderContent = () => {
    if (location.pathname === "/") {
      return (
        <Flex justifyContent="space-around" alignItems="center">
          <Image src={image} alt="Pokemon logo" />
          <Button
            w="16rem"
            h="4rem"
            br="2rem"
            bg="#33A4F5"
            color="white"
            onClick={() => goToPokedex(navigate)}>
            Pokédex
          </Button>
        </Flex>
      );
    } else if (
      location.pathname.indexOf("details") > -1 ||
      location.pathname.indexOf("pokedex") > -1
    ) {
      return (
        <Flex justifyContent="space-around" alignItems="center">
          <Button
            w="16rem"
            h="4rem"
            br="2rem"
            bg="none"
            fontSize="1.5rem"
            as="u"
            onClick={() => goHome(navigate)}>
            <ChevronLeftIcon />
            Todos os Pokemons
          </Button>
          <Image src={image} alt="Pokemon logo" />
        </Flex>
      );
    } else {
      console.log("Erro no header");
      return null;
    }
  };

  return <>{renderHeaderContent()}</>;
}

export default Header;
