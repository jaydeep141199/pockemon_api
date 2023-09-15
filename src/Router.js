import React from "react";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Pokemonmain from "./pages/Pokemonmain";

import Pokemondetail from "./pages/Pokemondetail";

const Router = () => {
  return (
    <Routers>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="pokemon" element={<Pokemonmain />} />
      <Route path="pokemon/:name" element={<Pokemondetail/>}/>  
      </Routes>
    </Routers>
  );
};

export default Router;
