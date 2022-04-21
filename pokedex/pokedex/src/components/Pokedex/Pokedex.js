import React, { useContext } from "react";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import {useNavigate} from 'react-router-dom'
import { ContainerPokedex, HeaderPokedex } from "./styles";
import { goToHome } from "../../routes/coordinator";
import PokemonCard from "../PokemonCard/PokemonCard";




const Pokedex = () => {

    const navigate = useNavigate()

    const {data} = useContext(GlobalStateContext)

    const {pokemonsAdded} = data

    console.log(pokemonsAdded)

    const renderedPokemons = pokemonsAdded && pokemonsAdded.map((poke) => {
        console.log(poke.name)

        return(
            <PokemonCard key={poke.name} poke={poke} />
        )})

    return(
        <ContainerPokedex>
            <HeaderPokedex>
                <button onClick={() => goToHome(navigate)}>VOLTAR PRA HOME</button>
                <h1>POKEDEX</h1>
            </HeaderPokedex>

            {renderedPokemons}
            
        </ContainerPokedex>
    )
}

export default Pokedex