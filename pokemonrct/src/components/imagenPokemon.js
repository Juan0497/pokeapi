import React from "react";
import "../pages/styles/PokedexStiles.css";

class ImagenPokedex extends React.Component {
  render() {
    return (
      <div>
        <div
          className="imagenContainer d-flex justify-content-center"
          style={{
            //hace una validacion de datos con ? y :
            backgroundImage: `url(${
              this.props.pokemon.sprites
                ? this.props.pokemon.sprites.front_shiny
                : undefined
            })`
          }}
        ></div>
      </div>
    );
  }
}

export default ImagenPokedex;
