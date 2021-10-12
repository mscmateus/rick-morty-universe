import styled from 'styled-components'
import { Link } from "react-router-dom";

export const Container = styled.nav`
    margin: 0 auto;
`

export const Menu = styled.ul`
    list-style: none;
    padding: 0;
    background-color: #C4C4C4;

    display: inline-table;
    `

export const ItemLink = styled(Link)`
    color: #393939;
    font-weight: bold;
    font-size: 16px;
    text-decoration: none;
    padding: 30px;  
    &:hover{
        background-color: #208e45ff;
        color: #FFF;
        transition: 0.5s;
        opacity: 0.7;
    }
    `
export const MenuItem = styled.li`
    padding: 30px;
    margin:0;
    display: table-cell;
`

