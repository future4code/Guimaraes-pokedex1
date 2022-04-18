import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PokemonsContext } from '../../global/GlobalStateContext';
import { goToPokemonDetails } from '../../routes/coordinator';
import { ContainerButtons, ContainerCard, ImageCard } from './styles';


const PokemonCard = (props) => {

    const [pokemons, setPokemons] = useState([])

    const navigate = useNavigate();

    const addToPokedex = () => {
        const newPokemons = [...pokemons]
        newPokemons.push(props.poke)
        setPokemons(newPokemons)
        console.log(pokemons)
        console.log(newPokemons)
    }

    return (
        <ContainerCard>
            <PokemonsContext.Provider value={pokemons}>
            <ImageCard src={props.poke?.sprites.front_default}/>
            <ContainerButtons>
                <button onClick={() => goToPokemonDetails(navigate)}>Ver Detalhes</button>
                <button onClick={addToPokedex}>Adicionar a Pokedex</button>
            </ContainerButtons>
            </PokemonsContext.Provider>
        </ContainerCard>

    )
}

export default PokemonCard;