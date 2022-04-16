import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PokemonsContext } from '../../global/GlobalStateContext';
import { goToPokemonDetails } from '../../routes/coordinator';


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
        <div>
            <PokemonsContext.Provider value={pokemons}>
            <img src={props.poke?.sprites.front_default}/>
            <div>
                <button onClick={() => goToPokemonDetails(navigate)}>Ver Detalhes</button>
                <button onClick={addToPokedex}>Adicionar a Pokedex</button>
            </div>
            </PokemonsContext.Provider>
        </div>

    )
}

export default PokemonCard;