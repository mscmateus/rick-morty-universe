import React from 'react'
import { Box, Logo, Title, Text, Container, Section } from './style'
import RickMortyLogo from '../../assets/imgs/rick-morty-logo.svg'

import SearchInput from '../../components/searchInput'

import NavigationMenu from '../../components/navigationMenu'
import Copyright from '../../components/copyright'

export default function home() {
    return (
        <Container>
            <Box>
                <Section>
                    <Logo src={RickMortyLogo} />
                    <NavigationMenu />
                    <Title>Wellcome to Rick and Morty Universe!</Title>
                    <Text>This is a site for fans of the rick and morty series, here you can have access to information about the characters, locations and episodes of the series.</Text>
                    <div style={{ marginTop: "50px" }}>
                        <SearchInput />
                    </div>
                </Section>
            </Box>
            <Copyright />
        </Container>
    )
}
