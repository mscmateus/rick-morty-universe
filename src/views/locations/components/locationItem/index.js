import React from 'react'
import { Container, CharacterImg, CharacterSection, SectionRow } from './style'

export default function LocationItem() {
    return (
        <Container>
            <CharacterImg src={"https://img.freepik.com/vetores-gratis/vetor-de-padrao-em-zigue-zague-sem-emenda-turquesa_53876-89883.jpg?size=338&ext=jpg"} />
            <CharacterSection>
                <SectionRow>
                    <h1>Nome Sobrenome</h1>
                    <p>Status</p>
                </SectionRow>
                <SectionRow>
                    <h2>Specie</h2>
                    <p>especificação</p>
                </SectionRow>
                <SectionRow>
                    <h2>Origin</h2>
                    <p>Localization</p>
                </SectionRow>
            </CharacterSection>
        </Container>
    )
}
