import React, { useContext } from "react";
import {useNavigate} from 'react-router-dom'
import { ContainerPokedex, HeaderPokedex, Cards } from "./styles";
import { goToHome } from "../../routes/coordinator";
import PokemonCard from "../PokemonCard/PokemonCard";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import imagem from '../../img/Pokédex_logo.png'

const Pokedex = () => {

    const {pokemonsAdded, toRemovePokemon} = useContext(GlobalStateContext)

    const navigate = useNavigate()


    const renderedPokemons = pokemonsAdded && pokemonsAdded.map((poke) => {
        console.log(poke.name)

        return(
            <PokemonCard isPokedex key={poke.name} poke={poke} toRemovePokemon = {toRemovePokemon} />
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