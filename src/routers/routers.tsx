import React, { useEffect, useState } from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from '../views/Home'

import CharacterList from '../views/Characters';
import BaseLayout from '../layout/BaseLayout';
import LoadingPage from '../components/LoadingPage';
import { useGlobalState } from '../utils/globalStateProvider';

export default function Routers() {
   const { setGlobalState } = useGlobalState();
   const { globalState } = useGlobalState();
   useEffect(() => {
      setGlobalState((prev) => ({ ...prev, loading: false }));
      console.log(globalState.loading)
   }, [])
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<BaseLayout />}>
               <Route path="" element={<Home />} />
               <Route path="character-list" element={<CharacterList />} />
            </Route>
         </Routes>
      </BrowserRouter>
   )
}
