import React, { useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom"
import { goToHome, goToPokedex, goToPokemonDetails } from "../../routes/coordinator";
import PokemonCard from "../PokemonCard/PokemonCard";
import { ContainerHome, ContainerMain, HeaderHome } from "./styles";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import imagem from '../../img/logo.png'


const Home = () => {

    const {pokemons, showDetails, addPokemonToPokedex, clearDetails, details} = useContext(GlobalStateContext)
    
    const navigate = useNavigate()

    useEffect(() => {
        verify()
        clearDetails()
    }, [details])

    const verify = () => {
        if (details != undefined) {
            goToPokemonDetails(navigate)
        } else {
            goToHome(navigate)
        }
    }
    
    return(
        <ContainerHome>
            <HeaderHome>
                <button onClick={() => goToPokedex(navigate)}>Ver Pokedex</button>
                <div>
                    <img src={imagem} />
                </div>
                <p> . </p>
            </HeaderHome>
            <ContainerMain>
                {pokemons && pokemons.map((poke) => {
                    return (
                        <PokemonCard key={poke.name} poke={poke} addPokemonToPokedex={addPokemonToPokedex}
                        showDetails={showDetails} />
                    )
                })}
                
            </ContainerMain>
        </ContainerHome>
    )
}

export default Home;