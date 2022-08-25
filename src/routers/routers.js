import React, { useEffect, useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from '../views/home'

import { GlobalContext } from '../context/globalContext';
import Characters from '../views/characters';
import GlobalLoadingProvider from '../components/globalLoadingProvider';

export default function Routers() {
   const [isLoading, setIsLoading] = useState(false);
   return (
      <GlobalContext.Provider value={{ isLoading, setIsLoading }}>
         <Routes>
            <Route path="/" element={<GlobalLoadingProvider element={<Home />} />} />
         </Routes>
      </GlobalContext.Provider>
   )
}
