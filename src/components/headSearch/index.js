import React from 'react'
import { Container, Logo, Head, HeadBox, LogoColumn, Column, ListContainer, ListSection } from './style'
import { Link } from 'react-router-dom'

import RickMortyLogo from '../../assets/imgs/rick-morty-logo.svg'
import NavigationMenu from '../navigationMenu'
import SearchInput from '../searchInput'

export default function Characters({
    value="",
    onSubmit=()=>{},
    placeholder=""
}) {
    return (
        <Head>
            <LogoColumn> 
                <Link to={"/home"}>
                    <Logo src={RickMortyLogo} />
                </Link>
            </LogoColumn>
            <Column>
                <HeadBox>
                    <NavigationMenu />
                    <SearchInput placeholder={placeholder} search={value} onSubmit={onSubmit}/>
                </HeadBox>
            </Column>
        </Head>
    )
}
