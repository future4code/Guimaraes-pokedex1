import React, { useContext, useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import { ContainerPokedex, HeaderPokedex, Cards } from "./styles";
import { goToHome, goToPokedex, goToPokemonDetails } from "../../routes/coordinator";
import PokemonCard from "../PokemonCard/PokemonCard";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import imagem from '../../img/Pokédex_logo.png'

const Pokedex = () => {

    const {pokemonsAdded, showDetails, clearDetails, details, toRemovePokemon} = useContext(GlobalStateContext)

    const navigate = useNavigate()

    useEffect(() => {
        verify()
        clearDetails()
    }, [details])

    const verify = () => {
        if (details != undefined) {
            goToPokemonDetails(navigate)
        } else {
            goToPokedex(navigate)
        }
    }



    const renderedPokemons = pokemonsAdded && pokemonsAdded.map((poke) => {
        return(
            <PokemonCard isPokedex key={poke.name} poke={poke} toRemovePokemon={toRemovePokemon} showDetails={showDetails} />
        )})

    return(
        <ContainerPokedex>
            <HeaderPokedex>
                <div>
                    <button onClick={() => goToHome(navigate)}>VOLTAR PRA HOME</button>
                </div>
                <div>
                    <img src={imagem}></img>
                </div>
            </HeaderPokedex>
            <Cards>
                {renderedPokemons}
            </Cards>
            
        </ContainerPokedex>
    )
}

export default Pokedex