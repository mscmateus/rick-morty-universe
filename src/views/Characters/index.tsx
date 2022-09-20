import React, { useEffect, useState } from "react";
import CharacterList from "./components/CharacterList";
import axios from "axios";
import { Character, Info } from "../../interfaces";
import Paginator from "../../components/Paginator";
import Filter from "../../components/Filter";

const Characters = () => {
   const [responseData, setResponseData] = useState<Info<Character[]>>({});
   const [characterList, setCharacterList] = useState<Character[]>([]);
   const [atualPage, setAtualPage] = useState(1);
   const [nameSearch, setNameSearch] = useState("")
   const [statusSearch, setStatusSearch] = useState("")
   const [speciesSearch, setSpeciesSearch] = useState("")
   const [typeSearch, setTypeSearch] = useState("")
   const [genderSearch, setGenderSearch] = useState("")
   useEffect(() => {
      axios.get('https://rickandmortyapi.com/api/character', {
         params: {
            page: atualPage,
            name: nameSearch,
            status: statusSearch,
            species: speciesSearch,
            type: typeSearch,
            gender: genderSearch
         }
      })
         .then((response) => {
            setCharacterList(response.data.results)
            setResponseData(response.data)
         })
   }, [atualPage, nameSearch, statusSearch, speciesSearch, typeSearch, genderSearch,])
   return (
      <div>
         <h1>
            Characters
         </h1>
         <Filter
            textValue={nameSearch} onTextChange={setNameSearch}
            genderValue={genderSearch} onGenderChange={setGenderSearch}
            onStatusChange={setStatusSearch} statusValue={statusSearch} />
         {characterList.length > 0 ? <CharacterList list={characterList} /> : null}
         <Paginator atualPage={atualPage}
            count={responseData.info ? responseData.info.count : undefined}
            pages={responseData.info ? responseData.info.pages : undefined}
            pageOnChange={setAtualPage}
            lastPage={responseData.info ? responseData.info.pages : undefined} />
      </div>
   )
}

export default Characters;