import React from "react";
import ImagenPokedex from "../components/imagenPokemon";
import Statspokemon from "../components/statsPokemon";
import axios from "axios";
import "./styles/PokedexStiles.css";
import "bootstrap/dist/css/bootstrap.css";


class Pokedex extends React.Component {
  state = {
    url: "https://pokeapi.co/api/v2/pokemon/",
    urlImg: "https://pokeapi.co/api/v2/pokemon-form/",
    pokemones: {},
    pokemonImage: []
  };

  // hace una busqueda de el poquemon se puede tanto por nombre como por id
  pokemonBuscar = () => {
    console.log("POKEMON BUSCANDO");
    let id = document.getElementById("NombrePokemon").value;
    const url = this.state.url + id.toLowerCase();
    axios.get(url).then(res => {
      const pokemones = res.data;
      console.log(pokemones);
      //siempre imprimir primero el res eso no era un array era un objet
      this.setState({
        pokemones: pokemones
      });
    });
  };

  render() {
    return (
      <div className="Principal d-flex justify-content-center">
        <section className="pokedex d-flex align-self-sm-center justify-content-center  col-8">
          <div className="pantalla1 d-flex  flex-column align-items-center justify-content-around">
            {this.state.pokemones === {} ? (
              undefined
            ) : (
              <ImagenPokedex
                pokemon={this.state.pokemones}
                key={this.state.pokemones.id}
              />
            )}
            <form className="d-flex flex-column">
              <input id="NombrePokemon"></input>
              <br />
              <button
                type="button"
                className="btn btn-danger col-5"
                onClick={this.pokemonBuscar}
              >
                Buscar
              </button>
            </form>
          </div>
          <div className="pantalla2 d-flex flex-column align-items-center justify-content-center justify-content-around ">
            <Statspokemon
              pokemon={this.state.pokemones}
              key={this.state.pokemones.id}
            />
          </div>
        </section>
      </div>
    );
  }
}

export default Pokedex;
