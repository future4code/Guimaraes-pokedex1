import React, { useEffect, useState } from "react";
import { GlobalStateContext } from "./GlobalStateContext";
import axios from 'axios'
import { BASE_URL } from "../constants/urls";

const GlobalState = (props) => {

    const [pokemonsAdded, setPokemonsAdded] = useState([])
    const [pokemons, setPokemons] = useState([])
    let pokemonsList = []

    useEffect(() => {

        const getPokemons = async () => {
            const response = await axios.get(`${BASE_URL}`);
            for (const pokemon of response.data.results) {
                const response = await axios.get(pokemon.url)

                pokemonsList.push(response.data)
            }

            setPokemons(pokemonsList)
        }
        getPokemons()
        console.log(pokemonsList)
    }, [])

    const addPokemonToPokedex = (item) => {
        const newPokemonsAdded = [...pokemonsAdded]
        newPokemonsAdded.push(item)
        setPokemonsAdded(newPokemonsAdded)
        console.log(newPokemonsAdded)
        console.log(pokemonsAdded)
    }

    const data = {pokemons, pokemonsAdded, addPokemonToPokedex}
   
    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )

}

export default GlobalState


