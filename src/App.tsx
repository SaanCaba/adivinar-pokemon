import { useState } from 'react'
import Pokemons from './components/Pokemons'

function App() {
  return (
    <main>
      <h1 style={{textAlign:'center'}}>
         Guess the Pokemon
         </h1>
     <Pokemons />
    </main>
  )
}

export default App
