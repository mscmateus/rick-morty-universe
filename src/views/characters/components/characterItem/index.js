import React from 'react'
import { Container, CharacterImg, CharacterSection, SectionRow, Name } from './style'
import { Link } from 'react-router-dom'
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
                <Link to={"/character/" + id}><CharacterImg src={image} /></Link>
                <SectionRow>
                    <Name to={"/character/" + id}>{name}</Name>
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
