import axios from "axios";
import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import { goToPokedex } from "../../routes/coordinator";
import PokemonCard from "../PokemonCard/PokemonCard";
import { ContainerHome, HeaderHome } from "./styles";


const Home = () => {

    const navigate = useNavigate()

    const [pokemons, setPokemons] = useState([])
    let pokemonsList = []
    useEffect(() => {

        const getPokemons = async () => {
            const response = await axios.get("https://pokeapi.co/api/v2/pokemon/");
            for (const pokemon of response.data.results) {
                const response = await axios.get(pokemon.url)

                pokemonsList.push(response.data)
            }

            setPokemons(pokemonsList)
        }
        getPokemons()
        console.log(pokemonsList)
    }, [])

    
    return(

        <ContainerHome>
            <HeaderHome>
                <button onClick={() => goToPokedex(navigate)}>Ver Pokedex</button>
                <h1>Lista de Pokémons</h1>
            </HeaderHome>

            <div>
                {pokemons && pokemons.map((poke) => {
                    return (
                        <PokemonCard key={poke.name} poke={poke}  />
                    )
                })}
                
            </div>
        </ContainerHome>
    )
}

export default Home;