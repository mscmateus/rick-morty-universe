
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../configs/globalContext'
import { searchCharacterByAllAtributsPageable } from '../../services/api/character-api'

export default function Characters() {
   const [characters, setCharacters] = useState([])
   const [page, setPage] = useState("")
   const [name, setName] = useState("")
   const [status, setStatus] = useState("")
   const [species, setSpecies] = useState("")
   const [type, setType] = useState("")
   const [gender, setGender] = useState("")

   useEffect(()=>{
      _searchCharacterByAllAtributsPageable()
   })

   async function _searchCharacterByAllAtributsPageable() {
      console.log(await searchCharacterByAllAtributsPageable(page, name, status, species, type, gender))
   }

   return (
      <div>
         <h1>Characters List</h1>
      </div>
   )
}
