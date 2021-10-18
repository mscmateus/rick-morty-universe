import React, { useState, useEffect } from 'react'
import { Container, ListContainer, ListSection } from './style'

import Head from '../../components/headSearch'
import Copyright from '../../components/copyright'
import CharacterItem from './components/CharacterItem'
import Pagenator from '../../components/pagenator'

import { getCharacters } from '../../services/api/character-api'

export default function Characters() {
    const [search, setSearch] = useState("")
    const [characters, setCharacters] = useState([])
    const [page, setPage] = useState(1)
    const [pages, setPages] = useState(1)

    useEffect(() => {
        _getCharacters(1)
    }, [])

    function _getCharacters(page) {
        console.log(page)
        setPage(page)
        getCharacters(page)
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
            _getCharacters(page-1)
        }
    }
    function getNextPage() {
        if(page+1 <= pages){
            _getCharacters(page+1)
        }
    }
    return (
        <Container>
            <Head />
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
                pageOnClick={_getCharacters}
                nextOnClick={getNextPage}
                previousOnClick={getPreviusPage}
            />
            <Copyright />
        </Container>
    )
}
