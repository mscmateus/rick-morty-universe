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
            setCharacterList(response.data.results)
            setResponseData(response.data)
         })
   }, [atualPage,])
   return (
      <div>
         <h1>
            Characters
         </h1>
         {characterList.length > 0 ? <CharacterList list={characterList} />: null}
         <Paginator atualPage={atualPage}
            count={responseData.info ? responseData.info.count : undefined}
            pages={responseData.info ? responseData.info.pages : undefined}
            pageOnChange={setAtualPage}
            lastPage={responseData.info ? responseData.info.pages : undefined} />
      </div>
   )
}

export default Characters;