// slices/pokemonSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPokemonData = createAsyncThunk("pokemon/fetchPokemon", async (count) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${count}`);
    return response.data.results;
  } catch (error) {
    throw new Error("Failed to fetch Pokemon data.");
  }
});

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPokemonData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchPokemonData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default pokemonSlice.reducer;
