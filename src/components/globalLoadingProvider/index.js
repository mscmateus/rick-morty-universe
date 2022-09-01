
import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../configs/globalContext'

export default function GlobalLoadingProvider({ Element = (<></>) }) {
   const { isLoading } = useContext(GlobalContext)
   return isLoading ? (
      <div>
         <h1>Carregando...</h1>
      </div>
   ) : <Element />;
}
