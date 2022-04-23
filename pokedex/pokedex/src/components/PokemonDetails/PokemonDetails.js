import React, { useContext, useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import { ButtonDetails, HeaderDetails } from "./styles";
import { goToHome, goToPokedex } from "../../routes/coordinator";
import { GlobalStateContext } from "../../global/GlobalStateContext";




const PokemonDetails = () => {
  const navigate= useNavigate ()
  const {choosedPokemon, clearDetails, pokemons} = useContext(GlobalStateContext)

  useEffect(() => {
    clearDetails()
  }, [])


    return(
      <div>
        <HeaderDetails>
            <p>Detalhes</p>

              <ButtonDetails>
                <button onClick={() => goToPokedex(navigate)}>Pokedex</button>
                <button onClick={() => goToHome(navigate)}>Home</button>
                <button>Adicionar</button>
                <button>Remover</button>
            </ButtonDetails>  

        </HeaderDetails> 

      <div>
        <div>
          {choosedPokemon && choosedPokemon.map((poke) => {
            return(
              <div>
                <p>{poke.name}</p>
                <img src={poke.sprites.front_default} />
              </div>
    )
  })}
        </div>

      </div>



      </div>


    )
    
}

export default PokemonDetails;