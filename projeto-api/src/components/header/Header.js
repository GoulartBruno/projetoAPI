import { Flex, Button, Image } from "@chakra-ui/react";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import image from "../../assets/logo.png";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { goToPokedex, goHome } from "../../routes/cordinator";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const renderHeader = () => {
    switch (location.pathname) {
      case "/":
        return (
          <Flex justifyContent={"space-around"} alignItems={"center"}>
            <Image src={image} alt="image logo pokemon" />
            <Button
              w={"16rem"}
              h={"4rem"}
              br={"2rem"}
              bg={"#33a4f5"}
              color={"white"}
              onClick={() => {
                goToPokedex(navigate, "pokedex");
              }}>
              Pokédex
            </Button>
          </Flex>
        );
        break;
      case "/details/:details":
        return (
          <Flex justifyContent={"space-around"} alignItems={"center"}>
            <Button
              w={"16rem"}
              h={"4rem"}
              br={"2rem"}
              bg={"none"}
              fontSize={"1.5rem"}
              as={"u"}
              onClick={() => {
                goHome(navigate, "/");
              }}>
              <ChevronLeftIcon />
              Todos os Pokemons
            </Button>
            <Image src={image} alt="image logo pokemon" />
            <Button
              w={"16rem"}
              h={"4rem"}
              br={"2rem"}
              bg={"#FF6262"}
              color={"white"}>
              Excluir da Pokédex
            </Button>
          </Flex>
        );
        break;
      case "/pokedex/:pokedex":
        return (
          <Flex justifyContent={"space-around"} alignItems={"center"}>
            <Button
              w={"16rem"}
              h={"4rem"}
              br={"2rem"}
              bg={"none"}
              fontSize={"1.5rem"}
              as={"u"}
              onClick={() => {
                goHome(navigate, "/");
              }}>
              <ChevronLeftIcon />
              Todos os Pokemons
            </Button>
            <Image src={image} alt="image logo pokemon" />
          </Flex>
        );
      default:
        return console.log("erro no header");
    }
  };
  return <>{renderHeader()}</>;
}

export default Header;
