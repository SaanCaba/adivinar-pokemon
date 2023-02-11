import React, { FormEvent, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Clues from "./Clues";
import {IoReload} from 'react-icons/all'

import './Pokemons.css'
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
    "sandslash",
    "nidoran",
    "nidorina",
    "nidoqueen",
    "nidoran",
    "nidorino",
    "nidoking"
]


function Pokemons() {
  const[pokemonMatch, setPokemonMatch] = useState(Math.floor(Math.random() * POKEMONS.length))
  
  const [win, setWin] = useState<boolean>(false)

  const [pokemonName, setPokemonName] = useState('');

  const[viewPokemon, setViewPokemon] = useState(false)

  const[attempts, setAttempts] = useState(1)

  const[clues, setClues] = useState([`The name have ${POKEMONS[pokemonMatch -1].length} letters`])

  const onSubmit = (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(pokemonName.toLowerCase() === POKEMONS[pokemonMatch - 1]){
      setViewPokemon(true);
      return setWin(true);
    }else{
      setAttempts(attempts + 1)
      console.log(attempts)
      if(attempts === 3){
        setClues([...clues, `The name starts with ${POKEMONS[pokemonMatch -1][0]}`])
      }
      if(attempts === 6){
        setClues([...clues, `The name ends with ${POKEMONS[pokemonMatch -1][POKEMONS[pokemonMatch -1].length -1]}`])
      }
    return  toast('Error, try again', {
        duration: 4000,
        position: 'top-center',
        // Custom Icon
        icon: '❌',
        // Change colors of success/error/loading icon
        iconTheme: {
          primary: '#000',
          secondary: '#fff',
        },
      
        // Aria
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      });
    }
  }


  return <div className="cont_view">
      <div className="cont_view_col">
      
    <img className={viewPokemon ? "img_poke_activate" : "img_poke"} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonMatch}.png`} />
    {
          viewPokemon && (
            <div className="cont-show-name">
            <span className="show_name">{POKEMONS[pokemonMatch -1].toUpperCase()}</span>
            </div>
          )
        } 
     {
      win ? <button className="btn_tryagain" onClick={()=> window.location.reload()}>You are the winner! Do you want to try again?</button> :
      <form className="cont_form"  onSubmit={(e) => onSubmit(e)}>
      <input autoFocus onChange={(e)=> setPokemonName(e.target.value)} name="pokemon" type="text" />
      <button disabled={pokemonName.length > 0 ? false :true} type="submit">Guess</button>
    </form>
     } 
     <Toaster />
     <div className="div_clues">
      <div className="div_clues-col">
        {clues.map((e, i) =>{
          return <Clues key={i} message={e} />
        })}
          </div>
        </div>
      {attempts > 8 && (
        <div className="cont-btn-surrender">
        <button className="btn_surrender" onClick={() => setViewPokemon(true)}>Surrender</button>
        <button className="btn_reload"><IoReload onClick={()=> window.location.reload()} size={22} /></button>
        </div>
     )}
     </div>
     
  </div>;
}

export default Pokemons;
