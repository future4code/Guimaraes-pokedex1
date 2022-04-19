import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToPokemonDetails } from '../../routes/coordinator';
import { ContainerButtons, ContainerCard, ImageCard } from './styles';


const PokemonCard = (props) => {

    const navigate = useNavigate()


    return (
        <ContainerCard>
            {/* <PokemonsContext.Provider value={pokemons}> */}
            <ImageCard src={props.poke?.sprites.front_default}/>
            <ContainerButtons>
                <button onClick={() => goToPokemonDetails(navigate)}>Ver Detalhes</button>
                <button onClick={() => props.addPokemonToPokedex(props.poke)}>Adicionar a Pokedex</button>
            </ContainerButtons>
            {/* </PokemonsContext.Provider> */}
        </ContainerCard>

    )
}

export default PokemonCard;