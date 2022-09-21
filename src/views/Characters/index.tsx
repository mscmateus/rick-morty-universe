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
   const [genderSearch, setGenderSearch] = useState("")

   const [byName, setByName] = useState<boolean>(true);
   const [byType, setByType] = useState<boolean>(false);
   const [bySpecie, setBySpecie] = useState<boolean>(false);
   useEffect(() => {
      axios.get('https://rickandmortyapi.com/api/character', {
         params: {
            page: atualPage,
            name: byName ? nameSearch : "",
            status: statusSearch,
            species: bySpecie ? nameSearch : "",
            type: byType ? nameSearch : "",
            gender: genderSearch
         }
      })
         .then((response) => {
            setCharacterList(response.data.results)
            setResponseData(response.data)
         })
         .catch((error)=>{
            console.log(error.response)
            console.log(error.status)
         })
   }, [atualPage, nameSearch, statusSearch, genderSearch, byName, bySpecie, byType])
   return (
      <div>
         <h1>
            Characters
         </h1>
         <Filter
            byName={byName} onByNameChange={setByName}
            byType={byType} onByTypeChange={setByType}
            bySpecie={bySpecie} onBySpecieChange={setBySpecie}
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