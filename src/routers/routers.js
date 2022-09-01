import React, { useEffect, useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from '../views/home'

import { GlobalContext } from '../configs/globalContext';
import GlobalLoadingProvider from '../components/globalLoadingProvider';
import Characters from '../views/characters';
import Character from '../views/character';

export default function Routers() {
   const [isLoading, setIsLoading] = useState(false);
   return (
      <GlobalContext.Provider value={{ isLoading, setIsLoading }}>
         <Routes>
            <Route path="/" children element={<GlobalLoadingProvider Element={Home} />} />
            <Route path="/characters" children element={<GlobalLoadingProvider Element={Characters} />} />
            <Route path="/character" element={<GlobalLoadingProvider Element={Character} />} />
         </Routes>
      </GlobalContext.Provider>
   )
}
