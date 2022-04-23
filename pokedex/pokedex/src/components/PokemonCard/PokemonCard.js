import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToPokemonDetails } from '../../routes/coordinator';
import { ContainerButtons, ContainerCard, ImageCard, ImageContainer } from './styles';


const PokemonCard = (props) => {

    const navigate = useNavigate()

    return (
        <ContainerCard>
            <ImageContainer>
                 <ImageCard src={props.poke.sprites.front_default}/>
            </ImageContainer>
            
            <ContainerButtons>
                <button onClick={() => props.showDetails(props.poke)}>Ver Detalhes</button>
                <button onClick={() => props.addPokemonToPokedex(props.poke)}>Adicionar a Pokedex</button>
                <button onClick={() => props.toRemovePokemon(props.item)}>Remover da Pokedex</button>
            </ContainerButtons>
        </ContainerCard>

    )
}

export default PokemonCard;