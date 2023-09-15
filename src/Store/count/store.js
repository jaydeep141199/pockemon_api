import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import pokemonSlice from "../pokemon/pokemonSlice";
const store=configureStore({
    reducer:{
        count:userSlice,
        pokemon:pokemonSlice
    }
})
export default store