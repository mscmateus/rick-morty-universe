import React from 'react'
import { Container, Logo, Head, HeadBox, LogoColumn, Column, ListContainer, ListSection } from './style'
import { Link } from 'react-router-dom'

import RickMortyLogo from '../../assets/imgs/rick-morty-logo.svg'
import NavigationMenu from '../../components/NavigationMenu'
import SearchInput from '../../components/searchInput'
import Copyright from '../../components/copyright'
import CharacterItem from './components/CharacterItem'

export default function Characters() {
    return (
        <Container>
            <Head>
                <LogoColumn>
                    <Link to={"/home"}>
                        <Logo src={RickMortyLogo} />
                    </Link>
                </LogoColumn>
                <Column>
                    <HeadBox>
                        <NavigationMenu />
                        <SearchInput />
                    </HeadBox>
                </Column>
            </Head>
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
