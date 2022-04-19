import React, { useContext } from "react";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import {useNavigate} from 'react-router-dom'
import { ContainerPokedex, HeaderPokedex } from "./styles";
import { goToHome } from "../../routes/coordinator";
import PokemonCard from "../PokemonCard/PokemonCard";



const Pokedex = () => {

    const navigate = useNavigate()

    const {pokemonsAdded} = useContext(GlobalStateContext)


    return(
        <ContainerPokedex>
            <HeaderPokedex>
                <button onClick={() => goToHome(navigate)}>VOLTAR PRA HOME</button>
                <h1>POKEDEX</h1>
            </HeaderPokedex>

            <div>
                {pokemonsAdded && pokemonsAdded.map((poke) => {
                return(
                    <PokemonCard key={poke.name} poke={poke} />

                )})}
            </div>
            
        </ContainerPokedex>
    )
}

export default Pokedex