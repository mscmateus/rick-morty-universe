import React, { useEffect, useState } from "react";
import CharacterList from "./components/CharacterList";
import axios from "axios";
import { Character, Info } from "../../interfaces";
import Paginator from "../../components/Paginator";

const Characters = () => {
   const [responseData, setResponseData] = useState<Info<Character[]>>({});
   const [characterList, setCharacterList] = useState<Character[]>([]);
   useEffect(() => {
      axios.get('https://rickandmortyapi.com/api/character')
         .then((response) => {
            console.log(response.data)
            setCharacterList(response.data.results)
         })
   }, [])
   return (
      <div>
         <h1>
            Characters
         </h1>
         <CharacterList list={characterList} />
         <Paginator />
      </div>
   )
}

export default Characters;