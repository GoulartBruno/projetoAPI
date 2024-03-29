import {
  ModalOverlay,
  Modal,
  ModalContent,
  ModalBody,
  ModalHeader,
  Flex,
} from "@chakra-ui/react";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { PokemonContext } from "../../context/pokemonContext";

export function AddModal({ isOpen, onClose, pokemon }) {
  const { pokedex } = useContext(PokemonContext);
  const location = useLocation();

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          {location.pathname === "/" ||
          !pokedex.find((item) => pokemon === item.data.id) ? (
            <>
              <Flex
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                p={"1rem"}
                h={"12rem"}
                w={"24rem"}
                ml={"1.8rem"}>
                <ModalHeader fontSize={"4xl"}>Gotcha!</ModalHeader>
                <ModalBody as={"b"} color={"black"}>
                  O Pokémon foi adicionado a sua Pokedéx
                </ModalBody>
              </Flex>
            </>
          ) : (
            <>
              <Flex
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                p={"1rem"}
                h={"12rem"}
                w={"24rem"}
                ml={"1.8rem"}>
                <ModalHeader fontSize={"4xl"}> Oh, no!</ModalHeader>
                <ModalBody as={"b"} color={"black"}>
                  O Pokémon foi removido da sua Pokedéx
                </ModalBody>
              </Flex>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
