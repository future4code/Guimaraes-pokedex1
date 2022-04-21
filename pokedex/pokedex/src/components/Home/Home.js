import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import { goToPokedex } from "../../routes/coordinator";
import PokemonCard from "../PokemonCard/PokemonCard";
import { ContainerHome, HeaderHome } from "./styles";
import { GlobalStateContext } from "../../global/GlobalStateContext";


const Home = () => {

    const {data} = useContext(GlobalStateContext)

    const {pokemonsAdded} = data

    const {pokemons} = data

    const {addPokemonToPokedex} = data

    const navigate = useNavigate()


    // const [pokemonsAdded, setPokemonsAdded] = useState([])

    // const addPokemonToPokedex = (item) => {
    //     const newPokemonsAdded = [...pokemonsAdded]
    //     newPokemonsAdded.push(item)
    //     setPokemonsAdded(newPokemonsAdded)
    //     console.log(newPokemonsAdded)
    // }

    
    return(

        <ContainerHome>
            <HeaderHome>
                <button onClick={() => goToPokedex(navigate)}>Ver Pokedex</button>
                <h1>Lista de Pokémons</h1>
            </HeaderHome>

            <div>
                {pokemons && pokemons.map((poke) => {
                    return (
                        <PokemonCard key={poke.name} poke={poke} addPokemonToPokedex={addPokemonToPokedex} />
                    )
                })}
                
            </div>
        </ContainerHome>
    )
}

export default Home;