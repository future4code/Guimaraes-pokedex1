import React, { useContext } from "react";
import {useNavigate} from 'react-router-dom'
import { ContainerPokedex, HeaderPokedex } from "./styles";
import { goToHome } from "../../routes/coordinator";
import PokemonCard from "../PokemonCard/PokemonCard";
import { GlobalStateContext } from "../../global/GlobalStateContext";

const Pokedex = () => {

    const {pokemonsAdded, toRemovePokemon} = useContext(GlobalStateContext)

    const navigate = useNavigate()


    const renderedPokemons = pokemonsAdded && pokemonsAdded.map((poke) => {
        console.log(poke.name)

  
        return(
            <PokemonCard key={poke.name} poke={poke} toRemovePokemon = {toRemovePokemon} />
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