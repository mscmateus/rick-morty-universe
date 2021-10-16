import React from 'react'
import { Container, ListContainer, ListSection } from './style'

import Head from '../../components/headSearch'
import Copyright from '../../components/copyright'
import CharacterItem from './components/characterItem'

export default function Characters() {
    return (
        <Container>
            <Head />
            <ListContainer>
                <ListSection>
                    <CharacterItem />
                    <CharacterItem />
                    <CharacterItem />
                    <CharacterItem />
                    <CharacterItem />
                    <CharacterItem />
                    <CharacterItem />
                    <CharacterItem />
                </ListSection>
            </ListContainer>
            <Copyright/>
        </Container>
    )
}
