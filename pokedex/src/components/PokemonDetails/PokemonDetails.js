import React from "react";
import {useNavigate} from 'react-router-dom'





const PokemonDetails = () => {
     const navigate= useNavigate ()
 
 
 const goToPageHome= () => {
  navigate ('/')
 }

 const goToPagePokemon =() => {
  navigate ('/pokedex')
  
 }
 
    return(
      <div>
        <headerDetails>
            <p>PokemonDetails</p>

              <buttonDetails>
                <button onClick={goToPagePokemon}>Voltar</button>
                <button onClick={goToPageHome}>Home</button>
                <button>Adicionar</button>
                <button>Remover</button>
            </buttonDetails>  

        </headerDetails> 

     </div>


    )
    
}

export default PokemonDetails;
