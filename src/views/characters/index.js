import React, { useState, useEffect } from 'react'
import { Container, ListContainer } from './style'
import { useLocation } from "react-router-dom";

import Head from '../../components/headSearch'
import Copyright from '../../components/copyright'
import CharacterItem from './components/characterItem'
import Pagenator from '../../components/pagenator'

import { getCharacters, getCharacterByName } from '../../services/api/character-api'
//msc mateus
export default function Characters() {
    const [characters, setCharacters] = useState([])
    const [page, setPage] = useState(1)
    const [pages, setPages] = useState(1)
    const query = useQuery();
    const [search, setSearch] = useState(query.get("search") ? query.get("search") : "")
    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }
    useEffect(() => {
        _getCharactersByName(search,page)
    }, [])

    function _getCharactersByName(search,page) {
        console.log(search)
        setPage(page)
        setSearch(search)
        getCharacterByName(search,page)
            .then(response => {
                setCharacters(response.results)
                setPages(response.info.pages)
            })
            .catch((error) => {
                console.log(error)
                console.log({error})
            })
    }
    function getPreviusPage() {
        if(page-1 > 0){
            _getCharactersByName(page-1)
        }
    }
    function getNextPage() {
        if(page+1 <= pages){
            _getCharactersByName(page+1)
        }
    }
    function handleSubmit(value){
        setSearch(value)
        _getCharactersByName(value,1)
    }
    return (
        <Container>
            <Head
                value={search}
                onSubmit={handleSubmit}
                placeholder={"Search by character name"}
            />
            <ListContainer>
                    {
                        characters.map((character, indice) =>
                            <CharacterItem
                                id={character.id}
                                image={character.image}
                                indice={indice}
                                name={character.name}
                                status={character.status}
                                specie={character.species}
                            />
                        )
                    }
            </ListContainer>
            <Pagenator
                corrent={page}
                pages={pages}
                pageOnClick={(page)=>_getCharactersByName(search, page)}
                nextOnClick={getNextPage}
                previousOnClick={getPreviusPage}
            />
            <Copyright />
        </Container>
    )
}
