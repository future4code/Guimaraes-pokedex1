import React, { useContext, useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import { Attacks, ButtonDetails, ContainerDetails, Header, NameAndStats, Names, Page, PokemonPics, Stats, Types, TypesAndAttacks,ContainerType } from "./styles";
import { goToHome, goToPokedex } from "../../routes/coordinator";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import imagem from '../../img/logo.png'


const PokemonDetails = () => {
  const navigate= useNavigate ()
  const {choosedPokemon, clearDetails, pokemons} = useContext(GlobalStateContext)

  useEffect(() => {
    clearDetails()
  }, [])

      return(
        <Page>
           <Header>
                  <div>
                    <button onClick={() => goToPokedex(navigate)}>Pokedex</button>
                    <button onClick={() => goToHome(navigate)}>Home</button>
                  </div>
                  <img src={imagem} />
                  <div> . </div>                   
           </Header> 

              {choosedPokemon && choosedPokemon.map((poke) => {
                 return(
                  <ContainerDetails>
                    <PokemonPics>
                      <img src={poke.sprites.front_default} />
                      <img src={poke.sprites.back_default} />
                    </PokemonPics>
                    
                    <NameAndStats>
                      <Names>
                        {choosedPokemon && choosedPokemon.map((poke) => {
                          return(
                          <p>{poke.name.toUpperCase()}</p>
                        )})}
                      </Names>

                      <Stats>
                        <h3> Habilidades</h3>
                        <p>{poke.stats[0].stat.name}: {poke.stats[0].base_stat}</p>
                        <p>{poke.stats[1].stat.name}: {poke.stats[1].base_stat}</p>
                        <p>{poke.stats[2].stat.name}: {poke.stats[2].base_stat}</p>
                        <p>{poke.stats[3].stat.name}: {poke.stats[3].base_stat}</p>
                        <p>{poke.stats[4].stat.name}: {poke.stats[4].base_stat}</p>
                        <p>{poke.stats[5].stat.name}: {poke.stats[5].base_stat}</p>
                      </Stats>
                    </NameAndStats>

                    <TypesAndAttacks>
                        <ContainerType>
                          <h3> Tipo </h3>
                          <Types> 
                            <p>{poke.types[0].type.name}</p>
                            <p>{poke.types[1].type.name}</p>
                          </Types>
                        </ContainerType>

                        <Attacks>
                          <h3>Principais Ataques</h3>
                          <p>{poke.moves[0].move.name}</p>
                          <p>{poke.moves[1].move.name}</p>
                          <p>{poke.moves[2].move.name}</p>
                          <p>{poke.moves[3].move.name}</p>
                          <p>{poke.moves[4].move.name}</p>
                        </Attacks>
                    </TypesAndAttacks>
                  </ContainerDetails>
          )
        })}
          
        </Page>


      )
      
  }

export default PokemonDetails;