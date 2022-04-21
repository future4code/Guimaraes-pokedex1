import React, { useContext} from "react";
import {useNavigate} from "react-router-dom"
import { goToPokedex } from "../../routes/coordinator";
import PokemonCard from "../PokemonCard/PokemonCard";
import { ContainerHome, HeaderHome } from "./styles";
import { GlobalStateContext } from "../../global/GlobalStateContext";


const Home = () => {

    const {pokemons, showDetails, addPokemonToPokedex} = useContext(GlobalStateContext)
    

    const navigate = useNavigate()
    
    return(

        <ContainerHome>
            <HeaderHome>
                <button onClick={() => goToPokedex(navigate)}>Ver Pokedex</button>
                <h1>Lista de Pokémons</h1>
            </HeaderHome>

            <div>
                {pokemons && pokemons.map((poke) => {
                    return (
                        <PokemonCard key={poke.name} poke={poke} addPokemonToPokedex={addPokemonToPokedex}
                        showDetails={showDetails} />
                    )
                })}
                
            </div>
        </ContainerHome>
    )
}

export default Home;