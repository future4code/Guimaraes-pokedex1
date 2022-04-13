import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import Home from '../components/Home/Home';
import Pokedex from '../components/Pokedex/Pokedex';
import PokemonDetails from '../components/PokemonDetails/PokemonDetails'

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/pokedex" element={<Pokedex />} />
                <Route path="/pokemondetails" element={<PokemonDetails />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router