import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToPokemonDetails } from '../../routes/coordinator';


const PokemonCard = (props) => {

    const navigate = useNavigate();

    return (

        <div>
            <img src={props.poke?.sprites.front_default}/>
            <div>
                <button onClick={() => goToPokemonDetails(navigate)}>Ver Detalhes</button>
                <button>Adicionar a Pokedex</button>
            </div>
        </div>

    )
}

export default PokemonCard;