import React from "react";
const POKEMONS = [
    "bulbasaur",
    "ivysaur",
    "venasaur",
    "charmander",
    "charmeleon",
    "charizard",
    "squirtle",
    "wartortle",
    "blastoise",
    "caterpie",
    "metapod",
    "butterfree",
    "weedle",
    "kakuna",
    "beedrill",
    "pidgey",
    "pidgeotto",
    "pidgeot",
    "rattata",
    "raticate",
    "spearow",
    "fearow",
    "ekans",
    "arbok",
    "pikachu",
    "raichu",
    "sandshrew",
    "sandslash"
]

//tenemos el pokemon
const MATCH = Math.random() * POKEMONS.length;

function Pokemons() {
  return <div>Pokemons</div>;
}

export default Pokemons;
