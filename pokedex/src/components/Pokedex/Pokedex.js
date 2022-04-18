import React, { useContext } from "react";
import { PokemonsContext } from '../../global/GlobalStateContext';

const Pokedex = () => {

    const pokemons = useContext(PokemonsContext)

    const eachPokemon = pokemons.map((poke) => {
        return(
            <p>{poke.name}</p>
        )
    }) 

    return(
        <div>
            <button>RENDERIZAR</button>
        </div>
    )
}

export default Pokedex