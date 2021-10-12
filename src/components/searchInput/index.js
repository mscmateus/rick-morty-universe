import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Container, Icon, Input, FormItem } from './style'

export default function SearchInput() {
    return (
        <Container>
            <FormItem>
                <form action="">
                    <Input type="search" id="busca" name="search" placeholder="Search" />
                </form>
            </FormItem>
            <FormItem>
                <Icon>
                    <FaSearch size={18} color={"#393939"}/>
                </Icon>
            </FormItem>
        </Container>
    )
}