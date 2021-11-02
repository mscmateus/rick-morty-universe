import React, { useState, useEffect } from 'react'
import { Container, ListContainer, ListSection } from './style'

import Head from '../../components/headSearch'
import Copyright from '../../components/copyright'
import CharacterItem from './components/characterItem'
import Pagenator from '../../components/pagenator'

import { getCharacters, getCharacterByName } from '../../services/api/character-api'
//msc mateus
export default function Characters() {
    const [search, setSearch] = useState("")
    const [characters, setCharacters] = useState([])
    const [page, setPage] = useState(1)
    const [pages, setPages] = useState(1)

    useEffect(() => {
        _getCharactersByName(page)
    }, [search])

    function _getCharactersByName(page) {
        console.log(page)
        setPage(page)
        getCharacterByName(search,page)
            .then(response => {
                setCharacters(response.results)
                setPages(response.info.pages)
                console.log(response.info)
            })
            .catch((error) => {
                console.log(error)
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
    return (
        <Container>
            <Head
                search={search}
                searchOnChange={setSearch}
            />
            <ListContainer>
                <ListSection>
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
                </ListSection>
            </ListContainer>
            <Pagenator
                corrent={page}
                pages={pages}
                pageOnClick={_getCharactersByName}
                nextOnClick={getNextPage}
                previousOnClick={getPreviusPage}
            />
            <Copyright />
        </Container>
    )
}
