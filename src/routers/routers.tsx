import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from '../views/Home'

import CharacterList from '../views/CharacterList';
import BaseLayout from '../layout/BaseLayout';

export default function Routers() {
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
