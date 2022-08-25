
import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../context/globalContext'

export default function Home() {
   const { isLoading, setIsLoading } = useContext(GlobalContext)
   return (
      <div>
         <h1>Home</h1>
      </div>
   )
}
