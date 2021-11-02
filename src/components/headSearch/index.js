import React from 'react'
import { Container, Logo, Head, HeadBox, LogoColumn, Column, ListContainer, ListSection } from './style'
import { Link } from 'react-router-dom'

import RickMortyLogo from '../../assets/imgs/rick-morty-logo.svg'
import NavigationMenu from '../navigationMenu'
import SearchInput from '../searchInput'

export default function Characters({
    search="",
    searchOnChange=()=>{}
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
                    <SearchInput value={search} onChange={searchOnChange}/>
                </HeadBox>
            </Column>
        </Head>
    )
}
