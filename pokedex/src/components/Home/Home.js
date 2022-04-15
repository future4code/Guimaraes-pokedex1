import axios from "axios";
import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import { goToPokedex } from "../../routes/coordinator";
import PokemonCard from "../PokemonCard/PokemonCard";


const Home = () => {

    const navigate = useNavigate()

    const [pokemons, setPokemons] = useState([])
    const [pokemonNames, setPokemonNames] = useState([])
    const pokemonList = [];
    
    {useEffect(() => {
        getPokemonNames();
      }, []);}

    useEffect(() => {
        
        pokemonNames.forEach((item) => {
          axios.get(`https://pokeapi.co/api/v2/pokemon/${item.name}`)
            .then((response) => {
              pokemonList.push(response.data);
              setPokemons(pokemonList)
              console.log(pokemonList)

            })
            .catch((error) => console(error));
        });
      }, [pokemonNames]);
    
      const getPokemonNames = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=8`)
          .then((response) => {
            setPokemonNames(response.data.results);
          })
          .catch((error) => alert(error));
      };
    
    
    return(

        <div>
            <header>
                <button onClick={() => goToPokedex(navigate)}>Ver Pokedex</button>
                <h1>Lista de Pokémons</h1>
            </header>
            <div>
                {pokemons && pokemons.map((poke) => {
                    return (
                        <PokemonCard key={poke.name} poke={poke}  />
                    )
                })}
                
            </div>
        </div>
    )
}

export default Home;