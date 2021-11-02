import React from 'react'
import { Container, CharacterImg, CharacterSection, SectionRow, Section } from './style'

export default function CharacterItem({
    id = "",
    image = "",
    indice = "",
    name = "",
    status = "",
    specie = ""
}) {
    return (
        <Container>
            <CharacterSection>
                <CharacterImg src={image} />
                <SectionRow>
                    <h1>{name}</h1>
                    <p>{status}</p>
                </SectionRow>
                <SectionRow>
                    <h2>Specie</h2>
                    <p>{specie}</p>
                </SectionRow>
            </CharacterSection>
        </Container>
    )
}
