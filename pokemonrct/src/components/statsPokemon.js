import React from "react";
import { Radar } from "react-chartjs-2";
import "../pages/styles/PokedexStiles.css";
import "bootstrap/dist/css/bootstrap.css";


const arrayStats = arreglo => {
  return {
    labels: [
      "Speed",
      "Special-Defense",
      "Special-Attack",
      "Defense",
      "Attack",
      "HP",
      "Poison",
      "Grass"
    ],
    datasets: [
      {
        label: "",
        backgroundColor: "",
        borderColor: "black",
        pointBackgroundColor: "black",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "black",
        // aqui se exportan directamente las cantidades de cada stat

        data: arreglo
      }
    ]
  };
};
const SeteoStats = array => {
  let arrayValue = [];
  if (array) {
    array.forEach(element => {
      console.log(element.base_stat);
      arrayValue.push(element.base_stat);
    });
    return arrayValue;
  }
};
const StatsPokemon = props => {
  SeteoStats(props.pokemon.stats);
  return (
    <div className="stats ">
      <Radar data={arrayStats(SeteoStats(props.pokemon.stats))} height={200} />{" "}
    </div>
  );
};

export default StatsPokemon;
