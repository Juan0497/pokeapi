import React from "react";
import "./styles/PokedexStiles.css";
import Pokedex from "./pokedex";
import "bootstrap/dist/css/bootstrap.css";


class Paginaprincipal extends React.Component {
  render() {
    return (
      <div>
        <img className="ImgFondo"
        src="https://images5.alphacoders.com/614/614955.png"/>
        <Pokedex />
      </div>
    );
  }
}

export default Paginaprincipal;
