import React, { useEffect, useState } from "react";
import CharacterList from "./components/CharacterList";
import axios from "axios";
import { Character, Info } from "../../interfaces";
import Paginator from "../../components/Paginator";

const Characters = () => {
   const [responseData, setResponseData] = useState<Info<Character[]>>({});
   const [characterList, setCharacterList] = useState<Character[]>([]);
   const [atualPage, setAtualPage] = useState(1);
   useEffect(() => {
      axios.get('https://rickandmortyapi.com/api/character', {
         params: {
            page: atualPage
         }
      })
         .then((response) => {
            console.log(response.data)
            setCharacterList(response.data.results)
         })
   }, [atualPage,])
   return (
      <div>
         <h1>
            Characters
         </h1>
         <CharacterList list={characterList} />
         {/* <Paginator atualPage={atualPage} firstOnClickHandler={firstOnClickHandler} /> */}
      </div>
   )
}

export default Characters;