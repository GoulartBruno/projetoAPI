import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../pages/HomePage";
import Details from "../pages/DetailsPages";
import Pokedex from "../pages/Pokedex";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/details/:idPokemon" element={<Details />} />
        <Route path="/pokedex/:id" element={<Pokedex />} />
      </Routes>
    </BrowserRouter>
  );
};
