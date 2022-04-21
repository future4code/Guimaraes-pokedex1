import React, { useContext } from "react";
import {useNavigate} from 'react-router-dom'
import { ButtonDetails, HeaderDetails } from "./styles";
import { goToHome, goToPokedex } from "../../routes/coordinator";
import { GlobalStateContext } from "../../global/GlobalStateContext";




const PokemonDetails = () => {
  const navigate= useNavigate ()

//   const showDetails = async (name) => {
//     const response = await axios.get(`${BASE_URL}/${name}`)
    

// }
  


    return(
      <div>
        <HeaderDetails>
            <p>PokemonDetails</p>

              <ButtonDetails>
                <button onClick={() => goToPokedex(navigate)}>Voltar</button>
                <button onClick={() => goToHome(navigate)}>Home</button>
                <button>Adicionar</button>
                <button>Remover</button>
            </ButtonDetails>  

        </HeaderDetails> 

      <div>
        <div>

        </div>

      </div>



      </div>


    )
    
}

export default PokemonDetails;