import React from "react";
import { useNavigate } from "react-router-dom";
import { goToDetails, goToPokedexPokedex } from "../routes/cordinator";
import Header from "../components/header/Header";

function Homepage() {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <h1>sou </h1>
    </div>
  );
}

export default Homepage;
