import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchPokemonData = createAsyncThunk("pokemon/fetchPokemon", async (name) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch Pokemon data.");
  }
});

const Pokemondetail = () => {
  const { name } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonData(name));
  }, [dispatch, name]);

  const pokemonData = useSelector((state) => state.pokemon.data);
  const loading = useSelector((state) => state.pokemon.loading);
  const error = useSelector((state) => state.pokemon.error);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  // Add a conditional check to verify if pokemonData is available
  if (!pokemonData) {
    return <p>Pokemon not found.</p>;
  }

  return (
  

  <div className="container mx-auto px-4 py-8 my-24 box-content h-full w-52 p-4  bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-500 border-blue-200 hover:shadow-2xl hover:shadow-cyan-500/50  ">
  {loading && <p>Loading...</p>}
  {error && <p>Error: {error}</p>}
  {pokemonData ? (
    <>
      <h1 className="text-3xl font-bold text-center mb-4">{pokemonData.name}</h1>
      {pokemonData.sprites && pokemonData.sprites.front_default && (
        <div className="flex justify-center items-center mb-4">
          <img
            src={pokemonData.sprites.other.dream_world.front_default}
            alt={pokemonData.name}
            className="w-50 hover:transition delay-150 duration-300 ease-in-out h-52 rounded-md shadow-md bg-gradient-to-b from-blue-400 to-gray-300 hover:from-yellow-500 group-hover:to-blue-300 h-[150px] w-[150px]"
          />
        </div>
      )}
      <div className="flex flex-col justify-center items-center">
        <p className="text-lg font-semibold mb-2">Height: {pokemonData.height}</p>
        <p className="text-lg font-semibold mb-2">Weight: {pokemonData.weight}</p>
      </div>
    </>
  ) : (
    <p>Pokemon not found.</p>
  )}
</div>
  );
};

export default Pokemondetail;
