import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonData } from "../Store/pokemon/pokemonSlice"; // Update the import path with the correct location of your 'pokemonSlice.js' file
import { NavLink } from "react-router-dom";

const Pokemonmain = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonData(count));
  }, [dispatch, count]);

  // Access the fetched data from the Redux store using useSelector
  const pokemonData = useSelector((state) => state.pokemon.data);
  const loading = useSelector((state) => state.pokemon.loading);
  const error = useSelector((state) => state.pokemon.error);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  if (!Array.isArray(pokemonData)) {
    return <p>No Pokemon data available.</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8 ">
      <h1 className="text-3xl font-bold text-center mb-4">Pokemon List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {pokemonData.map((pokemon) => (
          <NavLink to={`/pokemon/${pokemon.name}`}>
            <div
              key={pokemon.name}
              className=" rounded p-4 shadow-md hover:shadow-2xl transition bg-orange-200 hover:bg-orange-400 hover:opacity-50"
            >
              <p className="text-lg font-semibold">{pokemon.name}</p>
            
            </div>
          </NavLink>
        ))}
   
      </div>
    </div>
  );
};

export default Pokemonmain;
