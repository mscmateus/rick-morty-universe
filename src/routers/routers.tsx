import React, { useEffect, useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from '../views/Home'

import CharacterList from '../views/CharacterList';
import BaseLayout from '../layout/BaseLayout';

export default function Routers() {
   return (
      <Routes>
         <Route path="/" children element={<BaseLayout element={Home}/>}  />
         <Route path="/character-list" children element={<CharacterList />} />
      </Routes>
   )
}
