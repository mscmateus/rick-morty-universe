import React from 'react'
import { Container, ListContainer, ListSection } from './style'

import Head from '../../components/headSearch'
import Copyright from '../../components/copyright'
import LocationItem from './components/locationItem'

export default function Locations() {
    return (
        <Container>
            <Head />
            <ListContainer>
                <ListSection>
                    <LocationItem />
                    <LocationItem />
                    <LocationItem />
                    <LocationItem />
                    <LocationItem />
                    <LocationItem />
                    <LocationItem />
                    <LocationItem />
                </ListSection>
            </ListContainer>
            <Copyright/>
        </Container>
    )
}
